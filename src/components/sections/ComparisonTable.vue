<template>
  <section class="comparison-table section-padding bg-white" id="comparison">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="heading-lg mb-6">Porovnání balíčků</h2>
        <p class="body-lg text-gray-dark max-w-3xl mx-auto">
          Každý balíček je navržen pro specifickou fázi růstu vaší firmy.
          Vyberte ten, který nejlépe odpovídá vašim aktuálním potřebám a ambicím.
        </p>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full comparison-table-content">
          <thead>
            <tr>
              <th class="feature-column">Služba / Feature</th>
              <th class="package-column tech-essentials">
                <div class="package-header">
                  <h3 class="package-title">Tech Essentials</h3>
                  <p class="package-subtitle">Pro začínající tech firmy</p>
                  <p class="package-price">180.000 - 220.000 Kč</p>
                </div>
              </th>
              <th class="package-column scale-ready">
                <div class="package-header">
                  <div class="popular-badge">Nejoblíbenější</div>
                  <h3 class="package-title">Scale Ready</h3>
                  <p class="package-subtitle">Pro rostoucí tech firmy</p>
                  <p class="package-price">280.000 - 350.000 Kč</p>
                </div>
              </th>
              <th class="package-column market-leader">
                <div class="package-header">
                  <h3 class="package-title">Market Leader</h3>
                  <p class="package-subtitle">Pro dominantní tech firmy</p>
                  <p class="package-price">420.000 - 550.000 Kč</p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="feature in comparisonFeatures" :key="feature.id">
              <td class="feature-cell">
                <div class="feature-name">{{ feature.name }}</div>
                <div class="feature-description">{{ feature.description }}</div>
              </td>
              <td 
                v-for="pkg in ['techEssentials', 'scaleReady', 'marketLeader']" 
                :key="pkg"
                class="package-cell"
                :class="getPackageClass(pkg)"
              >
                <div v-if="typeof feature[pkg] === 'boolean'">
                  <span v-if="feature[pkg]" class="feature-included">✓</span>
                  <span v-else class="feature-not-included">-</span>
                </div>
                <div v-else class="feature-value">{{ feature[pkg] }}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex flex-col items-center mt-12">
        <p class="text-center text-gray-500 mb-6">
          Potřebujete balíček na míru? Kontaktujte nás pro individuální nabídku.
        </p>
        <button 
          class="btn btn-primary"
          @click="$emit('openContactModal')"
        >
          Nezávazná konzultace
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

// Define emits
defineEmits<{
  openContactModal: []
}>()

// Feature comparison data
const comparisonFeatures = [
  {
    id: 'brandStrategy',
    name: 'Brand Strategy',
    description: 'Positioning, konkurenční analýza, target audience',
    techEssentials: 'Základní',
    scaleReady: 'Pokročilá',
    marketLeader: 'Komplexní'
  },
  {
    id: 'visualIdentity',
    name: 'Vizuální identita',
    description: 'Logo, barvy, typografie, design systém',
    techEssentials: true,
    scaleReady: true,
    marketLeader: true
  },
  {
    id: 'website',
    name: 'Webové stránky',
    description: 'Design, vývoj, responsivita, CMS',
    techEssentials: '8-12 stránek',
    scaleReady: '15-20 stránek',
    marketLeader: '20+ stránek'
  },
  {
    id: 'brandGuidelines',
    name: 'Brand Guidelines',
    description: 'Dokumentace a pravidla používání značky',
    techEssentials: 'Základní (20+ stran)',
    scaleReady: 'Pokročilé (40+ stran)',
    marketLeader: 'Komplexní (80+ stran)'
  },
  {
    id: 'marketingAutomation',
    name: 'Marketing Automation',
    description: 'Email sekvence, lead scoring, automatizace',
    techEssentials: false,
    scaleReady: true,
    marketLeader: true
  },
  {
    id: 'socialMedia',
    name: 'Social Media Brand',
    description: 'Templates a design systém pro sociální sítě',
    techEssentials: false,
    scaleReady: true,
    marketLeader: true
  },
  {
    id: 'investorDeck',
    name: 'Investor Presentation',
    description: 'Prezentační template pro investory',
    techEssentials: false,
    scaleReady: true,
    marketLeader: true
  },
  {
    id: 'multiMarket',
    name: 'Multi-market Strategy',
    description: 'Adaptace značky pro různé trhy',
    techEssentials: false,
    scaleReady: false,
    marketLeader: true
  },
  {
    id: 'productBranding',
    name: 'Product Sub-branding',
    description: 'Systém pro produkt branding a family branding',
    techEssentials: false,
    scaleReady: false,
    marketLeader: true
  },
  {
    id: 'strategicConsulting',
    name: 'Strategické konzultace',
    description: 'Pravidelné konzultace a optimalizace',
    techEssentials: '1 měsíc',
    scaleReady: '3 měsíce',
    marketLeader: '6 měsíců'
  }
]

// Helper function for package cell classes
const getPackageClass = (pkg: string) => {
  switch(pkg) {
    case 'techEssentials': return 'tech-essentials'
    case 'scaleReady': return 'scale-ready'
    case 'marketLeader': return 'market-leader'
    default: return ''
  }
}
</script>

<style scoped>
.comparison-table {
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

.text-gray-dark {
  color: #4b5563;
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

/* Comparison Table Styles */
.comparison-table-content {
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

th, td {
  border: 1px solid #f0f0f0;
  padding: 1.25rem 1rem;
  text-align: center;
}

th {
  background-color: #f8f9fa;
  font-weight: 700;
}

.feature-column {
  width: 25%;
  text-align: left;
}

.package-column {
  width: 25%;
}

.package-header {
  padding: 0.5rem;
  position: relative;
}

.package-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.package-subtitle {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.75rem;
}

.package-price {
  font-weight: 600;
  color: #e60000;
}

.popular-badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #96b623;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
}

.feature-cell {
  text-align: left;
  background-color: #fafafa;
}

.feature-name {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.feature-description {
  font-size: 0.875rem;
  color: #6b7280;
}

.feature-included {
  color: #96b623;
  font-size: 1.25rem;
  font-weight: 700;
}

.feature-not-included {
  color: #d1d5db;
}

.feature-value {
  font-weight: 500;
}

/* Package specific colors */
.tech-essentials .feature-value {
  color: #3b82f6;
}

.scale-ready .feature-value {
  color: #e60000;
}

.market-leader .feature-value {
  color: #96b623;
}

/* Highlight on hover */
tbody tr:hover {
  background-color: rgba(248, 249, 250, 0.5);
}

/* Responsive */
@media (max-width: 768px) {
  .heading-lg {
    font-size: 2rem;
  }
  
  .section-padding {
    padding: 4rem 0;
  }
  
  .package-title {
    font-size: 1.1rem;
  }
  
  .package-subtitle {
    font-size: 0.75rem;
  }
  
  .feature-name {
    font-size: 0.9rem;
  }
  
  .feature-description {
    font-size: 0.75rem;
  }
  
  th, td {
    padding: 1rem 0.5rem;
  }
}
</style>
