// composables/useROICalculator.ts
import { reactive, computed } from 'vue'
import type { ROICalculatorState, ROIResults, ProjectedMetrics } from '@/types/roi'
import { packageMultipliers, getPackagePrice } from '@/data/packages'

export const useROICalculator = () => {
  // State
  const calculator = reactive<ROICalculatorState>({
    baselineTraffic: 20000,
    baselineConversion: 3,
    averageOrder: 25000,
    profitMargin: 40,
    investment: 315000,
    horizon: 12,
    selectedPackage: 'scale-ready',
  })

  // Projected metrics based on selected package
  const projectedMetrics = computed<ProjectedMetrics>(() => {
    const multiplier = packageMultipliers[calculator.selectedPackage as keyof typeof packageMultipliers]
    
    if (!multiplier) {
      return {
        newTraffic: calculator.baselineTraffic,
        newConversion: calculator.baselineConversion,
        trafficIncrease: 0,
        conversionIncrease: 0,
      }
    }

    const newTraffic = Math.round(
      calculator.baselineTraffic * (1 + multiplier.trafficIncrease / 100)
    )
    const newConversion = 
      calculator.baselineConversion * (1 + multiplier.conversionIncrease / 100)

    return {
      newTraffic,
      newConversion,
      trafficIncrease: multiplier.trafficIncrease,
      conversionIncrease: multiplier.conversionIncrease,
    }
  })

  // ROI Calculator Results
  const results = computed<ROIResults>(() => {
    const N0 = calculator.baselineTraffic || 0
    const CR0 = (calculator.baselineConversion || 0) / 100
    const AOV = calculator.averageOrder || 0
    const M = (calculator.profitMargin || 0) / 100
    const N1 = projectedMetrics.value.newTraffic
    const CR1 = projectedMetrics.value.newConversion / 100
    const months = calculator.horizon || 12
    const I = calculator.investment || 0

    // Calculate profits
    const baselineProfit = N0 * CR0 * AOV * M
    const projectedProfit = N1 * CR1 * AOV * M
    const incrementalProfit = projectedProfit - baselineProfit

    // Calculate ROI and payback
    const roi = I > 0 ? (incrementalProfit * months - I) / I : 0
    const paybackPeriod = incrementalProfit > 0 ? I / incrementalProfit : Infinity

    return {
      baselineProfit,
      projectedProfit,
      incrementalProfit,
      roi,
      paybackPeriod,
    }
  })

  // Methods
  const updateInvestmentFromPackage = () => {
    calculator.investment = getPackagePrice(calculator.selectedPackage)
  }

  const selectPackage = (packageId: string) => {
    calculator.selectedPackage = packageId
    updateInvestmentFromPackage()
  }

  const resetCalculator = () => {
    Object.assign(calculator, {
      baselineTraffic: 20000,
      baselineConversion: 3,
      averageOrder: 25000,
      profitMargin: 40,
      investment: 315000,
      horizon: 12,
      selectedPackage: 'scale-ready',
    })
  }

  // Validation
  const isValid = computed(() => {
    return (
      calculator.baselineTraffic > 0 &&
      calculator.baselineConversion > 0 &&
      calculator.averageOrder > 0 &&
      calculator.profitMargin > 0 &&
      calculator.investment > 0 &&
      calculator.horizon > 0
    )
  })

  // Utility functions
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('cs-CZ', {
      style: 'currency',
      currency: 'CZK',
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('cs-CZ').format(num)
  }

  const formatPercentage = (decimal: number): string => {
    return `${(decimal * 100).toFixed(0)}%`
  }

  // Export everything
  return {
    calculator,
    projectedMetrics,
    results,
    isValid,
    updateInvestmentFromPackage,
    selectPackage,
    resetCalculator,
    formatCurrency,
    formatNumber,
    formatPercentage,
  }
}
