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
      class="form-input"
      :class="{ error: hasError }"
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

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #d1d5db;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.input-sublabel {
  font-weight: 400;
  color: #9ca3af;
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  background: #1f2937;
  border: 1px solid #4b5563;
  border-radius: 0.5rem;
  color: white;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}

.form-input:focus {
  border-color: #96b623;
  ring: 2px;
  ring-color: rgba(150, 182, 35, 0.2);
  outline: none;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(150, 182, 35, 0.15);
}

.form-input.error {
  border-color: #ef4444;
}

.form-input.error:focus {
  border-color: #ef4444;
  ring-color: rgba(239, 68, 68, 0.2);
}

.form-input::placeholder {
  color: #6b7280;
}

.input-help {
  font-size: 0.75rem;
  color: #9ca3af;
  margin: 0;
}

.input-error {
  font-size: 0.75rem;
  color: #ef4444;
  margin: 0;
}

/* Number input styling */
.form-input[type="number"]::-webkit-outer-spin-button,
.form-input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.form-input[type="number"] {
  -moz-appearance: textfield;
}
</style>
