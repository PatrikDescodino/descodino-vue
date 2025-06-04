<template>
  <div class="input-group">
    <label class="input-label">
      {{ label }}
      <span v-if="sublabel" class="input-sublabel">{{ sublabel }}</span>
    </label>
    <input
      :value="modelValue"
      @input="handleInput"
      :type="type"
      :min="min"
      :max="max"
      :step="step"
      :placeholder="placeholder"
      :required="required"
      :class="[
        'form-input',
        {
          'form-input-error': hasError
        }
      ]"
      style="-webkit-appearance: none; -moz-appearance: textfield;"
    />
    <p v-if="help" class="input-help">{{ help }}</p>
    <p v-if="error" class="input-error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Props
interface Props {
  modelValue: string | number
  label: string
  sublabel?: string
  type?: string
  min?: string | number
  max?: string | number
  step?: string | number
  placeholder?: string
  help?: string
  error?: string
  required?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  required: false
})

// Emits
const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

// Computed
const hasError = computed(() => !!props.error)

// Methods
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  let value: string | number = target.value

  // Convert to number for number inputs
  if (props.type === 'number' && value !== '') {
    value = parseFloat(value) || 0
  }

  emit('update:modelValue', value)
}
</script>
