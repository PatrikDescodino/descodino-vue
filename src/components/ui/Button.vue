<template>
  <button
    :class="[
      'btn',
      `btn-${variant}`,
      `btn-${size}`,
      {
        'btn-icon': icon && !label,
        [`btn-icon-${size}`]: icon && !label,
        'btn-loading': loading,
        'btn-block': block,
        'btn-rounded': rounded,
        'btn-disabled': disabled,
        'btn-focus': true
      }
    ]"
    :type="type"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <div class="flex items-center justify-center gap-2 w-full h-full">
      <!-- Loading Spinner -->
      <span v-if="loading" class="btn-spinner">
        <svg viewBox="0 0 50 50" class="w-6 h-6 animate-spin">
          <circle 
            class="stroke-current opacity-25" 
            cx="25" 
            cy="25" 
            r="20" 
            fill="none" 
            stroke-width="5"
          />
          <circle 
            class="stroke-current" 
            cx="25" 
            cy="25" 
            r="20" 
            fill="none" 
            stroke-width="5"
            stroke-linecap="round"
            stroke-dasharray="90, 150"
            stroke-dashoffset="-35"
            style="animation: dash 1.5s ease-in-out infinite"
          />
        </svg>
      </span>

      <!-- Icon - Before -->
      <span v-if="icon && iconPosition === 'before' && !loading" class="flex items-center">
        <slot name="icon">
          {{ icon }}
        </slot>
      </span>

      <!-- Label -->
      <span v-if="label && !loading" class="">{{ label }}</span>
      <slot v-else-if="!loading"></slot>

      <!-- Icon - After -->
      <span v-if="icon && iconPosition === 'after' && !loading" class="flex items-center">
        <slot name="icon">
          {{ icon }}
        </slot>
      </span>
    </div>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

// Define props
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'danger' | 'success'
  size?: 'sm' | 'md' | 'lg'
  icon?: string
  iconPosition?: 'before' | 'after'
  label?: string
  disabled?: boolean
  loading?: boolean
  block?: boolean
  rounded?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  iconPosition: 'before',
  disabled: false,
  loading: false,
  block: false,
  rounded: false,
  type: 'button'
})

// Define emits
defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

<style scoped>
/* Custom animation for spinner */
@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>
