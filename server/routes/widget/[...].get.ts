import { readFile } from 'fs/promises'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

// Serve widget files from /widget/ path
// This is a fallback in case static file serving doesn't work on Vercel
export default defineEventHandler(async (event) => {
  const file = getRouterParam(event, '_')
  
  // Only allow specific widget files for security
  if (!file || !file.match(/^(jeremy-chat-widget\.iife\.js|nuxt-app\.css)$/)) {
    throw createError({
      statusCode: 404,
      statusMessage: 'File not found'
    })
  }

  try {
    // Get the project root directory
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)
    const projectRoot = process.cwd()
    
    // Try multiple possible locations for the file
    // On Vercel, files might be in different locations
    const possiblePaths = [
      join(projectRoot, 'public', 'widget', file), // Standard public folder
      join(projectRoot, '.output', 'public', 'widget', file), // Build output
      join(projectRoot, 'dist', 'widget', file), // Direct build
      join(__dirname, '..', '..', '..', 'public', 'widget', file), // Relative from server
      join(__dirname, '..', '..', '..', '.output', 'public', 'widget', file), // Relative build
    ]
    
    let fileContent
    let found = false
    let lastError
    
    for (const filePath of possiblePaths) {
      try {
        fileContent = await readFile(filePath)
        found = true
        console.log(`Found widget file at: ${filePath}`)
        break
      } catch (e: any) {
        lastError = e
        // Try next path
        continue
      }
    }
    
    if (!found) {
      console.error('Widget file not found. Tried paths:', possiblePaths)
      console.error('Last error:', lastError)
      console.error('Current working directory:', process.cwd())
      console.error('__dirname:', __dirname)
      throw new Error(`File not found: ${file}. Last error: ${lastError?.message}`)
    }
    
    // Set appropriate headers
    const contentType = file.endsWith('.js') 
      ? 'application/javascript; charset=utf-8' 
      : 'text/css; charset=utf-8'
    
    setHeader(event, 'Content-Type', contentType)
    setHeader(event, 'Cache-Control', 'public, max-age=31536000, immutable')
    setHeader(event, 'Access-Control-Allow-Origin', '*')
    
    return fileContent
  } catch (error: any) {
    console.error('Error serving widget file:', error)
    console.error('File requested:', file)
    throw createError({
      statusCode: 404,
      statusMessage: `File not found: ${file}. ${error?.message || 'Unknown error'}`
    })
  }
})
