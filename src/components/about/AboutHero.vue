<template>
  <section class="section-padding bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
    
    <div class="container-custom text-center relative z-10">
      <h1 class="heading-xl mb-6 animate-fade-in-up">
        Tři tech-native osobnosti.<br />
        Jeden <span class="text-primary animate-pulse">brandový příběh</span>.
      </h1>
      
      <p class="body-lg text-gray-700 max-w-4xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
        Descodino vzniklo z prostého uvědomění: tech firmy potřebují více než jen hezký web.
        Potřebují kompletní brandový ecosystem, který roste s jejich ambicemi.
      </p>
      
      <div class="inline-flex items-center gap-3 text-secondary font-600 animate-fade-in-up animation-delay-400">
        <span class="text-6xl animate-bounce">🦕</span>
        <span class="text-lg">Design + Code + Innovation</span>
      </div>
    </div>

    <!-- Floating decorative elements -->
    <div class="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
    <div class="absolute bottom-20 right-10 w-16 h-16 bg-secondary/10 rounded-full animate-float animation-delay-1000"></div>
    <div class="absolute top-1/2 left-1/4 w-12 h-12 bg-accent/10 rounded-full animate-float animation-delay-500"></div>
  </section>
</template>

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

.animation-delay-1000 {
  animation-delay: 1s;
}
</style>