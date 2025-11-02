const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Initialize Gemini AI
let genAI = null;
if (process.env.GEMINI_API_KEY) {
    genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
}

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        apiConfigured: !!process.env.GEMINI_API_KEY 
    });
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message, mode } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Check if API key is configured
        if (!process.env.GEMINI_API_KEY || !genAI) {
            return res.json({
                response: simulateResponse(message, mode),
                mode: mode,
                simulated: true
            });
        }

        // Use different models based on mode
        const modelName = mode === 'pro' 
            ? 'gemini-2.0-flash-exp'  // Pro mode uses full model
            : 'gemini-1.5-flash';      // Standard mode uses lighter model

        const model = genAI.getGenerativeModel({ model: modelName });

        // Generate response
        const result = await model.generateContent(message);
        const response = await result.response;
        const text = response.text();

        res.json({
            response: text,
            mode: mode,
            model: modelName,
            simulated: false
        });

    } catch (error) {
        console.error('Error:', error);
        
        // Fallback to simulated response on error
        res.json({
            response: simulateResponse(req.body.message, req.body.mode),
            mode: req.body.mode,
            simulated: true,
            error: error.message
        });
    }
});

// Simulated response for when API is not available
function simulateResponse(message, mode) {
    if (mode === 'pro') {
        return `[Pro Mode - Simulated] I understand you said: "${message}". In Pro Mode, I would provide comprehensive, detailed responses with advanced AI capabilities using the full Gemini 2.5 Flash API. Configure your GEMINI_API_KEY environment variable to enable real API calls.`;
    } else {
        return `[Standard Mode - Simulated] Got it: "${message}". I'm running in cost-effective mode, simulating a local AI brain. Responses are optimized for efficiency. Configure your GEMINI_API_KEY environment variable to enable real API calls.`;
    }
}

// Serve index.html for root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Gemini 2.5 Flash TTS UI Kit running on http://localhost:${PORT}`);
    console.log(`📡 API Key configured: ${!!process.env.GEMINI_API_KEY}`);
    console.log(`🔧 Mode: ${process.env.GEMINI_API_KEY ? 'Live API' : 'Simulated'}`);
});
