# Quick Start Guide

This guide will help you get started with the Gemini 2.5 Flash TTS UI Kit in just a few minutes.

## Prerequisites

Choose one of the following:

**Option A: Local Development**
- Node.js 18 or higher
- npm (comes with Node.js)

**Option B: Docker**
- Docker installed on your system
- Docker Compose (optional, but recommended)

## Step 1: Get Your API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

## Step 2: Setup

### Option A: Local Development

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env and add your API key
# GEMINI_API_KEY=your_actual_api_key_here

# Start the server
npm start
```

### Option B: Docker Compose (Recommended)

```bash
# Create environment file
cp .env.example .env

# Edit .env and add your API key
# GEMINI_API_KEY=your_actual_api_key_here

# Start the application
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

### Option C: Docker (Manual)

```bash
# Build the image
docker build -t gemini-tts-ui .

# Run the container
docker run -d \
  -p 3000:3000 \
  -e GEMINI_API_KEY=your_actual_api_key_here \
  --name gemini-ui \
  gemini-tts-ui

# View logs
docker logs -f gemini-ui

# Stop the container
docker stop gemini-ui
docker rm gemini-ui
```

## Step 3: Access the Application

Open your web browser and navigate to:
```
http://localhost:3000
```

## Using the Application

### Mode Toggle
- Look for the toggle switch in the header
- **Standard Mode** (left): Cost-effective, simulates local AI
- **Pro Mode** (right): Full-featured, advanced capabilities
- Click the toggle to switch between modes instantly

### Text Chat
1. Type your message in the input field at the bottom
2. Press `Enter` or click the "Send" button
3. Wait for the AI's response

### Voice Input
1. Click the green microphone button (🎤)
2. Allow microphone access if prompted
3. Speak your message
4. Your speech will be converted to text
5. Click "Send" to submit

## Troubleshooting

### Application won't start
- **Check Node.js version**: `node --version` (should be 18+)
- **Check port availability**: Make sure port 3000 is not in use
- **Try a different port**: Set `PORT=3001` in your .env file

### API not working
- **Verify API key**: Make sure your API key is correct in .env
- **Check API quota**: Visit Google AI Studio to check your usage limits
- **Simulated mode**: The app works without an API key but uses simulated responses

### Voice input not working
- **Browser compatibility**: Voice input requires Chrome, Edge, or Safari
- **Microphone permission**: Allow microphone access when prompted
- **HTTPS requirement**: Voice input may require HTTPS in some browsers

### Docker issues
- **Port already in use**: Change the port mapping: `-p 3001:3000`
- **Can't connect to API**: Make sure the API key is passed correctly
- **Container won't start**: Check logs with `docker logs gemini-ui`

## Tips

1. **Start with Standard Mode** to test the application with lower API costs
2. **Switch to Pro Mode** when you need detailed, comprehensive responses
3. **Use voice input** for hands-free operation
4. **Check the console** (F12 in browser) if something doesn't work

## Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `GEMINI_API_KEY` | No | - | Your Google Gemini API key. App works without it but uses simulated responses |
| `PORT` | No | 3000 | Port for the web server |

## What's Next?

- Customize the UI colors in `index.html`
- Modify the AI behavior in `server.js`
- Deploy to production (see README.md for cloud deployment guides)
- Add your own features and enhancements

## Getting Help

- Check the [README.md](README.md) for detailed documentation
- Review the code comments in `index.html` and `server.js`
- Open an issue on GitHub for bugs or feature requests

---

**Enjoy using Gemini 2.5 Flash TTS UI Kit!** 🚀
