<template>
  <section class="case-studies-section section-padding" id="case-studies">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">Naše projekty</h2>
        <p class="section-subtitle">
          Ukázky úspěšných brandových transformací, které jsme realizovali pro naše klienty.
          Každý projekt je jedinečný a přizpůsobený specifickým potřebám klienta.
        </p>
      </div>

      <!-- Case Studies Slider -->
      <div class="case-studies-slider">
        <div 
          class="slider-controls"
          v-if="caseStudies.length > 1"
        >
          <button 
            class="slider-arrow slider-arrow-mobile" 
            @click="prevSlide" 
            :disabled="currentIndex === 0"
            aria-label="Previous case study"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="slider-dots">
            <button 
              v-for="(_, index) in caseStudies" 
              :key="index"
              class="slider-dot"
              :class="{ 'slider-dot-active': currentIndex === index }"
              @click="goToSlide(index)"
              :aria-label="`Go to case study ${index + 1}`"
            ></button>
          </div>
          <button 
            class="slider-arrow slider-arrow-mobile" 
            @click="nextSlide" 
            :disabled="currentIndex === caseStudies.length - 1"
            aria-label="Next case study"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <div class="slider-container" ref="sliderContainer">
          <div 
            class="slider-track"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div 
              v-for="(caseStudy, index) in caseStudies" 
              :key="caseStudy.id"
              class="case-study-slide"
            >
              <div class="case-study-card">
                <div class="case-study-content case-studies-mobile case-studies-content-mobile">
                  <div class="case-study-header">
                    <Badge 
                      :variant="caseStudy.categoryColor" 
                      size="sm"
                    >
                      {{ caseStudy.category }}
                    </Badge>
                    <h3 class="case-study-title case-study-title-mobile">{{ caseStudy.title }}</h3>
                    <p class="case-study-client">{{ caseStudy.client }}</p>
                  </div>
                  
                  <div class="case-study-description">
                    <p>{{ caseStudy.description }}</p>
                  </div>
                  
                  <div class="case-study-results">
                    <h4 class="results-title">Výsledky</h4>
                    <div class="results-grid results-grid-mobile">
                      <div 
                        v-for="result in caseStudy.results" 
                        :key="result.label"
                        class="result-item"
                      >
                        <div class="result-value result-value-mobile">{{ result.value }}</div>
                        <div class="result-label result-label-mobile">{{ result.label }}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="case-study-actions">
                    <Button 
                      v-if="caseStudy.detailUrl"
                      variant="outline"
                      @click="navigateToDetail(caseStudy.detailUrl)"
                    >
                      Zobrazit detail
                    </Button>
                  </div>
                </div>
                
                <div class="case-study-image case-studies-image-mobile">
                  <img 
                    :src="caseStudy.imageUrl" 
                    :alt="caseStudy.title" 
                    class="study-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- CTA -->
      <div class="case-studies-cta">
        <p class="cta-text">Máte zájem o podobnou transformaci pro vaši značku?</p>
        <Button 
          variant="primary"
          @click="$emit('open-contact-modal')"
        >
          Nezávazná konzultace
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, defineEmits, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { Button, Badge } from '@/components/ui'

// Define emits
defineEmits<{
  'open-contact-modal': []
}>()

const router = useRouter()

// State
const currentIndex = ref(0)
const sliderContainer = ref<HTMLElement | null>(null)
let autoplayInterval: number | undefined

// Case Studies data
const caseStudies = [
  {
    id: 'tech-startup',
    title: 'Rebrand a webové stránky pro rostoucí tech startup',
    client: 'TechVision s.r.o.',
    category: 'Kompletní rebrand',
    categoryColor: 'primary',
    description: 'Komplexní brandová transformace pro rychle rostoucí AI startup, který potřeboval profesionální identitu pro vstup na enterprise trh a přípravu na Series A financování.',
    imageUrl: '/images/case-study-1.jpg',
    results: [
      { value: '+156%', label: 'Návštěvnost webu' },
      { value: '+38%', label: 'Konverze' },
      { value: '2,5mil €', label: 'Získané investice' }
    ],
    detailUrl: '/portfolio/tech-startup'
  },
  {
    id: 'saas-platform',
    title: 'Přechod z produktu na platformu s novým brandingem',
    client: 'SaaS Solutions a.s.',
    category: 'Brand architektura',
    categoryColor: 'secondary',
    description: 'Vytvořili jsme novou brand architekturu a vizuální identitu pro SaaS firmu, která přecházela z jednotlivého produktu na multi-produktovou platformu.',
    imageUrl: '/images/case-study-2.jpg',
    results: [
      { value: '+83%', label: 'Brand recognition' },
      { value: '+42%', label: 'Tržby' },
      { value: '5→12', label: 'Enterprise klientů' }
    ],
    detailUrl: '/portfolio/saas-platform'
  },
  {
    id: 'fintech-startup',
    title: 'Brandová identita pro fintech startup',
    client: 'FinFlow s.r.o.',
    category: 'Nový brand',
    categoryColor: 'success',
    description: 'Vytvořili jsme kompletní brand identitu a go-to-market strategii pro inovativní fintech startup zaměřený na malé a střední podniky.',
    imageUrl: '/images/case-study-3.jpg',
    results: [
      { value: '10.000+', label: 'Nových uživatelů' },
      { value: '94%', label: 'Pozitivní zpětná vazba' },
      { value: '3 týdny', label: 'Time-to-market' }
    ],
    detailUrl: '/portfolio/fintech-startup'
  }
]

// Methods
const nextSlide = () => {
  if (currentIndex.value < caseStudies.length - 1) {
    currentIndex.value++
  }
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const goToSlide = (index: number) => {
  currentIndex.value = index
}

const navigateToDetail = (url: string) => {
  router.push(url)
}

const startAutoplay = () => {
  autoplayInterval = window.setInterval(() => {
    if (currentIndex.value < caseStudies.length - 1) {
      currentIndex.value++
    } else {
      currentIndex.value = 0
    }
  }, 5000) as unknown as number
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
}

// Touch handling for mobile
let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (e: TouchEvent) => {
  touchStartX = e.changedTouches[0].screenX
  stopAutoplay()
}

const handleTouchEnd = (e: TouchEvent) => {
  touchEndX = e.changedTouches[0].screenX
  handleSwipe()
  startAutoplay()
}

const handleSwipe = () => {
  const swipeThreshold = 50
  
  if (touchEndX < touchStartX - swipeThreshold) {
    // Swipe left - next slide
    nextSlide()
  }
  
  if (touchEndX > touchStartX + swipeThreshold) {
    // Swipe right - previous slide
    prevSlide()
  }
}

// Lifecycle hooks
onMounted(() => {
  if (sliderContainer.value) {
    sliderContainer.value.addEventListener('touchstart', handleTouchStart, { passive: true })
    sliderContainer.value.addEventListener('touchend', handleTouchEnd, { passive: true })
  }
  
  startAutoplay()
})

onBeforeUnmount(() => {
  stopAutoplay()
  
  if (sliderContainer.value) {
    sliderContainer.value.removeEventListener('touchstart', handleTouchStart)
    sliderContainer.value.removeEventListener('touchend', handleTouchEnd)
  }
})
</script>

<style scoped>
/* Only slider transform animation - everything else is now in UnoCSS utilities */
.slider-track {
  transition: transform 0.5s ease-out;
}
</style>
