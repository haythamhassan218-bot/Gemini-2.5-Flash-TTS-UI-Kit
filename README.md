# Gemini 2.5 Flash TTS UI Kit

Ready-To-Use Gemini 2.5 Flash UI front end for text &amp; voice chat with intelligent mode toggling. This application provides a beautiful, responsive web interface for interacting with Google's Gemini AI, featuring a "brain swap" functionality that lets you seamlessly switch between Pro Mode and Standard Mode.

## ✨ Features

### 🎯 Dual Mode System
- **Pro Mode**: Full-featured AI experience with advanced capabilities, comprehensive responses, and enhanced understanding using Gemini 2.0 Flash Exp
- **Standard Mode (Simulated Local Brain)**: Cost-effective mode using Gemini 1.5 Flash, designed to mimic a smaller, local AI model for basic conversations

### 🎨 Modern UI
- Beautiful gradient design with smooth animations
- Responsive layout that works on desktop and mobile
- Real-time mode indicator in header
- Chat interface with user/AI message distinction
- Visual feedback for all interactions

### 🎤 Voice Input
- Built-in voice recognition support
- Click-to-speak functionality
- Visual recording indicator
- Browser-based speech recognition (Web Speech API)

### 🚀 Deployment Options
- **Local Development**: Run directly with Node.js
- **Docker**: Containerized deployment for consistency
- **Docker Compose**: One-command deployment
- **Cloud Ready**: Deploy to any cloud platform (Heroku, AWS, GCP, Azure, etc.)

## 📋 Prerequisites

- Node.js 18+ (for local development)
- Docker & Docker Compose (for containerized deployment)
- Google Gemini API Key ([Get one here](https://makersuite.google.com/app/apikey))

## 🚀 Quick Start

### Option 1: Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/haythamhassan218-bot/Gemini-2.5-Flash-TTS-UI-Kit.git
   cd Gemini-2.5-Flash-TTS-UI-Kit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env and add your GEMINI_API_KEY
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Option 2: Docker

1. **Build the Docker image**
   ```bash
   docker build -t gemini-tts-ui .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:3000 -e GEMINI_API_KEY=your_api_key_here gemini-tts-ui
   ```

3. **Open your browser**
   Navigate to `http://localhost:3000`

### Option 3: Docker Compose

1. **Configure environment**
   ```bash
   cp .env.example .env
   # Edit .env and add your GEMINI_API_KEY
   ```

2. **Start with Docker Compose**
   ```bash
   docker-compose up -d
   ```

3. **Open your browser**
   Navigate to `http://localhost:3000`

4. **Stop the application**
   ```bash
   docker-compose down
   ```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Required: Your Gemini API Key
GEMINI_API_KEY=your_gemini_api_key_here

# Optional: Server port (default: 3000)
PORT=3000
```

### API Key Setup

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key to your `.env` file

## 📱 Usage

### Mode Toggle
- Use the toggle switch in the header to switch between Standard and Pro modes
- **Standard Mode**: Optimized for cost-effectiveness and quick responses
- **Pro Mode**: Utilizes full AI capabilities for complex tasks

### Text Chat
1. Type your message in the input field
2. Press Enter or click "Send"
3. View the AI's response in the chat area

### Voice Input
1. Click the microphone button (🎤)
2. Speak your message when prompted
3. The text will appear in the input field
4. Click Send to submit

## 🌐 Deployment to Cloud

### Heroku

```bash
heroku create your-app-name
heroku config:set GEMINI_API_KEY=your_api_key_here
git push heroku main
heroku open
```

### AWS (Elastic Beanstalk)

```bash
eb init -p node.js-18 gemini-ui
eb create gemini-ui-env
eb setenv GEMINI_API_KEY=your_api_key_here
eb open
```

### Google Cloud Platform (Cloud Run)

```bash
gcloud builds submit --tag gcr.io/PROJECT_ID/gemini-ui
gcloud run deploy gemini-ui \
  --image gcr.io/PROJECT_ID/gemini-ui \
  --platform managed \
  --set-env-vars GEMINI_API_KEY=your_api_key_here
```

### Azure (App Service)

```bash
az webapp create --resource-group myResourceGroup --plan myAppServicePlan --name gemini-ui --runtime "NODE|18-lts"
az webapp config appsettings set --resource-group myResourceGroup --name gemini-ui --settings GEMINI_API_KEY=your_api_key_here
```

## 🏗️ Project Structure

```
Gemini-2.5-Flash-TTS-UI-Kit/
├── index.html              # Frontend UI
├── server.js               # Node.js/Express backend
├── package.json            # Node.js dependencies
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Docker Compose configuration
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## 🔒 Security Notes

- Never commit your `.env` file or expose your API key
- The `.gitignore` file is configured to exclude sensitive files
- Use environment variables for all sensitive configuration
- Consider implementing rate limiting for production use
- Use HTTPS in production environments

## 🛠️ Development

### Run in development mode with auto-reload

```bash
npm run dev
```

This uses nodemon to automatically restart the server when files change.

### Testing the API

The application includes a health check endpoint:

```bash
curl http://localhost:3000/api/health
```

## 🎨 Customization

### Styling
- Edit `index.html` to modify colors, fonts, and layout
- CSS is embedded in the `<style>` section for easy customization

### API Integration
- Modify `server.js` to add new endpoints or change AI behavior
- Customize the `simulateResponse` function for offline mode

### Models
- Pro Mode uses `gemini-2.0-flash-exp` by default
- Standard Mode uses `gemini-1.5-flash` by default
- Edit `server.js` to change model names

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

- Google Gemini AI for the powerful API
- Express.js for the web framework
- The open-source community

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Made with ❤️ for the AI community**

Enjoy building with Gemini 2.5 Flash! 🚀
