<template>
  <Teleport to="body">
    <div
      v-if="show"
      class="fixed inset-0 z-9999 flex items-center justify-center bg-black/80"
      @click="closeModal"
    >
      <div
        class="bg-light p-8 rounded-lg max-w-2xl w-full mx-4 max-h-90vh overflow-y-auto"
        @click.stop
      >
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-700">{{ title }}</h2>
          <button class="text-gray-600 hover:text-dark text-3xl leading-none" @click="closeModal">
            ×
          </button>
        </div>

        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
interface Props {
  show: boolean
  title: string
}

defineProps<Props>()

const emit = defineEmits<{
  'update:show': [value: boolean]
}>()

const closeModal = () => {
  emit('update:show', false)
}
</script>
