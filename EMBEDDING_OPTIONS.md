# Embedding Options for Webflow

This document outlines the different approaches for embedding your AI chat widget into Webflow, with pros and cons of each.

## Current Setup: Iframe (What you have now)

**How it works**: The Nuxt app is deployed on Vercel and embedded in Webflow via an iframe.

**Pros**:
- ✅ Simple setup - just add an iframe element
- ✅ Complete isolation from Webflow's styles
- ✅ No CORS issues
- ✅ Easy to update - just deploy to Vercel

**Cons**:
- ❌ Limited styling control from Webflow
- ❌ Iframe scrolling and sizing issues
- ❌ Not truly integrated with the page
- ❌ Can feel like a separate application

## Option 1: Direct Widget Embed (Recommended - What we built)

**How it works**: A standalone Vue component bundled as a JavaScript file that mounts directly into a Webflow div element.

**Pros**:
- ✅ Full control from Webflow (styling, layout, positioning)
- ✅ No iframe limitations
- ✅ Seamless integration with your site
- ✅ Better performance (no iframe overhead)
- ✅ Responsive and works with Webflow's responsive tools
- ✅ Can customize theme via data attributes or CSS

**Cons**:
- ⚠️ Requires building and hosting the widget file separately
- ⚠️ Need to configure CORS on the API
- ⚠️ Slightly more complex setup initially

**Best for**: When you want full control and seamless integration.

## Option 2: API-Only + Native Webflow (Advanced)

**How it works**: Keep only the API backend, rebuild the UI natively in Webflow using Webflow interactions and custom JavaScript.

**Pros**:
- ✅ Complete control over UI/UX in Webflow
- ✅ No external dependencies
- ✅ Fully integrated with Webflow's design system
- ✅ Can use Webflow animations and interactions

**Cons**:
- ❌ Requires rebuilding the entire UI in Webflow
- ❌ More development time
- ❌ Need to reimplement animations and interactions
- ❌ Less reusable

**Best for**: When you want the UI to be completely native to Webflow.

## Option 3: Hybrid - Widget with Webflow Styling

**How it works**: Use the widget but override all styles to match Webflow's design system exactly.

**Pros**:
- ✅ Keeps the Vue component logic
- ✅ Full styling control via CSS
- ✅ Can match Webflow's exact design

**Cons**:
- ⚠️ Requires significant CSS overrides
- ⚠️ May need to fight with widget's default styles

**Best for**: When you want to keep the component but match Webflow's design exactly.

## Recommendation

**Use Option 1 (Direct Widget Embed)** because:
1. You get the benefits of the Vue component (animations, state management, etc.)
2. Full control over styling and layout from Webflow
3. No iframe limitations
4. Easy to update (just rebuild and update the script URL)
5. Better user experience

## Migration Path

1. **Build the widget**: `npm run build:widget`
2. **Host the widget file**: Upload to Vercel's public folder or a CDN
3. **Update CORS**: Add your Webflow domain to allowed origins
4. **Embed in Webflow**: Replace iframe with the widget script
5. **Test and customize**: Adjust styling to match your site

## Next Steps

See `WEBFLOW_EMBEDDING.md` for detailed setup instructions for Option 1.
