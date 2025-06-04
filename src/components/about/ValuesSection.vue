<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <h2 class="heading-lg text-center mb-16 animate-fade-in-up">Design + Code + Innovation</h2>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div 
          v-for="(value, index) in values" 
          :key="value.title"
          class="text-center p-10 group animate-fade-in-up"
          :class="`animation-delay-${index * 200 + 200}`"
        >
          <!-- Icon container with hover effects -->
          <div class="w-24 h-24 mx-auto mb-8 rounded-3xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
               :class="value.iconBg">
            <span class="text-4xl">{{ value.icon }}</span>
          </div>
          
          <!-- Title with hover color transition -->
          <h3 class="text-3xl font-700 mb-6 transition-colors duration-300"
              :class="[value.titleColor, value.titleHover]">
            {{ value.title }}
          </h3>
          
          <!-- Description -->
          <p class="text-gray-700 mb-8 leading-relaxed text-lg">
            {{ value.description }}
          </p>
          
          <!-- Features list -->
          <ul class="text-gray-700 space-y-3 text-left bg-gray-50 p-6 rounded-2xl">
            <li 
              v-for="feature in value.features" 
              :key="feature"
              class="flex items-center gap-3"
            >
              <span :class="value.bulletColor">•</span>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Value {
  title: string;
  icon: string;
  description: string;
  features: string[];
  iconBg: string;
  titleColor: string;
  titleHover: string;
  bulletColor: string;
}

const values: Value[] = [
  {
    title: 'DESign',
    icon: '🎨',
    description: 'Krásná a funkční vizuální identita, která odráží DNA tech firmy. Nejen hezká, ale strategicky promyšlená.',
    features: [
      'Brand strategy & positioning',
      'Visual identity systems',
      'UX/UI pro tech produkty',
      'Scalable design systems'
    ],
    iconBg: 'bg-gradient-to-br from-primary/20 to-primary/30',
    titleColor: 'text-primary',
    titleHover: 'group-hover:text-primary/80',
    bulletColor: 'text-primary'
  },
  {
    title: 'CODe',
    icon: '⚡',
    description: 'Technologická vyspělost a digitální inteligence. Weby a aplikace, které nejen vypadají skvěle, ale také performují.',
    features: [
      'Modern web development',
      'Performance optimization',
      'Marketing automation',
      'Analytics & tracking'
    ],
    iconBg: 'bg-gradient-to-br from-secondary/20 to-secondary/30',
    titleColor: 'text-secondary',
    titleHover: 'group-hover:text-secondary/80',
    bulletColor: 'text-secondary'
  },
  {
    title: 'INOvation',
    icon: '🚀',
    description: 'Inovativní přístupy a řešení. AI nástroje, growth hacking a tech stack optimalizace pro rychle rostoucí firmy.',
    features: [
      'AI-powered tools',
      'Growth optimization',
      'Tech stack consulting',
      'Future-proof architecture'
    ],
    iconBg: 'bg-gradient-to-br from-accent/20 to-accent/30',
    titleColor: 'text-accent',
    titleHover: 'group-hover:text-accent/80',
    bulletColor: 'text-accent'
  }
];
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

/* Animation delays */
.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}
</style>