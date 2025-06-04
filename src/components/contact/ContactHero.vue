<template>
  <section class="contact-hero section-padding">
    <div class="container-custom">
      <div class="hero-content-grid">
        <!-- Hero Text Content -->
        <div class="hero-text-content">
          <h1 class="hero-title">
            <span class="hero-subtitle">Kontaktujte nás</span>
            <span class="hero-title-main">Pojďme společně vytvořit nezapomenutelný brand</span>
          </h1>
          
          <p class="hero-description">
            Ať už máte jasnou představu o tom, co potřebujete, nebo teprve začínáte přemýšlet o brandingové transformaci, 
            jsme tu pro vás. Ozvěte se nám a společně probereme možnosti spolupráce.
          </p>
          
          <!-- Contact Options -->
          <div class="contact-options">
            <div class="contact-option-item" @click="$emit('open-contact-modal')">
              <div class="option-icon">📞</div>
              <div class="option-content">
                <h3 class="option-title">Nezávazná konzultace</h3>
                <p class="option-description">30minutový hovor o vašich potřebách a možnostech spolupráce</p>
                <Button variant="text" class="option-cta">Rezervovat termín →</Button>
              </div>
            </div>
            
            <div class="contact-option-item">
              <div class="option-icon">✉️</div>
              <div class="option-content">
                <h3 class="option-title">Email</h3>
                <p class="option-description">Napište nám, odpovíme během 24 hodin</p>
                <a href="mailto:ahoj@descodino.cz" class="option-cta">ahoj@descodino.cz →</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Hero Form Content -->
        <div class="hero-form-content">
          <div class="contact-form-container">
            <h2 class="form-title">Napište nám</h2>
            <p class="form-subtitle">Vyplňte krátký formulář a my se vám ozveme co nejdříve</p>
            
            <form class="contact-form" @submit.prevent="submitForm">
              <!-- Name -->
              <div class="form-group">
                <label for="name">Jméno a příjmení *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="formData.name"
                  placeholder="Jan Novák"
                  required
                  class="form-input"
                />
              </div>
              
              <!-- Email -->
              <div class="form-group">
                <label for="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.email"
                  placeholder="jan@vase-firma.cz"
                  required
                  class="form-input"
                />
              </div>
              
              <!-- Company -->
              <div class="form-group">
                <label for="company">Název firmy</label>
                <input 
                  type="text" 
                  id="company" 
                  v-model="formData.company"
                  placeholder="Vaše firma s.r.o."
                  class="form-input"
                />
              </div>
              
              <!-- Phone -->
              <div class="form-group">
                <label for="phone">Telefon</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="formData.phone"
                  placeholder="+420 123 456 789"
                  class="form-input"
                />
              </div>
              
              <!-- Message -->
              <div class="form-group full-width">
                <label for="message">Zpráva *</label>
                <textarea 
                  id="message" 
                  v-model="formData.message"
                  placeholder="Popište nám váš projekt a očekávání..."
                  required
                  rows="4"
                  class="form-input"
                ></textarea>
              </div>
              
              <!-- GDPR Consent -->
              <div class="form-group full-width">
                <div class="checkbox-group">
                  <label class="checkbox-container">
                    <input 
                      type="checkbox"
                      v-model="formData.gdprConsent"
                      required
                    />
                    <span class="checkmark"></span>
                    <span class="checkbox-text">
                      Souhlasím se zpracováním osobních údajů dle <a href="/gdpr" target="_blank">GDPR podmínek</a> *
                    </span>
                  </label>
                </div>
              </div>
              
              <!-- Submit Button -->
              <div class="form-group full-width">
                <Button 
                  type="submit" 
                  variant="primary" 
                  :loading="isSubmitting" 
                  block
                >
                  Odeslat zprávu
                </Button>
              </div>
            </form>
            
            <!-- Success Message (shown after form submission) -->
            <div v-if="isSuccess" class="success-message">
              <div class="success-icon">✓</div>
              <h3 class="success-title">Děkujeme za vaši zprávu!</h3>
              <p class="success-text">Vaše zpráva byla úspěšně odeslána. Ozveme se vám co nejdříve, obvykle do 24 hodin.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Background Elements -->
    <div class="background-elements">
      <div class="bg-element bg-circle-1"></div>
      <div class="bg-element bg-circle-2"></div>
      <div class="bg-element bg-dots"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { Button } from '@/components/ui'

// Define emits
defineEmits<{
  'open-contact-modal': []
}>()

// Form state
const formData = ref({
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
  gdprConsent: false
})

const isSubmitting = ref(false)
const isSuccess = ref(false)

// Submit form
const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Success state
    isSuccess.value = true
    
    // Reset form
    formData.value = {
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
      gdprConsent: false
    }
  } catch (error) {
    console.error('Error submitting form:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-hero {
  position: relative;
  padding: 8rem 0 6rem;
  background-color: #f8f9fa;
  overflow: hidden;
}

.container-custom {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
}

.hero-content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

/* Text Content Styles */
.hero-text-content {
  display: flex;
  flex-direction: column;
}

.hero-title {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  font-weight: 600;
  color: #e60000;
  margin-bottom: 1rem;
}

.hero-title-main {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  color: #1f2937;
}

.hero-description {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #4b5563;
  margin-bottom: 2.5rem;
}

/* Contact Options */
.contact-options {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-option-item {
  display: flex;
  background-color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.contact-option-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.option-icon {
  font-size: 2rem;
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.option-content {
  flex: 1;
}

.option-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.option-description {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.75rem;
}

.option-cta {
  color: #e60000;
  font-weight: 600;
  font-size: 0.875rem;
  text-decoration: none;
  display: inline-block;
  transition: color 0.2s ease;
}

.option-cta:hover {
  color: #b91c1c;
  text-decoration: underline;
}

/* Form Content Styles */
.hero-form-content {
  display: flex;
  justify-content: center;
}

.contact-form-container {
  background-color: white;
  border-radius: 1rem;
  padding: 2.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 32rem;
  position: relative;
}

.form-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.form-subtitle {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 2rem;
}

.contact-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group.full-width {
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

/* Checkbox Styles */
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

/* Success Message */
.success-message {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
  text-align: center;
  border-radius: 1rem;
  animation: fadeIn 0.4s ease forwards;
}

.success-icon {
  width: 4rem;
  height: 4rem;
  background-color: #96b623;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.success-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.success-text {
  color: #6b7280;
  line-height: 1.6;
}

/* Background Elements */
.background-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
}

.bg-element {
  position: absolute;
  opacity: 0.05;
}

.bg-circle-1 {
  width: 30rem;
  height: 30rem;
  border-radius: 50%;
  background-color: #e60000;
  top: -15rem;
  right: -10rem;
}

.bg-circle-2 {
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  background-color: #96b623;
  bottom: -10rem;
  left: -5rem;
}

.bg-dots {
  width: 50%;
  height: 100%;
  background-image: radial-gradient(#1f2937 1px, transparent 1px);
  background-size: 20px 20px;
  top: 0;
  left: 0;
}

/* Animations */
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .hero-title-main {
    font-size: 2.5rem;
  }
  
  .contact-form-container {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .hero-content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hero-text-content {
    order: 1;
  }
  
  .hero-form-content {
    order: 0;
  }
  
  .hero-title-main {
    font-size: 2rem;
  }
  
  .contact-form {
    grid-template-columns: 1fr;
  }
  
  .form-group.full-width {
    grid-column: span 1;
  }
}

@media (max-width: 640px) {
  .contact-hero {
    padding: 6rem 0 4rem;
  }
  
  .contact-form-container {
    padding: 1.5rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .hero-title-main {
    font-size: 1.75rem;
  }
  
  .hero-description {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .option-icon {
    font-size: 1.5rem;
    margin-right: 1rem;
  }
  
  .option-title {
    font-size: 1.125rem;
  }
}
</style>
