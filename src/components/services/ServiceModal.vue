<template>
  <div class="service-modal-container" v-if="show">
    <div class="modal-backdrop-blur" @click="$emit('close')"></div>
    <div class="modal-content-form" :class="{ 'modal-loading': isSubmitting }">
      <!-- Close button -->
      <button class="modal-close-btn" @click="$emit('close')" aria-label="Zavřít">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <!-- Modal header -->
      <div class="modal-header-section">
        <h2 class="modal-title-form">{{ selectedPackage ? `Objednávka balíčku ${selectedPackage.title}` : 'Nezávazná poptávka' }}</h2>
        <p class="modal-subtitle-form">
          Vyplňte základní informace a ozveme se vám do 24 hodin s detailnější nabídkou na míru.
        </p>
      </div>

      <!-- Modal body - Form -->
      <form class="modal-form-container" @submit.prevent="submitForm">
        <div class="form-group-modal">
          <label for="name" class="form-label-modal">Jméno a příjmení *</label>
          <input 
            type="text" 
            id="name" 
            v-model="formData.name" 
            placeholder="Jan Novák"
            class="form-input-modal"
            required
          >
        </div>

        <div class="form-group-modal">
          <label for="email" class="form-label-modal">Email *</label>
          <input 
            type="email" 
            id="email" 
            v-model="formData.email" 
            placeholder="jan@vase-firma.cz"
            class="form-input-modal"
            required
          >
        </div>

        <div class="form-group-modal">
          <label for="company" class="form-label-modal">Název firmy *</label>
          <input 
            type="text" 
            id="company" 
            v-model="formData.company" 
            placeholder="Vaše Firma s.r.o."
            class="form-input-modal"
            required
          >
        </div>

        <div class="form-group-modal">
          <label for="phone" class="form-label-modal">Telefon</label>
          <input 
            type="tel" 
            id="phone" 
            v-model="formData.phone" 
            placeholder="+420 123 456 789"
            class="form-input-modal"
          >
        </div>

        <div class="form-group-modal">
          <label for="package" class="form-label-modal">Vybraný balíček</label>
          <select id="package" v-model="formData.packageId" class="form-select-modal">
            <option value="">-- Vyberte balíček --</option>
            <option v-for="pkg in packages" :key="pkg.id" :value="pkg.id">
              {{ pkg.title }} ({{ pkg.priceRange }})
            </option>
          </select>
        </div>

        <div class="form-group-modal">
          <label for="message" class="form-label-modal">Zpráva</label>
          <textarea 
            id="message" 
            v-model="formData.message" 
            placeholder="Řekněte nám více o vašem projektu a očekáváních..."
            rows="4"
            class="form-textarea-modal"
          ></textarea>
        </div>

        <div class="form-group-modal checkbox-group-modal">
          <label class="checkbox-container-modal">
            <input type="checkbox" v-model="formData.gdprConsent" required class="checkbox-input-modal">
            <span class="checkmark-modal checkmark-hover" :class="{ 'checkmark-checked': formData.gdprConsent }"></span>
            <span class="checkbox-text-modal">
              Souhlasím se zpracováním osobních údajů dle <a href="/gdpr" target="_blank" class="checkbox-link">GDPR podmínek</a> *
            </span>
          </label>
        </div>

        <div class="form-group-modal checkbox-group-modal">
          <label class="checkbox-container-modal">
            <input type="checkbox" v-model="formData.marketingConsent" class="checkbox-input-modal">
            <span class="checkmark-modal checkmark-hover" :class="{ 'checkmark-checked': formData.marketingConsent }"></span>
            <span class="checkbox-text-modal">
              Souhlasím se zasíláním informací o novinkách a akcích (max. 1x měsíčně)
            </span>
          </label>
        </div>

        <div class="form-actions-modal">
          <button 
            type="submit" 
            class="btn-submit-modal" 
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting">
              <svg class="spinner-modal animate-spin" viewBox="0 0 50 50">
                <circle class="spinner-path" cx="25" cy="25" r="20" fill="none" stroke="white" stroke-width="5" stroke-dasharray="31.416" stroke-dashoffset="31.416"></circle>
              </svg>
              Odesílám...
            </span>
            <span v-else>Odeslat poptávku</span>
          </button>
        </div>
      </form>

      <!-- Success message -->
      <div v-if="isSuccess" class="success-message-modal animate-fade-in">
        <div class="success-icon-modal">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="#96b623" fill-opacity="0.1"/>
            <path d="M16 24L22 30L32 18" stroke="#96b623" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h3 class="success-title-modal">Děkujeme za váš zájem!</h3>
        <p class="success-text-modal">Vaše poptávka byla úspěšně odeslána. Ozveme se vám do 24 hodin s detailnější nabídkou na míru.</p>
        <button class="btn-close-success-modal" @click="$emit('close')">Zavřít</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, defineProps, defineEmits, watch } from 'vue'
import type { Package } from '@/types/package'

// Props & Emits
const props = defineProps<{
  show: boolean
  packages: Package[]
  selectedPackageId?: string | null
}>()

const emit = defineEmits<{
  close: []
  submitted: [data: any]
}>()

// State
const formData = ref({
  name: '',
  email: '',
  company: '',
  phone: '',
  packageId: '',
  message: '',
  gdprConsent: false,
  marketingConsent: false
})

const isSubmitting = ref(false)
const isSuccess = ref(false)

// Computed
const selectedPackage = computed(() => {
  if (!props.selectedPackageId) return null
  return props.packages.find(pkg => pkg.id === props.selectedPackageId) || null
})

// Watch for selected package changes
watch(() => props.selectedPackageId, (newValue) => {
  if (newValue) {
    formData.value.packageId = newValue
  }
})

// Methods
const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Handle success
    isSuccess.value = true
    emit('submitted', formData.value)
    
    // Reset form after submission
    formData.value = {
      name: '',
      email: '',
      company: '',
      phone: '',
      packageId: '',
      message: '',
      gdprConsent: false,
      marketingConsent: false
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    // Handle error (could add error state and message)
  } finally {
    isSubmitting.value = false
  }
}

// Lifecycle
onMounted(() => {
  // Set selected package if provided
  if (props.selectedPackageId) {
    formData.value.packageId = props.selectedPackageId
  }
  
  // Focus trap and accessibility
  const focusableElements = document.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  if (focusableElements.length > 0) {
    const firstElement = focusableElements[0] as HTMLElement
    firstElement.focus()
  }
})
</script>

<style scoped>
/* Only custom animations - everything else is now in UnoCSS utilities */
.spinner-path {
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

.checkmark-modal:after {
  content: "";
  position: absolute;
  display: none;
}

.checkmark-checked:after {
  display: block;
  left: 0.4rem;
  top: 0.15rem;
  width: 0.4rem;
  height: 0.7rem;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>
