<template>
  <header
    class="site-header fixed top-0 left-0 right-0 z-1000 transition-all duration-300"
    :class="headerClass"
  >
    <div class="container-custom flex-between py-4">
      <!-- Logo -->
      <RouterLink to="/" class="logo" aria-label="Descodino - Domů">
        <img src="/logo.svg" alt="Descodino" width="150" height="45" class="h-12 w-auto" />
      </RouterLink>

      <!-- Navigation -->
      <nav class="main-nav flex items-center" role="navigation">
        <!-- Mobile Toggle -->
        <button
          class="nav-toggle lg:hidden flex flex-col justify-between w-8 h-6 bg-transparent border-none cursor-pointer z-1001"
          aria-label="Menu"
          :aria-expanded="isMenuOpen"
          @click="toggleMenu"
        >
          <span
            class="block w-full h-0.5 bg-dark transition-transform duration-300"
            :class="{ 'rotate-45 translate-y-2.5': isMenuOpen }"
          ></span>
          <span
            class="block w-full h-0.5 bg-dark transition-opacity duration-300"
            :class="{ 'opacity-0': isMenuOpen }"
          ></span>
          <span
            class="block w-full h-0.5 bg-dark transition-transform duration-300"
            :class="{ '-rotate-45 -translate-y-2.5': isMenuOpen }"
          ></span>
        </button>

        <!-- Navigation Links -->
        <ul class="nav-list" :class="navListClass">
          <li>
            <RouterLink to="/" class="nav-link" @click="closeMenu"> Domů </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/sluzby"
              class="nav-link"
              title="Detailní přehled našich brandingových balíčků pro tech firmy"
              @click="closeMenu"
            >
              Služby
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/o-nas"
              class="nav-link"
              title="Poznajte náš tým a naše hodnoty"
              @click="closeMenu"
            >
              O nás
            </RouterLink>
          </li>
          <li>
            <button class="btn-primary" @click="openContactModal">
              {{ ctaText }}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

// Props & Emits
const emit = defineEmits<{
  openContactModal: []
}>()

// State
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const ctaText = ref('')

// Computed
const headerClass = computed(() => ({
  'scrolled backdrop-blur-md bg-bg-light/95': isScrolled.value,
  'bg-bg-light/95': !isScrolled.value,
}))

const navListClass = computed(() => [
  'lg:flex lg:items-center lg:gap-12 lg:static lg:bg-transparent lg:w-auto lg:h-auto lg:flex-row',
  'fixed top-0 left-0 w-full h-screen bg-bg-light flex-col justify-center gap-8 transition-transform duration-300',
  {
    'transform-x-0': isMenuOpen.value,
    'transform-x-full lg:transform-x-0': !isMenuOpen.value,
  },
])

// A/B/C Testing for CTA
const ctaVariants = [
  'Promluvme si o vaší značce',
  'Chci silnější brand',
  'Zjistit víc o spolupráci',
]

// Methods
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const openContactModal = () => {
  closeMenu()
  emit('openContactModal')
}

const handleScroll = () => {
  isScrolled.value = window.pageYOffset > 100
}

// Lifecycle
onMounted(() => {
  // Set random CTA variant
  const selectedVariant = Math.floor(Math.random() * ctaVariants.length)
  ctaText.value = ctaVariants[selectedVariant]

  // Track variant in analytics (když implementujeme)
  // gtag('event', 'experiment_impression', { experiment_id: 'cta_test_v1', variant_id: String.fromCharCode(65 + selectedVariant) })

  // Scroll listener
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-link {
  @apply font-600 text-base relative transition-colors duration-300 hover:text-primary;
}

.nav-link::after {
  @apply content-[''] absolute bottom--1 left-0 w-0 h-0.5 bg-primary transition-all duration-300;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  @apply w-full;
}

.router-link-active {
  @apply text-primary;
}

/* Mobile menu */
@media (max-width: 1023px) {
  .nav-list {
    list-style: none;
  }

  .nav-link {
    @apply text-2xl;
  }
}
</style>
