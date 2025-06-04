<template>
  <div v-if="project" class="project-detail">
    <!-- Hero Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <!-- Back button -->
          <button 
            @click="$emit('close')"
            class="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-8 transition-colors duration-300"
          >
            <span class="text-xl">←</span>
            <span class="font-600">Zpět na portfolio</span>
          </button>
          
          <!-- Project header -->
          <div class="text-center mb-12">
            <div class="inline-block px-4 py-2 rounded-full text-sm font-600 mb-4"
                 :class="project.categoryBg">
              {{ project.category }}
            </div>
            
            <h1 class="heading-xl mb-6 animate-fade-in-up">{{ project.title }}</h1>
            <p class="body-lg text-gray-700 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Visual -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="max-w-6xl mx-auto">
          <!-- Main project image/placeholder -->
          <div class="aspect-video rounded-3xl overflow-hidden mb-8 relative animate-fade-in-up"
               :class="project.imageBg">
            <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-black/20"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-9xl opacity-60">{{ project.icon }}</span>
            </div>
          </div>
          
          <!-- Project stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up animation-delay-400">
            <div 
              v-for="stat in project.stats" 
              :key="stat.label"
              class="text-center p-6 bg-white rounded-2xl shadow-sm"
            >
              <div class="text-2xl font-700 mb-2" :class="stat.color">{{ stat.value }}</div>
              <div class="text-gray-600 text-sm">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Details -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <!-- Main content -->
            <div class="lg:col-span-2 space-y-8">
              <!-- Challenge -->
              <div class="animate-fade-in-up">
                <h3 class="text-2xl font-700 mb-4 text-gray-800">Výzva</h3>
                <p class="text-gray-700 leading-relaxed">{{ project.challenge }}</p>
              </div>
              
              <!-- Solution -->
              <div class="animate-fade-in-up animation-delay-200">
                <h3 class="text-2xl font-700 mb-4 text-gray-800">Řešení</h3>
                <p class="text-gray-700 leading-relaxed mb-6">{{ project.solution }}</p>
                
                <!-- Solution features -->
                <ul class="space-y-3">
                  <li 
                    v-for="feature in project.solutionFeatures"
                    :key="feature"
                    class="flex items-start gap-3"
                  >
                    <span class="text-primary mt-1">✓</span>
                    <span class="text-gray-700">{{ feature }}</span>
                  </li>
                </ul>
              </div>
              
              <!-- Results -->
              <div class="animate-fade-in-up animation-delay-400">
                <h3 class="text-2xl font-700 mb-4 text-gray-800">Výsledky</h3>
                <p class="text-gray-700 leading-relaxed mb-6">{{ project.results }}</p>
                
                <!-- Key metrics -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div 
                    v-for="metric in project.keyMetrics"
                    :key="metric.label"
                    class="p-4 bg-gray-50 rounded-xl"
                  >
                    <div class="text-xl font-700 text-primary mb-1">{{ metric.value }}</div>
                    <div class="text-gray-600 text-sm">{{ metric.label }}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Sidebar -->
            <div class="space-y-8">
              <!-- Project info -->
              <div class="animate-fade-in-up animation-delay-300">
                <h4 class="text-lg font-700 mb-4 text-gray-800">Detail projektu</h4>
                <div class="space-y-4">
                  <div>
                    <div class="text-sm font-600 text-gray-500 uppercase tracking-wider mb-1">Klient</div>
                    <div class="text-gray-800">{{ project.client }}</div>
                  </div>
                  <div>
                    <div class="text-sm font-600 text-gray-500 uppercase tracking-wider mb-1">Doba realizace</div>
                    <div class="text-gray-800">{{ project.duration }}</div>
                  </div>
                  <div>
                    <div class="text-sm font-600 text-gray-500 uppercase tracking-wider mb-1">Tým</div>
                    <div class="text-gray-800">{{ project.team.join(', ') }}</div>
                  </div>
                </div>
              </div>
              
              <!-- Technologies -->
              <div class="animate-fade-in-up animation-delay-500">
                <h4 class="text-lg font-700 mb-4 text-gray-800">Technologie</h4>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-500 rounded-full"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
              
              <!-- Services -->
              <div class="animate-fade-in-up animation-delay-600">
                <h4 class="text-lg font-700 mb-4 text-gray-800">Služby</h4>
                <ul class="space-y-2">
                  <li 
                    v-for="service in project.services"
                    :key="service"
                    class="flex items-center gap-2 text-gray-700"
                  >
                    <span class="text-primary text-sm">•</span>
                    {{ service }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom text-center">
        <h3 class="text-3xl font-700 mb-6 text-gray-800 animate-fade-in-up">
          Podobný projekt ve vašem oboru?
        </h3>
        <p class="text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          Každá firma má jedinečné potřeby. Pojďme si promluvit o tom, jak můžeme pomoci i vám.
        </p>
        <router-link
          to="/contact"
          class="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-600 transition-colors duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400"
        >
          <span>Pojďme si promluvit</span>
          <span class="text-xl">→</span>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface ProjectDetail {
  id: number;
  title: string;
  description: string;
  category: string;
  categoryBg: string;
  icon: string;
  imageBg: string;
  duration: string;
  client: string;
  team: string[];
  challenge: string;
  solution: string;
  solutionFeatures: string[];
  results: string;
  keyMetrics: Array<{ label: string; value: string }>;
  stats: Array<{ label: string; value: string; color: string }>;
  technologies: string[];
  services: string[];
}

// Props and emits
defineProps<{
  project: ProjectDetail | null;
}>();

defineEmits<{
  close: []
}>();
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
.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-300 { animation-delay: 0.3s; }
.animation-delay-400 { animation-delay: 0.4s; }
.animation-delay-500 { animation-delay: 0.5s; }
.animation-delay-600 { animation-delay: 0.6s; }
</style>