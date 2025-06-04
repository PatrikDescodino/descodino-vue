<template>
  <section class="section-padding bg-gray-50">
    <div class="container-custom">
      <!-- Filter buttons -->
      <div class="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          class="px-6 py-3 rounded-xl font-600 transition-all duration-300 transform hover:scale-105"
          :class="selectedCategory === category 
            ? 'bg-primary text-white shadow-lg' 
            : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'"
        >
          {{ category }}
        </button>
      </div>

      <!-- Projects grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          @click="$emit('projectClick', project)"
          class="group cursor-pointer animate-fade-in-up"
          :class="`animation-delay-${(index % 6) * 100 + 200}`"
        >
          <!-- Project card -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
            <!-- Project image/placeholder -->
            <div class="aspect-video relative overflow-hidden"
                 :class="project.imageBg">
              <div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-6xl opacity-80">{{ project.icon }}</span>
              </div>
              
              <!-- Category badge -->
              <div class="absolute top-4 left-4">
                <span class="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-600 rounded-full"
                      :class="project.categoryColor">
                  {{ project.category }}
                </span>
              </div>
              
              <!-- Hover overlay -->
              <div class="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span class="text-white text-lg font-600">Zobrazit detail</span>
              </div>
            </div>
            
            <!-- Project info -->
            <div class="p-6">
              <h3 class="text-xl font-700 mb-2 text-gray-800 group-hover:text-primary transition-colors duration-300">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-2">
                {{ project.description }}
              </p>
              
              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-500 rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
              
              <!-- Project stats -->
              <div class="flex items-center justify-between text-sm text-gray-500">
                <span>{{ project.duration }}</span>
                <span class="flex items-center gap-1">
                  <span>{{ project.result }}</span>
                  <span class="text-green-500">📈</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Load more button (for future expansion) -->
      <div class="text-center mt-12 animate-fade-in-up animation-delay-800">
        <button class="px-8 py-4 bg-primary text-white rounded-xl font-600 hover:bg-primary/90 transition-colors duration-300 transform hover:scale-105">
          Načíst další projekty
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  duration: string;
  result: string;
  icon: string;
  imageBg: string;
  categoryColor: string;
}

// Emit for parent component
defineEmits<{
  projectClick: [project: Project]
}>();

// Reactive state
const selectedCategory = ref('Vše');

// Categories for filtering
const categories = ['Vše', 'Startup', 'SaaS', 'E-commerce', 'Enterprise'];

// Demo portfolio projects
const projects: Project[] = [
  {
    id: 1,
    title: 'TechStart AI Platform',
    description: 'Kompletní brandová identita a web pro AI startup specializující se na automatizaci business procesů.',
    category: 'Startup',
    tags: ['Brand Identity', 'Web Development', 'AI/ML'],
    duration: '4 měsíce',
    result: '+300% leads',
    icon: '🤖',
    imageBg: 'bg-gradient-to-br from-blue-400 to-purple-600',
    categoryColor: 'text-blue-600'
  },
  {
    id: 2,
    title: 'CloudFlow SaaS',
    description: 'Redesign a rebranding pro B2B SaaS platformu zaměřenou na workflow management pro enterprise klienty.',
    category: 'SaaS',
    tags: ['Rebranding', 'UX/UI', 'SaaS Platform'],
    duration: '6 měsíců',
    result: '+150% konverze',
    icon: '☁️',
    imageBg: 'bg-gradient-to-br from-cyan-400 to-blue-600',
    categoryColor: 'text-cyan-600'
  },
  {
    id: 3,
    title: 'EcoCommerce Platform',
    description: 'E-commerce řešení pro sustainable fashion brand s důrazem na eco-friendly messaging a UX.',
    category: 'E-commerce',
    tags: ['E-commerce', 'Sustainability', 'Mobile First'],
    duration: '5 měsíců',
    result: '+200% sales',
    icon: '🌱',
    imageBg: 'bg-gradient-to-br from-green-400 to-emerald-600',
    categoryColor: 'text-green-600'
  },
  {
    id: 4,
    title: 'FinTech Revolution',
    description: 'Digitální transformace pro tradiční banku - moderní web, mobilní app design a brand guidelines.',
    category: 'Enterprise',
    tags: ['FinTech', 'Digital Transformation', 'Mobile App'],
    duration: '8 měsíců',
    result: '+400% engagement',
    icon: '💳',
    imageBg: 'bg-gradient-to-br from-yellow-400 to-orange-600',
    categoryColor: 'text-yellow-600'
  },
  {
    id: 5,
    title: 'DevTools Startup',
    description: 'Brand identity a landing page pro developer tools startup zaměřený na API testing a monitoring.',
    category: 'Startup',
    tags: ['Developer Tools', 'API', 'Technical Content'],
    duration: '3 měsíce',
    result: '+250% signups',
    icon: '⚡',
    imageBg: 'bg-gradient-to-br from-purple-400 to-pink-600',
    categoryColor: 'text-purple-600'
  },
  {
    id: 6,
    title: 'HealthTech Platform',
    description: 'Telemedicine platforma s důrazem na user experience pro pacienty i lékaře, včetně komplexního design systému.',
    category: 'SaaS',
    tags: ['HealthTech', 'Telemedicine', 'Design System'],
    duration: '7 měsíců',
    result: '+180% adoption',
    icon: '🏥',
    imageBg: 'bg-gradient-to-br from-red-400 to-pink-600',
    categoryColor: 'text-red-600'
  }
];

// Computed filtered projects
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'Vše') {
    return projects;
  }
  return projects.filter(project => project.category === selectedCategory.value);
});
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

/* Line clamp utility */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Animation delays */
.animation-delay-100 { animation-delay: 0.1s; }
.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-300 { animation-delay: 0.3s; }
.animation-delay-400 { animation-delay: 0.4s; }
.animation-delay-500 { animation-delay: 0.5s; }
.animation-delay-600 { animation-delay: 0.6s; }
.animation-delay-700 { animation-delay: 0.7s; }
.animation-delay-800 { animation-delay: 0.8s; }
</style>