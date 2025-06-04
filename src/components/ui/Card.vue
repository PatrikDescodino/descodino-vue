<template>
  <div 
    :class="[
      'card',
      `card-${variant}`,
      {
        'card-hover': hover,
        'card-bordered': bordered,
      }
    ]"
  >
    <!-- Card Image (if provided) -->
    <div v-if="$slots.image || image" class="card-image">
      <slot name="image">
        <img :src="image" :alt="imageAlt || 'Card image'" class="card-img" />
      </slot>
    </div>

    <!-- Card Content -->
    <div 
      :class="[
        noPadding ? 'card-no-padding' : (tight ? 'card-content-tight' : 'card-content')
      ]"
    >
      <!-- Card Header (if provided) -->
      <div v-if="$slots.header || title || subtitle" class="card-header">
        <slot name="header">
          <h3 v-if="title" class="card-title">{{ title }}</h3>
          <p v-if="subtitle" :class="[variant === 'dark' ? 'text-gray-300' : 'card-subtitle']">{{ subtitle }}</p>
        </slot>
      </div>

      <!-- Card Body -->
      <div class="card-body">
        <slot></slot>
      </div>

      <!-- Card Footer (if provided) -->
      <div v-if="$slots.footer" :class="[variant === 'dark' ? 'card-footer border-t border-gray-600' : 'card-footer']">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'light' | 'dark' | 'white'
  title?: string
  subtitle?: string
  image?: string
  imageAlt?: string
  hover?: boolean
  bordered?: boolean
  noPadding?: boolean
  tight?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'white',
  hover: false,
  bordered: false,
  noPadding: false,
  tight: false
})
</script>

<style scoped>
.card {
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Variants */
.card-white {
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.card-primary {
  background-color: rgba(230, 0, 0, 0.05);
  border: 1px solid rgba(230, 0, 0, 0.2);
}

.card-secondary {
  background-color: rgba(150, 182, 35, 0.05);
  border: 1px solid rgba(150, 182, 35, 0.2);
}

.card-light {
  background-color: #f8f9fa;
  border: 1px solid #f0f0f0;
}

.card-dark {
  background-color: #1f2937;
  color: white;
}

/* Hover state */
.card-hover {
  cursor: pointer;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

/* Border style */
.card-bordered {
  border: 1px solid #e5e7eb;
}

/* Card image */
.card-image {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.card-hover:hover .card-img {
  transform: scale(1.05);
}

/* Card content */
.card-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.5rem;
}

.card-content-tight {
  padding: 1rem;
}

.card-no-padding .card-content {
  padding: 0;
}

/* Card header */
.card-header {
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.card-subtitle {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.4;
}

.card-dark .card-subtitle {
  color: #d1d5db;
}

/* Card body */
.card-body {
  flex: 1;
}

/* Card footer */
.card-footer {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #f3f4f6;
}

.card-dark .card-footer {
  border-top-color: #374151;
}

/* Responsive */
@media (max-width: 640px) {
  .card-content {
    padding: 1.25rem;
  }
  
  .card-content-tight {
    padding: 0.75rem;
  }
}
</style>
