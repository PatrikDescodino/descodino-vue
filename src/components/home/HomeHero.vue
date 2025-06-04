<template>
  <section class="home-hero section-padding">
    <!-- Background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="design-element design-circle-1"></div>
      <div class="design-element design-circle-2"></div>
      <div class="design-element absolute w-80 h-80 top-[10%] left-[10%]" style="background-image: radial-gradient(#1f2937 1px, transparent 1px); background-size: 20px 20px;"></div>
      <div class="design-element absolute w-120 h-120 bottom-[5%] right-[5%] transform rotate-15" style="background-image: linear-gradient(90deg, #1f2937 1px, transparent 1px); background-size: 20px 20px;"></div>
    </div>

    <div class="container-custom relative z-10">
      <div class="hero-content-grid">
        <!-- Hero Text Content -->
        <div class="hero-text-content">
          <h1 class="hero-title">
            <span class="text-gradient">Design + Code + Innovation</span>
            <span class="hero-title-main">Brandová transformace pro tech firmy</span>
          </h1>
          
          <p class="hero-subtitle">
            Spojujeme svět designu, strategie a technologií, aby každá značka dostala svůj vlastní
            hlas a mohla zazářit v digitálním prostoru.
          </p>
          
          <div class="hero-cta-buttons">
            <Button 
              variant="primary" 
              size="lg" 
              @click="scrollToServices"
            >
              Naše služby
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              @click="$emit('open-contact-modal')"
            >
              Konzultace zdarma
            </Button>
          </div>
          
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-value">150+</div>
              <div class="stat-label">projektů</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">12+</div>
              <div class="stat-label">let zkušeností</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">98%</div>
              <div class="stat-label">spokojených klientů</div>
            </div>
          </div>
        </div>

        <!-- Hero Visual Content -->
        <div class="hero-visual-content">
          <div class="hero-image-container">
            <img 
              src="/Big FullColor.png" 
              alt="Descodino - Design + Code + Innovation" 
              class="hero-image"
            />
            
            <!-- Floating Elements -->
            <div class="floating-element floating-badge-1" style="animation: float1 3s ease-in-out infinite;">
              <Badge variant="primary" size="lg" rounded>Design</Badge>
            </div>
            <div class="floating-element floating-badge-2" style="animation: float2 3s ease-in-out infinite;">
              <Badge variant="secondary" size="lg" rounded>Code</Badge>
            </div>
            <div class="floating-element floating-badge-3" style="animation: float3 3s ease-in-out infinite;">
              <Badge variant="light" size="lg" rounded>Innovation</Badge>
            </div>
            
            <!-- Visual Elements -->
            <div class="visual-element code-snippet">
              <pre><code>{ design: true, code: true, innovation: true }</code></pre>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Trust badges / Logos -->
      <div class="hero-trust-section">
        <div class="trust-title">Důvěřují nám</div>
        <div class="trust-logos">
          <div class="logo-placeholder">Logo 1</div>
          <div class="logo-placeholder">Logo 2</div>
          <div class="logo-placeholder">Logo 3</div>
          <div class="logo-placeholder">Logo 4</div>
          <div class="logo-placeholder">Logo 5</div>
        </div>
      </div>
    </div>
    
    <!-- Hero Divider/Wave -->
    <div class="hero-divider">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="w-full h-full block">
        <path d="M0 0L48 8.33333C96 16.6667 192 33.3333 288 45.8333C384 58.3333 480 66.6667 576 54.1667C672 41.6667 768 8.33333 864 4.16667C960 0 1056 25 1152 41.6667C1248 58.3333 1344 66.6667 1392 70.8333L1440 75V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z" fill="currentColor"/>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
import { Button, Badge } from '@/components/ui'

// Define emits
defineEmits<{
  'open-contact-modal': []
}>()

// Methods
const scrollToServices = () => {
  const servicesSection = document.getElementById('services')
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
/* Floating animations */
@keyframes float1 {
  0%, 100% { transform: translateY(0) rotate(-3deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
}

@keyframes float2 {
  0%, 100% { transform: translateY(0) rotate(3deg); }
  50% { transform: translateY(-15px) rotate(-2deg); }
}

@keyframes float3 {
  0%, 100% { transform: translateY(0) rotate(-2deg); }
  50% { transform: translateY(-12px) rotate(3deg); }
}
</style>
