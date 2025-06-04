<template>
  <section class="services-list-section section-padding" id="services">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">Naše služby</h2>
        <p class="section-subtitle">
          Komplexní brandová transformace od první myšlenky až po finální implementaci
          v digitálním světě. Vyberte řešení, které odpovídá vašim potřebám.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="services-grid">
        <Card 
          v-for="service in services"
          :key="service.id"
          variant="light"
          :title="service.title"
          :subtitle="service.subtitle"
          hover
          class="service-card"
          @click="navigateToService(service.id)"
        >
          <!-- Icon -->
          <div class="service-icon" :style="{ backgroundColor: service.iconBg }">
            <span class="icon-text">{{ service.icon }}</span>
          </div>

          <!-- Description -->
          <p class="service-description">{{ service.description }}</p>
          
          <!-- Features List -->
          <ul class="service-features">
            <li v-for="feature in service.features" :key="feature">
              <span class="feature-icon">✓</span>
              <span class="feature-text">{{ feature }}</span>
            </li>
          </ul>

          <!-- Price Range -->
          <div class="service-price">
            <span class="price-label">Investice od</span>
            <span class="price-value">{{ service.priceFrom }} Kč</span>
          </div>

          <!-- Card Footer -->
          <template #footer>
            <div class="service-footer">
              <RouterLink 
                :to="`/sluzby#${service.id}`" 
                class="service-link"
              >
                Zjistit více
                <span class="link-arrow">→</span>
              </RouterLink>
            </div>
          </template>
        </Card>
      </div>

      <!-- CTA Button -->
      <div class="services-cta">
        <Button 
          variant="primary" 
          size="lg"
          @click="$emit('open-contact-modal')"
        >
          Nezávazná konzultace zdarma
        </Button>
        <p class="cta-note">Odhalíme potenciál vaší značky během 30 minutového hovoru</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
import { useRouter } from 'vue-router'
import { Button, Card } from '@/components/ui'

// Define emits
defineEmits<{
  'open-contact-modal': []
}>()

const router = useRouter()

// Services data
const services = [
  {
    id: 'tech-essentials',
    title: 'Tech Essentials',
    subtitle: 'Pro tech firmy, které potřebují profesionální základ',
    icon: '🚀',
    iconBg: '#3b82f6',
    description: 'Kompletní brandingový balíček pro začínající tech firmy, které potřebují profesionální základy pro svůj růst.',
    features: [
      'Tech Brand Strategy',
      'Modern Visual Identity',
      'Corporate Website (8-12 stránek)',
      'Brand Guidelines',
      'Základní storytelling'
    ],
    priceFrom: '180.000',
    cta: 'Zjistit více'
  },
  {
    id: 'scale-ready',
    title: 'Scale Ready',
    subtitle: 'Pro tech firmy připravené na rychlý růst',
    icon: '📈',
    iconBg: '#e60000',
    description: 'Pokročilý branding a digitální ekosystém pro firmy, které se připravují na významný růst a škálování.',
    features: [
      'Vše z Tech Essentials',
      'Advanced Website (15-20 stránek)',
      'Marketing Automation Setup',
      'Social Media Brand System',
      'Investor Presentation Template'
    ],
    priceFrom: '280.000',
    cta: 'Zjistit více'
  },
  {
    id: 'market-leader',
    title: 'Market Leader',
    subtitle: 'Pro tech firmy s ambicemi na dominanci',
    icon: '👑',
    iconBg: '#96b623',
    description: 'Komplexní brand ekosystém pro etablované tech firmy, které cílí na dominanci na trhu a mezinárodní expanzi.',
    features: [
      'Vše ze Scale Ready',
      'Multi-market Strategy',
      'Product Sub-branding',
      'Complete Digital Ecosystem',
      '6 měsíců strategických konzultací'
    ],
    priceFrom: '420.000',
    cta: 'Zjistit více'
  }
]

// Methods
const navigateToService = (serviceId: string) => {
  router.push({ path: '/sluzby', hash: `#${serviceId}` })
}
</script>

<style scoped>
.services-list-section {
  position: relative;
  background-color: white;
}

.section-padding {
  padding: 6rem 0;
}

.container-custom {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Section Header */
.section-header {
  text-align: center;
  max-width: 48rem;
  margin: 0 auto 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #6b7280;
  line-height: 1.6;
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.service-card {
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Service Card Content */
.service-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.icon-text {
  font-size: 2rem;
}

.service-description {
  color: #4b5563;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
}

.service-features li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.feature-icon {
  color: #96b623;
  font-weight: 700;
  margin-right: 0.5rem;
  flex-shrink: 0;
}

.feature-text {
  color: #1f2937;
}

.service-price {
  display: flex;
  flex-direction: column;
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid #f3f4f6;
}

.price-label {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
}

.price-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #e60000;
}

.service-footer {
  display: flex;
  justify-content: flex-end;
}

.service-link {
  display: inline-flex;
  align-items: center;
  color: #e60000;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
}

.service-link:hover {
  color: #c30000;
}

.link-arrow {
  margin-left: 0.5rem;
  transition: transform 0.2s ease;
}

.service-link:hover .link-arrow {
  transform: translateX(4px);
}

/* CTA Section */
.services-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.cta-note {
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #6b7280;
}

/* Responsive styles */
@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
  
  .section-title {
    font-size: 2.25rem;
  }
}

@media (max-width: 768px) {
  .section-padding {
    padding: 4rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
}

@media (max-width: 640px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .section-header {
    margin-bottom: 2.5rem;
  }
}
</style>
