# Deployment Guide

## Using Your Existing Vercel Project

You **don't need a new Vercel project** - you can use your existing Nuxt project that's already on Vercel.

## How It Works

1. **Widget files go in `public/widget/`** - Nuxt automatically serves files from the `public/` folder
2. **Vercel serves these files** - When you deploy, Vercel will serve them at `https://cursor-gamma-tan.vercel.app/widget/*`
3. **Same domain as your API** - The widget and API are on the same domain, which simplifies CORS

## Deployment Steps

### 1. Build the Widget

```bash
npm run build:widget
```

This will:
- Build the widget files to `dist/widget/`
- Automatically copy them to `public/widget/`

### 2. Commit and Push

```bash
git add public/widget/
git commit -m "Add widget files for Webflow embedding"
git push
```

### 3. Deploy to Vercel

If you have Vercel connected to your Git repo, it will automatically deploy. Otherwise, deploy manually:

```bash
vercel --prod
```

Or use the Vercel dashboard to trigger a deployment.

### 4. Verify Files Are Accessible

After deployment, check that the files are accessible:
- `https://cursor-gamma-tan.vercel.app/widget/jeremy-chat-widget.iife.js`
- `https://cursor-gamma-tan.vercel.app/widget/nuxt-app.css`

### 5. Update Webflow

Use your Vercel URL in the Webflow embed code:

```html
<div 
  id="jeremy-chat-widget" 
  data-jeremy-chat-widget 
  data-api-url="https://cursor-gamma-tan.vercel.app/api/chat"
  data-css-url="https://cursor-gamma-tan.vercel.app/widget/nuxt-app.css"
></div>
<script src="https://cursor-gamma-tan.vercel.app/widget/jeremy-chat-widget.iife.js"></script>
```

## File Structure

```
your-project/
├── public/
│   └── widget/
│       ├── jeremy-chat-widget.iife.js  ← Widget JavaScript
│       └── nuxt-app.css                 ← Widget CSS
├── server/
│   └── api/
│       └── chat.post.ts                 ← API endpoint
└── widget/
    ├── JeremyChatWidget.vue             ← Source files
    └── jeremy-chat-widget.ts
```

## Updating the Widget

When you make changes to the widget:

1. **Rebuild**: `npm run build:widget`
2. **Commit**: `git add public/widget/ && git commit -m "Update widget"`
3. **Push**: `git push`
4. **Deploy**: Vercel will automatically deploy (or deploy manually)

## CORS Configuration

Since the widget and API are on the same domain, CORS is already handled. However, if you're embedding from a different domain (like Webflow), make sure your Webflow domain is in the allowed origins list in `server/api/chat.post.ts`.

## Environment Variables

Make sure your Vercel project has the `ANTHROPIC_API_KEY` environment variable set:
- Go to Vercel Dashboard → Your Project → Settings → Environment Variables
- Add `ANTHROPIC_API_KEY` with your API key

## Troubleshooting

### Files not accessible after deployment

- Check that files are in `public/widget/` directory
- Verify files are committed to git
- Check Vercel deployment logs for errors
- Verify the file paths in your Webflow embed code

### CORS errors

- Check that your Webflow domain is in the allowed origins list
- Verify CORS headers are being set correctly
- Check browser console for specific error messages

### Widget doesn't load

- Check browser console for JavaScript errors
- Verify script and CSS URLs are correct
- Check that files are accessible (try opening URLs directly in browser)
- Verify the container div has the correct attributes

## Benefits of Using Same Project

✅ **Simpler setup** - No need for multiple projects  
✅ **Same domain** - Widget and API on same domain  
✅ **Easier updates** - One deployment updates everything  
✅ **Shared environment** - Same environment variables  
✅ **Unified logging** - All logs in one place  

## Alternative: Separate CDN

If you prefer, you can host the widget files on a separate CDN:
- Cloudflare Workers
- AWS S3 + CloudFront
- GitHub Pages
- Netlify

Just update the URLs in your Webflow embed code to point to the CDN.
