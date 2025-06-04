<template>
  <div class="home-page">
    <!-- Hero Section -->
    <HomeHero @open-contact-modal="$emit('open-contact-modal')" />
    
    <!-- Services List -->
    <ServicesList @open-contact-modal="$emit('open-contact-modal')" />
    
    <!-- Case Studies -->
    <CaseStudies @open-contact-modal="$emit('open-contact-modal')" />
    
    <!-- Testimonials -->
    <TestimonialsSection @open-contact-modal="$emit('open-contact-modal')" />
    
    <!-- CTA Section -->
    <section class="cta-section section-padding bg-dark text-light text-center relative overflow-hidden">
      <!-- Background elements -->
      <div class="absolute inset-0">
        <div
          class="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-primary to-transparent opacity-20"
        ></div>
        <div
          class="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-primary to-transparent opacity-20"
        ></div>
      </div>

      <div class="container-custom relative z-10">
        <h2 class="heading-lg mb-6 text-light">Připraveni transformovat váš tech brand?</h2>
        <p class="body-lg mb-12 max-w-3xl mx-auto text-gray-300">
          Každý úspěšný tech příběh začíná rozhodnutím investovat do brandingu. Začněte svou
          transformaci ještě dnes s bezplatnou strategickou konzultací.
        </p>
        
        <div class="cta-actions">
          <Button
            variant="primary"
            size="lg"
            @click="$emit('open-contact-modal')"
          >
            Naplánovat strategickou konzultaci zdarma
          </Button>
          
          <div class="mt-6">
            <RouterLink
              to="/sluzby"
              class="text-link"
            >
              Nebo si nejdřív prohlédněte naše balíčky →
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
import { Button } from '@/components/ui'
import { 
  HomeHero, 
  ServicesList,
  CaseStudies,
  TestimonialsSection
} from '@/components/home'

// Define emits
defineEmits<{
  'open-contact-modal': []
}>()
</script>

<style scoped>
.home-page {
  position: relative;
}

.section-padding {
  padding: 6rem 0;
}

.container-custom {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.heading-lg {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
}

.body-lg {
  font-size: 1.125rem;
  line-height: 1.6;
}

.text-light {
  color: white;
}

.text-gray-300 {
  color: #d1d5db;
}

.bg-dark {
  background-color: #1f2937;
}

.from-primary {
  --tw-gradient-from: #e60000;
}

.text-link {
  color: #96b623;
  font-weight: 600;
  transition: color 0.2s ease;
}

.text-link:hover {
  color: white;
  text-decoration: underline;
}

.cta-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.mt-6 {
  margin-top: 1.5rem;
}

/* Responsive styles */
@media (max-width: 768px) {
  .section-padding {
    padding: 4rem 0;
  }
  
  .heading-lg {
    font-size: 2rem;
  }
  
  .body-lg {
    font-size: 1rem;
  }
}
</style>
