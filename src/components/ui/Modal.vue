<template>
  <Teleport to="body">
    <div v-if="modelValue" :class="['modal-wrapper', { 'modal-open': modelValue }]">
      <!-- Backdrop -->
      <div class="modal-backdrop" @click="closeOnBackdrop && $emit('update:modelValue', false)"></div>

      <!-- Modal Content -->
      <div 
        :class="[
          'modal-container',
          `modal-${size}`,
          {
            'modal-centered': centered,
            'modal-fullscreen-mobile': fullscreenMobile
          }
        ]"
        ref="modalRef"
        role="dialog"
        aria-modal="true"
        style="animation: slideUp 0.3s ease forwards"
      >
        <!-- Close Button (if showClose is true) -->
        <button 
          v-if="showClose" 
          @click="$emit('update:modelValue', false)" 
          class="modal-close"
          aria-label="Close modal"
          type="button"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <!-- Modal Header (if title is provided) -->
        <div v-if="title || $slots.header" class="modal-header">
          <slot name="header">
            <h3 class="modal-title">{{ title }}</h3>
          </slot>
        </div>

        <!-- Modal Body -->
        <div class="modal-body">
          <slot></slot>
        </div>

        <!-- Modal Footer (if footer slot is provided) -->
        <div v-if="$slots.footer" class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'

interface Props {
  modelValue: boolean
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  centered?: boolean
  closeOnBackdrop?: boolean
  closeOnEsc?: boolean
  showClose?: boolean
  fullscreenMobile?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  centered: true,
  closeOnBackdrop: true,
  closeOnEsc: true,
  showClose: true,
  fullscreenMobile: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

// References
const modalRef = ref<HTMLElement | null>(null)

// Handle keyboard events (Escape key)
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.closeOnEsc && props.modelValue) {
    emit('update:modelValue', false)
  }
}

// Focus trap for accessibility
const handleFocusTrap = (event: KeyboardEvent) => {
  if (event.key !== 'Tab' || !modalRef.value || !props.modelValue) return

  const focusableElements = modalRef.value.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )

  if (focusableElements.length === 0) return

  const firstElement = focusableElements[0] as HTMLElement
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

  // Handle tabbing backwards (Shift+Tab)
  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault()
    lastElement.focus()
  } 
  // Handle tabbing forwards (Tab)
  else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault()
    firstElement.focus()
  }
}

// Handle body scroll lock
const lockBodyScroll = () => {
  document.body.style.overflow = 'hidden'
  document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`
}

const unlockBodyScroll = () => {
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''
}

// Watch for modal open/close
watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    // Modal opened
    lockBodyScroll()
    nextTick(() => {
      // Set focus to the first focusable element
      if (modalRef.value) {
        const focusableElement = modalRef.value.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as HTMLElement
        if (focusableElement) {
          focusableElement.focus()
        }
      }
    })
  } else {
    // Modal closed
    unlockBodyScroll()
  }
})

// Lifecycle hooks
onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
  document.addEventListener('keydown', handleFocusTrap)
  
  // Lock body scroll if modal is initially open
  if (props.modelValue) {
    lockBodyScroll()
  }
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeyDown)
  document.removeEventListener('keydown', handleFocusTrap)
  
  // Ensure body scroll is unlocked when component is unmounted
  unlockBodyScroll()
})
</script>

<style scoped>
/* Custom animations */
@keyframes slideUp {
  0% { transform: translateY(30px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
</style>
