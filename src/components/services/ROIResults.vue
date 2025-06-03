<template>
  <div class="roi-results">
    <h3 class="results-title">
      <span class="text-secondary">📈</span> Potenciální výsledky
    </h3>

    <!-- Hlavní metriky -->
    <div class="results-grid">
      <!-- Současný vs Nový stav -->
      <div class="result-card comparison-card">
        <div class="comparison-grid">
          <div class="comparison-item">
            <h4 class="comparison-label current">Současný měsíční zisk</h4>
            <p class="comparison-value current">
              {{ formatCurrency(results.baselineProfit) }}
            </p>
          </div>
          <div class="comparison-item">
            <h4 class="comparison-label new">Nový měsíční zisk</h4>
            <p class="comparison-value new">
              {{ formatCurrency(results.projectedProfit) }}
            </p>
          </div>
        </div>
      </div>

      <!-- Navýšení zisku - hlavní highlight -->
      <div class="result-card highlight-card">
        <h4 class="highlight-label">Potenciální navýšení zisku</h4>
        <p class="highlight-value">
          {{ formatCurrency(results.incrementalProfit) }}
        </p>
        <p class="highlight-period">měsíčně</p>
      </div>

      <!-- ROI a Payback -->
      <div class="metrics-row">
        <div class="result-card metric-card" :class="{ positive: results.roi > 0 }">
          <h4 class="metric-label">ROI za {{ calculator.horizon }}m</h4>
          <p class="metric-value" :class="{ positive: results.roi > 0 }">
            {{ (results.roi * 100).toFixed(0) }}%
          </p>
        </div>

        <div class="result-card metric-card">
          <h4 class="metric-label">Doba návratnosti</h4>
          <p class="metric-value">
            {{
              results.paybackPeriod === Infinity
                ? '–'
                : Math.round(results.paybackPeriod) + 'm'
            }}
          </p>
        </div>
      </div>

      <!-- Detailní breakdown -->
      <details class="breakdown-details">
        <summary class="breakdown-summary">
          <span>📊 Detailní breakdown výpočtů</span>
        </summary>
        <div class="breakdown-content">
          <div class="breakdown-grid">
            <!-- Současný stav -->
            <div class="breakdown-section">
              <h5 class="breakdown-title current">
                <span class="breakdown-dot current"></span>
                Současný stav
              </h5>
              <div class="breakdown-items">
                <div class="breakdown-item">
                  <span>Návštěvnost:</span>
                  <span>{{ formatNumber(calculator.baselineTraffic) }}</span>
                </div>
                <div class="breakdown-item">
                  <span>Konverze:</span>
                  <span>{{ calculator.baselineConversion }}%</span>
                </div>
                <div class="breakdown-item">
                  <span>AOV:</span>
                  <span>{{ formatCurrency(calculator.averageOrder) }}</span>
                </div>
                <div class="breakdown-item">
                  <span>Marže:</span>
                  <span>{{ calculator.profitMargin }}%</span>
                </div>
                <div class="breakdown-item total">
                  <span>Měsíční zisk:</span>
                  <span>{{ formatCurrency(results.baselineProfit) }}</span>
                </div>
              </div>
            </div>

            <!-- Po rebrandingu -->
            <div class="breakdown-section">
              <h5 class="breakdown-title projected">
                <span class="breakdown-dot projected"></span>
                Po rebrandingu
              </h5>
              <div class="breakdown-items">
                <div class="breakdown-item">
                  <span>Návštěvnost:</span>
                  <span>{{ formatNumber(projectedMetrics.newTraffic) }}</span>
                </div>
                <div class="breakdown-item">
                  <span>Konverze:</span>
                  <span>{{ projectedMetrics.newConversion.toFixed(1) }}%</span>
                </div>
                <div class="breakdown-item">
                  <span>Nárůst návštěv:</span>
                  <span>+{{ projectedMetrics.trafficIncrease }}%</span>
                </div>
                <div class="breakdown-item">
                  <span>Nárůst konverze:</span>
                  <span>+{{ projectedMetrics.conversionIncrease }}%</span>
                </div>
                <div class="breakdown-item total">
                  <span>Nový měsíční zisk:</span>
                  <span>{{ formatCurrency(results.projectedProfit) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Summary -->
          <div class="breakdown-summary-section">
            <div class="summary-item">
              <span>Celkový nárůst za {{ calculator.horizon }} měsíců:</span>
              <span class="summary-value positive">
                {{ formatCurrency(results.incrementalProfit * calculator.horizon) }}
              </span>
            </div>
            <div class="summary-item">
              <span>Mínus investice do brandingu:</span>
              <span class="summary-value negative">
                -{{ formatCurrency(calculator.investment) }}
              </span>
            </div>
            <div class="summary-item total">
              <span>Čistý zisk:</span>
              <span class="summary-value" :class="results.roi > 0 ? 'positive' : 'negative'">
                {{
                  formatCurrency(
                    results.incrementalProfit * calculator.horizon - calculator.investment
                  )
                }}
              </span>
            </div>
          </div>
        </div>
      </details>

      <!-- CTA tlačítko -->
      <div v-if="results.roi > 0" class="cta-section">
        <button @click="handleOpenServiceRequest" class="service-cta-button">
          <span class="cta-icon">🚀</span>
          CHCI TUTO SLUŽBU
          <span class="cta-package">
            {{ getPackageTitle(calculator.selectedPackage) }}
          </span>
        </button>
        <p class="cta-note">
          Formulář se předvyplní vašimi daty z kalkulačky
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ROIResults, ProjectedMetrics, ROICalculatorState } from '@/types/roi'
import { useROICalculator } from '@/composables/useROICalculator'
import { getPackageTitle } from '@/data/packages'

// Props
interface Props {
  results: ROIResults
  projectedMetrics: ProjectedMetrics
  calculator: ROICalculatorState
}
defineProps<Props>()

// Emits
const emit = defineEmits<{
  openServiceRequest: []
}>()

// Composables
const { formatCurrency, formatNumber } = useROICalculator()

// Methods
const handleOpenServiceRequest = () => {
  emit('openServiceRequest')
}
</script>

<style scoped>
.roi-results {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.results-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.results-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.result-card {
  background: #374151;
  border-radius: 0.5rem;
  border: 1px solid #4b5563;
  transition: all 0.3s ease;
}

.result-card:hover {
  transform: translateY(-2px);
}

.comparison-card {
  padding: 1rem;
}

.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.comparison-item {
  text-align: center;
}

.comparison-label {
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.comparison-label.current {
  color: #9ca3af;
}

.comparison-label.new {
  color: #96b623;
}

.comparison-value {
  font-size: 1.125rem;
  font-weight: 800;
}

.comparison-value.current {
  color: #d1d5db;
}

.comparison-value.new {
  color: white;
}

.highlight-card {
  background: linear-gradient(to right, rgba(150, 182, 35, 0.2), rgba(230, 0, 0, 0.2));
  border: 1px solid rgba(150, 182, 35, 0.5);
  padding: 1.5rem;
  text-align: center;
}

.highlight-label {
  color: #96b623;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.highlight-value {
  color: white;
  font-size: 1.875rem;
  font-weight: 900;
  margin-bottom: 0.25rem;
}

.highlight-period {
  color: #d1d5db;
  font-size: 0.75rem;
}

.metrics-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.metric-card {
  padding: 1rem;
  text-align: center;
}

.metric-card.positive {
  background: rgba(34, 197, 94, 0.3);
  border-color: #22c55e;
}

.metric-label {
  color: #9ca3af;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.metric-card.positive .metric-label {
  color: #86efac;
}

.metric-value {
  font-size: 1.5rem;
  font-weight: 800;
  color: #d1d5db;
}

.metric-value.positive {
  color: #22c55e;
}

.breakdown-details {
  background: #374151;
  border-radius: 0.5rem;
  border: 1px solid #4b5563;
  overflow: hidden;
}

.breakdown-summary {
  padding: 1rem;
  cursor: pointer;
  background: #4b5563;
  transition: background-color 0.2s ease;
  font-weight: 600;
  color: #d1d5db;
  font-size: 0.875rem;
}

.breakdown-summary:hover {
  background: #6b7280;
}

.breakdown-content {
  padding: 1rem;
  border-top: 1px solid #4b5563;
}

.breakdown-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

@media (min-width: 1024px) {
  .breakdown-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.breakdown-section {
  background: white;
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid #d1d5db;
}

.breakdown-title {
  font-weight: 700;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.breakdown-title.current {
  color: #374151;
}

.breakdown-title.projected {
  color: #166534;
}

.breakdown-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
}

.breakdown-dot.current {
  background: #9ca3af;
}

.breakdown-dot.projected {
  background: #22c55e;
}

.breakdown-items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.breakdown-item {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #374151;
}

.breakdown-item.total {
  font-weight: 600;
  padding-top: 0.5rem;
  border-top: 1px solid #d1d5db;
  color: #1f2937;
}

.breakdown-summary-section {
  border-top: 1px solid #4b5563;
  padding-top: 0.75rem;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: #d1d5db;
  margin-bottom: 0.5rem;
}

.summary-item:last-child {
  margin-bottom: 0;
}

.summary-item.total {
  font-weight: 600;
  font-size: 0.875rem;
  padding-top: 0.5rem;
  border-top: 1px solid #4b5563;
}

.summary-value {
  font-weight: 600;
}

.summary-value.positive {
  color: #22c55e;
}

.summary-value.negative {
  color: #ef4444;
}

.cta-section {
  margin-top: 1.5rem;
}

.service-cta-button {
  width: 100%;
  background: linear-gradient(to right, #e60000, #cc0000);
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-weight: 700;
  text-align: center;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  font-size: 1.125rem;
}

.service-cta-button:hover {
  background: linear-gradient(to right, #cc0000, #e60000);
  transform: scale(1.02);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.cta-icon {
  font-size: 1.5rem;
}

.cta-package {
  font-size: 0.875rem;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.cta-note {
  text-align: center;
  font-size: 0.75rem;
  color: #9ca3af;
  margin-top: 0.5rem;
}
</style>
