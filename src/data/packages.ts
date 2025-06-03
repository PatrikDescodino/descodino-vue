// data/packages.ts
import type { Package, PackageMultipliers } from '@/types/packages'

export const packages: Package[] = [
  {
    id: 'tech-essentials',
    title: 'Tech Essentials',
    category: 'Starter',
    description: 'Pro tech firmy, které potřebují profesionální brandový základ pro fundraising a růst',
    duration: '2-3 měsíce',
    price: {
      min: 180000,
      max: 220000
    },
    averagePrice: 200000,
    features: [
      {
        id: 'tech-brand-strategy',
        title: 'Tech Brand Strategy',
        description: 'Positioning pro tech trh, konkurenční analýza, value proposition'
      },
      {
        id: 'visual-identity',
        title: 'Modern Visual Identity',
        description: 'Logo design, barvy, typografie, ikonografie'
      },
      {
        id: 'corporate-website',
        title: 'Corporate Website',
        description: '8-12 stránek, responsive design, CMS, SEO optimalizace'
      },
      {
        id: 'brand-guidelines',
        title: 'Brand Guidelines',
        description: '20+ stran dokumentace, digitální templates'
      },
      {
        id: 'investor-materials',
        title: 'Investor Materials',
        description: 'Pitch deck template, one-pager design'
      }
    ],
    expectedImpact: [
      { value: '+25%', label: 'Zvýšení důvěryhodnosti u investorů' },
      { value: '2-3x', label: 'Lepší konverze webových návštěvníků' },
      { value: '-50%', label: 'Snížení času na přípravu pitch materiálů' }
    ],
    idealFor: 'Pre-seed/Seed startupy, firmy 10-30 lidí, první fundraising',
    guarantees: '3 revizní kola, 30 dní post-launch podpora',
    ctaText: 'Vybrat Tech Essentials'
  },
  {
    id: 'scale-ready',
    title: 'Scale Ready',
    category: 'Growth',
    description: 'Pro tech firmy připravené na rychlý růst, Series A a mezinárodní expanzi',
    duration: '3-4 měsíce',
    price: {
      min: 280000,
      max: 350000
    },
    averagePrice: 315000,
    featured: true,
    featuredText: 'Nejoblíbenější',
    features: [
      {
        id: 'all-essentials',
        title: 'Vše z Tech Essentials balíčku',
        description: ''
      },
      {
        id: 'advanced-website',
        title: 'Advanced Website',
        description: '15-20 stránek, CRM integrace, analytics, automation'
      },
      {
        id: 'marketing-automation',
        title: 'Marketing Automation Setup',
        description: 'Email sequences, lead scoring, nurturing campaigns'
      },
      {
        id: 'employee-brand-kit',
        title: 'Employee Brand Kit',
        description: 'LinkedIn templates, email signatures, internal guidelines'
      },
      {
        id: 'growth-marketing',
        title: 'Growth Marketing Foundation',
        description: 'Landing pages, A/B testing setup'
      }
    ],
    expectedImpact: [
      { value: '+60%', label: 'Úspěšnost při fundraisingu' },
      { value: '3-5x', label: 'Více kvalifikovaných leadů' },
      { value: '+45%', label: 'Zlepšení employee advocacy' }
    ],
    idealFor: 'Series A firmy, firmy 30-80 lidí, pre-IPO příprava',
    guarantees: '5 revizních kol, 60 dní post-launch podpora',
    ctaText: 'Vybrat Scale Ready'
  },
  {
    id: 'market-leader',
    title: 'Market Leader',
    category: 'Enterprise',
    description: 'Pro tech firmy s ambicemi na tržní dominanci a mezinárodní úspěch',
    duration: '4-6 měsíců',
    price: {
      min: 420000,
      max: 550000
    },
    averagePrice: 485000,
    features: [
      {
        id: 'all-scale-ready',
        title: 'Vše ze Scale Ready balíčku',
        description: ''
      },
      {
        id: 'multi-market-strategy',
        title: 'Multi-market Strategy',
        description: 'Adaptace pro různé geografické trhy'
      },
      {
        id: 'digital-ecosystem',
        title: 'Complete Digital Ecosystem',
        description: 'Intranet, customer portals, partner materials'
      },
      {
        id: 'strategic-consulting',
        title: '6 měsíců strategických konzultací',
        description: 'Měsíční reviews a optimalizace'
      },
      {
        id: 'pr-media-kit',
        title: 'PR & Media Kit',
        description: 'Press materials, thought leadership positioning'
      }
    ],
    expectedImpact: [
      { value: '+120%', label: 'Brand value appreciation' },
      { value: '5-10x', label: 'Návratnost investice v prvním roce' },
      { value: '-60%', label: 'Snížení CAC díky silné značce' }
    ],
    idealFor: 'Series B+, firmy 80+ lidí, mezinárodní expanze, IPO příprava',
    guarantees: 'Unlimited revize, 6 měsíců ongoing podpora',
    ctaText: 'Vybrat Market Leader'
  }
]

export const packageMultipliers: PackageMultipliers = {
  'tech-essentials': {
    trafficIncrease: 25,
    conversionIncrease: 15,
  },
  'scale-ready': {
    trafficIncrease: 40,
    conversionIncrease: 25,
  },
  'market-leader': {
    trafficIncrease: 60,
    conversionIncrease: 40,
  },
}

// Helper funkce
export const getPackageById = (id: string): Package | undefined => {
  return packages.find(pkg => pkg.id === id)
}

export const getPackageTitle = (packageId: string): string => {
  const pkg = getPackageById(packageId)
  return pkg?.title || packageId
}

export const getPackagePrice = (packageId: string): number => {
  const pkg = getPackageById(packageId)
  return pkg?.averagePrice || 0
}
