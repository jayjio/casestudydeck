# API Setup Instructions

## Setting Up Your Anthropic API Key

This project uses Anthropic's Claude API. You need to configure your API key for the chat feature to work.

### Steps:

1. **Get your Anthropic API key:**
   - Go to [https://console.anthropic.com/](https://console.anthropic.com/)
   - Sign up or log in
   - Navigate to "API Keys" section
   - Create a new API key and copy it

2. **Create a `.env` file:**
   - In the root of this project, create a file named `.env`
   - Add the following line:
   ```
   ANTHROPIC_API_KEY=your_api_key_here
   ```
   - Replace `your_api_key_here` with your actual API key

3. **Restart the dev server:**
   - Stop the current dev server (Ctrl+C)
   - Run `npm run dev` again
   - The API key will now be loaded

### Troubleshooting:

**Issue: "Anthropic API key is not configured"**
- Make sure the `.env` file exists in the project root
- Verify the environment variable is named exactly `ANTHROPIC_API_KEY`
- Restart the dev server after creating/modifying the `.env` file

**Issue: API call fails or stuck on loading**
- Check the browser console (F12) for error messages
- Verify your API key is valid
- Make sure you have API credits available in your Anthropic account

### Current Configuration:

- **API Endpoint:** `/api/chat`
- **Model:** `claude-sonnet-4-20250514`
- **Max Tokens:** 1024



