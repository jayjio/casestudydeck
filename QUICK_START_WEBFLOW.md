# Quick Start: Embed Widget in Webflow

Follow these steps to replace your iframe with the direct widget embed.

## Step 1: Install Dependencies

```bash
npm install
```

This will install Vite and other build tools needed for the widget.

## Step 2: Build the Widget

```bash
npm run build:widget
```

This builds the widget and automatically copies the files to `public/widget/` in your project.

## Step 3: Deploy to Vercel (Your Existing Project)

**You don't need a new Vercel project!** The widget files are already in your project's `public/widget/` folder. Just deploy your existing Nuxt project to Vercel:

1. **Commit the files**:
   ```bash
   git add public/widget/
   git commit -m "Add widget files for Webflow embedding"
   git push
   ```

2. **Deploy**: If Vercel is connected to your Git repo, it will automatically deploy. Otherwise, deploy manually via Vercel dashboard or CLI.

3. **Access the widget**: After deployment, the files will be available at:
   - `https://your-vercel-app.vercel.app/widget/jeremy-chat-widget.iife.js`
   - `https://your-vercel-app.vercel.app/widget/nuxt-app.css`

**Note**: The build script automatically copies the widget files to `public/widget/` every time you run `npm run build:widget`.

## Step 4: Update CORS (if needed)

If your Webflow domain isn't already in the allowed origins, add it to `server/api/chat.post.ts`:

```typescript
const defaultOrigins = [
  'https://www.jeremygio.com',
  'https://jeremygio.com',
  'https://your-webflow-site.webflow.io', // Add your Webflow site
  // ...
]
```

Or set the `ALLOWED_ORIGINS` environment variable in Vercel:
```
ALLOWED_ORIGINS=https://your-site.com,https://your-other-site.com
```

## Step 5: Embed in Webflow

### In Webflow Designer:

1. **Remove the iframe** (if you have one)

2. **Add an Embed element** where you want the widget

3. **Add this HTML**:

```html
<!-- Option 1: Automatic CSS loading (Recommended) -->
<div 
  id="jeremy-chat-widget" 
  data-jeremy-chat-widget 
  data-api-url="https://your-vercel-app.vercel.app/api/chat"
  data-css-url="https://your-vercel-app.vercel.app/widget/nuxt-app.css"
></div>
<script src="https://your-vercel-app.vercel.app/widget/jeremy-chat-widget.iife.js"></script>

<!-- Option 2: Manual CSS loading -->
<link rel="stylesheet" href="https://your-vercel-app.vercel.app/widget/nuxt-app.css">
<div id="jeremy-chat-widget" data-jeremy-chat-widget data-api-url="https://your-vercel-app.vercel.app/api/chat"></div>
<script src="https://your-vercel-app.vercel.app/widget/jeremy-chat-widget.iife.js"></script>
```

Replace `https://your-vercel-app.vercel.app` with your actual Vercel URL.

**Note**: The widget requires both the CSS file (`nuxt-app.css`) and the JavaScript file (`jeremy-chat-widget.iife.js`). Option 1 automatically loads the CSS, while Option 2 requires you to load it manually.

### Custom Styling (Optional)

To customize the widget's appearance, add this to Webflow's **Custom Code** → **Head Code**:

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

## Step 6: Test

1. **Preview in Webflow** to test the widget
2. **Check browser console** for any errors
3. **Test API calls** - try asking a question
4. **Check responsive** behavior on mobile

## Troubleshooting

### Widget doesn't appear
- Check that the script URL is correct and accessible
- Verify the container div has the `data-jeremy-chat-widget` attribute
- Check browser console for JavaScript errors

### API calls failing
- Verify CORS is configured correctly
- Check that your Webflow domain is in allowed origins
- Check browser Network tab for CORS errors
- Verify the API URL is correct

### Styling issues
- Widget has its own dark theme - you may need to override CSS
- Check for conflicts with Webflow's styles
- Use browser DevTools to inspect and debug

## Updating the Widget

When you make changes to the widget:

1. **Rebuild**: `npm run build:widget` (automatically copies files to `public/widget/`)
2. **Commit and push**: `git add public/widget/ && git commit -m "Update widget" && git push`
3. **Deploy**: Vercel will automatically deploy (or deploy manually)
4. **Clear cache**: Browser may cache the old version

## Next Steps

- Customize the theme to match your site
- Adjust widget sizing and spacing in Webflow
- Test on different devices and browsers
- Monitor API usage in Vercel

## Support

For detailed documentation, see:
- `WEBFLOW_EMBEDDING.md` - Full embedding guide
- `EMBEDDING_OPTIONS.md` - Comparison of embedding options
