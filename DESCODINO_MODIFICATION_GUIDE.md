# 🚀 DESCODINO VUE - Kompletní Guide pro Úpravy

## 📋 Obsah
- [🏗️ Architektura Aplikace](#architektura)
- [🎨 Frontend Styling](#frontend-styling)
- [📊 Backend/Data Management](#backend-data)
- [🔧 Jak Měnit Design](#design-changes)
- [📝 Jak Měnit Obsah](#content-changes)
- [🛠️ Technické Úpravy](#technical-changes)
- [🚀 Deployment & Production](#deployment)

---

## 🏗️ Architektura Aplikace {#architektura}

### Struktura Projektu
```
descodino-vue/
├── src/
│   ├── components/          # Vue komponenty
│   │   ├── ui/             # UI komponenty (Button, Card, Modal...)
│   │   ├── home/           # Homepage sekce
│   │   ├── services/       # Services stránka
│   │   ├── layout/         # Layout komponenty (Header, Footer)
│   │   └── sections/       # Reusable sekce
│   │
│   ├── views/              # Stránky (routes)
│   │   ├── HomeView.vue
│   │   ├── ServicesView.vue
│   │   ├── AboutView.vue
│   │   └── PortfolioView.vue
│   │
│   ├── data/               # 📊 STATICKÁ DATA
│   │   ├── packages.ts     # Cenové balíčky
│   │   └── faq.ts          # FAQ sekce
│   │
│   ├── types/              # TypeScript definice
│   ├── composables/        # Vue composables (business logika)
│   ├── router/             # Vue Router konfigurace
│   └── utils/              # Utility funkce
│
├── uno.config.ts           # 🎨 HLAVNÍ STYLING SYSTÉM
├── package.json            # Dependencies
└── vite.config.ts          # Build konfigurace
```

### Styling Systém
- **95% stylů**: UnoCSS utilities v `uno.config.ts`
- **5% stylů**: Specifické animace v komponentách
- **Přístup**: Utility-first s custom shortcuts

---

## 🎨 Frontend Styling {#frontend-styling}

### 1. Hlavní Styling - UnoCSS Config

**Soubor**: `uno.config.ts`

```typescript
export default defineConfig({
  theme: {
    colors: {
      primary: '#E60000',      // 🔴 HLAVNÍ ČERVENÁ
      secondary: '#96B623',    // 🟢 HLAVNÍ ZELENÁ  
      // Změň tyto barvy pro rebrand
    }
  },
  shortcuts: {
    // BUTTONS - tlačítka
    'btn-primary': 'bg-primary text-white hover:bg-red-700...',
    'btn-secondary': 'bg-secondary text-white hover:bg-green-700...',
    
    // LAYOUT - rozložení
    'container-custom': 'max-w-1280px mx-auto px-8',
    'section-padding': 'py-24',
    
    // KOMPONENTY - karty, modaly, atd.
    'package-card': 'bg-gray-50 rounded-2xl p-8 shadow-md...',
    'modal-content': 'bg-white rounded-xl shadow-2xl...',
    
    // TYPOGRAPHY - texty
    'heading-xl': 'text-4xl md:text-5xl font-900',
    'body-lg': 'text-lg leading-relaxed',
  }
})
```

### 2. Komponenty - Minimální CSS

**Příklad**: `src/components/services/PackageCard.vue`

```vue
<template>
  <!-- Všechny styly přes UnoCSS utility třídy -->
  <div class="package-card package-card-inner">
    <h2 class="package-title-card">{{ title }}</h2>
  </div>
</template>

<style scoped>
/* Jen specifické animace, vše ostatní v UnoCSS */
@keyframes slideUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
</style>
```

---

## 📊 Backend/Data Management {#backend-data}

### Současný Stav: Frontend-Only
- ❌ **Žádné API**: Vše jsou statická data
- ✅ **Mock data**: Připraveno na API integraci
- ✅ **TypeScript**: Plně typované

### 1. Cenové Balíčky

**Soubor**: `src/data/packages.ts`

```typescript
export const packages: Package[] = [
  {
    id: 'tech-essentials',
    title: 'Tech Essentials',           // 📝 NÁZEV BALÍČKU
    category: 'Starter',                // 📝 KATEGORIE
    description: 'Pro tech firmy...',   // 📝 POPIS
    duration: '2-3 měsíce',            // 📝 DOBA REALIZACE
    price: {                           // 💰 CENY
      min: 180000,
      max: 220000
    },
    averagePrice: 200000,              // 💰 PRŮMĚRNÁ CENA
    features: [                        // 📋 SEZNAM FUNKCÍ
      {
        title: 'Tech Brand Strategy',
        description: 'Positioning pro tech trh...'
      }
    ],
    expectedImpact: [                  // 📈 OČEKÁVANÉ VÝSLEDKY
      { value: '+25%', label: 'Zvýšení důvěryhodnosti' }
    ],
    ctaText: 'Vybrat Tech Essentials'  // 📝 TEXT TLAČÍTKA
  }
]
```

### 2. FAQ Sekce

**Soubor**: `src/data/faq.ts`

```typescript
export const faqItems: FAQItem[] = [
  {
    id: 0,
    question: 'Proč je Descodino jiné?',    // ❓ OTÁZKA
    answer: 'Nejsme jen designové studio...', // 💬 ODPOVĚĎ
    category: 'approach',                   // 🏷️ KATEGORIE
    badge: {                               // 🎫 BAREVNÝ BADGE
      text: 'Design + Code + Innovation',
      color: 'green'
    },
    icon: '🎯',                            // 🎨 IKONA
    iconColor: '#e60000'                   // 🎨 BARVA IKONY
  }
]
```

### 3. Case Studies (Hardcoded)

**Soubor**: `src/components/home/CaseStudies.vue`

```typescript
const caseStudies = [
  {
    id: 'tech-startup',
    title: 'Rebrand pro tech startup',      // 📝 NÁZEV PROJEKTU
    client: 'TechVision s.r.o.',           // 📝 KLIENT
    description: 'Komplexní brandová...',   // 📝 POPIS
    imageUrl: '/images/case-study-1.jpg',   // 🖼️ OBRÁZEK
    results: [                             // 📊 VÝSLEDKY
      { value: '+156%', label: 'Návštěvnost webu' }
    ]
  }
]
```

---

## 🔧 Jak Měnit Design {#design-changes}

### 1. Změna Brand Barev (Globální)

**Soubor**: `uno.config.ts`

```typescript
theme: {
  colors: {
    primary: '#YOUR_NEW_RED',      // Změní všude červenou
    secondary: '#YOUR_NEW_GREEN',  // Změní všude zelenou
    // Nové barvy se aplikují automaticky
  }
}
```

### 2. Změna Komponent Stylů

**Button styling**:
```typescript
shortcuts: {
  'btn-primary': 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl px-8 py-4 shadow-xl hover:scale-105 transition-all',
}
```

**Card styling**:
```typescript
shortcuts: {
  'package-card': 'bg-white rounded-3xl p-10 shadow-2xl border-2 border-blue-200 hover:border-blue-500 transition-all duration-500',
}
```

### 3. Layout Změny

**Container width**:
```typescript
shortcuts: {
  'container-custom': 'max-w-6xl mx-auto px-4',  // Užší layout
}
```

**Section spacing**:
```typescript
shortcuts: {
  'section-padding': 'py-32',  // Větší mezery mezi sekcemi
}
```

### 4. Typography

```typescript
shortcuts: {
  'heading-xl': 'text-6xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent',
  'body-lg': 'text-xl leading-loose text-gray-700',
}
```

---

## 📝 Jak Měnit Obsah {#content-changes}

### 1. Cenové Balíčky

**Změna cen**:
```typescript
// src/data/packages.ts
price: {
  min: 250000,     // Nová minimální cena
  max: 350000      // Nová maximální cena
}
```

**Přidání nového balíčku**:
```typescript
{
  id: 'enterprise-plus',
  title: 'Enterprise Plus',
  category: 'Premium',
  description: 'Pro největší tech firmy...',
  // ... další properties
}
```

### 2. FAQ Obsah

**Změna otázky/odpovědi**:
```typescript
// src/data/faq.ts
{
  question: 'Vaše nová otázka?',
  answer: 'Vaše nová odpověď...',
  category: 'pricing',  // Nová kategorie
}
```

### 3. Case Studies

**Změna case study**:
```typescript
// src/components/home/CaseStudies.vue
const caseStudies = [
  {
    title: 'Váš nový projekt',
    client: 'Nový Klient s.r.o.',
    results: [
      { value: '+200%', label: 'Nová metrika' }
    ]
  }
]
```

### 4. Homepage Texty

**Hero sekce**:
```vue
<!-- src/components/home/HomeHero.vue -->
<template>
  <h1>Váš nový hlavní titulek</h1>
  <p>Váš nový popis...</p>
</template>
```

---

## 🛠️ Technické Úpravy {#technical-changes}

### 1. Přidání API Integrace

**Contact Form API**:
```typescript
// src/components/services/ServiceModal.vue
const submitForm = async () => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData.value)
    })
    
    if (response.ok) {
      isSuccess.value = true
    }
  } catch (error) {
    // Handle error
  }
}
```

**Dynamic Packages Loading**:
```typescript
// src/data/packages.ts
export const fetchPackages = async (): Promise<Package[]> => {
  const response = await fetch('/api/packages')
  return response.json()
}

// Použití v komponentě
import { fetchPackages } from '@/data/packages'

const packages = ref<Package[]>([])

onMounted(async () => {
  packages.value = await fetchPackages()
})
```

### 2. Přidání Nové Stránky

**1. Vytvořit view**:
```vue
<!-- src/views/BlogView.vue -->
<template>
  <div class="blog-page">
    <h1>Blog</h1>
  </div>
</template>
```

**2. Přidat route**:
```typescript
// src/router/index.ts
{
  path: '/blog',
  name: 'blog',
  component: () => import('../views/BlogView.vue')
}
```

**3. Přidat do navigace**:
```vue
<!-- src/components/layout/AppHeader.vue -->
<RouterLink to="/blog">Blog</RouterLink>
```

### 3. Přidání Nového UI Komponentu

**1. Vytvořit komponentu**:
```vue
<!-- src/components/ui/Alert.vue -->
<template>
  <div class="alert">
    <slot />
  </div>
</template>

<style scoped>
.alert {
  /* Custom styles nebo UnoCSS utilities */
}
</style>
```

**2. Přidat do UI indexu**:
```typescript
// src/components/ui/index.ts
export { default as Alert } from './Alert.vue'
```

**3. Přidat UnoCSS utilities**:
```typescript
// uno.config.ts
shortcuts: {
  'alert': 'p-4 rounded-lg border-l-4',
  'alert-success': 'bg-green-50 border-green-400 text-green-800',
  'alert-error': 'bg-red-50 border-red-400 text-red-800',
}
```

---

## 🚀 Deployment & Production {#deployment}

### 1. Build Process

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

### 2. Environment Variables

**Soubor**: `.env`
```
VITE_API_URL=https://your-api.com
VITE_ANALYTICS_ID=GA-XXXXX
```

**Použití**:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

### 3. Deployment Platforms

**Vercel**:
```json
// vercel.json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "dist" }
    }
  ]
}
```

**Netlify**:
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🎯 Quick Reference

### Nejčastější Úpravy

| Co chcete změnit | Kde editovat |
|------------------|--------------|
| **Brand barvy** | `uno.config.ts` → theme.colors |
| **Ceny balíčků** | `src/data/packages.ts` → price |
| **FAQ obsah** | `src/data/faq.ts` → faqItems |
| **Button design** | `uno.config.ts` → shortcuts.btn-primary |
| **Layout width** | `uno.config.ts` → shortcuts.container-custom |
| **Case studies** | `src/components/home/CaseStudies.vue` |
| **Homepage texty** | `src/components/home/HomeHero.vue` |

### Development Commands

```bash
# Start development server
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Build for production
npm run build
```

---

## 💡 Pro Tips

1. **Vždy testujte změny postupně** - změňte jednu věc, zkontrolujte výsledek
2. **Použijte Git branches** pro větší změny
3. **Backup před velkými úpravami** - `cp uno.config.ts uno.config.backup.ts`
4. **Mobile-first** - testujte na mobilu po každé změně
5. **TypeScript errors** - opravte všechny TS chyby před buildem

---

**🎉 Gratulace! Máte kompletní guide pro úpravy Descodino aplikace!**

Pro otázky nebo specifické úpravy neváhejte se ozvat! 🚀
