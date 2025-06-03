// components/services/index.ts
export { default as PackageCard } from './PackageCard.vue'
export { default as ROICalculator } from './ROICalculator.vue'
export { default as FAQ } from './FAQ.vue'

// Re-export types
export type { Package, PackageFeature, ImpactMetric } from '@/types/packages'
export type { ROICalculatorState, ROIResults, ProjectedMetrics } from '@/types/roi'
export type { FAQItem } from '@/types/faq'

// Re-export data
export {
  packages,
  packageMultipliers,
  getPackageById,
  getPackageTitle,
  getPackagePrice,
} from '@/data/packages'
export { faqItems, getFAQByCategory, getFAQCategories } from '@/data/faq'

// Re-export composables
export { useROICalculator } from '@/composables/useROICalculator'
