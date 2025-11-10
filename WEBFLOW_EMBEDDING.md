# Webflow Embedding Guide

This guide explains how to embed the Jeremy Chat Widget directly into your Webflow site (without using an iframe).

## Benefits of Direct Embedding

- ✅ No iframe limitations (scrolling, sizing, communication)
- ✅ Direct control over styling from Webflow
- ✅ Better responsive behavior
- ✅ Seamless integration with your site
- ✅ Faster loading and better performance

## Setup Steps

### 1. Build the Widget

First, build the widget for production:

```bash
npm install
npm run build:widget
```

This creates a bundled JavaScript file at `dist/widget/jeremy-chat-widget.iife.js`

### 2. Host the Widget File

Upload the built widget file to a CDN or your hosting provider. Options:

- **Vercel**: Upload to your Vercel project's `public` folder or use Vercel's file hosting
- **CDN**: Upload to Cloudflare, AWS S3, or any static file hosting
- **GitHub Pages**: Host the file in a repo and use raw.githubusercontent.com

**Recommended**: Host it alongside your Nuxt API on Vercel for easy updates.

### 3. Configure CORS (if needed)

The API endpoint is already configured to allow requests from:
- `https://www.jeremygio.com`
- `https://jeremygio.com`
- Localhost (for development)

If your Webflow domain is different, update the `allowedOrigins` array in `server/api/chat.post.ts`:

```typescript
const allowedOrigins = [
  'https://www.jeremygio.com',
  'https://jeremygio.com',
  'https://your-webflow-site.webflow.io', // Add your Webflow site
  // ... other origins
]
```

### 4. Embed in Webflow

#### Option A: Using Custom Code (Recommended)

1. In Webflow, add an **Embed** element where you want the widget to appear
2. Add this HTML code:

```html
<!-- Widget Container with automatic CSS loading -->
<div 
  id="jeremy-chat-widget-container" 
  data-jeremy-chat-widget 
  data-api-url="https://cursor-gamma-tan.vercel.app/api/chat"
  data-css-url="https://cursor-gamma-tan.vercel.app/widget/nuxt-app.css"
></div>

<!-- Widget Script -->
<script src="https://cursor-gamma-tan.vercel.app/widget/jeremy-chat-widget.iife.js"></script>
```

**Note**: The widget requires both the CSS and JS files. Using `data-css-url` automatically loads the CSS. Alternatively, you can load the CSS manually with a `<link>` tag.

#### Option B: Using Page Settings (Site-wide)

1. Go to **Page Settings** → **Custom Code**
2. Add the script in the **Footer Code** section:

```html
<script>
  // Wait for DOM to be ready
  (function() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initWidget);
    } else {
      initWidget();
    }
    
    function initWidget() {
      // Create container if it doesn't exist
      const container = document.getElementById('jeremy-chat-widget');
      if (container && window.JeremyChatWidget) {
        window.JeremyChatWidget.init('jeremy-chat-widget', {
          apiUrl: 'https://cursor-gamma-tan.vercel.app/api/chat'
        });
      }
    }
  })();
</script>
<script src="https://cursor-gamma-tan.vercel.app/widget/jeremy-chat-widget.iife.js" defer></script>
```

3. Add a div with `id="jeremy-chat-widget"` in your page where you want the widget

### 5. Customize Styling (Optional)

The widget uses CSS custom properties that you can override in Webflow:

```css
.jeremy-chat-widget {
  --bg-color: #1a1c23;
  --panel-bg-color: #22242b;
  --white-color: #fcf3ea;
  --text-field-stroke-color: #363944;
}
```

Add this to your Webflow **Custom Code** → **Head Code** or in a **Custom CSS** section to override the default theme.

### 6. Advanced Configuration

#### Custom API URL per Widget

```html
<div 
  id="jeremy-chat-widget" 
  data-jeremy-chat-widget 
  data-api-url="https://your-custom-api-url.com/api/chat"
></div>
```

#### Custom Theme

```html
<div 
  id="jeremy-chat-widget" 
  data-jeremy-chat-widget 
  data-api-url="https://cursor-gamma-tan.vercel.app/api/chat"
  data-theme='{"bgColor":"#ffffff","panelBgColor":"#f5f5f5","textColor":"#000000","borderColor":"#e0e0e0"}'
></div>
```

#### Programmatic Initialization

```javascript
// Initialize widget programmatically
window.JeremyChatWidget.init('jeremy-chat-widget', {
  apiUrl: 'https://cursor-gamma-tan.vercel.app/api/chat',
  theme: {
    bgColor: '#1a1c23',
    panelBgColor: '#22242b',
    textColor: '#fcf3ea',
    borderColor: '#363944'
  }
});
```

## Deployment Workflow

1. **Development**: 
   - Make changes to `widget/JeremyChatWidget.vue`
   - Run `npm run dev:widget` to watch for changes
   - Test locally

2. **Build**:
   - Run `npm run build:widget`
   - Upload `dist/widget/jeremy-chat-widget.iife.js` to your CDN

3. **Update Webflow**:
   - Update the script URL in Webflow if the file has changed
   - Clear browser cache to see updates

## Troubleshooting

### Widget doesn't appear
- Check browser console for errors
- Verify the script URL is correct and accessible
- Ensure the container div exists before the script loads

### API calls failing
- Check CORS configuration in `server/api/chat.post.ts`
- Verify your Webflow domain is in the allowed origins list
- Check browser network tab for error details

### Styling issues
- The widget has its own styles - you may need to override them
- Check for CSS conflicts with Webflow's styles
- Use browser DevTools to inspect and override styles

### Performance
- The widget bundle includes Vue and GSAP - it's ~200-300KB minified
- Consider lazy loading the script for better initial page load
- Use a CDN for faster delivery

## Next Steps

- Update the widget API URL to your production Vercel deployment
- Test on your Webflow site
- Customize styling to match your site's design
- Monitor API usage and performance

## Support

For issues or questions, check:
- Browser console for errors
- Network tab for API call status
- Vercel logs for server-side errors
