<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <p class="text-gray-600 mb-6">
      Vyplňte formulář a ozveme se vám do 24 hodin s návrhem strategické konzultace.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label for="name" class="block font-600 mb-2">Jméno *</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="w-full p-3 border-2 border-gray-300 rounded focus:border-secondary outline-none"
        />
      </div>

      <div>
        <label for="email" class="block font-600 mb-2">E-mail *</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full p-3 border-2 border-gray-300 rounded focus:border-secondary outline-none"
        />
      </div>
    </div>

    <div>
      <label for="company" class="block font-600 mb-2">Firma *</label>
      <input
        id="company"
        v-model="form.company"
        type="text"
        required
        placeholder="Název vaší tech firmy"
        class="w-full p-3 border-2 border-gray-300 rounded focus:border-secondary outline-none"
      />
    </div>

    <div>
      <label for="message" class="block font-600 mb-2">Popište nám váš projekt</label>
      <textarea
        id="message"
        v-model="form.message"
        rows="4"
        placeholder="Jaký je váš produkt? Jaké máte cíle s brandingem?"
        class="w-full p-3 border-2 border-gray-300 rounded focus:border-secondary outline-none resize-none"
      ></textarea>
    </div>

    <button type="submit" class="btn-large w-full" :disabled="isSubmitting">
      {{ isSubmitting ? 'Odesílám...' : 'Odeslat zprávu' }}
    </button>

    <p class="text-sm text-gray-600 text-center">
      Ozveme se vám do 24 hodin s návrhem další spolupráce.
    </p>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const emit = defineEmits<{
  close: []
}>()

const isSubmitting = ref(false)

const form = reactive({
  name: '',
  email: '',
  company: '',
  message: '',
})

const handleSubmit = async () => {
  isSubmitting.value = true

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('Form submitted:', form)

    // Reset form
    Object.assign(form, {
      name: '',
      email: '',
      company: '',
      message: '',
    })

    alert('Děkujeme za váš zájem! Ozveme se vám do 24 hodin.')
    emit('close')
  } catch (error) {
    console.error('Form submission error:', error)
    alert('Nastala chyba při odesílání. Zkuste to prosím znovu.')
  } finally {
    isSubmitting.value = false
  }
}
</script>
