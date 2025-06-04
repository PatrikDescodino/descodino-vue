<template>
  <div class="services-page">
    <!-- Services Hero -->
    <ServicesHero />

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
    
    <!-- Process Timeline -->
    <ProcessTimeline @open-contact-modal="openContactModal" />
    
    <!-- Comparison Table -->
    <ComparisonTable @open-contact-modal="openContactModal" />

    <!-- ROI Calculator -->
    <ROICalculator @open-service-request="openServiceRequest" />

    <!-- FAQ Section -->
    <FAQ :faq-items="faqItems" />
    
    <!-- CTA Section -->
    <ServicesCTA @open-contact-modal="openContactModal" />
    
    <!-- Service Request Modal -->
    <ServiceModal 
      :show="showServiceModal" 
      :packages="packages"
      :selected-package-id="selectedPackageId"
      @close="closeServiceModal"
      @submitted="handleServiceSubmit"
    />

    
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { packages } from '@/data/packages'
import { faqItems } from '@/data/faq'
import { useROICalculator } from '@/composables/useROICalculator'

// Components
import ServicesHero from '@/components/sections/ServicesHero.vue'
import ProcessTimeline from '@/components/sections/ProcessTimeline.vue'
import ComparisonTable from '@/components/sections/ComparisonTable.vue'
import ServicesCTA from '@/components/sections/ServicesCTA.vue'
import PackageCard from '@/components/services/PackageCard.vue'
import ROICalculator from '@/components/services/ROICalculator.vue'
import FAQ from '@/components/services/FAQ.vue'
import ServiceModal from '@/components/services/ServiceModal.vue'

// Emits
defineEmits<{
  openContactModal: []
}>()

// State
const showServiceModal = ref(false)
const selectedPackageId = ref<string | null>(null)

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

const openServiceRequest = (packageId?: string) => {
  if (packageId) {
    selectedPackageId.value = packageId
  }
  showServiceModal.value = true
}

const closeServiceModal = () => {
  showServiceModal.value = false
  // Reset selected package after a delay
  setTimeout(() => {
    selectedPackageId.value = null
  }, 300)
}

const handleServiceSubmit = (data: any) => {
  console.log('Service request submitted:', data)
  // Here you would send the data to your backend
}

const openContactModal = () => {
  openServiceRequest()
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
