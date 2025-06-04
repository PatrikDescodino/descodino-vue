<template>
  <section class="contact-faq section-padding bg-light">
    <div class="container-custom">
      <div class="section-header">
        <h2 class="section-title">Časté dotazy</h2>
        <p class="section-subtitle">
          Odpovědi na nejčastější otázky o spolupráci s Descodino. 
          Nenašli jste odpověď na váš dotaz? Neváhejte nás kontaktovat.
        </p>
      </div>
      
      <div class="faq-container">
        <div class="faq-list">
          <div 
            v-for="(item, index) in faqItems" 
            :key="index"
            class="faq-item"
            :class="{ 'active': activeIndex === index }"
          >
            <button 
              class="faq-question"
              @click="toggleItem(index)"
              :aria-expanded="activeIndex === index"
              :aria-controls="`faq-answer-${index}`"
            >
              <span class="question-text">{{ item.question }}</span>
              <span class="question-icon">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                >
                  <path 
                    d="M10 4V16M4 10H16" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div 
              class="faq-answer"
              :id="`faq-answer-${index}`"
              :style="{ maxHeight: activeIndex === index ? answerHeight + 'px' : '0px' }"
            >
              <div class="answer-content" ref="answerContents">
                <p v-html="item.answer"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="faq-cta">
        <p class="cta-text">Máte další otázky? Neváhejte nás kontaktovat.</p>
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
import { ref, onMounted, nextTick, defineEmits } from 'vue'
import { Button } from '@/components/ui'

// Define emits
defineEmits<{
  'open-contact-modal': []
}>()

// FAQ items data
const faqItems = [
  {
    question: 'Jak probíhá spolupráce s Descodino?',
    answer: 'Naše spolupráce začíná úvodní konzultací, kde si vyjasníme vaše potřeby a očekávání. Následně připravíme návrh řešení a po jeho schválení začneme pracovat na projektu. Během celého procesu zůstáváme v úzkém kontaktu a pravidelně vás informujeme o postupu. Po dokončení projektu poskytujeme podporu a případné úpravy.'
  },
  {
    question: 'Jaký je cenový rozsah vašich služeb?',
    answer: 'Ceny našich brandingových balíčků se pohybují od 180.000 Kč do 550.000 Kč v závislosti na rozsahu projektu a vašich potřebách. Pro přesnou kalkulaci doporučujeme využít naši <a href="/sluzby#roi-calculator" class="link-inline">ROI kalkulačku</a> nebo nás kontaktovat pro nezávaznou konzultaci.'
  },
  {
    question: 'Jak dlouho trvá kompletní rebrand?',
    answer: 'Doba trvání projektu závisí na jeho rozsahu a komplexnosti. Typicky naše projekty trvají 2-6 měsíců. <br><br><strong>Tech Essentials</strong>: 2-3 měsíce<br><strong>Scale Ready</strong>: 3-4 měsíce<br><strong>Market Leader</strong>: 4-6 měsíců'
  },
  {
    question: 'Pracujete i s menšími firmami a startupy?',
    answer: 'Ano, náš balíček <strong>Tech Essentials</strong> je navržen speciálně pro menší tech firmy a startupy. Chápeme, že každá firma má jiný rozpočet a potřeby, proto se snažíme být flexibilní a najít řešení, které bude fungovat pro všechny naše klienty.'
  },
  {
    question: 'Co se stane po dokončení projektu?',
    answer: 'Po dokončení projektu vám předáme veškeré potřebné materiály a zajistíme, že váš tým bude vědět, jak s nimi pracovat. Nabízíme také možnost dlouhodobé spolupráce formou měsíční péče, kde se staráme o průběžnou optimalizaci a rozvoj vaší značky.'
  },
  {
    question: 'Je možné vytvořit balíček na míru?',
    answer: 'Ano, kromě našich standardních balíčků nabízíme také možnost vytvoření řešení na míru podle specifických potřeb vaší firmy. Kontaktujte nás pro nezávaznou konzultaci, kde můžeme probrat vaše požadavky a navrhnout optimální řešení.'
  }
]

// State
const activeIndex = ref<number | null>(null)
const answerContents = ref<HTMLElement[]>([])
const answerHeight = ref(0)

// Methods
const toggleItem = (index: number) => {
  // If clicking the active item, close it
  if (activeIndex.value === index) {
    activeIndex.value = null
    return
  }
  
  // Otherwise, set the new active item
  activeIndex.value = index
  
  // Calculate the height of the answer content after DOM update
  nextTick(() => {
    if (answerContents.value[index]) {
      answerHeight.value = answerContents.value[index].scrollHeight
    }
  })
}

// Lifecycle
onMounted(() => {
  // Open the first item by default
  toggleItem(0)
})
</script>

<style scoped>
.contact-faq {
  position: relative;
  background-color: #f8f9fa;
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

/* FAQ Container */
.faq-container {
  max-width: 48rem;
  margin: 0 auto;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background-color: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
}

.faq-item:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.faq-item.active {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Question Button */
.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem;
  text-align: left;
  background-color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.faq-question:hover {
  background-color: #f9fafb;
}

.question-text {
  font-weight: 600;
  font-size: 1.125rem;
  color: #1f2937;
  padding-right: 2rem;
}

.question-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  border-radius: 50%;
  color: #4b5563;
  transition: transform 0.3s ease;
}

.faq-item.active .question-icon {
  transform: rotate(45deg);
  color: #e60000;
}

/* Answer */
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease;
}

.answer-content {
  padding: 0 1.5rem 1.5rem;
  color: #4b5563;
  line-height: 1.6;
}

.answer-content p {
  margin: 0;
}

.link-inline {
  color: #e60000;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.link-inline:hover {
  color: #b91c1c;
  text-decoration: underline;
}

/* CTA Section */
.faq-cta {
  text-align: center;
  margin-top: 4rem;
}

.cta-text {
  color: #4b5563;
  margin-bottom: 1.5rem;
}

/* Responsive Styles */
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
  
  .question-text {
    font-size: 1rem;
    padding-right: 1rem;
  }
  
  .faq-question {
    padding: 1.25rem;
  }
  
  .answer-content {
    padding: 0 1.25rem 1.25rem;
  }
}

@media (max-width: 640px) {
  .section-header {
    margin-bottom: 2.5rem;
  }
  
  .faq-cta {
    margin-top: 2.5rem;
  }
}
</style>
