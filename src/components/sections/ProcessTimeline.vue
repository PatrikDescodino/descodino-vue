<template>
  <section class="process-timeline section-padding bg-light" id="process">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="heading-lg mb-6">Jak probíhá spolupráce s Descodino</h2>
        <p class="body-lg text-gray-dark max-w-3xl mx-auto">
          Náš ověřený proces zajistí, že vaše brandová transformace proběhne hladce, 
          efektivně a s jasnými výsledky. Každý krok je navržen tak, aby maximalizoval 
          hodnotu vaší investice.
        </p>
      </div>

      <div class="timeline-container">
        <div 
          v-for="(step, index) in processSteps" 
          :key="step.id"
          class="timeline-item"
          :class="{ 'timeline-right': index % 2 !== 0 }"
        >
          <div class="timeline-marker">
            <div class="timeline-marker-dot">
              <span>{{ index + 1 }}</span>
            </div>
          </div>
          <div class="timeline-content">
            <div class="timeline-card">
              <div class="timeline-icon" :style="{ backgroundColor: step.color }">
                <span>{{ step.icon }}</span>
              </div>
              <h3 class="timeline-title">{{ step.title }}</h3>
              <p class="timeline-description">{{ step.description }}</p>
              <div class="timeline-details">
                <div class="timeline-detail-item">
                  <span class="detail-label">Trvání:</span>
                  <span class="detail-value">{{ step.duration }}</span>
                </div>
                <div class="timeline-detail-item">
                  <span class="detail-label">Deliverables:</span>
                  <span class="detail-value">{{ step.deliverables }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-16">
        <p class="text-lg font-600 text-primary mb-6">
          Průměrná doba projektu: 2-4 měsíce
        </p>
        <button 
          class="btn btn-primary"
          @click="$emit('openContactModal')"
        >
          Začít spolupráci
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

// Define emits
defineEmits<{
  openContactModal: []
}>()

// Process steps data
const processSteps = [
  {
    id: 'discovery',
    title: 'Strategický discovery',
    description: 'Hloubková analýza vaší značky, trhu a konkurence. Definujeme cíle, cílové skupiny a klíčové metriky úspěchu.',
    icon: '🔍',
    color: '#e60000',
    duration: '2-3 týdny',
    deliverables: 'Brand audit, competitive analysis, strategy blueprint'
  },
  {
    id: 'design',
    title: 'Design & Koncept',
    description: 'Vytváříme vizuální identitu, která odráží vaše hodnoty a resonuje s vaší cílovou skupinou. Iterativní proces s jasnými milníky.',
    icon: '🎨',
    color: '#96b623',
    duration: '3-4 týdny',
    deliverables: 'Logo, barevná paleta, typografie, vizuální styl'
  },
  {
    id: 'digital',
    title: 'Digitální implementace',
    description: 'Převádíme vaši novou identitu do digitálního prostředí. Výkonný web, UX optimalizace a technické zázemí.',
    icon: '💻',
    color: '#0088cc',
    duration: '4-6 týdnů',
    deliverables: 'Webové stránky, digitální assety, technická dokumentace'
  },
  {
    id: 'launch',
    title: 'Launch & Aktivace',
    description: 'Koordinovaný launch vaší nové značky. Interní i externí komunikace, strategie aktivace a měření úspěchu.',
    icon: '🚀',
    color: '#f5a623',
    duration: '2-3 týdny',
    deliverables: 'Launch plán, brand guidelines, marketingové materiály'
  }
]
</script>

<style scoped>
.process-timeline {
  position: relative;
}

.section-padding {
  padding: 6rem 0;
}

.container-custom {
  max-width: 80rem;
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

.text-gray-dark {
  color: #4b5563;
}

.text-primary {
  color: #e60000;
}

.font-600 {
  font-weight: 600;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary {
  background-color: #e60000;
  color: white;
  border: 2px solid #e60000;
}

.btn-primary:hover {
  background-color: #c30000;
  border-color: #c30000;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(230, 0, 0, 0.2);
}

/* Timeline Styles */
.timeline-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 0;
}

.timeline-container::before {
  content: '';
  position: absolute;
  width: 4px;
  background-color: #e0e0e0;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
}

.timeline-marker {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.timeline-marker-dot {
  width: 40px;
  height: 40px;
  background-color: #e60000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  box-shadow: 0 0 0 5px rgba(230, 0, 0, 0.2);
}

.timeline-content {
  width: 45%;
  padding: 0 20px;
}

.timeline-item:not(.timeline-right) .timeline-content {
  margin-left: 0;
  margin-right: auto;
}

.timeline-right .timeline-content {
  margin-left: auto;
  margin-right: 0;
}

.timeline-card {
  background-color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.timeline-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.timeline-icon {
  position: absolute;
  top: -20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.timeline-item:not(.timeline-right) .timeline-icon {
  right: -25px;
}

.timeline-right .timeline-icon {
  left: -25px;
}

.timeline-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.timeline-description {
  color: #4b5563;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.timeline-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid #f0f0f0;
}

.timeline-detail-item {
  display: flex;
  font-size: 0.875rem;
}

.detail-label {
  font-weight: 600;
  color: #4b5563;
  min-width: 100px;
}

.detail-value {
  color: #6b7280;
}

/* Responsive */
@media (max-width: 768px) {
  .timeline-container::before {
    left: 40px;
  }
  
  .timeline-item, .timeline-right {
    margin-bottom: 4rem;
  }
  
  .timeline-marker {
    left: 40px;
    transform: none;
  }
  
  .timeline-content {
    width: calc(100% - 80px);
    margin-left: 80px !important;
    margin-right: 0 !important;
  }
  
  .timeline-icon {
    left: -25px !important;
  }
  
  .heading-lg {
    font-size: 2rem;
  }
}
</style>
