# Jeremy Chat Widget

A standalone, embeddable Vue component for the Jeremy Chat AI interface.

## What is this?

This is a standalone version of the chat widget that can be embedded directly into any website (like Webflow) without using an iframe. It's built as a self-contained JavaScript bundle that includes Vue, GSAP, and all dependencies.

## Files

- `JeremyChatWidget.vue` - The main Vue component
- `jeremy-chat-widget.ts` - Widget initialization and mounting logic
- `vite.config.ts` - Build configuration for creating the standalone bundle
- `example.html` - Example HTML file for testing the widget

## Building

```bash
# Build the widget
npm run build:widget

# Build in watch mode (for development)
npm run dev:widget
```

The built file will be at: `dist/widget/jeremy-chat-widget.iife.js`

## Usage

### Basic Usage

```html
<div id="jeremy-chat-widget" data-jeremy-chat-widget data-api-url="https://your-api.com/api/chat"></div>
<script src="path/to/jeremy-chat-widget.iife.js"></script>
```

### Programmatic Initialization

```javascript
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

### Custom Theme

The widget uses CSS custom properties that can be overridden:

```css
.jeremy-chat-widget {
  --bg-color: #your-color;
  --panel-bg-color: #your-color;
  --white-color: #your-color;
  --text-field-stroke-color: #your-color;
}
```

## Configuration

### API URL

Set the API URL via:
1. Data attribute: `data-api-url="https://cursor-gamma-tan.vercel.app/api/chat"`
2. Programmatic options: `{ apiUrl: 'https://cursor-gamma-tan.vercel.app/api/chat' }`
3. Default: `/api/chat` (relative URL)

### Theme

Customize the theme via:
1. Data attribute: `data-theme='{"bgColor":"#fff"}'`
2. Programmatic options: `{ theme: { bgColor: '#fff' } }`
3. CSS custom properties (see above)

## Development

To test locally:

1. Build the widget: `npm run build:widget`
2. Start your API server: `npm run dev`
3. Open `widget/example.html` in a browser (you may need to serve it via a local server)

Or use the watch mode:

```bash
npm run dev:widget
```

This will rebuild the widget automatically when you make changes.

## Deployment

### Option 1: Vercel Public Folder

1. Create a `public/widget` folder
2. Copy `dist/widget/jeremy-chat-widget.iife.js` to `public/widget/`
3. Deploy to Vercel
4. Access at: `https://your-app.vercel.app/widget/jeremy-chat-widget.iife.js`

### Option 2: CDN

Upload the built file to any CDN or static hosting service:
- Cloudflare Workers
- AWS S3 + CloudFront
- GitHub Pages
- Netlify

## CORS Configuration

Make sure your API endpoint allows requests from your website domain. Update `server/api/chat.post.ts` to include your domain in the allowed origins list.

## Browser Support

The widget requires modern browsers that support:
- ES2015+ JavaScript
- CSS Custom Properties
- Fetch API

Supported browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Bundle Size

The widget bundle includes:
- Vue 3 (~130KB)
- GSAP (~50KB)
- Component code (~20KB)
- Total: ~200KB (minified)

Consider lazy loading the script for better initial page load performance.

## Troubleshooting

### Widget doesn't appear
- Check browser console for errors
- Verify the script is loaded correctly
- Ensure the container div exists before script loads

### API calls failing
- Check CORS configuration
- Verify API URL is correct
- Check browser Network tab for errors

### Styling issues
- Widget has default dark theme
- Override CSS custom properties to customize
- Check for CSS conflicts with host page

## License

Same as parent project.
