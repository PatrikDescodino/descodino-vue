<template>
  <section class="services-hero section-padding bg-light">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h1 class="heading-xl mb-6">Branding balíčky pro každou fázi růstu tech firmy</h1>
        <p class="body-lg text-gray-dark max-w-4xl mx-auto mb-8">
          Od pre-seed startupů po enterprise. Transparentní ceny, jasné deliverables a garantovaný
          ROI. Vyberte si balíček podle vašich ambicí a my se postaráme o transformaci vaší značky.
        </p>

        <div class="flex justify-center gap-4 mb-12">
          <button 
            class="btn btn-primary" 
            @click="scrollToPackages"
          >
            Zobrazit balíčky
          </button>
          <button 
            class="btn btn-outline" 
            @click="scrollToROI"
          >
            Spočítat ROI
          </button>
        </div>
      </div>

      <!-- Hero Stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
        <div class="stat-card text-center p-6 bg-white rounded-2xl shadow-sm">
          <div class="text-3xl font-800 text-primary mb-2">150%+</div>
          <div class="text-sm text-gray-dark">očekávaný růst konverzí</div>
        </div>
        <div class="stat-card text-center p-6 bg-white rounded-2xl shadow-sm">
          <div class="text-3xl font-800 text-primary mb-2">200%+</div>
          <div class="text-sm text-gray-dark">očekávaná návštěvnost</div>
        </div>
        <div class="stat-card text-center p-6 bg-white rounded-2xl shadow-sm">
          <div class="text-3xl font-800 text-primary mb-2">3-6x</div>
          <div class="text-sm text-gray-dark">návratnost investice</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Define methods for scrolling
const scrollToPackages = () => {
  const packagesSection = document.getElementById('packages')
  if (packagesSection) {
    packagesSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToROI = () => {
  const roiSection = document.getElementById('roi-calculator')
  if (roiSection) {
    roiSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.services-hero {
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

.heading-xl {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.1;
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

.font-800 {
  font-weight: 800;
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

.btn-outline {
  background-color: transparent;
  color: #e60000;
  border: 2px solid #e60000;
}

.btn-outline:hover {
  background-color: rgba(230, 0, 0, 0.05);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(230, 0, 0, 0.1);
}

.stat-card {
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

/* Responsive styles */
@media (max-width: 768px) {
  .heading-xl {
    font-size: 2.25rem;
  }
  
  .section-padding {
    padding: 4rem 0;
  }
}
</style>
