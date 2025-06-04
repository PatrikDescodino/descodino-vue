<template>
  <article 
    :id="package_.id" 
    class="package-card" 
    :class="{ 
      'package-card-visible': isVisible 
    }"
    ref="cardRef"
  >
    <div class="package-card-inner" :class="{ 'package-card-featured': package_.featured }">
      <!-- Featured Badge -->
      <div v-if="package_.featured" class="featured-badge-container">
        <span class="featured-badge">{{ package_.featuredText }}</span>
      </div>

      <div class="package-content-grid">
        <!-- Package Info -->
        <div class="package-info">
          <div class="package-header-section">
            <span class="package-category-badge">{{ package_.category }}</span>
            <h2 class="package-title-card" :class="package_.featured ? 'package-title-featured' : ''">{{ package_.title }}</h2>
            <p class="package-description-card">{{ package_.description }}</p>
          </div>

          <div class="package-features-grid">
            <div class="features-section-card">
              <h3 class="features-title-card">
                Co získáte za {{ package_.duration }}:
              </h3>
              <ul class="features-list-card">
                <li 
                  v-for="feature in package_.features" 
                  :key="feature.id"
                  class="feature-item-card"
                >
                  <span class="feature-icon-card" :class="package_.featured ? 'feature-icon-featured' : ''">✓</span>
                  <div class="feature-content-card">
                    <strong>{{ feature.title }}</strong>
                    <br>
                    <span class="feature-description-card">{{ feature.description }}</span>
                  </div>
                </li>
              </ul>
            </div>

            <div class="impact-section-card">
              <h3 class="impact-title-card">
                Očekávaný dopad na váš business:
              </h3>
              <div class="impact-metrics-card">
                <div 
                  v-for="metric in package_.expectedImpact" 
                  :key="metric.label"
                  class="impact-metric-card"
                >
                  <div class="metric-value-card" :class="package_.featured ? 'metric-value-featured' : ''">{{ metric.value }}</div>
                  <span class="metric-label-card">{{ metric.label }}</span>
                </div>
              </div>

              <div class="package-meta-card" :class="package_.featured ? 'package-meta-featured' : ''">
                <p class="meta-item-card">
                  <strong>Ideální pro:</strong> {{ package_.idealFor }}
                </p>
                <p class="meta-item-card">
                  <strong>Doba realizace:</strong> {{ package_.duration }}
                </p>
                <p class="meta-item-card">
                  <strong>Garance:</strong> {{ package_.guarantees }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Price & CTA -->
        <div class="package-cta-section">
          <div class="price-card-container">
            <div class="price-section-card">
              <div class="price-label-card">Investice</div>
              <div class="price-main-card">{{ formatPrice(package_.price) }}</div>
              <div class="price-average-card">Průměr: {{ formatCurrency(package_.averagePrice) }}</div>
            </div>
            
            <button
              class="cta-button-card"
              :class="package_.featured ? 'cta-primary-card' : 'cta-secondary-card'"
              @click="handleSelectPackage"
            >
              {{ package_.ctaText }}
            </button>
            
            <a
              href="#roi-calculator"
              class="roi-link-card"
              :class="package_.featured ? 'roi-link-featured' : ''"
              @click.prevent="scrollToROI"
            >
              Nebo si vypočítejte ROI →
            </a>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Package } from '@/types/packages'

// Props
interface Props {
  package_: Package
}
const props = defineProps<Props>()

// Emits
const emit = defineEmits<{
  selectPackage: [packageId: string]
  scrollToROI: []
}>()

// State
const cardRef = ref<HTMLElement>()
const isVisible = ref(false)

// Methods
const handleSelectPackage = () => {
  emit('selectPackage', props.package_.id)
}

const scrollToROI = () => {
  emit('scrollToROI')
}

const formatPrice = (price: { min: number; max: number }): string => {
  return `${formatCurrency(price.min)}-${formatCurrency(price.max)}`
}

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'CZK',
    maximumFractionDigits: 0,
  }).format(amount)
}

// Intersection Observer for animations
onMounted(() => {
  if (cardRef.value) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '-10% 0px -10% 0px', threshold: 0.3 }
    )
    
    observer.observe(cardRef.value)
  }
})
</script>

<style scoped>
/* Only the transition is needed - everything else is now in UnoCSS utilities */
</style>
