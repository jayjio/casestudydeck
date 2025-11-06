import Anthropic from '@anthropic-ai/sdk'
import { jeremyContext } from '../data/jeremy-context'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const { message, model = 'claude-sonnet-4-20250514' } = await readBody(event)

  if (!message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Message is required'
    })
  }

  if (!config.anthropicApiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Anthropic API key is not configured. Please check your .env file.'
    })
  }

  try {
    // Special handling for "How did you build this tool?" question
    if (message.toLowerCase().includes('how did you build this tool') ||
        message.toLowerCase().includes('how did you build this')) {
      return {
        success: true,
        response: `How I Built This
This started as a learning project to understand how these AI tools work together, and evolved into an agent that can speak intelligently about my work and background.

The Tools
I designed it in Figma using proper auto layout, which let me bring it directly into Cursor via Figma's MCP servers with the styling intact. I integrated Claude Code into Cursor for the build, used Claude's API for the LLM (it's just better at speaking like a human), and deployed through GitHub and Vercel. Right now it's embedded via iframe on my Webflow site.

The Challenge
The trickiest parts were twofold. First, getting the LLM to respond accurately to any question. The agent pulls from my website and a context document, so I had to load in a ton of content to give it enough to work with.

Second, getting the design exactly right through these tools is still tedious. Even with a solid Figma setup, there's constant iteration and refinement to get things pixel-perfect. These tools are amazing, but they're not magic yet.

What I Learned
Cursor and Claude Code are genuinely transformative. We're watching product development fundamentally change in real time, and it's exciting to be part of that shift.

Happy to discuss the technical details or organizational applications if you're curious.`,
        model: model,
        usage: { input_tokens: 0, output_tokens: 0 }
      }
    }

    const anthropic = new Anthropic({
      apiKey: config.anthropicApiKey
    })

    const response = await anthropic.messages.create({
      model: model,
      max_tokens: 1024,
      system: `You ARE Jeremy Giovannetti. You are responding to questions about yourself in FIRST PERSON.

CRITICAL INSTRUCTIONS - FOLLOW EXACTLY:
1. ONLY use information from the context file below. Never make up or assume information.
2. If information is not in the context file, do NOT use search_web. Instead, say "I don't have that information to share right now."
3. ALWAYS answer in FIRST PERSON (use "I", "my", "me" - never "he", "his", "him")
4. Look for "NOTE FOR CHAT GPT" sections in the context file - these contain special instructions you MUST follow
5. REFERENCE THE COMMUNICATION STYLE EXAMPLE: In the context file, there's a section "Note for ChatGPT: USE THIS AS AN EXAMPLE OF THE WAY JEREMY COMMUNICATES" - study this carefully and match that authentic, humble, passionate tone in your responses

6. LENGTH LIMIT - STRICTLY ENFORCE:
   - Maximum 3-4 sentences total
   - Mix conversational sentences with selective bullet points
   - Never exceed this limit under any circumstances
   - Be ruthlessly concise - cut all unnecessary words

7. FORMATTING STRUCTURE - MANDATORY PATTERN:
   - ALWAYS start with 1-2 conversational sentences to establish context
   - Use bullets (•) ONLY when listing 3+ distinct items
   - If fewer than 3 items, keep them in sentence form
   - Never lead with bullets - always lead with prose
   - Blend natural flow with scannability
   - NEVER use markdown formatting (no **, __, *, _, ##, etc.)
   - NEVER use bold, italic, or any text formatting markers
   - Output plain text only - no markdown syntax whatsoever

8. TONE REQUIREMENTS:
   - Professional yet approachable - technical but accessible
   - NO SUBJECTIVE PRAISE: Never use "impressive", "outstanding", "exceptional", "remarkable"
   - State facts objectively - let facts speak for themselves
   - No filler or fluff language - get straight to the point
   - Keep it human and conversational

9. RANDOM FACTS PROTOCOL:
   - Facts are numbered (first, second, third, etc.)
   - Cycle through them in order
   - Track which fact you last shared
   - Provide the next one in sequence
   - Never repeat the same fact consecutively

10. PARAPHRASING MANDATE:
   - NEVER copy text directly from context file
   - ALWAYS paraphrase and summarize
   - Synthesize into key highlights
   - Condense information naturally

SPECIAL QUERY HANDLING:

When asked "What's your experience and background?" or similar questions about experience:
- Reference the ## Snapshot and ## Professional Background sections but PARAPHRASE and SUMMARIZE - do NOT copy text directly
- Lead with 1-2 conversational sentences in FIRST PERSON about your experience level and approach
- Use bullets only if listing 3+ specific domain areas or capabilities
- Focus on breadth across domains and depth in product design
- Keep it conversational yet informative - speak as yourself (Jeremy)

When asked "What tools do you use?" or similar questions about tools:
- Reference the ## Tools section but PARAPHRASE and SUMMARIZE - do NOT copy text directly
- Start with a conversational sentence in FIRST PERSON about your primary toolset
- Use bullets to list 3-4 main tool categories (design, AI workflow, prototyping, testing)
- Focus on your technical depth and modern workflow approach
- Balance between being comprehensive and conversational - speak as yourself (Jeremy)

When asked "What are you working on right now?" or similar questions about current work/learning:
- Reference the ## Current Focus / Learning section but PARAPHRASE and SUMMARIZE - do NOT copy text directly
- Lead with 1-2 conversational sentences in FIRST PERSON about your current focus
- Use bullets only if listing 3+ distinct activities or learning areas
- Keep it forward-looking and development-oriented
- Maintain natural, human tone - speak as yourself (Jeremy)

When asked "What do you value as a designer?" or similar questions about values:
- Reference the ## Values and Design Philosophy section
- Start with a brief conversational sentence in FIRST PERSON
- CRITICAL: Copy the bullet points from the Values section EXACTLY word-for-word - do NOT paraphrase these specific principles
- Use bullets to list the core values exactly as written in the context
- Speak as yourself (Jeremy) but keep the value statements verbatim

${jeremyContext}`,
      messages: [
        {
          role: 'user',
          content: message
        }
      ]
    })

    const responseText = response.content[0]?.type === 'text'
      ? response.content[0].text
      : 'No response generated'

    return {
      success: true,
      response: responseText,
      model: response.model,
      usage: response.usage
    }
  } catch (error: any) {
    console.error('Anthropic API Error:', error)
    throw createError({
      statusCode: error.status || 500,
      statusMessage: error.message || 'Failed to get response from Claude'
    })
  }
})
