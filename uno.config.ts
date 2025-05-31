import { defineConfig, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      // Zachování vašich brand barev
      primary: '#E60000',
      secondary: '#96B623',
      dark: '#000000',
      light: '#FFFFFF',
      'bg-light': '#E5E5E3',
      'gray-light': '#D0D0D0',
      'gray-dark': '#B0ADAC',
    },
  },
  shortcuts: {
    // Utility shortcuts pro vaše komponenty
    btn: 'px-4 py-2 rounded transition-all duration-300 cursor-pointer',
    'btn-primary': 'btn bg-primary text-light hover:bg-red-700',
    'btn-large': 'btn-primary px-10 py-4 text-lg',
    'container-custom': 'max-w-1280px mx-auto px-8',
    'section-padding': 'py-24',

    // Layout shortcuts
    'flex-center': 'flex items-center justify-center',
    'flex-between': 'flex items-center justify-between',

    // Typography shortcuts
    'heading-xl': 'text-4xl md:text-5xl lg:text-6xl font-900 leading-tight',
    'heading-lg': 'text-3xl md:text-4xl font-800',
    'body-lg': 'text-lg leading-relaxed',
  },
})
