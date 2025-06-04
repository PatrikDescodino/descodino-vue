<template>
  <section class="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
    <div class="container-custom">
      <h2 class="heading-lg text-center mb-4 animate-fade-in-up">Poznejte náš tým</h2>
      <p class="text-center text-gray-700 mb-16 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
        Tři různé osobnosti spojené společnou vizi: pomáhat tech firmám vyprávět jejich příběhy
        způsobem, který rezonuje s moderním digitálním světem.
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div 
          v-for="(member, index) in teamMembers" 
          :key="member.name"
          class="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
          :class="`animation-delay-${(index + 1) * 200}`"
        >
          <!-- Avatar with gradient background -->
          <div class="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center relative overflow-hidden group"
               :class="member.avatarBg">
            <span class="text-4xl relative z-10 group-hover:scale-110 transition-transform duration-300">
              {{ member.avatar }}
            </span>
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                 :class="member.hoverBg">
            </div>
          </div>
          
          <!-- Name and Role -->
          <h3 class="text-2xl font-700 mb-2 text-gray-800">{{ member.name }}</h3>
          <p class="font-600 mb-6 text-lg" :class="member.roleColor">{{ member.role }}</p>
          
          <!-- Details -->
          <div class="text-left space-y-4">
            <p class="text-gray-700 text-sm leading-relaxed">
              <strong class="text-gray-800">Background:</strong> {{ member.background }}
            </p>
            <p class="text-gray-700 text-sm leading-relaxed">
              <strong class="text-gray-800">Expertiza:</strong> {{ member.expertise }}
            </p>
            <p class="text-gray-700 text-sm leading-relaxed">
              <strong class="text-gray-800">Unique value:</strong> {{ member.uniqueValue }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  background: string;
  expertise: string;
  uniqueValue: string;
  avatarBg: string;
  hoverBg: string;
  roleColor: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Patrik',
    role: 'Strategy & Tech Lead',
    avatar: '👨‍💻',
    background: 'Manažerské pozice v korporátu + self-taught developer journey',
    expertise: 'Business strategie, web development, marketing automation',
    uniqueValue: 'Rozumí tech světu zevnitř - od MVPs přes product-market fit až po fundraising příběhy. Spojuje business porozumění s technickou exekucí.',
    avatarBg: 'bg-gradient-to-br from-primary/30 to-secondary/30',
    hoverBg: 'bg-gradient-to-r from-primary/20 to-secondary/20',
    roleColor: 'text-primary'
  },
  {
    name: 'Boris',
    role: 'Creative Director',
    avatar: '🎨',
    background: 'Grafické studio + osobní kreativní projekty',
    expertise: 'Visual identity, UX/UI design, brand guidelines',
    uniqueValue: 'Cit pro detail a tech estetiku. Vytváří design systémy, které nejen vypadají skvěle, ale hlavně fungují při rychlém škálování startupů.',
    avatarBg: 'bg-gradient-to-br from-secondary/30 to-primary/30',
    hoverBg: 'bg-gradient-to-r from-secondary/20 to-primary/20',
    roleColor: 'text-secondary'
  },
  {
    name: 'Smouky',
    role: 'Operations & Client Success',
    avatar: '⚡',
    background: 'Organizační talent + marketing operations',
    expertise: 'Project management, client relations, process optimization',
    uniqueValue: 'Puntičkář na 120%. Garant toho, že každý projekt proběhne přesně podle plánu a klienti dostanou více, než očekávali.',
    avatarBg: 'bg-gradient-to-br from-primary/30 to-secondary/30',
    hoverBg: 'bg-gradient-to-r from-primary/20 to-secondary/20',
    roleColor: 'text-primary'
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