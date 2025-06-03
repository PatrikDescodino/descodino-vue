// data/faq.ts
import type { FAQItem } from '@/types/faq'

export const faqItems: FAQItem[] = [
  {
    id: 0,
    question: 'Proč je Descodino jiné než ostatní designová studia?',
    answer: 'Nejsme jen designové studio. Jsme brandoví architekti digitálního věku, kteří kombinují DESign + CODe + INOvation. Naše DCI filosofie znamená, že nevytváříme jen krásné věci, ale komplexní brandové ekosystémy s technologickou páteří. Učíme klienty, jak se svou značkou efektivně pracovat v digitálním světě.',
    category: 'approach',
    badge: {
      text: 'Design + Code + Innovation = Unikátní přístup',
      color: 'green'
    },
    icon: '🎯',
    iconColor: '#e60000'
  },
  {
    id: 1,
    question: 'Jaký je váš proces spolupráce a jak dlouho trvá?',
    answer: 'Specializujeme se na dlouhodobé projektové zakázky 3-12 měsíců. Náš proces má 4 fáze: Brandová strategie (1-2m) → Kreativní koncept (1-2m) → Digitální implementace (2-4m) → Launch & optimalizace (1-3m). Nejde nám o rychlé řešení, ale o udržitelnou transformaci vaší značky.',
    category: 'process',
    badge: {
      text: '3-12 měsíců komplexní transformace',
      color: 'green'
    },
    icon: '📈',
    iconColor: '#96b623'
  },
  {
    id: 2,
    question: 'Co když nejsme tech firma? Můžeme s vámi spolupracovat?',
    answer: 'Specializujeme se na tech firmy, ale rádi spolupracujeme s ambiciózními značkami z jakéhokoli oboru, které sdílejí naši vizi moderního brandingu. Pokud hledáte strategický přístup, technologickou vyspělost a inovativní řešení, budeme rádi, když si promluvíme o vašem projektu.',
    category: 'collaboration',
    badge: {
      text: 'Tech specializace + otevřenost ambiciózním značkám',
      color: 'green'
    },
    icon: '🛡️',
    iconColor: '#e60000'
  },
  {
    id: 3,
    question: 'Jaké garance a podporu poskytujete?',
    answer: 'Každý projekt zahrnuje komplexní předání know-how, brandové guidelines a školení vašeho týmu. Poskytujeme post-launch podporu a nabízíme pokračující spolupráci formou brandových konzultací, měsíční péče nebo rychlých projektů. Nezůstanete sami - jsme vaši průvodci v digitálním světě.',
    category: 'support',
    badge: {
      text: 'Edukace a dlouhodobé partnerství',
      color: 'green'
    },
    icon: '⚡',
    iconColor: '#96b623'
  },
  {
    id: 4,
    question: 'Můžeme začít menším projektem a postupně rozšiřovat?',
    answer: 'Naším hlavním zaměřením jsou komplexní brandové transformace, které přinášejí skutečnou hodnotu. Pokud máte jasnou vizi a chcete budovat značku systematicky, rádi si promluvíme o tom, jak můžeme spolupracovat a postupně rozšiřovat naše partnerství.',
    category: 'approach',
    badge: {
      text: 'Komplexnost před fragmentací',
      color: 'green'
    },
    icon: '🎯',
    iconColor: '#e60000'
  },
  {
    id: 5,
    question: 'Jak měříte úspěch projektů?',
    answer: 'Měříme reálný dopad na váš business - od zvýšení hodnoty značky přes lepší fundraising možnosti až po efektivnější komunikaci s klienty. Náš cíl není jen hezký design, ale značka, která vám pomože dosáhnout vašich business cílů a vyprávět příběh, který lidi skutečně zajímá.',
    category: 'results',
    badge: {
      text: 'Business impact, ne jen krásný design',
      color: 'green'
    },
    icon: '📈',
    iconColor: '#96b623'
  }
]

// Helper funkce
export const getFAQByCategory = (category: string): FAQItem[] => {
  return faqItems.filter(item => item.category === category)
}

export const getFAQCategories = (): string[] => {
  return [...new Set(faqItems.map(item => item.category))]
}
