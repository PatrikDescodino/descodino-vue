<template>
  <span 
    :class="[
      'badge',
      `badge-${variant}`,
      `badge-${size}`,
      {
        'badge-rounded': rounded,
        'badge-outlined': outlined,
        'badge-dot': dot
      }
    ]"
  >
    <span v-if="dot" :class="getDotIndicatorClass()"></span>
    <slot>{{ text }}</slot>
  </span>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  text?: string
  rounded?: boolean
  outlined?: boolean
  dot?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  rounded: false,
  outlined: false,
  dot: false
})

// Dynamic class for dot indicator based on variant and outlined state
const getDotIndicatorClass = () => {
  const baseClass = 'badge-dot-indicator'
  
  if (props.outlined) {
    const colorMap = {
      primary: 'bg-primary',
      secondary: 'bg-secondary', 
      success: 'bg-green-600',
      danger: 'bg-red-600',
      warning: 'bg-yellow-500',
      info: 'bg-cyan-600',
      light: 'bg-gray-600',
      dark: 'bg-gray-900'
    }
    return `${baseClass} ${colorMap[props.variant]}`
  } else {
    // For filled badges, dot is white (except light variant)
    const dotColor = props.variant === 'light' ? 'bg-gray-900' : 'bg-white'
    return `${baseClass} ${dotColor}`
  }
}
</script>
