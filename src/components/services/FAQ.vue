<template>
  <section class="faq-section">
    <div class="max-w-4xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="faq-badge">
          <span class="text-2xl">⚡</span>
          Často kladené otázky
        </div>
        <h2 class="faq-title">
          Vše, co potřebujete vědět o <span class="text-primary">Descodinu</span>
        </h2>
        <p class="faq-subtitle">
          Odpovědi na nejčastější dotazy o našem přístupu k brandingu, procesu spolupráce a filosofii 
          <strong class="text-gray-800">Design + Code + Innovation</strong>
        </p>
      </div>

      <!-- FAQ Items -->
      <div class="faq-list">
        <div 
          v-for="(item, index) in faqItems" 
          :key="item.id"
          class="faq-item"
          :class="{ active: openFaq === index }"
        >
          <button
            @click="toggleFaq(index)"
            class="faq-button"
            :aria-expanded="openFaq === index"
            :aria-controls="`faq-content-${index}`"
          >
            <div class="faq-icon">
              <div class="icon-circle" :style="{ backgroundColor: item.iconColor }">
                <span class="icon-emoji">{{ item.icon }}</span>
              </div>
            </div>
            
            <div class="faq-question-area">
              <h3 class="faq-question">{{ item.question }}</h3>
              <div v-if="item.badge" class="faq-badge-inline" :class="item.badge.color">
                <div class="badge-dot"></div>
                {{ item.badge.text }}
              </div>
            </div>
            
            <div class="faq-chevron">
              <svg 
                :class="{ 'rotate-90': openFaq === index }"
                class="chevron-icon" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </button>
          
          <div 
            v-if="openFaq === index" 
            :id="`faq-content-${index}`"
            class="faq-answer"
          >
            <div class="answer-content">
              <p class="answer-text">{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { FAQItem } from '@/types/faq'

// Props
interface Props {
  faqItems: FAQItem[]
}
defineProps<Props>()

// State
const openFaq = ref<number | null>(null)

// Methods
const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}
</script>

<style scoped>
.faq-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  min-height: 100vh;
}

.text-primary {
  color: #e60000;
}

.text-gray-800 {
  color: #1f2937;
}

.faq-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #e60000;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.faq-title {
  font-size: 2.5rem;
  font-weight: 900;
  color: #1f2937;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

@media (min-width: 768px) {
  .faq-title {
    font-size: 3rem;
  }
}

.faq-subtitle {
  font-size: 1.25rem;
  color: #6b7280;
  max-width: 48rem;
  margin: 0 auto;
  line-height: 1.6;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border-color: #d1d5db;
}

.faq-item.active {
  border-color: #96b623;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.faq-button {
  width: 100%;
  padding: 2rem;
  text-align: left;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: all 0.2s ease;
  background: transparent;
  border: none;
  cursor: pointer;
}

.faq-button:hover {
  background: #f9fafb;
}

.faq-icon {
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.icon-circle {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.icon-emoji {
  font-size: 1.25rem;
}

.faq-question-area {
  flex-grow: 1;
  padding-right: 2rem;
}

.faq-question {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.faq-badge-inline {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
}

.faq-badge-inline.green {
  background: #dcfce7;
  color: #166534;
}

.badge-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
}

.green .badge-dot {
  background: #22c55e;
}

.faq-chevron {
  flex-shrink: 0;
  margin-left: 1rem;
}

.chevron-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: #9ca3af;
  transition: transform 0.2s ease;
}

.rotate-90 {
  transform: rotate(90deg);
}

.faq-answer {
  border-top: 1px solid #f3f4f6;
  animation: slideDown 0.3s ease-out;
}

.answer-content {
  padding: 0 2rem 2rem 5.5rem;
}

.answer-text {
  color: #374151;
  line-height: 1.6;
  font-size: 1.125rem;
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 200px;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .faq-button {
    padding: 1.5rem;
    gap: 0.75rem;
  }

  .faq-question-area {
    padding-right: 1rem;
  }

  .faq-question {
    font-size: 1.125rem;
  }

  .answer-content {
    padding: 0 1.5rem 1.5rem 4rem;
  }

  .answer-text {
    font-size: 1rem;
  }
}
</style>
