// types/faq.ts
export interface FAQItem {
  id: number
  question: string
  answer: string
  category: string
  badge?: {
    text: string
    color: string
  }
  icon: string
  iconColor: string
}
