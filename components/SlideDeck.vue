<template>
  <div 
    class="slide-deck-container"
    @keydown="handleKeydown"
    tabindex="0"
    ref="containerRef"
  >
    <!-- Progress Bar -->
    <div class="progress-bar">
      <div 
        class="progress-fill" 
        :style="{ width: `${(currentSlideIndex + 1) / slides.length * 100}%` }"
      ></div>
    </div>

    <!-- Slide Counter -->
    <div class="slide-counter-wrapper" ref="slideMenuRef">
      <button 
        class="slide-counter"
        @click.stop="toggleSlideMenu"
        :aria-expanded="showSlideMenu"
        aria-haspopup="true"
        aria-label="Slide navigation menu"
      >
        <span>{{ currentSlideIndex + 1 }} / {{ slides.length }}</span>
        <svg 
          class="slide-counter-icon" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <Transition name="menu">
        <div 
          v-if="showSlideMenu" 
          class="slide-menu" 
          role="menu"
        >
          <button
            v-for="(slide, index) in slides"
            :key="slide.id"
            class="slide-menu-item"
            :class="{ active: index === currentSlideIndex }"
            @click="jumpToSlide(index)"
            role="menuitem"
          >
            <span class="slide-menu-index">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="slide-menu-title">{{ slide.title }}</span>
          </button>
        </div>
      </Transition>
    </div>

    <!-- Slide Content -->
    <Transition name="slide" mode="out-in">
      <div 
        :key="currentSlideIndex"
        class="slide-content"
      >
        <div class="slide-inner" v-html="currentSlide.content"></div>
      </div>
    </Transition>

    <!-- Navigation Controls -->
    <button 
      class="nav-button nav-button-prev"
      @click="previousSlide"
      :disabled="currentSlideIndex === 0"
      aria-label="Previous slide"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <button 
      class="nav-button nav-button-next"
      @click="nextSlide"
      :disabled="currentSlideIndex === slides.length - 1"
      aria-label="Next slide"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <!-- Keyboard Hint (shown on first slide) -->
    <div v-if="currentSlideIndex === 0 && showKeyboardHint" class="keyboard-hint">
      <p>Use ← → arrow keys or click the buttons to navigate</p>
      <button @click="showKeyboardHint = false" class="dismiss-hint">Got it</button>
    </div>

    <!-- Fullscreen Image Modal -->
    <div v-if="fullscreenImage" class="image-modal" @click="closeFullscreen">
      <button class="modal-close" @click.stop="closeFullscreen" aria-label="Close fullscreen image">×</button>
      <img :src="fullscreenImage" @click.stop alt="Fullscreen view" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

interface Slide {
  id: number
  title: string
  content: string
  image?: string
}

const props = defineProps<{
  slides: Slide[]
}>()

const currentSlideIndex = ref(0)
const containerRef = ref<HTMLElement | null>(null)
const showKeyboardHint = ref(true)
const showSlideMenu = ref(false)
const slideMenuRef = ref<HTMLElement | null>(null)
const fullscreenImage = ref<string | null>(null)

const currentSlide = computed(() => props.slides[currentSlideIndex.value])

const nextSlide = () => {
  if (currentSlideIndex.value < props.slides.length - 1) {
    currentSlideIndex.value++
    showKeyboardHint.value = false
    showSlideMenu.value = false
  }
}

const previousSlide = () => {
  if (currentSlideIndex.value > 0) {
    currentSlideIndex.value--
    showKeyboardHint.value = false
    showSlideMenu.value = false
  }
}

const jumpToSlide = (index: number) => {
  currentSlideIndex.value = index
  showKeyboardHint.value = false
  showSlideMenu.value = false
}

const toggleSlideMenu = () => {
  showSlideMenu.value = !showSlideMenu.value
}

const handleKeydown = (event: KeyboardEvent) => {
  switch (event.key) {
    case 'ArrowRight':
    case ' ': // Spacebar
      event.preventDefault()
      nextSlide()
      break
    case 'ArrowLeft':
      event.preventDefault()
      previousSlide()
      break
    case 'Home':
      event.preventDefault()
      currentSlideIndex.value = 0
      showKeyboardHint.value = false
      showSlideMenu.value = false
      break
    case 'End':
      event.preventDefault()
      currentSlideIndex.value = props.slides.length - 1
      showKeyboardHint.value = false
      showSlideMenu.value = false
      break
    case 'Escape':
      if (fullscreenImage.value) {
        closeFullscreen()
      } else {
        showSlideMenu.value = false
      }
      break
  }
}

const closeFullscreen = () => {
  fullscreenImage.value = null
}

// Focus container on mount for keyboard navigation
onMounted(() => {
  containerRef.value?.focus()
  
  // Handle image clicks in slide content
  const handleImageClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (target.tagName === 'IMG' && target.getAttribute('data-fullscreen') !== 'false') {
      const src = target.getAttribute('src')
      if (src) {
        fullscreenImage.value = src
      }
    }
  }
  
  // Use MutationObserver to handle dynamically added images
  const observer = new MutationObserver(() => {
    const slideInner = containerRef.value?.querySelector('.slide-inner')
    if (slideInner) {
      const images = slideInner.querySelectorAll('img')
      images.forEach(img => {
        if (img.getAttribute('data-fullscreen') !== 'false') {
          img.style.cursor = 'pointer'
          img.addEventListener('click', handleImageClick)
        }
      })
    }
  })
  
  if (containerRef.value) {
    observer.observe(containerRef.value, { childList: true, subtree: true })
  }
  
  // Initial setup
  setTimeout(() => {
    const slideInner = containerRef.value?.querySelector('.slide-inner')
    if (slideInner) {
      const images = slideInner.querySelectorAll('img')
      images.forEach(img => {
        if (img.getAttribute('data-fullscreen') !== 'false') {
          img.style.cursor = 'pointer'
          img.addEventListener('click', handleImageClick)
        }
      })
    }
  }, 100)
})

const handleClickOutside = (event: MouseEvent) => {
  if (!showSlideMenu.value) return
  const target = event.target as Node | null
  if (!slideMenuRef.value?.contains(target as Node)) {
    showSlideMenu.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

// Handle swipe gestures for mobile
let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (e: TouchEvent) => {
  touchStartX = e.changedTouches[0].screenX
}

const handleTouchEnd = (e: TouchEvent) => {
  touchEndX = e.changedTouches[0].screenX
  handleSwipe()
}

const handleSwipe = () => {
  const swipeThreshold = 50
  const diff = touchStartX - touchEndX
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe left - next slide
      nextSlide()
    } else {
      // Swipe right - previous slide
      previousSlide()
    }
  }
}

onMounted(() => {
  if (containerRef.value) {
    containerRef.value.addEventListener('touchstart', handleTouchStart)
    containerRef.value.addEventListener('touchend', handleTouchEnd)
  }
})

onBeforeUnmount(() => {
  if (containerRef.value) {
    containerRef.value.removeEventListener('touchstart', handleTouchStart)
    containerRef.value.removeEventListener('touchend', handleTouchEnd)
  }
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&display=swap');

/* PP Formula Font */
@font-face {
  font-family: 'PP Formula';
  src: url('/fonts/PPFormula-SemiExtendedBold.otf') format('opentype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

.slide-deck-container {
  width: 100%;
  height: 100vh;
  background-color: var(--bg-color, #1a1c23);
  color: var(--white-color, #fcf3ea);
  font-family: 'Sora', sans-serif;
  position: relative;
  overflow: hidden;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Progress Bar */
.progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: rgba(252, 243, 234, 0.1);
  z-index: 100;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #f4d4c0 0%, #e6b399 100%);
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Slide Counter */
.slide-counter-wrapper {
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 60;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.slide-counter {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Sora', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: rgba(252, 243, 234, 0.7);
  padding: 8px 16px 8px 18px;
  background-color: rgba(34, 36, 43, 0.85);
  border-radius: 22px;
  border: 1px solid rgba(54, 57, 68, 0.6);
  appearance: none;
  color-scheme: dark;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(12px);
}

.slide-counter:hover {
  background-color: rgba(252, 243, 234, 0.12);
  border-color: rgba(244, 212, 192, 0.5);
  color: #fcf3ea;
}

.slide-counter:focus-visible {
  outline: 2px solid rgba(244, 212, 192, 0.7);
  outline-offset: 3px;
}

.slide-counter-icon {
  transition: transform 0.2s ease;
}

.slide-counter[aria-expanded="true"] .slide-counter-icon {
  transform: rotate(180deg);
}

.slide-menu {
  margin-top: 12px;
  background-color: rgba(34, 36, 43, 0.95);
  border: 1px solid rgba(54, 57, 68, 0.6);
  border-radius: 18px;
  padding: 12px;
  min-width: 240px;
  max-height: 320px;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(14px);
}

.slide-menu-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Sora', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: rgba(252, 243, 234, 0.75);
  background: transparent;
  border: none;
  border-radius: 12px;
  padding: 10px 12px;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
}

.slide-menu-item:hover,
.slide-menu-item:focus-visible {
  background-color: rgba(252, 243, 234, 0.08);
  color: #fcf3ea;
}

.slide-menu-item.active {
  background: linear-gradient(135deg, rgba(244, 212, 192, 0.18) 0%, rgba(230, 179, 153, 0.24) 100%);
  border: 1px solid rgba(244, 212, 192, 0.35);
  color: #fcf3ea;
}

.slide-menu-index {
  font-family: 'PP Formula', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: rgba(244, 192, 191, 0.9);
  text-transform: uppercase;
  flex-shrink: 0;
}

.slide-menu-title {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* Slide Content */
.slide-content {
  width: 100%;
  max-width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.slide-inner {
  width: 100%;
}

.slide-inner :deep(h1) {
  font-family: 'PP Formula', sans-serif;
  font-weight: 700;
  font-size: 64px;
  line-height: 1.2;
  color: #fcf3ea;
  margin: 0 0 24px 0;
}

.slide-inner :deep(h2) {
  font-family: 'PP Formula', sans-serif;
  font-weight: 600;
  font-size: 48px;
  line-height: 1.3;
  color: #fcf3ea;
  margin: 0 0 24px 0;
}

.slide-inner :deep(h3) {
  font-family: 'PP Formula', sans-serif;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.4;
  color: #fcf3ea;
  margin: 0 0 20px 0;
}

.slide-inner :deep(p) {
  font-family: 'Sora', sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 1.6;
  color: rgba(252, 243, 234, 0.9);
  margin: 0 0 16px 0;
  text-align: left;
}


.slide-inner :deep(ul),
.slide-inner :deep(ol) {
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Sora', sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 1.8;
  color: rgba(252, 243, 234, 0.9);
}

.slide-inner :deep(li) {
  margin: 0 0 12px 0;
}

.slide-inner :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  margin: 24px 0;
}

.slide-inner :deep(.gradient-text) {
  background: linear-gradient(135deg, #f4d4c0 0%, #e6b399 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

/* Slide Transitions */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

/* Navigation Buttons */
.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(34, 36, 43, 0.9);
  border: 1px solid rgba(54, 57, 68, 0.8);
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #fcf3ea;
  z-index: 50;
  backdrop-filter: blur(10px);
}

.nav-button:hover:not(:disabled) {
  background-color: rgba(252, 243, 234, 0.1);
  border-color: rgba(244, 212, 192, 0.5);
  transform: translateY(-50%) scale(1.1);
}

.nav-button:active:not(:disabled) {
  transform: translateY(-50%) scale(0.95);
}

.nav-button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.nav-button-prev {
  left: 24px;
}

.nav-button-next {
  right: 24px;
}

/* Keyboard Hint */
.keyboard-hint {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(34, 36, 43, 0.95);
  border: 1px solid rgba(244, 212, 192, 0.3);
  border-radius: 12px;
  padding: 16px 24px;
  text-align: center;
  z-index: 100;
  backdrop-filter: blur(10px);
}

.keyboard-hint p {
  font-family: 'Sora', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: rgba(252, 243, 234, 0.8);
  margin: 0 0 12px 0;
}

.dismiss-hint {
  background: linear-gradient(135deg, #f4d4c0 0%, #e6b399 100%);
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-family: 'Sora', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #1b1e2e;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.dismiss-hint:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(230, 179, 153, 0.4);
}

.dismiss-hint:active {
  transform: translateY(0);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .slide-content {
    padding: 60px 32px;
  }

  .slide-inner :deep(h1) {
    font-size: 48px;
  }

  .slide-inner :deep(h2) {
    font-size: 36px;
  }

  .slide-inner :deep(h3) {
    font-size: 28px;
  }

  .slide-inner :deep(p) {
    font-size: 18px;
  }

  .nav-button {
    width: 48px;
    height: 48px;
  }

  .nav-button-prev {
    left: 16px;
  }

  .nav-button-next {
    right: 16px;
  }
}

@media (max-width: 768px) {
  .slide-content {
    padding: 40px 24px;
  }

  .slide-inner :deep(h1) {
    font-size: 36px;
  }

  .slide-inner :deep(h2) {
    font-size: 28px;
  }

  .slide-inner :deep(h3) {
    font-size: 24px;
  }

  .slide-inner :deep(p) {
    font-size: 16px;
  }

  .slide-counter-wrapper {
    top: 16px;
    right: 16px;
  }

  .slide-counter {
    font-size: 12px;
    padding: 6px 12px 6px 14px;
  }

  .slide-menu {
    min-width: 200px;
    max-height: 260px;
    width: calc(100vw - 64px);
    max-width: 360px;
  }

  .slide-menu-item {
    font-size: 13px;
  }

  .nav-button {
    width: 44px;
    height: 44px;
  }

  .nav-button-prev {
    left: 12px;
  }

  .nav-button-next {
    right: 12px;
  }

  .keyboard-hint {
    bottom: 24px;
    left: 16px;
    right: 16px;
    transform: none;
    padding: 12px 16px;
  }
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .slide-enter-active,
  .slide-leave-active {
    transition: opacity 0.2s ease;
  }

  .slide-enter-from,
  .slide-leave-to {
    transform: none;
  }

  .progress-fill {
    transition: width 0.2s ease;
  }
}

/* Fullscreen Image Modal */
.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  backdrop-filter: blur(8px);
}

.image-modal img {
  max-width: 95%;
  max-height: 95%;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.modal-close {
  position: absolute;
  top: 24px;
  right: 24px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #fcf3ea;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 1001;
  font-family: 'Sora', sans-serif;
  line-height: 1;
}

.modal-close:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
  transform: scale(1.1);
}

.modal-close:active {
  transform: scale(0.95);
}
</style>

