// types/forms.ts
export interface ServiceFormData {
  name: string
  email: string
  phone: string
  company: string
  position: string
  companySize: string
  growthStage: string
  timeline: string
  message: string
  gdprConsent: boolean
}

export interface ContactFormData {
  name: string
  email: string
  company: string
  message: string
  gdprConsent: boolean
}
