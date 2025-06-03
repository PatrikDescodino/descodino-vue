<template>
  <div class="services-page">
    <!-- Services Hero -->
    <section class="section-padding bg-light text-center">
      <div class="container-custom">
        <h1 class="heading-xl mb-6">Branding balíčky pro každou fázi růstu tech firmy</h1>
        <p class="body-lg text-gray-dark max-w-4xl mx-auto mb-8">
          Od pre-seed startupů po enterprise. Transparentní ceny, jasné deliverables a garantovaný
          ROI. Vyberte si balíček podle vašich ambicí a my se postaráme o transformaci vaší značky.
        </p>

        <!-- Hero Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div class="text-center">
            <div class="text-3xl font-800 text-primary mb-2">150%+</div>
            <div class="text-sm text-gray-dark">očekávaný růst konverzí</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-800 text-primary mb-2">200%+</div>
            <div class="text-sm text-gray-dark">očekávaná návštěvnost</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-800 text-primary mb-2">3-6x</div>
            <div class="text-sm text-gray-dark">návratnost investice</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Package Details -->
    <section class="section-padding" id="packages">
      <div class="container-custom">
        <div class="space-y-16">
          <PackageCard
            v-for="package_ in packages"
            :key="package_.id"
            :package_="package_"
            @select-package="handleSelectPackage"
            @scroll-to-roi="scrollToROI"
          />
        </div>
      </div>
    </section>

    <!-- ROI Calculator -->
    <ROICalculator @open-service-request="openServiceRequest" />

    <!-- FAQ Section -->
    <FAQ :faq-items="faqItems" />

    <!-- CTA Section -->
    <section class="section-padding bg-dark text-light relative overflow-hidden">
      <div class="absolute inset-0">
        <div
          class="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-primary to-transparent opacity-20"
        ></div>
        <div
          class="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-primary to-transparent opacity-20"
        ></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="text-center mb-16">
          <h2 class="heading-lg mb-6 text-light">
            Připraveni investovat do brandingu, který se vyplatí?
          </h2>
          <p class="body-lg mb-8 max-w-3xl mx-auto text-gray-300">
            Každý měsíc odkládání profesionálního brandingu vás stojí potenciální zákazníky,
            investory a top talenty.
            <span class="text-secondary font-600">Začněte ještě dnes.</span>
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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

          <div
            class="cta-card group bg-gradient-to-br from-gray-700/50 to-gray-800/30 border border-gray-600 hover:border-gray-400 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
          >
            <RouterLink to="/o-nas" class="block">
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
            </RouterLink>
          </div>

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
    </section>
  </div>
</template>

<script setup lang="ts">
import { packages } from '@/data/packages'
import { faqItems } from '@/data/faq'
import { useROICalculator } from '@/composables/useROICalculator'

// Components
import PackageCard from '@/components/services/PackageCard.vue'
import ROICalculator from '@/components/services/ROICalculator.vue'
import FAQ from '@/components/services/FAQ.vue'

// Emits
defineEmits<{
  openContactModal: []
}>()

// Composables
const { selectPackage } = useROICalculator()

// Methods
const handleSelectPackage = (packageId: string) => {
  selectPackage(packageId)
  scrollToROI()
}

const scrollToROI = () => {
  const roiSection = document.getElementById('roi-calculator')
  if (roiSection) {
    roiSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const openServiceRequest = () => {
  console.log('Opening service request modal')
}
</script>

<style scoped>
.services-page {
  min-height: 100vh;
}

.section-padding {
  padding: 6rem 0;
}

.container-custom {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;
}

@media (min-width: 1024px) {
  .container-custom {
    padding: 0 2rem;
  }
}

.heading-xl {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.1;
}

.heading-lg {
  font-size: 2.5rem;
  font-weight: 800;
}

.body-lg {
  font-size: 1.125rem;
  line-height: 1.6;
}

.bg-light {
  background-color: #f8f9fa;
}

.bg-dark {
  background-color: #1f2937;
}

.text-light {
  color: white;
}

.text-gray-dark {
  color: #4b5563;
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

/* Mobile responsive */
@media (max-width: 768px) {
  .cta-card {
    transform: none !important;
  }

  .cta-card:hover {
    transform: translateY(-4px) !important;
  }

  .heading-xl {
    font-size: 2rem;
  }

  .heading-lg {
    font-size: 2rem;
  }
}
</style>
