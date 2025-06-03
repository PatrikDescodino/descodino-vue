// tests/PackageCard.test.ts
import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import PackageCard from '@/components/services/PackageCard.vue'
import type { Package } from '@/types/packages'

// Mock package data
const mockPackage: Package = {
  id: 'test-package',
  title: 'Test Package',
  category: 'Test',
  description: 'Test description',
  duration: '2-3 měsíce',
  price: { min: 100000, max: 150000 },
  averagePrice: 125000,
  features: [
    {
      id: 'feature1',
      title: 'Test Feature',
      description: 'Test feature description'
    }
  ],
  expectedImpact: [
    { value: '+50%', label: 'Test impact' }
  ],
  idealFor: 'Test companies',
  guarantees: 'Test guarantees',
  ctaText: 'Select Test Package'
}

describe('PackageCard', () => {
  it('renders package information correctly', () => {
    const wrapper = mount(PackageCard, {
      props: { package_: mockPackage }
    })

    // Test základních informací
    expect(wrapper.text()).toContain(mockPackage.title)
    expect(wrapper.text()).toContain(mockPackage.description)
    expect(wrapper.text()).toContain(mockPackage.category)
    expect(wrapper.text()).toContain(mockPackage.duration)
  })

  it('emits select-package event when CTA clicked', async () => {
    const wrapper = mount(PackageCard, {
      props: { package_: mockPackage }
    })

    const ctaButton = wrapper.find('.cta-button')
    await ctaButton.trigger('click')

    expect(wrapper.emitted('selectPackage')).toBeTruthy()
    expect(wrapper.emitted('selectPackage')?.[0]).toEqual([mockPackage.id])
  })

  it('renders features correctly', () => {
    const wrapper = mount(PackageCard, {
      props: { package_: mockPackage }
    })

    expect(wrapper.text()).toContain('Test Feature')
    expect(wrapper.text()).toContain('Test feature description')
  })

  it('displays price range correctly', () => {
    const wrapper = mount(PackageCard, {
      props: { package_: mockPackage }
    })

    // Test formátování ceny
    expect(wrapper.text()).toContain('100')
    expect(wrapper.text()).toContain('150')
  })

  it('shows featured badge when package is featured', () => {
    const featuredPackage = {
      ...mockPackage,
      featured: true,
      featuredText: 'Nejoblíbenější'
    }

    const wrapper = mount(PackageCard, {
      props: { package_: featuredPackage }
    })

    expect(wrapper.text()).toContain('Nejoblíbenější')
    expect(wrapper.find('.featured-badge')).toBeTruthy()
  })

  it('applies intersection observer for animations', () => {
    // Mock IntersectionObserver
    const mockObserver = {
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn()
    }

    vi.stubGlobal('IntersectionObserver', vi.fn(() => mockObserver))

    const wrapper = mount(PackageCard, {
      props: { package_: mockPackage }
    })

    // Ověř, že observer byl vytvořen
    expect(IntersectionObserver).toHaveBeenCalled()
  })
})
