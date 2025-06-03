// types/roi.ts
export interface ROICalculatorState {
  baselineTraffic: number
  baselineConversion: number
  averageOrder: number
  profitMargin: number
  investment: number
  horizon: number
  selectedPackage: string
}

export interface ROIResults {
  baselineProfit: number
  projectedProfit: number
  incrementalProfit: number
  roi: number
  paybackPeriod: number
}

export interface ProjectedMetrics {
  newTraffic: number
  newConversion: number
  trafficIncrease: number
  conversionIncrease: number
}
