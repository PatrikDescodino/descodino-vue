<template>
  <nav class="vertical-nav fixed top-4 left-4 z-1000">
    <!-- Logo - toggle menu -->
    <div class="nav-item logo-item">
      <button @click="toggleMenu" class="nav-link logo-link" aria-label="Descodino - Menu">
        <img src="/Big FullColor.png" alt="Descodino" width="150" height="45" class="h-12 w-auto" />
        <!-- Animated bubble hint -->
        <div :class="['menu-bubble', { 'menu-bubble-visible': showBubble && !isMenuOpen }]" style="animation: bubblePulse 2s ease-in-out infinite;">
          <span>MENU</span>
          <div class="bubble-arrow"></div>
        </div>
      </button>
    </div>

    <!-- Menu items - show/hide based on isMenuOpen -->
    <div :class="['menu-items', { 'menu-items-open': isMenuOpen }]">
      <!-- Home -->
      <div class="nav-item">
        <RouterLink to="/" class="nav-link" @click="closeMenu">
          <span :class="['nav-text', { 'nav-text-active': $route.path === '/' }]">DOMŮ</span>
        </RouterLink>
      </div>

      <!-- Services -->
      <div class="nav-item">
        <RouterLink
          to="/sluzby"
          class="nav-link"
          title="Naše brandingové služby"
          @click="closeMenu"
        >
          <span :class="['nav-text', { 'nav-text-active': $route.path === '/sluzby' }]">SLUŽBY</span>
        </RouterLink>
      </div>

      <!-- About -->
      <div class="nav-item">
        <RouterLink
          to="/o-nas"
          class="nav-link"
          title="Poznajte náš tým a hodnoty"
          @click="closeMenu"
        >
          <span :class="['nav-text', { 'nav-text-active': $route.path === '/o-nas' }]">O NÁS</span>
        </RouterLink>
      </div>

      <!-- Portfolio -->
      <div class="nav-item">
        <RouterLink
          to="/portfolio"
          class="nav-link"
          title="Naše projekty a realizace"
          @click="closeMenu"
        >
          <span :class="['nav-text', { 'nav-text-active': $route.path === '/portfolio' }]">PORTFOLIO</span>
        </RouterLink>
      </div>

      <!-- CTA -->
      <div class="nav-item cta-nav-item">
        <RouterLink
          to="/sluzby#roi-calculator"
          class="nav-link cta-link"
          title="Kalkulačka pro vaši brandovou transformaci"
          @click="closeMenu"
        >
          <span class="cta-nav-text">{{ ctaText.toUpperCase() }}</span>
        </RouterLink>
      </div>
    </div>

    <!-- Mobile menu toggle -->
    <button class="mobile-toggle md:hidden mt-4" @click="toggleMobileMenu" aria-label="Menu">
      <div class="hamburger">
        <span :class="['hamburger-line', { 'hamburger-active-1': isMobileMenuOpen }]"></span>
        <span :class="['hamburger-line', { 'hamburger-active-2': isMobileMenuOpen }]"></span>
        <span :class="['hamburger-line', { 'hamburger-active-3': isMobileMenuOpen }]"></span>
      </div>
    </button>

    <!-- Mobile menu -->
    <div :class="['mobile-menu md:hidden', { 'mobile-menu-open': isMobileMenuOpen }]">
      <div class="mobile-menu-content">
        <RouterLink to="/" class="mobile-link" @click="closeMobileMenu"> DESCODINO </RouterLink>
        <RouterLink to="/sluzby" class="mobile-link" @click="closeMobileMenu"> SLUŽBY </RouterLink>
        <RouterLink to="/o-nas" class="mobile-link" @click="closeMobileMenu"> O NÁS </RouterLink>
        <RouterLink to="/portfolio" class="mobile-link" @click="closeMobileMenu"> PORTFOLIO </RouterLink>
        <RouterLink to="/sluzby#roi-calculator" class="mobile-link" @click="closeMobileMenu">
          {{ ctaText.toUpperCase() }}
        </RouterLink>
        <button class="mobile-link" @click="openContactModal">NAPIŠTE NÁM</button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// Route pro active stavy
const $route = useRoute()

// Props & Emits
const emit = defineEmits<{
  openContactModal: []
}>()

// State
const isMenuOpen = ref(false)
const showBubble = ref(false)
const isMobileMenuOpen = ref(false)
const ctaText = ref('')

// A/B Testing for CTA
const ctaVariants = ['Kalkulačka ROI', 'Spočítat hodnotu', 'Zjistit ROI']

// Methods
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    showBubble.value = false
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
}
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const openContactModal = () => {
  closeMobileMenu()
  emit('openContactModal')
}

// Lifecycle
onMounted(() => {
  const selectedVariant = Math.floor(Math.random() * ctaVariants.length)
  ctaText.value = ctaVariants[selectedVariant]

  // Show bubble hint after 3 seconds
  setTimeout(() => {
    if (!isMenuOpen.value) {
      showBubble.value = true
    }
  }, 3000)

  // Hide bubble after 8 seconds
  setTimeout(() => {
    showBubble.value = false
  }, 8000)
})
</script>

<style scoped>
/* Bubble pulse animation */
@keyframes bubblePulse {
  0%, 100% {
    transform: translateY(-50%) translateX(0) scale(1);
  }
  50% {
    transform: translateY(-50%) translateX(0) scale(1.05);
  }
}
</style>
