# Webflow Embed Code - Ready to Use

Copy and paste this code directly into your Webflow site!

## Quick Embed (Recommended)

Paste this into a Webflow **Embed** element:

```html
<div 
  id="jeremy-chat-widget" 
  data-jeremy-chat-widget 
  data-api-url="https://cursor-gamma-tan.vercel.app/api/chat"
  data-css-url="https://cursor-gamma-tan.vercel.app/widget/nuxt-app.css"
></div>
<script src="https://cursor-gamma-tan.vercel.app/widget/jeremy-chat-widget.iife.js"></script>
```

## Your URLs

- **API Endpoint**: `https://cursor-gamma-tan.vercel.app/api/chat`
- **Widget JavaScript**: `https://cursor-gamma-tan.vercel.app/widget/jeremy-chat-widget.iife.js`
- **Widget CSS**: `https://cursor-gamma-tan.vercel.app/widget/nuxt-app.css`

## Alternative: Manual CSS Loading

If you prefer to load the CSS separately:

```html
<link rel="stylesheet" href="https://cursor-gamma-tan.vercel.app/widget/nuxt-app.css">
<div 
  id="jeremy-chat-widget" 
  data-jeremy-chat-widget 
  data-api-url="https://cursor-gamma-tan.vercel.app/api/chat"
></div>
<script src="https://cursor-gamma-tan.vercel.app/widget/jeremy-chat-widget.iife.js"></script>
```

## Testing the URLs

Before embedding, verify the files are accessible:

1. **Widget JS**: https://cursor-gamma-tan.vercel.app/widget/jeremy-chat-widget.iife.js
   - Should show JavaScript code (not a 404)

2. **Widget CSS**: https://cursor-gamma-tan.vercel.app/widget/nuxt-app.css
   - Should show CSS code (not a 404)

3. **API**: https://cursor-gamma-tan.vercel.app/api/chat
   - Should show an error (that's normal - it requires a POST request)

## CORS Configuration

Make sure your Webflow domain is in the allowed origins. Check `server/api/chat.post.ts` or add it via Vercel environment variable `ALLOWED_ORIGINS`.

## Customization

### Custom Theme

```html
<div 
  id="jeremy-chat-widget" 
  data-jeremy-chat-widget 
  data-api-url="https://cursor-gamma-tan.vercel.app/api/chat"
  data-css-url="https://cursor-gamma-tan.vercel.app/widget/nuxt-app.css"
  data-theme='{"bgColor":"#ffffff","panelBgColor":"#f5f5f5","textColor":"#000000","borderColor":"#e0e0e0"}'
></div>
<script src="https://cursor-gamma-tan.vercel.app/widget/jeremy-chat-widget.iife.js"></script>
```

### CSS Override

Add this to Webflow's **Custom Code** → **Head Code**:

```css
<style>
  .jeremy-chat-widget {
    --bg-color: #your-color;
    --panel-bg-color: #your-color;
    --white-color: #your-color;
    --text-field-stroke-color: #your-color;
  }
</style>
```

## Troubleshooting

If you get 404 errors:
1. Check that the deployment is complete in Vercel
2. Verify the URLs are correct
3. Check browser console for errors
4. See `TROUBLESHOOTING.md` for more help

## Next Steps

1. Copy the embed code above
2. Paste into Webflow Embed element
3. Test in Webflow preview
4. Publish and test on live site
