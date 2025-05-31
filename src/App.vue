<template>
  <div id="app" class="min-h-screen bg-bg-light">
    <!-- Tech Canvas Background -->
    <canvas
      id="tech-canvas"
      aria-hidden="true"
      class="fixed top-0 left-0 w-full h-full -z-1 opacity-40"
    ></canvas>

    <!-- Header -->
    <AppHeader @open-contact-modal="openContactModal" />

    <!-- Main Content -->
    <main class="pt-20">
      <RouterView />
    </main>

    <!-- Footer -->
    <AppFooter />

    <!-- Contact Modal -->
    <BaseModal v-model:show="showContactModal" title="Pojďme si popovídat o vašem brandingu">
      <ContactForm @close="closeContactModal" />
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import BaseModal from './components/ui/BaseModal.vue'
import ContactForm from './components/ui/ContactForm.vue'

// State
const showContactModal = ref(false)

// Methods
const openContactModal = () => {
  showContactModal.value = true
}

const closeContactModal = () => {
  showContactModal.value = false
}

// Canvas animation (přidáme později)
onMounted(() => {
  // Initialize canvas animation
  // initCanvasAnimation()
})
</script>

<style>
/* Global styles */
html {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  overflow-x: hidden;
}

/* Font weights */
.font-300 {
  font-weight: 300;
}
.font-400 {
  font-weight: 400;
}
.font-600 {
  font-weight: 600;
}
.font-700 {
  font-weight: 700;
}
.font-800 {
  font-weight: 800;
}
.font-900 {
  font-weight: 900;
}
</style>
