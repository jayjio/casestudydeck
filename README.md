# Portfolio Review Slide Deck

An interactive slide deck presentation built with Vue.js and Nuxt.js for portfolio reviews.

## Features

- 29 interactive slides with smooth transitions
- Keyboard navigation (arrow keys)
- Progress bar and slide counter
- Responsive design
- Custom typography and styling

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Generate static files
npm run generate
```

## Deployment

The static files are generated in `.output/public/` and can be deployed to:

- **Vercel**: Drag and drop the `.output/public` folder
- **Netlify**: Drag and drop the `.output/public` folder
- **GitHub Pages**: Push to repo and enable Pages

## Embedding in Webflow

After deploying, embed the slide deck in Webflow using an iframe:

```html
<iframe 
  src="https://your-deployed-url.vercel.app/portfolio-review" 
  width="100%" 
  height="900px" 
  frameborder="0"
  style="border: none; min-height: 900px;"
  allowfullscreen
></iframe>
```

## Project Structure

- `pages/portfolio-review.vue` - Main slide deck page with slide data
- `components/SlideDeck.vue` - Slide deck component with navigation
- `public/images/` - Image assets
- `public/fonts/` - Custom fonts
