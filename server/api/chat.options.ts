// Separate OPTIONS handler for CORS preflight
export default defineEventHandler((event) => {
  const origin = getHeader(event, 'origin') || getHeader(event, 'referer')?.split('/').slice(0, 3).join('/')
  
  // Set CORS headers
  if (origin) {
    setHeader(event, 'Access-Control-Allow-Origin', origin)
    setHeader(event, 'Access-Control-Allow-Credentials', 'true')
  } else {
    setHeader(event, 'Access-Control-Allow-Origin', '*')
  }
  
  setHeader(event, 'Access-Control-Allow-Methods', 'POST, OPTIONS, GET')
  setHeader(event, 'Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
  setHeader(event, 'Access-Control-Max-Age', '86400')
  setHeader(event, 'Vary', 'Origin')
  
  event.node.res.statusCode = 204
  event.node.res.statusMessage = 'No Content'
  return ''
})
