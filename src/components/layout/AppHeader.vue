<template>
  <nav class="vertical-nav fixed top-4 left-4 z-1000">
    <!-- Logo - toggle menu -->
    <div class="nav-item logo-item">
      <button @click="toggleMenu" class="nav-link logo-link" aria-label="Descodino - Menu">
        <img src="/Big FullColor.png" alt="Descodino" width="150" height="45" class="h-12 w-auto" />
        <!-- Animated bubble hint -->
        <div class="menu-bubble" :class="{ visible: showBubble && !isMenuOpen }">
          <span>MENU</span>
          <div class="bubble-arrow"></div>
        </div>
      </button>
    </div>

    <!-- Menu items - show/hide based on isMenuOpen -->
    <div class="menu-items" :class="{ open: isMenuOpen }">
      <!-- Home -->
      <div class="nav-item">
        <RouterLink to="/" class="nav-link" @click="closeMenu">
          <span class="nav-text">DOMŮ</span>
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
          <span class="nav-text">SLUŽBY</span>
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
          <span class="nav-text">O NÁS</span>
        </RouterLink>
      </div>

      <!-- CTA -->
      <div class="nav-item">
        <RouterLink
          to="/sluzby#roi-calculator"
          class="nav-link cta-link"
          title="Kalkulačka pro vaši brandovou transformaci"
          @click="closeMenu"
        >
          <span class="nav-text">{{ ctaText.toUpperCase() }}</span>
        </RouterLink>
      </div>
    </div>

    <!-- Mobile menu toggle -->
    <button class="mobile-toggle md:hidden mt-4" @click="toggleMobileMenu" aria-label="Menu">
      <div class="hamburger" :class="{ active: isMobileMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>

    <!-- Mobile menu -->
    <div class="mobile-menu md:hidden" :class="{ open: isMobileMenuOpen }">
      <div class="mobile-menu-content">
        <RouterLink to="/" class="mobile-link" @click="closeMobileMenu"> DESCODINO </RouterLink>
        <RouterLink to="/sluzby" class="mobile-link" @click="closeMobileMenu"> SLUŽBY </RouterLink>
        <RouterLink to="/o-nas" class="mobile-link" @click="closeMobileMenu"> O NÁS </RouterLink>
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
/* Vertical Navigation */
.vertical-nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Navigation Items */
.nav-item {
  display: block;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(230, 0, 0, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.nav-item:hover {
  border-color: rgba(150, 182, 35, 0.5);
  background: rgba(255, 255, 255, 0.05);
}

/* Navigation Links */
.nav-link {
  display: block;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  background: transparent;
  padding: 0;
}

.nav-text {
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.05em;
  color: #e60000;
  transition: color 0.3s ease;
  display: block;
}

/* Logo Link */
.logo-link .nav-text {
  font-size: 1.2rem;
  font-weight: 800;
}

/* Hover States */
.nav-link:hover .nav-text {
  color: #96b623;
}

/* Active States */
.nav-link.router-link-active .nav-text {
  color: #96b623;
}

/* Menu Items Animation */
.menu-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.3s ease;
}

.menu-items.open {
  max-height: 300px;
  opacity: 1;
  margin-top: 1rem;
}

/* Logo Item Special Styling */
.logo-item {
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;
  transition: transform 0.3s ease;
  position: relative;
}

.logo-item:hover {
  transform: scale(1.05);
  border: none;
  background: transparent;
}

.logo-link {
  background: transparent;
  border: none;
  padding: 0;
  position: relative;
}

/* Menu Bubble */
.menu-bubble {
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  margin-left: 1rem;
  background: #e60000;
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  opacity: 0;
  transform: translateY(-50%) translateX(-10px);
  transition: all 0.4s ease;
  pointer-events: none;
  white-space: nowrap;
  z-index: 100;
}

.menu-bubble.visible {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
  animation: bubblePulse 2s ease-in-out infinite;
}

.bubble-arrow {
  position: absolute;
  left: -6px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-right: 6px solid #e60000;
}

@keyframes bubblePulse {
  0%,
  100% {
    transform: translateY(-50%) translateX(0) scale(1);
  }
  50% {
    transform: translateY(-50%) translateX(0) scale(1.05);
  }
}

/* Mobile Menu */
.mobile-toggle {
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 21;
}

.hamburger {
  width: 24px;
  height: 18px;
  position: relative;
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background: #e60000;
  margin: 4px 0;
  transition: 0.3s;
  border-radius: 1px;
}

.hamburger.active span {
  background: #96b623;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transform: translateX(-100%);
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;
  z-index: 20;
}

.mobile-menu.open {
  transform: translateX(0);
  opacity: 1;
  pointer-events: all;
}

.mobile-menu-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 2rem;
  padding: 2rem;
}

.mobile-link {
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  color: #e60000;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
  letter-spacing: 0.05em;
}

.mobile-link:hover {
  color: #96b623;
}

/* CTA Link Special Styling */
.cta-link {
  position: relative;
}

.cta-link .nav-text {
  font-weight: 800;
  color: #ffffff;
  position: relative;
  z-index: 2;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  transition: none; /* Žádný hover efekt na text */
}

.cta-link:hover .nav-text {
  color: #ffffff; /* Text zůstane bílý při hover */
}

/* CTA Item Special Background */
.nav-item:has(.cta-link) {
  background: #e60000;
  border: 2px solid #e60000;
  box-shadow: 0 4px 15px rgba(230, 0, 0, 0.3);
  transform: scale(1.02);
}

.nav-item:has(.cta-link):hover {
  background: #96b623;
  border-color: #96b623;
  box-shadow: 0 6px 20px rgba(150, 182, 35, 0.4);
  transform: scale(1.05);
}
</style>
