<template>
  <div class="about-page">
    <!-- Hero Section -->
    <!-- Hero Section -->
    <section
      class="section-padding bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"
      ></div>
      <div class="container-custom text-center relative z-10">
        <h1 class="heading-xl mb-6 animate-fade-in-up">
          Tři tech-native osobnosti.<br />
          Jeden <span class="text-primary animate-pulse">brandový příběh</span>.
        </h1>
        <p
          class="body-lg text-gray-700 max-w-4xl mx-auto mb-8 animate-fade-in-up animation-delay-200"
        >
          Descodino vzniklo z prostého uvědomění: tech firmy potřebují více než jen hezký web.
          Potřebují kompletní brandový ecosystem, který roste s jejich ambicemi.
        </p>
        <div
          class="inline-flex items-center gap-3 text-secondary font-600 animate-fade-in-up animation-delay-400"
        >
          <span class="text-6xl animate-bounce">🦕</span>
          <span class="text-lg">Design + Code + Innovation</span>
        </div>
      </div>

      <!-- Floating elements -->
      <div class="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div
        class="absolute bottom-20 right-10 w-16 h-16 bg-secondary/10 rounded-full animate-float animation-delay-1000"
      ></div>
      <div
        class="absolute top-1/2 left-1/4 w-12 h-12 bg-accent/10 rounded-full animate-float animation-delay-500"
      ></div>
    </section>

    <!-- Origin Story -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-6xl mx-auto">
          <h2 class="heading-lg text-center mb-12 animate-fade-in-up">Jak vzniklo Descodino</h2>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              <div
                class="p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl transform hover:scale-105 transition-all duration-300 animate-slide-in-left"
              >
                <h3 class="text-xl font-700 mb-4 text-primary">
                  Začátek: Python kurz a nečekané objevy
                </h3>
                <p class="text-gray-700 leading-relaxed">
                  Všechno začalo Patrikovým rozhodnutím změnit kariéru. Po letech v manažerských
                  pozicích si zapsal Python kurz s cílem stát se programátorem. HTML a CSS, které
                  získal jako bonus, ho však zavedly na jinou cestu.
                </p>
              </div>

              <div
                class="p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl transform hover:scale-105 transition-all duration-300 animate-slide-in-left animation-delay-200"
              >
                <h3 class="text-xl font-700 mb-4 text-secondary">První weby a rostoucí poptávka</h3>
                <p class="text-gray-700 leading-relaxed">
                  Z vedlejší činnosti se rychle stal plný úvazek. Zákazníci přibývali a Patrik
                  zjistil, že tech firmy nepotřebují jen weby - potřebují kompletní brandový
                  přístup. Rozhodl se využít své manažerské a projekťácké zkušenosti z korporátu.
                </p>
              </div>

              <div
                class="p-8 bg-gradient-to-r from-pink-50 to-orange-50 rounded-2xl transform hover:scale-105 transition-all duration-300 animate-slide-in-left animation-delay-400"
              >
                <h3 class="text-xl font-700 mb-4 text-primary">Rozšíření týmu: Boris a Smouky</h3>
                <p class="text-gray-700 leading-relaxed">
                  Jeden člověk nemůže zvládnout vše. Boris přinesl grafický cit a detailnost, Smouky
                  pak organizační génius a puntičkářství na 120%. Tak vznikl tým, který kombinuje
                  strategii, kreativitu a preciznost.
                </p>
              </div>
            </div>

            <div class="relative animate-slide-in-right">
              <div
                class="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-12 h-full relative overflow-hidden"
              >
                <div class="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
                <div class="text-center relative z-10">
                  <div class="text-9xl mb-8 animate-spin-slow">🦕</div>
                  <h3 class="text-3xl font-700 mb-6 text-gray-800">Design + Code + Innovation</h3>
                  <p class="text-gray-700 text-lg leading-relaxed">
                    Název Descodino není náhoda - vychází z našich tří pilířů, které tvoří DNA
                    každého projektu.
                  </p>
                </div>
                <!-- Decorative elements -->
                <div
                  class="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"
                ></div>
                <div
                  class="absolute bottom-4 left-4 w-6 h-6 bg-secondary/20 rounded-full animate-pulse animation-delay-500"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div class="container-custom">
        <h2 class="heading-lg text-center mb-4 animate-fade-in-up">Poznejte náš tým</h2>
        <p
          class="text-center text-gray-700 mb-16 max-w-3xl mx-auto animate-fade-in-up animation-delay-200"
        >
          Tři různé osobnosti spojené společnou vizi: pomáhat tech firmám vyprávět jejich příběhy
          způsobem, který rezonuje s moderním digitálním světem.
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Patrik -->
          <div
            class="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
          >
            <div
              class="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center relative overflow-hidden group"
            >
              <span
                class="text-4xl relative z-10 group-hover:scale-110 transition-transform duration-300"
                >👨‍💻</span
              >
              <div
                class="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </div>
            <h3 class="text-2xl font-700 mb-2 text-gray-800">Patrik</h3>
            <p class="text-primary font-600 mb-6 text-lg">Strategy & Tech Lead</p>
            <div class="text-left space-y-4">
              <p class="text-gray-700 text-sm leading-relaxed">
                <strong class="text-gray-800">Background:</strong> Manažerské pozice v korporátu +
                self-taught developer journey
              </p>
              <p class="text-gray-700 text-sm leading-relaxed">
                <strong class="text-gray-800">Expertiza:</strong> Business strategie, web
                development, marketing automation
              </p>
              <p class="text-gray-700 text-sm leading-relaxed">
                <strong class="text-gray-800">Unique value:</strong> Rozumí tech světu zevnitř - od
                MVPs přes product-market fit až po fundraising příběhy. Spojuje business porozumění
                s technickou exekucí.
              </p>
            </div>
          </div>

          <!-- Boris -->
          <div
            class="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-200"
          >
            <div
              class="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 flex items-center justify-center relative overflow-hidden group"
            >
              <span
                class="text-4xl relative z-10 group-hover:scale-110 transition-transform duration-300"
                >🎨</span
              >
              <div
                class="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </div>
            <h3 class="text-2xl font-700 mb-2 text-gray-800">Boris</h3>
            <p class="text-secondary font-600 mb-6 text-lg">Creative Director</p>
            <div class="text-left space-y-4">
              <p class="text-gray-700 text-sm leading-relaxed">
                <strong class="text-gray-800">Background:</strong> Grafické studio + osobní
                kreativní projekty
              </p>
              <p class="text-gray-700 text-sm leading-relaxed">
                <strong class="text-gray-800">Expertiza:</strong> Visual identity, UX/UI design,
                brand guidelines
              </p>
              <p class="text-gray-700 text-sm leading-relaxed">
                <strong class="text-gray-800">Unique value:</strong> Cit pro detail a tech estetiku.
                Vytváří design systémy, které nejen vypadají skvěle, ale hlavně fungují při rychlém
                škálování startupů.
              </p>
            </div>
          </div>

          <!-- Smouky -->
          <div
            class="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-400"
          >
            <div
              class="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center relative overflow-hidden group"
            >
              <span
                class="text-4xl relative z-10 group-hover:scale-110 transition-transform duration-300"
                >⚡</span
              >
              <div
                class="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </div>
            <h3 class="text-2xl font-700 mb-2 text-gray-800">Smouky</h3>
            <p class="text-primary font-600 mb-6 text-lg">Operations & Client Success</p>
            <div class="text-left space-y-4">
              <p class="text-gray-700 text-sm leading-relaxed">
                <strong class="text-gray-800">Background:</strong> Organizační talent + marketing
                operations
              </p>
              <p class="text-gray-700 text-sm leading-relaxed">
                <strong class="text-gray-800">Expertiza:</strong> Project management, client
                relations, process optimization
              </p>
              <p class="text-gray-700 text-sm leading-relaxed">
                <strong class="text-gray-800">Unique value:</strong> Puntičkář na 120%. Garant toho,
                že každý projekt proběhne přesně podle plánu a klienti dostanou více, než očekávali.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <h2 class="heading-lg text-center mb-16 animate-fade-in-up">Design + Code + Innovation</h2>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Design -->
          <div class="text-center p-10 group animate-fade-in-up">
            <div
              class="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-primary/20 to-primary/30 rounded-3xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
            >
              <span class="text-4xl">🎨</span>
            </div>
            <h3
              class="text-3xl font-700 mb-6 text-primary group-hover:text-primary/80 transition-colors duration-300"
            >
              DESign
            </h3>
            <p class="text-gray-700 mb-8 leading-relaxed text-lg">
              Krásná a funkční vizuální identita, která odráží DNA tech firmy. Nejen hezká, ale
              strategicky promyšlená.
            </p>
            <ul class="text-gray-700 space-y-3 text-left bg-gray-50 p-6 rounded-2xl">
              <li class="flex items-center gap-3">
                <span class="text-primary">•</span>
                Brand strategy & positioning
              </li>
              <li class="flex items-center gap-3">
                <span class="text-primary">•</span>
                Visual identity systems
              </li>
              <li class="flex items-center gap-3">
                <span class="text-primary">•</span>
                UX/UI pro tech produkty
              </li>
              <li class="flex items-center gap-3">
                <span class="text-primary">•</span>
                Scalable design systems
              </li>
            </ul>
          </div>

          <!-- Code -->
          <div class="text-center p-10 group animate-fade-in-up animation-delay-200">
            <div
              class="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-secondary/20 to-secondary/30 rounded-3xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
            >
              <span class="text-4xl">⚡</span>
            </div>
            <h3
              class="text-3xl font-700 mb-6 text-secondary group-hover:text-secondary/80 transition-colors duration-300"
            >
              CODe
            </h3>
            <p class="text-gray-700 mb-8 leading-relaxed text-lg">
              Technologická vyspělost a digitální inteligence. Weby a aplikace, které nejen vypadají
              skvěle, ale také performují.
            </p>
            <ul class="text-gray-700 space-y-3 text-left bg-gray-50 p-6 rounded-2xl">
              <li class="flex items-center gap-3">
                <span class="text-secondary">•</span>
                Modern web development
              </li>
              <li class="flex items-center gap-3">
                <span class="text-secondary">•</span>
                Performance optimization
              </li>
              <li class="flex items-center gap-3">
                <span class="text-secondary">•</span>
                Marketing automation
              </li>
              <li class="flex items-center gap-3">
                <span class="text-secondary">•</span>
                Analytics & tracking
              </li>
            </ul>
          </div>

          <!-- Innovation -->
          <div class="text-center p-10 group animate-fade-in-up animation-delay-400">
            <div
              class="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-accent/20 to-accent/30 rounded-3xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
            >
              <span class="text-4xl">🚀</span>
            </div>
            <h3
              class="text-3xl font-700 mb-6 text-accent group-hover:text-accent/80 transition-colors duration-300"
            >
              INOvation
            </h3>
            <p class="text-gray-700 mb-8 leading-relaxed text-lg">
              Inovativní přístupy a řešení. AI nástroje, growth hacking a tech stack optimalizace
              pro rychle rostoucí firmy.
            </p>
            <ul class="text-gray-700 space-y-3 text-left bg-gray-50 p-6 rounded-2xl">
              <li class="flex items-center gap-3">
                <span class="text-accent">•</span>
                AI-powered tools
              </li>
              <li class="flex items-center gap-3">
                <span class="text-accent">•</span>
                Growth optimization
              </li>
              <li class="flex items-center gap-3">
                <span class="text-accent">•</span>
                Tech stack consulting
              </li>
              <li class="flex items-center gap-3">
                <span class="text-accent">•</span>
                Future-proof architecture
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Statement -->
    <section class="section-padding bg-gray-50 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-100"></div>
      <div class="container-custom text-center relative z-10">
        <div class="max-w-5xl mx-auto space-y-12">
          <!-- First text - slides from left -->
          <h2 class="text-4xl lg:text-5xl font-700 animate-slide-right-collision mission-text">
            Jaká je naše mise?
          </h2>

          <!-- Second text - slides from right -->
          <blockquote
            class="text-2xl lg:text-3xl font-300 italic animate-slide-left-collision mission-text"
          >
            "Pomáhat ambiciózním tech firmám najít svou digitální identitu a naučit je, jak s ní
            efektivně pracovat."
          </blockquote>
        </div>
      </div>

      <!-- Floating background elements -->
      <div class="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full animate-float"></div>
      <div
        class="absolute bottom-10 right-10 w-24 h-24 bg-secondary/5 rounded-full animate-float animation-delay-1000"
      ></div>
    </section>

    <!-- Mission Statement -->
    <section class="section-padding bg-gray-50 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-100"></div>
      <div class="container-custom text-center relative z-10">
        <div class="max-w-5xl mx-auto space-y-12">
          <!-- First text - slides from left -->
          <h2 class="text-4xl lg:text-5xl font-700 animate-slide-right-collision mission-text">
            Jaká je naše mise?
          </h2>

          <!-- Second text - slides from right -->
          <blockquote
            class="text-2xl lg:text-3xl font-300 italic animate-slide-left-collision mission-text"
          >
            "Pomáhat ambiciózním tech firmám najít svou digitální identitu a naučit je, jak s ní
            efektivně pracovat."
          </blockquote>
        </div>
      </div>

      <!-- Floating background elements -->
      <div class="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full animate-float"></div>
      <div
        class="absolute bottom-10 right-10 w-24 h-24 bg-secondary/5 rounded-full animate-float animation-delay-1000"
      ></div>
    </section>

    <!-- CTA Section - Redesigned with 4 Action Cards -->
    <section class="section-padding bg-dark text-light relative overflow-hidden">
      <!-- Red gradient sides -->
      <div class="absolute inset-0">
        <div
          class="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-primary to-transparent opacity-20"
        ></div>
        <div
          class="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-primary to-transparent opacity-20"
        ></div>
      </div>

      <div class="container-custom text-center relative z-10">
        <h2 class="heading-lg mb-8 text-white animate-fade-in-up">Připraveni na váš příběh?</h2>
        <p
          class="body-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200"
        >
          Každá tech firma má jedinečný příběh. My vám pomůžeme ho vyprávět způsobem, který rezonuje
          s vaší cílovou skupinou a podporuje váš růst.
        </p>
        <router-link
          to="/contact"
          class="inline-flex items-center gap-3 bg-accent hover:bg-red-700 text-white px-12 py-6 rounded-xl font-600 text-xl transition-colors duration-300 animate-fade-in-up animation-delay-400"
        >
          <span>Pojďme si promluvit</span>
          <span class="text-2xl">→</span>
        </router-link>
      </div>
    </section>
  </div>
</template>

<style>
/* Custom animations for About page */
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

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Collision animations for mission statement */
@keyframes slideRightCollision {
  0% {
    transform: translateX(-100vw);
    opacity: 0;
    color: #374151;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  22% {
    transform: translateX(-10px);
    opacity: 1;
    color: #374151;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  25% {
    transform: translateX(0);
    color: #22c55e; /* green-500 */
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  }
  50% {
    transform: translateX(0);
    color: #22c55e;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  }
  72% {
    transform: translateX(-10px);
    opacity: 1;
    color: #374151;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  75% {
    transform: translateX(0);
    color: #374151;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  100% {
    transform: translateX(-100vw);
    opacity: 0;
    color: #374151;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
}

@keyframes slideLeftCollision {
  0% {
    transform: translateX(100vw);
    opacity: 0;
    color: #374151;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  22% {
    transform: translateX(10px);
    opacity: 1;
    color: #374151;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  25% {
    transform: translateX(0);
    color: #ef4444; /* red-500 */
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  }
  50% {
    transform: translateX(0);
    color: #ef4444;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  }
  72% {
    transform: translateX(10px);
    opacity: 1;
    color: #374151;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  75% {
    transform: translateX(0);
    color: #374151;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  100% {
    transform: translateX(100vw);
    opacity: 0;
    color: #374151;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  }
}

/* Animation classes */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out forwards;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

/* Mission text styling */
.mission-text {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  color: #374151; /* gray-700 */
}

.animate-slide-right-collision {
  animation: slideRightCollision 8s ease-in-out infinite;
}

.animate-slide-left-collision {
  animation: slideLeftCollision 8s ease-in-out infinite;
  animation-delay: 0.5s;
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

/* Initially hidden for animations */
.animate-fade-in-up,
.animate-slide-in-left,
.animate-slide-in-right,
.animate-slide-right-collision,
.animate-slide-left-collision {
  opacity: 0;
}
</style>
