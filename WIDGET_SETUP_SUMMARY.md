# Widget Setup Summary

## What We Built

A standalone, embeddable Vue widget that can be embedded directly into Webflow (or any website) without using an iframe. This gives you:

✅ **Direct control** over styling and layout in Webflow  
✅ **No iframe limitations** (scrolling, sizing, communication)  
✅ **Better performance** (no iframe overhead)  
✅ **Seamless integration** with your site  
✅ **Responsive design** that works with Webflow's tools  

## Project Structure

```
├── widget/
│   ├── JeremyChatWidget.vue      # Main Vue component
│   ├── jeremy-chat-widget.ts     # Widget initialization
│   ├── vite.config.ts            # Build configuration
│   ├── example.html              # Test file
│   └── README.md                 # Widget documentation
├── server/
│   └── api/
│       └── chat.post.ts          # API endpoint (with CORS)
├── WEBFLOW_EMBEDDING.md          # Detailed embedding guide
├── QUICK_START_WEBFLOW.md        # Quick start guide
└── EMBEDDING_OPTIONS.md          # Comparison of options
```

## Quick Start

1. **Install dependencies**: `npm install`
2. **Build widget**: `npm run build:widget`
3. **Host widget file**: Upload to Vercel public folder or CDN
4. **Update CORS**: Add Webflow domain to allowed origins
5. **Embed in Webflow**: Add script tag and container div

See `QUICK_START_WEBFLOW.md` for detailed steps.

## Key Changes Made

### 1. Widget Component (`widget/JeremyChatWidget.vue`)
- Standalone Vue component with all functionality
- Accepts `apiUrl` and `theme` as props
- Uses CSS custom properties for theming
- Includes all animations and interactions

### 2. Widget Initialization (`widget/jeremy-chat-widget.ts`)
- Auto-initializes from data attributes
- Programmatic initialization API
- Handles API URL from data attributes or options
- Global window object for easy access

### 3. Build Configuration (`widget/vite.config.ts`)
- Vite config for building standalone bundle
- Bundles Vue, GSAP, and all dependencies
- Outputs IIFE format for browser use
- Includes CSS in the bundle

### 4. API CORS Support (`server/api/chat.post.ts`)
- CORS headers for cross-origin requests
- Configurable allowed origins
- Environment variable support
- Development mode allows all origins

### 5. Package Scripts (`package.json`)
- `npm run build:widget` - Build widget for production
- `npm run dev:widget` - Build widget in watch mode

## Deployment Options

### Option 1: Vercel Public Folder (Recommended)

1. Create `public/widget/` folder
2. Copy built widget to `public/widget/jeremy-chat-widget.iife.js`
3. Deploy to Vercel
4. Access at: `https://cursor-gamma-tan.vercel.app/widget/jeremy-chat-widget.iife.js`

### Option 2: CDN

Upload to any CDN:
- Cloudflare Workers
- AWS S3 + CloudFront
- GitHub Pages
- Netlify

## Webflow Integration

### Basic Embed

```html
<div id="jeremy-chat-widget" data-jeremy-chat-widget data-api-url="https://cursor-gamma-tan.vercel.app/api/chat"></div>
<script src="https://cursor-gamma-tan.vercel.app/widget/jeremy-chat-widget.iife.js"></script>
```

### Custom Theme

```html
<div 
  id="jeremy-chat-widget" 
  data-jeremy-chat-widget 
  data-api-url="https://cursor-gamma-tan.vercel.app/api/chat"
  data-theme='{"bgColor":"#ffffff","textColor":"#000000"}'
></div>
```

### CSS Override

```css
.jeremy-chat-widget {
  --bg-color: #your-color;
  --panel-bg-color: #your-color;
  --white-color: #your-color;
  --text-field-stroke-color: #your-color;
}
```

## CORS Configuration

### Update Allowed Origins

In `server/api/chat.post.ts`, add your Webflow domain:

```typescript
const defaultOrigins = [
  'https://www.jeremygio.com',
  'https://jeremygio.com',
  'https://your-webflow-site.webflow.io', // Add your domain
  // ...
]
```

### Environment Variable

Or set in Vercel environment variables:

```
ALLOWED_ORIGINS=https://your-site.com,https://your-other-site.com
```

## Testing

1. **Local Testing**: Use `widget/example.html` with local API
2. **Webflow Preview**: Test in Webflow's preview mode
3. **Production**: Deploy and test on live site

## Troubleshooting

### Widget doesn't appear
- Check browser console for errors
- Verify script URL is correct
- Ensure container div exists

### API calls failing
- Check CORS configuration
- Verify API URL is correct
- Check browser Network tab

### Styling issues
- Override CSS custom properties
- Check for CSS conflicts
- Use browser DevTools to debug

## Next Steps

1. ✅ Build the widget: `npm run build:widget`
2. ✅ Host the widget file on Vercel or CDN
3. ✅ Update CORS to include your Webflow domain
4. ✅ Embed in Webflow using the script tag
5. ✅ Customize styling to match your site
6. ✅ Test on different devices and browsers

## Documentation

- **Quick Start**: `QUICK_START_WEBFLOW.md`
- **Detailed Guide**: `WEBFLOW_EMBEDDING.md`
- **Options Comparison**: `EMBEDDING_OPTIONS.md`
- **Widget Docs**: `widget/README.md`

## Support

For issues or questions:
1. Check browser console for errors
2. Verify CORS configuration
3. Test API endpoint directly
4. Check Vercel logs for server errors
