<template>
  <section
    id="roi-calculator"
    class="roi-calculator-section"
    :class="{ 'positive-results': results.roi > 0 }"
  >
    <div class="container-custom relative z-10">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-8">
          <h2 class="heading-lg text-light mb-4">
            <span class="text-secondary">💰</span> 
            Vypočítejte si návratnost investice do brandingu
          </h2>
          <p class="body-lg text-gray-300 max-w-3xl mx-auto">
            Zadejte údaje o vaší tech firmě a zjistěte potenciální dopad profesionálního brandingu
            na váš business.
            <span class="text-secondary">Výsledky jsou orientační!</span>
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Input Form -->
          <div class="calculator-form">
            <h3 class="form-title">
              <span class="text-secondary">📊</span> Vaše současné údaje
            </h3>

            <div class="form-sections">
              <!-- Základní metriky -->
              <div class="form-section">
                <h4 class="section-title">
                  <span class="section-dot bg-secondary"></span>
                  Současné performance
                </h4>

                <div class="input-grid">
                  <FormInput
                    v-model="calculator.baselineTraffic"
                    label="Měsíční návštěvnost"
                    sublabel="(unique visitors)"
                    type="number"
                    placeholder="20 000"
                    help="Unikátní návštěvníci za měsíc"
                  />

                  <FormInput
                    v-model="calculator.baselineConversion"
                    label="Konverzní poměr"
                    sublabel="(%)"
                    type="number"
                    step="0.1"
                    placeholder="3.0"
                    help="% návštěvníků, kteří koupí"
                  />
                </div>
              </div>

              <!-- Business metriky -->
              <div class="form-section">
                <h4 class="section-title">
                  <span class="section-dot bg-primary"></span>
                  Business model
                </h4>

                <div class="input-grid">
                  <FormInput
                    v-model="calculator.averageOrder"
                    label="Průměrná hodnota obchodu"
                    sublabel="(Kč)"
                    type="number"
                    step="1000"
                    placeholder="25 000"
                    help="AOV - average order value"
                  />

                  <FormInput
                    v-model="calculator.profitMargin"
                    label="Zisková marže"
                    sublabel="(%)"
                    type="number"
                    step="1"
                    placeholder="40"
                    help="Čistá marže po nákladech"
                  />
                </div>
              </div>

              <!-- Investice a horizont -->
              <div class="form-section">
                <h4 class="section-title">
                  <span class="section-dot bg-primary"></span>
                  Investice a horizont
                </h4>

                <div class="input-grid">
                  <div class="input-group">
                    <label class="input-label">Brandingový balíček</label>
                    <select
                      v-model="calculator.selectedPackage"
                      @change="updateInvestmentFromPackage"
                      class="form-select"
                    >
                      <option value="tech-essentials">Tech Essentials (200k Kč)</option>
                      <option value="scale-ready">Scale Ready (315k Kč)</option>
                      <option value="market-leader">Market Leader (485k Kč)</option>
                    </select>
                  </div>

                  <div class="input-group">
                    <label class="input-label">
                      Časový horizont: {{ calculator.horizon }} měsíců
                    </label>
                    <input
                      v-model.number="calculator.horizon"
                      type="range"
                      min="3"
                      max="24"
                      step="1"
                      class="slider"
                    />
                    <div class="slider-labels">
                      <span>3m</span>
                      <span>12m</span>
                      <span>24m</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Results -->
          <ROIResults 
            :results="results"
            :projected-metrics="projectedMetrics"
            :calculator="calculator"
            @open-service-request="handleOpenServiceRequest"
          />
        </div>

        <!-- Disclaimer -->
        <div class="disclaimer">
          <div class="disclaimer-content">
            <span class="disclaimer-icon">⚠️</span>
            <div>
              <h4 class="disclaimer-title">Orientační výpočet</h4>
              <p class="disclaimer-text">
                Kalkulačka používá průměrné hodnoty z našich projektů. Skutečné výsledky se
                mohou významně lišit podle oboru, kvality současného brandingu a dalších
                faktorů.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useROICalculator } from '@/composables/useROICalculator'
import FormInput from '@/components/ui/FormInput.vue'
import ROIResults from '@/components/services/ROIResults.vue'

// Composables
const {
  calculator,
  projectedMetrics,
  results,
  updateInvestmentFromPackage,
  formatNumber,
} = useROICalculator()

// Emits
const emit = defineEmits<{
  openServiceRequest: []
}>()

// Methods
const handleOpenServiceRequest = () => {
  emit('openServiceRequest')
}
</script>

<style scoped>
.roi-calculator-section {
  padding: 6rem 0;
  background: #1f2937;
  color: white;
  position: relative;
  overflow: hidden;
}

.roi-calculator-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, #374151, transparent, #374151);
  opacity: 0.5;
}

.roi-calculator-section.positive-results::before {
  background: linear-gradient(to right, rgba(34, 197, 94, 0.2), transparent, rgba(34, 197, 94, 0.2));
}

.text-secondary {
  color: #96b623;
}

.text-light {
  color: white;
}

.text-gray-300 {
  color: #d1d5db;
}

.calculator-form {
  background: #374151;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid #4b5563;
}

.form-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.form-sections {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.section-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #d1d5db;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.section-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
}

.bg-secondary {
  background-color: #96b623;
}

.bg-primary {
  background-color: #e60000;
}

.input-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .input-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #d1d5db;
}

.form-select {
  padding: 0.75rem;
  background: #1f2937;
  border: 1px solid #4b5563;
  border-radius: 0.5rem;
  color: white;
  transition: all 0.2s ease;
}

.form-select:focus {
  border-color: #96b623;
  outline: none;
}

.slider {
  width: 100%;
  height: 0.5rem;
  background: #4b5563;
  border-radius: 0.5rem;
  appearance: none;
  cursor: pointer;
}

.slider::-webkit-slider-thumb {
  appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: #96b623;
  cursor: pointer;
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #9ca3af;
  margin-top: 0.25rem;
}

.disclaimer {
  margin-top: 1.5rem;
  background: rgba(251, 146, 60, 0.2);
  border: 1px solid rgba(251, 146, 60, 0.3);
  padding: 1rem;
  border-radius: 0.5rem;
}

.disclaimer-content {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.disclaimer-icon {
  color: #fb923c;
  margin-top: 0.125rem;
}

.disclaimer-title {
  color: #fed7aa;
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.disclaimer-text {
  font-size: 0.75rem;
  color: rgba(254, 215, 170, 0.8);
  line-height: 1.5;
}
</style>
