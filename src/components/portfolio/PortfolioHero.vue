<template>
  <section class="section-padding bg-gradient-to-br from-dark via-gray-900 to-dark text-light relative overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
      <div class="absolute bottom-20 right-20 w-24 h-24 bg-secondary/10 rounded-full animate-float animation-delay-1000"></div>
      <div class="absolute top-1/2 left-1/3 w-16 h-16 bg-accent/10 rounded-full animate-float animation-delay-500"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
    </div>
    
    <div class="container-custom text-center relative z-10">
      <!-- Main heading with tech theme -->
      <h1 class="heading-xl mb-6 animate-fade-in-up">
        Řešení, která <span class="text-primary">škálují</span><br/>
        s ambicemi <span class="text-secondary animate-pulse">tech firem</span>
      </h1>
      
      <!-- Subtitle -->
      <p class="body-lg text-gray-300 max-w-4xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
        Každý projekt je příběhem transformace. Od strategické vize přes kreativní koncept 
        až po technickou exekuci - podívejte se, jak pomáháme tech firmám růst.
      </p>
      
      <!-- Stats row -->
      <div class="flex flex-wrap justify-center gap-8 md:gap-16 mb-12 animate-fade-in-up animation-delay-400">
        <div 
          v-for="stat in stats" 
          :key="stat.label"
          class="text-center group"
        >
          <div class="text-3xl md:text-4xl font-700 mb-2 group-hover:scale-110 transition-transform duration-300"
               :class="stat.color">
            {{ stat.value }}
          </div>
          <div class="text-gray-400 text-sm uppercase tracking-wider">{{ stat.label }}</div>
        </div>
      </div>
      
      <!-- CTA with scroll indicator -->
      <div class="animate-fade-in-up animation-delay-600">
        <p class="text-gray-400 mb-4">Prohlédněte si naše projekty</p>
        <div class="inline-flex flex-col items-center gap-4">
          <span class="text-4xl animate-bounce">⬇️</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Stat {
  value: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  {
    value: '25+',
    label: 'Projektů',
    color: 'text-primary'
  },
  {
    value: '3',
    label: 'Roky zkušeností',
    color: 'text-secondary'
  },
  {
    value: '100%',
    label: 'Spokojenost',
    color: 'text-accent'
  },
  {
    value: '15+',
    label: 'Tech firem',
    color: 'text-primary'
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

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Animation delays */
.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}
</style>