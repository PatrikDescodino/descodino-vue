<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <h2 class="heading-lg text-center mb-4 animate-fade-in-up">Jak vzniklo Descodino</h2>
      <p class="text-center text-gray-700 mb-16 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
        Náš příběh začal jednoduchým uvědoměním: tech firmy potřebují více než jen hezký web.
      </p>

      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Story Steps -->
          <div class="space-y-6">
            <div 
              v-for="(step, index) in storySteps" 
              :key="step.title"
              class="p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 animate-slide-in-left"
              :class="[step.bgGradient, `animation-delay-${index * 200 + 200}`]"
            >
              <h3 class="text-xl font-700 mb-4" :class="step.titleColor">
                {{ step.title }}
              </h3>
              <p class="text-gray-700 leading-relaxed">
                {{ step.description }}
              </p>
            </div>
          </div>

          <!-- Visual Element -->
          <div class="relative animate-slide-in-right animation-delay-400">
            <div class="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-12 h-full relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
              <div class="text-center relative z-10">
                <div class="text-9xl mb-8 animate-spin-slow">🦕</div>
                <h3 class="text-3xl font-700 mb-6 text-gray-800">Design + Code + Innovation</h3>
                <p class="text-gray-700 text-lg leading-relaxed">
                  Název Descodino není náhoda - vychází z našich tří pilířů, které tvoří DNA každého projektu.
                </p>
              </div>
              
              <!-- Decorative elements -->
              <div class="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
              <div class="absolute bottom-4 left-4 w-6 h-6 bg-secondary/20 rounded-full animate-pulse animation-delay-500"></div>
            </div>
          </div>
        </div>

        <!-- Mission Statement -->
        <div class="mt-20 text-center">
          <div class="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12 relative overflow-hidden">
            <div class="relative z-10">
              <h3 class="text-3xl font-700 mb-6 text-gray-800 animate-fade-in-up">Jaká je naše mise?</h3>
              <blockquote class="text-xl italic text-gray-700 leading-relaxed animate-fade-in-up animation-delay-200">
                "Pomáhat ambiciózním tech firmám najít svou digitální identitu a naučit je, jak s ní efektivně pracovat."
              </blockquote>
            </div>
            
            <!-- Background decorations -->
            <div class="absolute top-10 left-10 w-24 h-24 bg-primary/5 rounded-full animate-float"></div>
            <div class="absolute bottom-10 right-10 w-20 h-20 bg-secondary/5 rounded-full animate-float animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface StoryStep {
  title: string;
  description: string;
  bgGradient: string;
  titleColor: string;
}

const storySteps: StoryStep[] = [
  {
    title: 'Začátek: Python kurz a nečekané objevy',
    description: 'Všechno začalo Patrikovým rozhodnutím změnit kariéru. Po letech v manažerských pozicích si zapsal Python kurz s cílem stát se programátorem. HTML a CSS, které získal jako bonus, ho však zavedly na jinou cestu.',
    bgGradient: 'bg-gradient-to-r from-blue-50 to-purple-50',
    titleColor: 'text-primary'
  },
  {
    title: 'První weby a rostoucí poptávka',
    description: 'Z vedlejší činnosti se rychle stal plný úvazek. Zákazníci přibývali a Patrik zjistil, že tech firmy nepotřebují jen weby - potřebují kompletní brandový přístup. Rozhodl se využít své manažerské a projekťácké zkušenosti z korporátu.',
    bgGradient: 'bg-gradient-to-r from-purple-50 to-pink-50',
    titleColor: 'text-secondary'
  },
  {
    title: 'Rozšíření týmu: Boris a Smouky',
    description: 'Jeden člověk nemůže zvládnout vše. Boris přinesl grafický cit a detailnost, Smouky pak organizační génius a puntičkářství na 120%. Tak vznikl tým, který kombinuje strategii, kreativitu a preciznost.',
    bgGradient: 'bg-gradient-to-r from-pink-50 to-orange-50',
    titleColor: 'text-primary'
  }
];
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
  opacity: 0;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out forwards;
  opacity: 0;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

/* Animation delays */
.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}
</style>