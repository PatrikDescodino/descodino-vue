<template>
  <article 
    :id="package_.id" 
    class="package-card" 
    :class="{ 
      'featured': package_.featured,
      'animate-fade-in-up': isVisible 
    }"
    ref="cardRef"
  >
    <div class="package-card-inner">
      <!-- Featured Badge -->
      <div v-if="package_.featured" class="featured-badge">
        <span class="badge-text">{{ package_.featuredText }}</span>
      </div>

      <div class="package-content">
        <!-- Package Info -->
        <div class="package-info">
          <div class="package-header">
            <span class="package-category">{{ package_.category }}</span>
            <h2 class="package-title">{{ package_.title }}</h2>
            <p class="package-description">{{ package_.description }}</p>
          </div>

          <div class="package-features">
            <div class="features-section">
              <h3 class="features-title">
                Co získáte za {{ package_.duration }}:
              </h3>
              <ul class="features-list">
                <li 
                  v-for="feature in package_.features" 
                  :key="feature.id"
                  class="feature-item"
                >
                  <span class="feature-icon">✓</span>
                  <div class="feature-content">
                    <strong>{{ feature.title }}</strong>
                    <br>
                    <span class="feature-description">{{ feature.description }}</span>
                  </div>
                </li>
              </ul>
            </div>

            <div class="impact-section">
              <h3 class="impact-title">
                Očekávaný dopad na váš business:
              </h3>
              <div class="impact-metrics">
                <div 
                  v-for="metric in package_.expectedImpact" 
                  :key="metric.label"
                  class="impact-metric"
                >
                  <div class="metric-value">{{ metric.value }}</div>
                  <span class="metric-label">{{ metric.label }}</span>
                </div>
              </div>

              <div class="package-meta">
                <p class="meta-item">
                  <strong>Ideální pro:</strong> {{ package_.idealFor }}
                </p>
                <p class="meta-item">
                  <strong>Doba realizace:</strong> {{ package_.duration }}
                </p>
                <p class="meta-item">
                  <strong>Garance:</strong> {{ package_.guarantees }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Price & CTA -->
        <div class="package-cta">
          <div class="price-card">
            <div class="price-section">
              <div class="price-label">Investice</div>
              <div class="price-main">{{ formatPrice(package_.price) }}</div>
              <div class="price-average">Průměr: {{ formatCurrency(package_.averagePrice) }}</div>
            </div>
            
            <button
              class="cta-button"
              :class="package_.featured ? 'cta-primary' : 'cta-secondary'"
              @click="handleSelectPackage"
            >
              {{ package_.ctaText }}
            </button>
            
            <a
              href="#roi-calculator"
              class="roi-link"
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
.package-card {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  scroll-margin-top: 100px;
}

.package-card.animate-fade-in-up {
  opacity: 1;
  transform: translateY(0);
}

.package-card-inner {
  background: #f8f9fa;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
}

.package-card:hover .package-card-inner {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  border-color: #96b623;
}

.package-card.featured .package-card-inner {
  border-color: #e60000;
  transform: scale(1.02);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.15);
}

.featured-badge {
  position: absolute;
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.badge-text {
  background: #e60000;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
}

.package-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 1024px) {
  .package-content {
    grid-template-columns: 2fr 1fr;
  }
}

.package-header {
  margin-bottom: 2rem;
}

.package-category {
  background: #e60000;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
}

.package-title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #1f2937;
  transition: color 0.3s ease;
}

.package-card:hover .package-title {
  color: #96b623;
}

.package-card.featured:hover .package-title {
  color: #e60000;
}

.package-description {
  font-size: 1.25rem;
  color: #6b7280;
  line-height: 1.6;
}

.package-features {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .package-features {
    grid-template-columns: 1fr 1fr;
  }
}

.features-title,
.impact-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1f2937;
}

.features-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.feature-icon {
  color: #96b623;
  font-size: 1.125rem;
  margin-top: 0.125rem;
  flex-shrink: 0;
}

.package-card.featured .feature-icon {
  color: #e60000;
}

.feature-content {
  font-size: 0.875rem;
}

.feature-description {
  color: #6b7280;
}

.impact-metrics {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.impact-metric {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.metric-value {
  font-size: 1.5rem;
  font-weight: 800;
  color: #96b623;
}

.package-card.featured .metric-value {
  color: #e60000;
}

.metric-label {
  color: #6b7280;
  font-size: 0.875rem;
}

.package-meta {
  background: rgba(150, 182, 35, 0.1);
  padding: 1rem;
  border-radius: 0.75rem;
  border-left: 4px solid #96b623;
}

.package-card.featured .package-meta {
  background: rgba(230, 0, 0, 0.1);
  border-left-color: #e60000;
}

.meta-item {
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.meta-item:last-child {
  margin-bottom: 0;
}

.package-cta {
  display: flex;
  justify-content: center;
}

.price-card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  text-align: center;
  width: 100%;
  max-width: 280px;
}

.price-section {
  margin-bottom: 1.5rem;
}

.price-label {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.price-main {
  font-size: 2.5rem;
  font-weight: 800;
  color: #e60000;
  margin-bottom: 0.25rem;
}

.price-average {
  font-size: 0.875rem;
  color: #6b7280;
}

.cta-button {
  width: 100%;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  margin-bottom: 1rem;
}

.cta-primary {
  background: #e60000;
  color: white;
}

.cta-primary:hover {
  background: #cc0000;
}

.cta-secondary {
  background: #96b623;
  color: white;
}

.cta-secondary:hover {
  background: #7a9d1e;
}

.roi-link {
  color: #96b623;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
}

.roi-link:hover {
  text-decoration: underline;
}

.package-card.featured .roi-link {
  color: #e60000;
}
</style>
