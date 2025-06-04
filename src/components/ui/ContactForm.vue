<template>
  <div class="contact-form">
    <form @submit.prevent="submitForm">
      <div class="form-grid">
        <!-- Name Field -->
        <div class="form-group">
          <label for="name">Jméno a příjmení *</label>
          <input 
            type="text" 
            id="name" 
            v-model="formData.name" 
            placeholder="Jan Novák"
            required
            class="form-input"
          >
        </div>

        <!-- Email Field -->
        <div class="form-group">
          <label for="email">Email *</label>
          <input 
            type="email" 
            id="email" 
            v-model="formData.email" 
            placeholder="jan@vase-firma.cz"
            required
            class="form-input"
          >
        </div>

        <!-- Company Field -->
        <div class="form-group">
          <label for="company">Název firmy *</label>
          <input 
            type="text" 
            id="company" 
            v-model="formData.company" 
            placeholder="Vaše Firma s.r.o."
            required
            class="form-input"
          >
        </div>

        <!-- Phone Field -->
        <div class="form-group">
          <label for="phone">Telefon</label>
          <input 
            type="tel" 
            id="phone" 
            v-model="formData.phone" 
            placeholder="+420 123 456 789"
            class="form-input"
          >
        </div>

        <!-- Message Field -->
        <div class="form-group col-span-2">
          <label for="message">Zpráva *</label>
          <textarea 
            id="message" 
            v-model="formData.message" 
            placeholder="Řekněte nám více o vašem projektu a očekáváních..."
            rows="4"
            required
            class="form-input"
          ></textarea>
        </div>

        <!-- Preferred Package -->
        <div class="form-group col-span-2">
          <label for="package">Jaký balíček vás zajímá?</label>
          <select id="package" v-model="formData.packageId" class="form-input">
            <option value="">-- Nevybráno / Nevím --</option>
            <option value="tech-essentials">Tech Essentials (180-220k Kč)</option>
            <option value="scale-ready">Scale Ready (280-350k Kč)</option>
            <option value="market-leader">Market Leader (420-550k Kč)</option>
          </select>
        </div>

        <!-- Consent Checkboxes -->
        <div class="form-group col-span-2">
          <div class="checkbox-group">
            <label class="checkbox-container">
              <input type="checkbox" v-model="formData.gdprConsent" required>
              <span class="checkmark"></span>
              <span class="checkbox-text">
                Souhlasím se zpracováním osobních údajů dle <a href="/gdpr" target="_blank">GDPR podmínek</a> *
              </span>
            </label>
          </div>
          
          <div class="checkbox-group mt-4">
            <label class="checkbox-container">
              <input type="checkbox" v-model="formData.marketingConsent">
              <span class="checkmark"></span>
              <span class="checkbox-text">
                Souhlasím se zasíláním informací o novinkách a akcích (max. 1x měsíčně)
              </span>
            </label>
          </div>
        </div>
      </div>

      <!-- Form Actions -->
      <div class="form-actions">
        <Button 
          type="button" 
          variant="outline" 
          @click="$emit('close')"
        >
          Zrušit
        </Button>
        
        <Button 
          type="submit" 
          variant="primary" 
          :loading="isSubmitting"
        >
          Odeslat poptávku
        </Button>
      </div>

      <!-- Success Message -->
      <div v-if="isSuccess" class="success-message">
        <div class="success-icon">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="#96b623" fill-opacity="0.1"/>
            <path d="M16 24L22 30L32 18" stroke="#96b623" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h3>Děkujeme za váš zájem!</h3>
        <p>Vaše poptávka byla úspěšně odeslána. Ozveme se vám do 24 hodin s detailnější nabídkou na míru.</p>
        <Button variant="secondary" @click="$emit('close')">Zavřít</Button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import Button from './Button.vue'

// Define emits
defineEmits<{
  close: []
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

// Methods
const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Handle success
    isSuccess.value = true
    
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
</script>

<style scoped>
.contact-form {
  width: 100%;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.col-span-2 {
  grid-column: span 2;
}

label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: #e60000;
  box-shadow: 0 0 0 3px rgba(230, 0, 0, 0.1);
}

.checkbox-group {
  display: flex;
  align-items: flex-start;
}

.checkbox-container {
  display: flex;
  position: relative;
  padding-left: 2rem;
  cursor: pointer;
  user-select: none;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 1.25rem;
  width: 1.25rem;
  background-color: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
}

.checkbox-container:hover input ~ .checkmark {
  background-color: #e5e7eb;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: #e60000;
  border-color: #e60000;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 0.4rem;
  top: 0.15rem;
  width: 0.4rem;
  height: 0.7rem;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-text {
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.4;
}

.checkbox-text a {
  color: #e60000;
  text-decoration: none;
}

.checkbox-text a:hover {
  text-decoration: underline;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.success-message {
  text-align: center;
  padding: 2rem 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 0.4s ease forwards;
}

.success-icon {
  margin-bottom: 1.5rem;
}

.success-message h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #111827;
}

.success-message p {
  color: #6b7280;
  margin-bottom: 1.5rem;
  max-width: 24rem;
}

.mt-4 {
  margin-top: 1rem;
}

/* Animations */
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

/* Responsive */
@media (max-width: 640px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .col-span-2 {
    grid-column: span 1;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .form-actions button {
    width: 100%;
  }
}
</style>
