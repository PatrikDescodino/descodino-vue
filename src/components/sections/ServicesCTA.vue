<template>
  <section class="services-cta section-padding bg-dark text-light" id="services-cta">
    <div class="container-custom relative z-10">
      <div class="text-center mb-16">
        <h2 class="heading-lg mb-6">
          Připraveni investovat do brandingu, který se vyplatí?
        </h2>
        <p class="body-lg mb-8 max-w-3xl mx-auto text-gray-300">
          Každý měsíc odkládání profesionálního brandingu vás stojí potenciální zákazníky,
          investory a top talenty.
          <span class="text-secondary font-600">Začněte ještě dnes.</span>
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <!-- ROI Calculator Card -->
        <div
          class="cta-card group bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/30 hover:border-secondary transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
          @click="scrollToROI"
        >
          <div class="p-8 text-center space-y-4">
            <div class="relative mx-auto w-16 h-16 mb-6">
              <div
                class="absolute inset-0 bg-secondary/20 rounded-full group-hover:scale-125 transition-transform duration-300"
              ></div>
              <div
                class="relative w-16 h-16 bg-secondary text-light rounded-full flex-center text-2xl font-800 group-hover:rotate-12 transition-transform duration-300"
              >
                📊
              </div>
            </div>

            <h3
              class="text-xl font-800 text-light group-hover:text-secondary transition-colors duration-300"
            >
              Vypočítat ROI
            </h3>
            <p class="text-sm text-gray-300 leading-relaxed">
              Zjistěte potenciální návratnost investice do brandingu pro vaši firmu
            </p>

            <div class="pt-4">
              <span class="text-secondary font-600 text-sm group-hover:underline">
                Spočítat výsledky →
              </span>
            </div>
          </div>
        </div>

        <!-- Consultation Card -->
        <div
          class="cta-card group bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer relative"
          @click="$emit('openContactModal')"
        >
          <div class="absolute top-4 right-4">
            <span class="bg-primary text-light px-3 py-1 rounded-full text-xs font-600 shadow-lg">
              Nejčastější
            </span>
          </div>

          <div class="p-8 text-center space-y-4">
            <div class="relative mx-auto w-16 h-16 mb-6">
              <div
                class="absolute inset-0 bg-primary/20 rounded-full group-hover:scale-125 transition-transform duration-300"
              ></div>
              <div
                class="relative w-16 h-16 bg-primary text-light rounded-full flex-center text-2xl font-800 group-hover:rotate-12 transition-transform duration-300"
              >
                📞
              </div>
            </div>

            <h3
              class="text-xl font-800 text-light group-hover:text-primary transition-colors duration-300"
            >
              Konzultace zdarma
            </h3>
            <p class="text-sm text-gray-300 leading-relaxed">
              30min strategický hovor o vašich brandingových potřebách a možnostech
            </p>

            <div class="pt-4">
              <span class="text-primary font-600 text-sm group-hover:underline">
                Naplánovat schůzku →
              </span>
            </div>
          </div>
        </div>

        <!-- About Team Card -->
        <div
          class="cta-card group bg-gradient-to-br from-gray-700/50 to-gray-800/30 border border-gray-600 hover:border-gray-400 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
        >
          <router-link to="/o-nas" class="block">
            <div class="p-8 text-center space-y-4">
              <div class="relative mx-auto w-16 h-16 mb-6">
                <div
                  class="absolute inset-0 bg-gray-500/20 rounded-full group-hover:scale-125 transition-transform duration-300"
                ></div>
                <div
                  class="relative w-16 h-16 bg-gray-600 text-light rounded-full flex-center text-2xl font-800 group-hover:rotate-12 transition-transform duration-300"
                >
                  👥
                </div>
              </div>

              <h3
                class="text-xl font-800 text-light group-hover:text-gray-300 transition-colors duration-300"
              >
                Poznat náš tým
              </h3>
              <p class="text-sm text-gray-300 leading-relaxed">
                Zjistěte více o lidech za Descodino a našich zkušenostech s tech firmami
              </p>

              <div class="pt-4">
                <span class="text-gray-300 font-600 text-sm group-hover:underline">
                  O našem týmu →
                </span>
              </div>
            </div>
          </router-link>
        </div>

        <!-- Email Card -->
        <div
          class="cta-card group bg-gradient-to-br from-gray-700/50 to-gray-800/30 border border-gray-600 hover:border-gray-400 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
        >
          <a href="mailto:ahoj@descodino.cz" class="block">
            <div class="p-8 text-center space-y-4">
              <div class="relative mx-auto w-16 h-16 mb-6">
                <div
                  class="absolute inset-0 bg-gray-500/20 rounded-full group-hover:scale-125 transition-transform duration-300"
                ></div>
                <div
                  class="relative w-16 h-16 bg-gray-600 text-light rounded-full flex-center text-2xl font-800 group-hover:rotate-12 transition-transform duration-300"
                >
                  ✉️
                </div>
              </div>

              <h3
                class="text-xl font-800 text-light group-hover:text-gray-300 transition-colors duration-300"
              >
                Napsat email
              </h3>
              <p class="text-sm text-gray-300 leading-relaxed">
                Preferujete písemnou komunikaci? Napište nám přímo na email
              </p>

              <div class="pt-4">
                <span class="text-gray-300 font-600 text-sm group-hover:underline">
                  ahoj@descodino.cz →
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="text-center mt-12 pt-8 border-t border-gray-700">
        <p class="text-gray-400 text-sm">
          Průměrná doba odezvy: <span class="text-secondary font-600">2 hodiny</span> • Všechny
          konzultace: <span class="text-secondary font-600">bez závazků</span> • NDA:
          <span class="text-secondary font-600">samozřejmost</span>
        </p>
      </div>
    </div>

    <!-- Background effects -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-primary to-transparent opacity-20"
      ></div>
      <div
        class="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-primary to-transparent opacity-20"
      ></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

// Define emits
defineEmits<{
  openContactModal: []
}>()

// Methods
const scrollToROI = () => {
  const roiSection = document.getElementById('roi-calculator')
  if (roiSection) {
    roiSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.services-cta {
  position: relative;
  overflow: hidden;
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

.text-light {
  color: white;
}

.text-gray-300 {
  color: #d1d5db;
}

.text-gray-400 {
  color: #9ca3af;
}

.text-primary {
  color: #e60000;
}

.text-secondary {
  color: #96b623;
}

.font-600 {
  font-weight: 600;
}

.font-800 {
  font-weight: 800;
}

.bg-dark {
  background-color: #1f2937;
}

.bg-primary {
  background-color: #e60000;
}

.bg-secondary {
  background-color: #96b623;
}

.from-primary\/30 {
  --tw-gradient-from: rgba(230, 0, 0, 0.3);
}

.to-primary\/10 {
  --tw-gradient-to: rgba(230, 0, 0, 0.1);
}

.from-secondary\/20 {
  --tw-gradient-from: rgba(150, 182, 35, 0.2);
}

.to-secondary\/5 {
  --tw-gradient-to: rgba(150, 182, 35, 0.05);
}

.from-gray-700\/50 {
  --tw-gradient-from: rgba(55, 65, 81, 0.5);
}

.to-gray-800\/30 {
  --tw-gradient-to: rgba(31, 41, 55, 0.3);
}

.border-primary {
  border-color: #e60000;
}

.border-secondary\/30 {
  border-color: rgba(150, 182, 35, 0.3);
}

.border-gray-600 {
  border-color: #4b5563;
}

.hover\:border-secondary:hover {
  border-color: #96b623;
}

.hover\:border-gray-400:hover {
  border-color: #9ca3af;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cta-card {
  border-radius: 1.5rem;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.cta-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.6s;
}

.cta-card:hover::before {
  left: 100%;
}

.transform {
  transform: translateZ(0);
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}

.hover\:rotate-12:hover {
  transform: rotate(12deg);
}

.hover\:-translate-y-2:hover {
  transform: translateY(-8px);
}

.transition-all {
  transition-property: all;
}

.transition-transform {
  transition-property: transform;
}

.transition-colors {
  transition-property: color, background-color, border-color;
}

.duration-300 {
  transition-duration: 300ms;
}

.duration-500 {
  transition-duration: 500ms;
}

/* Responsive */
@media (max-width: 768px) {
  .cta-card {
    transform: none !important;
  }

  .cta-card:hover {
    transform: translateY(-4px) !important;
  }

  .heading-lg {
    font-size: 2rem;
  }

  .section-padding {
    padding: 4rem 0;
  }
}
</style>
