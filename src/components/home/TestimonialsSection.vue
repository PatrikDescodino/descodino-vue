<template>
  <section class="testimonials-section section-padding" id="testimonials">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">Co o nás říkají klienti</h2>
        <p class="section-subtitle">
          Přečtěte si, co říkají naši klienti o spolupráci s Descodino a jak jim pomáháme
          v jejich brandingových a digitálních transformacích.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="testimonials-grid">
        <div 
          v-for="testimonial in testimonials" 
          :key="testimonial.id"
          class="testimonial-item"
          :class="{ 'featured': testimonial.featured }"
        >
          <!-- Quote -->
          <div class="testimonial-quote">
            <span class="quote-icon">"</span>
            <p>{{ testimonial.quote }}</p>
          </div>
          
          <!-- Author Info -->
          <div class="testimonial-author">
            <div class="author-avatar">
              <img 
                :src="testimonial.avatar" 
                :alt="testimonial.name" 
                class="avatar-image"
              />
            </div>
            <div class="author-info">
              <h4 class="author-name">{{ testimonial.name }}</h4>
              <p class="author-position">{{ testimonial.position }}</p>
              <p class="author-company">{{ testimonial.company }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonial Stats -->
      <div class="testimonial-stats">
        <div class="stat-item">
          <div class="stat-value">50+</div>
          <div class="stat-label">Spokojených klientů</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">100+</div>
          <div class="stat-label">Úspěšných projektů</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">98%</div>
          <div class="stat-label">Pozitivních referencí</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">12+</div>
          <div class="stat-label">Let zkušeností</div>
        </div>
      </div>

      <!-- CTA -->
      <div class="testimonials-cta">
        <Button 
          variant="primary" 
          @click="$emit('open-contact-modal')"
        >
          Připojte se k našim klientům
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
import { Button } from '@/components/ui'

// Define emits
defineEmits<{
  'open-contact-modal': []
}>()

// Testimonials data
const testimonials = [
  {
    id: 'testimonial-1',
    quote: 'Descodino přetvořilo naši značku z obyčejného tech startupu na respektovanou firmu, která teď působí mnohem profesionálněji. Díky novému brandingu jsme získali enterprise klienty, kteří nás dříve ignorovali.',
    name: 'Jan Novák',
    position: 'CEO',
    company: 'TechVision s.r.o.',
    avatar: '/images/testimonial-1.jpg',
    featured: true
  },
  {
    id: 'testimonial-2',
    quote: 'Oceňuji především strategický přístup Descodina. Nejde jen o hezký design, ale o komplexní řešení, které skutečně pomáhá našemu businessu. ROI z investice do rebrandingu byl neskutečný.',
    name: 'Petra Svobodová',
    position: 'CMO',
    company: 'SaaS Solutions a.s.',
    avatar: '/images/testimonial-2.jpg',
    featured: false
  },
  {
    id: 'testimonial-3',
    quote: 'Profesionální přístup, kreativní řešení a technologická vyspělost – to je Descodino. Byli jsme velmi spokojeni s celým procesem i výsledkem naší brandové transformace.',
    name: 'Martin Doležal',
    position: 'Co-founder',
    company: 'FinFlow s.r.o.',
    avatar: '/images/testimonial-3.jpg',
    featured: false
  },
  {
    id: 'testimonial-4',
    quote: 'Před rebrandingem jsme měli problém přilákat kvalitní talenty. S novou identitou a webem se nám daří oslovit mnohem zajímavější kandidáty. Najímání je teď mnohem jednodušší.',
    name: 'Lenka Horáková',
    position: 'HR Director',
    company: 'DataSense Inc.',
    avatar: '/images/testimonial-4.jpg',
    featured: false
  },
  {
    id: 'testimonial-5',
    quote: 'Díky Descodinu jsme dostali brand na úplně novou úroveň. Nejvíc oceňuji, že nám předali know-how, jak s novou identitou pracovat, a teď si už hodně věcí zvládneme dělat sami.',
    name: 'Tomáš Krejčí',
    position: 'Product Owner',
    company: 'CloudConnect s.r.o.',
    avatar: '/images/testimonial-5.jpg',
    featured: false
  }
]
</script>

<style scoped>
.testimonials-section {
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

/* Testimonials Grid */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.testimonial-item {
  background-color: #f8f9fa;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
}

.testimonial-item.featured {
  background-color: #1f2937;
  color: white;
  grid-column: span 2;
}

@media (max-width: 768px) {
  .testimonial-item.featured {
    grid-column: span 1;
  }
}

/* Quote Styles */
.testimonial-quote {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 2rem;
  flex: 1;
}

.quote-icon {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 3rem;
  line-height: 1;
  color: #e60000;
  opacity: 0.2;
}

.testimonial-quote p {
  position: relative;
  font-size: 1.125rem;
  line-height: 1.6;
  color: inherit;
}

.featured .quote-icon {
  color: white;
}

/* Author Styles */
.testimonial-author {
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 1.5rem;
}

.featured .testimonial-author {
  border-top-color: rgba(255, 255, 255, 0.2);
}

.author-avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
  flex-shrink: 0;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-info {
  flex: 1;
}

.author-name {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: inherit;
}

.author-position, .author-company {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
}

.featured .author-position, .featured .author-company {
  color: rgba(255, 255, 255, 0.7);
}

/* Stats Section */
.testimonial-stats {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 4rem;
  gap: 2rem;
  background-color: #f8f9fa;
  border-radius: 1rem;
  padding: 3rem 2rem;
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 800;
  color: #e60000;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: #4b5563;
}

/* CTA Section */
.testimonials-cta {
  display: flex;
  justify-content: center;
}

/* Responsive styles */
@media (max-width: 1024px) {
  .section-title {
    font-size: 2.25rem;
  }
  
  .testimonials-grid {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
  
  .stat-value {
    font-size: 2rem;
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
  
  .testimonial-stats {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 2rem 1.5rem;
  }
  
  .stat-item {
    flex: 1 0 calc(50% - 2rem);
  }
}

@media (max-width: 640px) {
  .testimonial-quote p {
    font-size: 1rem;
  }
  
  .testimonial-item {
    padding: 1.5rem;
  }
  
  .stat-value {
    font-size: 1.75rem;
  }
  
  .stat-label {
    font-size: 0.875rem;
  }
}
</style>
