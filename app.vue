<template>
  <div class="project">
    <!-- Main Content -->
    <main class="main-content">
      <!-- CTA Section -->
      <div ref="ctaSectionRef" class="cta-section">
        <h1 class="section-title">get to know <span class="gradient-text">[not really]</span> me</h1>
        <p class="section-description">This is an AI tool I built that can answer questions about my experience, work, interests, and who knows what else. Hopefully not my security questions.</p>
        <p class="section-description">For the build, I used Figma with the MCP server protocol, Cursor, and Claude Code. For the LLM, I used the Claude API and an extensive context doc along with Github and Vercel for deployment. The last step was creating a standalone Vue component embedded into my Webflow site here.</p>
        <p class="section-description">Want to hear more about how it was built? Check out the first suggested question down below ↓</p>
        <div class="cta-container">
          <!-- Text Field with Floating Label and Button Inside -->
          <div
            class="text-field-open"
            :class="{ 'is-focused': isFocused || inputValue }"
            @click="focusInput"
          >
            <label
              for="welcome-input"
              class="floating-label"
              :class="{ 'floating': isFocused || inputValue }"
              :key="placeholderKey"
            >
              {{ placeholderText }}
            </label>
            <input
              id="welcome-input"
              ref="inputRef"
              v-model="inputValue"
              type="text"
              class="text-input"
              autocomplete="off"
              @focus="isFocused = true"
              @blur="setTimeout(() => isFocused = false, 200)"
              @keyup.enter="handleSubmit"
            />

            <!-- CTA Button Inside Text Field -->
            <button
              class="cta-button"
              @click="handleSubmit"
              :disabled="isLoading"
            >
              <svg v-if="!isLoading" class="arrow-icon-submit" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5L12 19M12 5L7 10M12 5L17 10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Suggested Queries (Outside container) -->
        <div v-if="!inputValue" class="suggested-queries">
          <button
            v-for="(query, index) in suggestedQueries"
            :key="index"
            class="suggested-query-item"
            :class="{ 'suggested-query-item-special': query.includes('How did you build this tool') }"
            @click.prevent="selectSuggestedQuery(query)"
          >
            {{ query }}
          </button>
        </div>

        <!-- Error Message -->
        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>
      </div>

      <!-- Loading Animation -->
      <div v-if="showLoading" ref="loadingRef" class="loading-container">
        <svg class="loading-spinner" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#f4d4c0" stop-opacity="0.6" />
              <stop offset="100%" stop-color="#e6b399" stop-opacity="0.3" />
            </linearGradient>
            <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#e6b399" stop-opacity="0.5" />
              <stop offset="100%" stop-color="#f4d4c0" stop-opacity="0.2" />
            </linearGradient>
            <radialGradient id="centerGlow" cx="50%" cy="50%">
              <stop offset="0%" stop-color="#f4d4c0" stop-opacity="0.8" />
              <stop offset="50%" stop-color="#e6b399" stop-opacity="0.4" />
              <stop offset="100%" stop-color="#e6b399" stop-opacity="0" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <!-- Abstract organic shapes using gradient colors -->
          <ellipse cx="60" cy="60" rx="50" ry="35" fill="url(#gradient1)" class="fog-layer-1" />
          <ellipse cx="60" cy="60" rx="45" ry="40" fill="url(#gradient2)" class="fog-layer-2" />
          <circle cx="60" cy="60" r="35" fill="url(#centerGlow)" class="center-glow" filter="url(#glow)" />
        </svg>
        <p class="loading-text">{{ currentLoadingMessage }}</p>
      </div>

      <!-- AI Response Display (Outside CTA Section) -->
      <div v-if="aiResponse" ref="responseContainerRef" class="response-container-main">
        <div class="response-header">
          <span class="response-label">{{ lastQuery }}</span>
        </div>
        <div class="response-content" v-html="aiResponse"></div>
      </div>

      <!-- Ask Another Button -->
      <div v-if="aiResponse" ref="askAnotherRef" class="ask-another-container">
        <button class="ask-another-button" @click="scrollToTop">
          <span class="ask-another-text">Ask another</span>
          <svg class="cycle-icon-refresh" width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 9C2 5.13401 5.13401 2 9 2C11.6651 2 13.9627 3.50409 15.0737 5.68198M16 9C16 12.866 12.866 16 9 16C6.33488 16 4.03725 14.4959 2.92627 12.318M15.0737 5.68198L16 2M15.0737 5.68198L11.5 5M2.92627 12.318L2 16M2.92627 12.318L6.5 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <!-- Next Fact Button - Only shows after random fact response -->
        <button v-if="isRandomFactResponse" class="another-fact-button" @click="getAnotherFact">
          <span class="another-fact-text">Next fact</span>
          <svg class="arrow-icon-right" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7H17M17 7L11 1M17 7L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick, computed } from 'vue'
import gsap from 'gsap'

// State
const isFocused = ref(false)
const inputValue = ref('')
const inputRef = ref<HTMLInputElement | null>(null)
const isLoading = ref(false)
const aiResponse = ref('')
const errorMessage = ref('')
const lastQuery = ref('')
const hasSearched = ref(false)
const loadingMessageIndex = ref(0)
const isRandomFactResponse = ref(false)

// Loading messages that cycle through
const loadingMessages = [
  'Analyzing all life choices...parsing all mistakes...',
  'Please be patient. This is, in fact, my first rodeo',
  'just a sec just a sec just a sec',
  'Mo data mo problems, that\'s the way I was trained'
]

// Computed current loading message
const currentLoadingMessage = computed(() => {
  return loadingMessages[loadingMessageIndex.value % loadingMessages.length]
})

// Rotating placeholder texts
const placeholderTexts = [
  'Ask me about my process...',
  'Ask me about my favorite project...',
  'Ask me about what keeps me motivated...',
  'Ask me about my dogs...',
  'Ask me about what I\'ve learned about leading...'
]

const currentPlaceholderIndex = ref(0)
const placeholderKey = ref(0)

// Rotate placeholder text every 4 seconds
let placeholderInterval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  placeholderInterval = setInterval(() => {
    if (!isFocused.value && !inputValue.value) {
      currentPlaceholderIndex.value = (currentPlaceholderIndex.value + 1) % placeholderTexts.length
      placeholderKey.value++
    }
  }, 4000)
})

// Cleanup interval on unmount
onBeforeUnmount(() => {
  if (placeholderInterval) {
    clearInterval(placeholderInterval)
  }
})

// Computed placeholder text
const placeholderText = computed(() => {
  return (isFocused.value || inputValue.value)
    ? 'You can use a suggested question (lame) or ask your own (cool)'
    : placeholderTexts[currentPlaceholderIndex.value]
})

// Suggested queries
const suggestedQueries = [
  'How did you build this tool?',
  'How are you answering these questions?',
  'What has been your favorite project?',
  'What do you value as a designer?',
  'What are you working on right now?',
  'What tools do you use?',
  'What do you do outside of work?',
  'Give me a random *random* fact'
]

// Animation refs
const ctaSectionRef = ref<HTMLElement | null>(null)
const responseContainerRef = ref<HTMLElement | null>(null)
const loadingRef = ref<HTMLElement | null>(null)
const askAnotherRef = ref<HTMLElement | null>(null)

// Loading state for animation
const showLoading = ref(false)

// Default AI model (Claude)
const selectedModel = 'claude-sonnet-4-20250514'

// Methods
const focusInput = () => {
  // If user has already searched and clicks back in, clear everything
  if (hasSearched.value) {
    inputValue.value = ''
    aiResponse.value = ''
    lastQuery.value = ''
    hasSearched.value = false
    isRandomFactResponse.value = false
  }
  inputRef.value?.focus()
}

const scrollToTop = () => {
  // Clear the response and reset state
  inputValue.value = ''
  aiResponse.value = ''
  lastQuery.value = ''
  hasSearched.value = false
  isRandomFactResponse.value = false

  // Scroll the CTA section into view
  if (ctaSectionRef.value) {
    ctaSectionRef.value.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }

  // Focus the input after scrolling
  setTimeout(() => {
    inputRef.value?.focus()
  }, 500)
}

const getAnotherFact = () => {
  // Set the input value to trigger another random fact
  inputValue.value = 'Gimme a random *random* fact'
  handleSubmit()
}

const selectSuggestedQuery = (query: string) => {
  inputValue.value = query
  handleSubmit()
}

// GSAP Animation
const animateCtaOut = () => {
  const timeline = gsap.timeline({
    onComplete: () => {
      // Show loading animation after CTA slides up
      showLoading.value = true
      nextTick(() => {
        animateLoadingIn()
      })
    }
  })

  // Animate CTA section up (to top of viewport)
  timeline.to(ctaSectionRef.value, {
    y: -64,
    duration: 0.8,
    ease: 'power2.inOut'
  })
}

// Animate loading in
const animateLoadingIn = () => {
  if (loadingRef.value) {
    gsap.fromTo(loadingRef.value,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      }
    )
  }
}

// Animate loading out
const animateLoadingOut = () => {
  if (loadingRef.value) {
    gsap.to(loadingRef.value, {
      opacity: 0,
      y: -30,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        showLoading.value = false
      }
    })
  }
}

// Animate response in
const animateResponseIn = () => {
  if (responseContainerRef.value) {
    gsap.fromTo(responseContainerRef.value,
      {
        opacity: 0,
        y: 55
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }
    )
  }

  // Animate ask another button at the same time
  if (askAnotherRef.value) {
    gsap.fromTo(askAnotherRef.value,
      {
        opacity: 0,
        y: 55
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }
    )
  }
}

const handleSubmit = async () => {
  if (!inputValue.value.trim()) {
    errorMessage.value = 'Please enter a question'
    return
  }

  // Store the query for display
  lastQuery.value = inputValue.value

  // Increment loading message index for next time
  loadingMessageIndex.value++

  // Show loading animation immediately
  showLoading.value = true
  nextTick(() => {
    animateLoadingIn()
  })

  isLoading.value = true
  errorMessage.value = ''
  aiResponse.value = ''

  try {
    console.log('Sending request to API with:', {
      message: inputValue.value,
      model: selectedModel
    })
    
    const response = await $fetch('/api/chat', {
      method: 'POST',
      body: {
        message: inputValue.value,
        model: selectedModel
      }
    })
    
    console.log('Received response from API:', response)

    if (response.success) {
      aiResponse.value = response.response
      hasSearched.value = true
      isRandomFactResponse.value = response.isRandomFact || false
      // Hide loading and show response
      animateLoadingOut()
      // Wait for loading to finish animating out
      setTimeout(async () => {
        await nextTick()
        animateResponseIn()
      }, 400)
    } else {
      errorMessage.value = 'Failed to get response from AI'
      animateLoadingOut()
    }
  } catch (error: any) {
    console.error('Error calling API:', error)
    
    // Better error handling and logging
    const errorMsg = error?.data?.statusMessage || error?.message || 'An error occurred'
    console.error('Full error details:', {
      status: error?.status,
      statusCode: error?.statusCode,
      data: error?.data,
      message: error?.message
    })
    
    errorMessage.value = errorMsg
    animateLoadingOut()
    
    // Clear input so user can try again
    setTimeout(() => {
      inputValue.value = ''
    }, 500)
  } finally {
    isLoading.value = false
  }
}
</script>

<style>
html, body {
  overflow-x: hidden;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 100vw;
}
</style>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.project {
  --bg-color: #1a1c23;
  --panel-bg-color: #22242b;
  --white-color: #fcf3ea;
  --text-field-stroke-color: #363944;
  --panel-corner-radius: 12px;
  --inner-corner-radius: 6px;
  --textfield-padding-lr: 24px;
  --textfield-padding-tb: 24px;
  --tag-container-padding-lr: 24px;
  --tag-container-pad-tb: 24px;
  --tag-corner-rad: 60px;
  
  background-color: var(--bg-color);
  width: 100%;
  font-family: 'Sora', sans-serif;
  padding: 0;
  overflow: visible;
}

/* Main Content */
.main-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  overflow: visible;
}

.cta-section {
  width: 817px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 11px;
  align-items: flex-start;
  padding: 20px;
}

.gradient-text {
  background: linear-gradient(135deg, #f4d4c0 0%, #e6b399 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.section-title {
  font-family: 'Sora', sans-serif;
  font-weight: 600;
  font-size: 48px;
  line-height: 1.1;
  color: #fcf3ea;
  margin: 0 0 16px 0;
  text-align: left;
  width: 100%;
}

.section-description {
  font-family: 'Sora', sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.6;
  color: #fcf3ea;
  margin: 0 0 12px 0;
  text-align: left;
  width: 100%;
  max-width: 817px;
}

.section-description.tech-item {
  margin: 0 0 2px 0;
  line-height: 1.5;
}

.section-description:last-of-type {
  margin: 0 0 32px 0;
}

.cta-container {
  width: 100%;
}

/* Text Field with Floating Label */
.text-field-open {
  width: 100%;
  background-color: var(--panel-bg-color);
  border: 1px solid var(--text-field-stroke-color);
  border-radius: var(--panel-corner-radius);
  padding: var(--textfield-padding-tb) var(--textfield-padding-lr);
  padding-right: 80px; /* Make room for button */
  position: relative;
  cursor: text;
  transition: border-color 0.3s ease;
  overflow: visible;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-field-open.is-focused {
  border-color: #4a4d5a;
  background: transparent;
}

.floating-label {
  font-family: 'Sora', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: normal;
  color: white;
  white-space: normal;
  position: absolute;
  left: var(--textfield-padding-lr);
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  transform-origin: left center;
  width: calc(100% - (var(--textfield-padding-lr) * 2));
  animation: scrollVertical 4s cubic-bezier(0.4, 0, 0.2, 1);
}

.floating-label.floating {
  font-size: 14px;
  top: 50%;
  transform: translateY(-50%) translateY(-16px);
  font-weight: 500;
  color: #b0b4c4;
  animation: none;
}

.text-input {
  width: 100%;
  height: 40px;
  background: transparent;
  border: none;
  outline: none;
  font-family: 'Sora', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 40px;
  color: #fcf3ea;
  padding: 0;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translateY(0);
}

.text-field-open.is-focused .text-input {
  opacity: 1;
  transform: translateY(12px);
}

/* CTA Button */
.cta-button {
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(135deg, #f4d4c0 0%, #e6b399 100%);
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 44px;
  width: 44px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
}

.cta-button:hover {
  background: linear-gradient(135deg, #f5dccb 0%, #ebb89e 100%);
  transform: translateY(-50%) translateY(-2px);
  box-shadow: 0 4px 12px rgba(230, 179, 153, 0.4);
}

.cta-button:active {
  transform: translateY(-50%) translateY(0);
  background: linear-gradient(135deg, #f0ccb5 0%, #dfa688 100%);
}

.arrow-icon-submit {
  width: 20px;
  height: 20px;
  color: #1b1e2e;
}

/* Error Message */
.error-message {
  width: 100%;
  background-color: rgba(220, 38, 38, 0.1);
  border: 1px solid rgba(220, 38, 38, 0.3);
  border-radius: var(--inner-corner-radius);
  padding: 16px 21px;
  font-family: 'Sora', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #fca5a5;
  margin-top: 11px;
}

/* AI Response Display */
.response-container {
  width: 100%;
  background-color: var(--panel-bg-color);
  border: 1px solid var(--text-field-stroke-color);
  border-radius: var(--panel-corner-radius);
  padding: var(--textfield-padding-tb) var(--textfield-padding-lr);
  margin-top: 20px;
  animation: fadeIn 0.3s ease-in;
}

.response-container-main {
  width: 817px;
  max-width: 100%;
  background-color: var(--panel-bg-color);
  border: 1px solid var(--text-field-stroke-color);
  border-radius: var(--panel-corner-radius);
  padding: var(--textfield-padding-tb) var(--textfield-padding-lr);
  margin-top: 20px;
}

/* Loading Animation */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: -40px;
  padding: 40px;
  width: 100%;
}

.loading-spinner {
  width: 120px;
  height: 120px;
  animation: smoothPulse 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  filter: blur(0.5px);
}

.fog-layer-1 {
  animation: smoothRotate1 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  transform-origin: center;
  opacity: 0.7;
}

.fog-layer-2 {
  animation: smoothRotate2 8s cubic-bezier(0.4, 0, 0.2, 1) infinite reverse;
  transform-origin: center;
  opacity: 0.6;
}

.center-glow {
  animation: smoothGlow 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  transform-origin: center;
}

@keyframes smoothPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.08);
    opacity: 1;
  }
}

@keyframes smoothRotate1 {
  0% {
    transform: rotate(0deg) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: rotate(180deg) scale(1.1);
    opacity: 0.9;
  }
  100% {
    transform: rotate(360deg) scale(1);
    opacity: 0.6;
  }
}

@keyframes smoothRotate2 {
  0% {
    transform: rotate(0deg) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: rotate(-180deg) scale(1.15);
    opacity: 0.8;
  }
  100% {
    transform: rotate(-360deg) scale(1);
    opacity: 0.5;
  }
}

@keyframes smoothGlow {
  0%, 100% {
    opacity: 0.5;
    transform: scale(0.95);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.1);
  }
}

.loading-text {
  font-family: 'Sora', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  opacity: 1;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scrollVertical {
  0% {
    opacity: 0;
    transform: translate(0, calc(-50% + 30px));
  }
  15% {
    opacity: 1;
    transform: translate(0, -50%);
  }
  85% {
    opacity: 1;
    transform: translate(0, -50%);
  }
  100% {
    opacity: 0;
    transform: translate(0, calc(-50% - 30px));
  }
}

.response-header {
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--text-field-stroke-color);
}

.response-label {
  font-family: 'Sora', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: var(--white-color);
}

.response-content {
  font-family: 'Sora', sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.6;
  color: var(--white-color);
  white-space: pre-wrap;
  word-wrap: break-word;
}

.response-content strong {
  font-weight: 600;
  color: var(--white-color);
}

/* Subtitle */
.subtitle {
  font-family: 'Sora', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: normal;
  color: var(--white-color);
  width: 100%;
  margin-top: 15px;
}

/* Disabled button state */
.cta-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: translateY(-50%);
}

.cta-button:disabled:hover {
  transform: translateY(-50%);
  box-shadow: none;
  background: linear-gradient(135deg, #f4d4c0 0%, #e6b399 100%);
}

/* Fixed Footer Cards */
.footer-cards {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  gap: 29px;
  align-items: center;
  padding: 20px;
  background: linear-gradient(to top, var(--bg-color) 80%, transparent);
  overflow: hidden;
  z-index: 100;
}

.card {
  flex-shrink: 0;
  width: 273px;
  height: 201px;
  border: 1px solid var(--text-field-stroke-color);
  border-radius: var(--inner-corner-radius);
  padding: var(--textfield-padding-tb) var(--textfield-padding-lr);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  border-color: #4a4d5a;
}

.card-title {
  font-family: 'Sora', sans-serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 1.02;
  color: white;
  margin: 0;
}

.tag-container {
  background-color: var(--panel-bg-color);
  border-radius: var(--tag-corner-rad);
  padding: var(--tag-container-pad-tb) var(--tag-container-padding-lr);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 224px;
}

.tag-text {
  font-family: 'Sora', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.02;
  color: #7a7f93;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  white-space: nowrap;
}

/* Suggested Queries */
.suggested-queries {
  width: 100%;
  background-color: var(--panel-bg-color);
  border: 1px solid var(--text-field-stroke-color);
  border-radius: var(--inner-corner-radius);
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 12px;
  margin-top: 11px;
  animation: fadeIn 0.2s ease-in;
}

.suggested-query-item {
  background-color: transparent;
  border: 1px solid var(--text-field-stroke-color);
  border-radius: 4px;
  padding: 12px 16px;
  font-family: 'Sora', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: var(--white-color);
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
}

.suggested-query-item:hover {
  background-color: rgba(252, 243, 234, 0.05);
  border-color: #4a4d5a;
  transform: translateX(4px);
}

.suggested-query-item:active {
  transform: translateX(2px);
}

.suggested-query-item-special {
  background: var(--bg-color);
  border: 2px solid transparent;
  background-image: 
    linear-gradient(var(--bg-color), var(--bg-color)),
    linear-gradient(135deg, #f4d4c0 0%, #e6b399 100%);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  color: var(--white-color);
  font-weight: 400;
}

.suggested-query-item.suggested-query-item-special:hover {
  background: linear-gradient(135deg, #f5dccb 0%, #ebb89e 100%) !important;
  background-image: linear-gradient(135deg, #f5dccb 0%, #ebb89e 100%) !important;
  background-clip: padding-box !important;
  background-origin: padding-box !important;
  border: 2px solid transparent !important;
  border-color: transparent !important;
  color: #1b1e2e !important;
  font-weight: 600;
  transform: translateX(4px);
}


/* Ask Another Button */
.ask-another-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
  padding: 0 20px;
}

.ask-another-button {
  background-color: #22242b;
  border: none;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 24px;
  height: 48px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}

.ask-another-button:hover {
  background-color: rgba(252, 243, 234, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(252, 243, 234, 0.2);
}

.ask-another-button:active {
  transform: translateY(0);
}

.ask-another-text {
  font-family: 'Sora', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: normal;
  color: #fcf3ea;
  white-space: nowrap;
}

.cycle-icon-refresh {
  width: 16px;
  height: 16px;
  color: var(--white-color);
}

/* Another Fact Button */
.another-fact-button {
  background-color: transparent;
  border: 2px solid var(--white-color);
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 24px;
  height: 48px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}

.another-fact-button:hover {
  background-color: rgba(252, 243, 234, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(252, 243, 234, 0.2);
}

.another-fact-button:active {
  transform: translateY(0);
}

.another-fact-text {
  font-family: 'Sora', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: normal;
  color: #fcf3ea;
  white-space: nowrap;
}

.arrow-icon-right {
  width: 17.5px;
  height: 13.5px;
  color: var(--white-color);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .header {
    padding: 24px 32px;
  }

  .section-title {
    font-size: 40px;
  }

  .section-description {
    font-size: 15px;
  }

  .cta-section {
    width: 100%;
  }

  .text-field-open {
    width: 100%;
    min-height: 80px;
    padding-right: 80px;
  }

  .cta-button {
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
    width: 44px;
    height: 44px;
  }

  .cta-button:hover {
    transform: translateY(-50%) translateY(-2px);
  }

  .cta-button:active {
    transform: translateY(-50%) translateY(0);
  }

  .cta-button:disabled {
    transform: translateY(-50%);
  }

  .cta-button:disabled:hover {
    transform: translateY(-50%);
  }
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  .section-title {
    font-size: 32px;
    line-height: 1.2;
  }

  .section-description {
    font-size: 14px;
    line-height: 1.7;
    margin: 0 0 24px 0;
  }

  .cta-section {
    padding: 16px;
  }

  .text-field-open {
    min-height: 80px;
    padding-right: 80px;
    font-size: 16px;
  }

  .cta-button {
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
    width: 44px;
    height: 44px;
  }

  .cta-button:hover {
    transform: translateY(-50%) translateY(-2px);
  }

  .cta-button:active {
    transform: translateY(-50%) translateY(0);
  }

  .cta-button:disabled {
    transform: translateY(-50%);
    opacity: 0.5;
  }

  .cta-button:disabled:hover {
    transform: translateY(-50%);
  }

  .floating-label {
    font-size: 16px;
  }

  .text-input {
    font-size: 18px;
  }

  .suggested-queries {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .suggested-query-item {
    min-height: 48px;
    padding: 14px 18px;
    font-size: 15px;
  }

  .response-container-main {
    font-size: 15px;
    line-height: 1.7;
    padding: 24px 20px;
    margin-top: 16px;
  }

  .response-header {
    font-size: 17px;
    margin-bottom: 14px;
  }

  .response-content {
    font-size: 15px;
    line-height: 1.7;
  }

  .loading-spinner {
    width: 80px;
    height: 80px;
  }

  .loading-text {
    font-size: 14px;
  }

  .nav {
    gap: 15px;
  }

  .nav-item {
    font-size: 18px;
  }

  .footer-cards {
    justify-content: flex-start;
    padding: 15px;
  }

  .ask-another-button {
    height: 48px;
    font-size: 16px;
    padding: 12px 20px;
  }

  .ask-another-container {
    margin-top: 20px;
    flex-direction: column;
    gap: 12px;
  }

  .another-fact-button {
    width: 100%;
    max-width: 300px;
  }
}

/* Reduce motion for accessibility and mobile performance */
@media (prefers-reduced-motion: reduce) {
  .floating-label {
    animation: none;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .loading-spinner,
  .fog-layer-1,
  .fog-layer-2,
  .center-glow {
    animation: none;
  }
}
</style>
