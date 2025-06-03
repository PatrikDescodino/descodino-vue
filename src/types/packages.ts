// types/packages.ts
export interface PackageFeature {
  id: string
  title: string
  description: string
}

export interface ImpactMetric {
  value: string
  label: string
}

export interface Package {
  id: string
  title: string
  category: string
  description: string
  duration: string
  price: {
    min: number
    max: number
  }
  averagePrice: number
  features: PackageFeature[]
  expectedImpact: ImpactMetric[]
  idealFor: string
  guarantees: string
  ctaText: string
  featured?: boolean
  featuredText?: string
}

export interface PackageMultiplier {
  trafficIncrease: number
  conversionIncrease: number
}

export interface PackageMultipliers {
  'tech-essentials': PackageMultiplier
  'scale-ready': PackageMultiplier
  'market-leader': PackageMultiplier
}
