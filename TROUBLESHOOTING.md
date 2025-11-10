# Troubleshooting Guide

## 404 Error: DEPLOYMENT_NOT_FOUND

If you're getting a 404 error when trying to access the widget files, here's how to fix it:

### 1. Check Vercel Deployment Status

1. Go to your Vercel Dashboard
2. Check if the deployment is still in progress
3. Wait for the deployment to complete (usually 1-2 minutes)
4. Check the deployment logs for any errors

### 2. Verify the Correct URL

After deployment, the widget files should be accessible at:
- `https://cursor-gamma-tan.vercel.app/widget/jeremy-chat-widget.iife.js`
- `https://cursor-gamma-tan.vercel.app/widget/nuxt-app.css`

### 3. Verify Files Are in Public Folder

The files should be in `public/widget/`:
```bash
ls -la public/widget/
```

You should see:
- `jeremy-chat-widget.iife.js`
- `nuxt-app.css`

### 4. Check Vercel Build Logs

In Vercel Dashboard → Your Project → Deployments → Latest Deployment:
- Check if the build completed successfully
- Look for any errors in the build logs
- Verify that the `public/` folder is being included in the build

### 5. Test Locally First

Before deploying, test that the files are accessible locally:

```bash
# Start the Nuxt dev server
npm run dev
```

Then try accessing:
- `http://localhost:3000/widget/jeremy-chat-widget.iife.js`
- `http://localhost:3000/widget/nuxt-app.css`

If these work locally but not on Vercel, it's a deployment issue.

### 6. Verify Git Push

Make sure the files were actually pushed to GitHub:

```bash
git log --oneline -1
git ls-tree -r HEAD --name-only | grep public/widget
```

You should see the widget files in the output.

### 7. Trigger a New Deployment

If the files aren't showing up:
1. Go to Vercel Dashboard
2. Click "Redeploy" on the latest deployment
3. Or make a small change and push again to trigger a new deployment

### 8. Check Vercel Project Settings

In Vercel Dashboard → Your Project → Settings:
- Verify the **Root Directory** is set correctly (should be `.` or empty)
- Check **Build Command** is `npm run build` (or `nuxt build`)
- Verify **Output Directory** is `.output` (Nuxt 3 default)

### 9. Nuxt Public Folder Configuration

Nuxt 3 automatically serves files from the `public/` folder. No special configuration is needed. However, make sure:

- The `public/` folder is in the root of your project
- Files are committed to git (not in `.gitignore`)
- The build process completes successfully

### 10. Common Issues

#### Files Not Found After Deployment
- **Solution**: Wait for deployment to complete, then check the URL
- **Solution**: Verify files are in `public/widget/` and committed to git

#### Build Fails
- **Solution**: Check build logs in Vercel Dashboard
- **Solution**: Run `npm run build` locally to test

#### Files Not Accessible
- **Solution**: Check that the URL path matches the file structure
- **Solution**: Verify Nuxt is serving static files correctly

#### CORS Errors
- **Solution**: Check `server/api/chat.post.ts` for CORS configuration
- **Solution**: Add your Webflow domain to allowed origins

## Still Having Issues?

1. **Check Vercel Logs**: Dashboard → Your Project → Logs
2. **Test Locally**: Run `npm run dev` and test locally first
3. **Verify Files**: Make sure files are in `public/widget/` and committed
4. **Check Deployment**: Wait for deployment to complete and check status
5. **Contact Support**: If nothing works, check Vercel's documentation or support

## Quick Checklist

- [ ] Files are in `public/widget/` directory
- [ ] Files are committed to git
- [ ] Files are pushed to GitHub
- [ ] Vercel deployment is complete
- [ ] Using correct URL format
- [ ] No build errors in Vercel logs
- [ ] CORS is configured correctly

## Testing the Widget

Once the files are accessible, test the widget:

```html
<div 
  id="jeremy-chat-widget" 
  data-jeremy-chat-widget 
  data-api-url="https://cursor-gamma-tan.vercel.app/api/chat"
  data-css-url="https://cursor-gamma-tan.vercel.app/widget/nuxt-app.css"
></div>
<script src="https://cursor-gamma-tan.vercel.app/widget/jeremy-chat-widget.iife.js"></script>
```

Open browser console and check for:
- No 404 errors
- Widget loads correctly
- API calls work
- No CORS errors
