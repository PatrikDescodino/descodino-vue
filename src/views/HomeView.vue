<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="min-h-screen flex-center text-center relative">
      <div class="container-custom">
        <h1 class="heading-xl mb-6">
          Pomáháme tech firmám vyprávět<br />
          <span class="text-primary">příběhy, které prodávají</span>
        </h1>
        <p class="body-lg text-gray-dark max-w-3xl mx-auto mb-8">
          Transformujeme tech značky z neviditelných na nezapomenutelné pomocí strategického
          brandingu a digitální inovace. Specializujeme se na startupy, SaaS firmy a tech
          společnosti, které chtějí růst.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button class="btn-large" @click="$emit('openContactModal')">
            Začít brandingovou transformaci
          </button>
          <RouterLink to="/sluzby" class="text-primary font-600 hover:underline text-lg">
            Prozkoumat balíčky →
          </RouterLink>
        </div>

        <!-- Scroll Indicator -->
        <div
          class="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
          @click="scrollToNextSection"
          @mouseenter="scrollToNextSection"
          @touchstart="scrollToNextSection"
        >
          <svg
            class="w-8 h-8 text-primary group-hover:text-secondary animate-bounce group-hover:scale-110 transition-all duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </section>

    <!-- Problem/Solution Section -->
    <section id="problem-solution" class="section-padding bg-light">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          <div class="space-y-6 flex flex-col justify-between">
            <div>
              <h2 class="heading-lg text-primary mb-6">Proč tech firmy zůstávají neviditelné?</h2>
              <div class="space-y-4">
                <p class="body-lg text-gray-dark">
                  Máte skvělý produkt, ale
                  <strong class="text-dark">vypadáte jako každá jiná tech firma</strong>. Investoři
                  vás přehlížejí při fundraisingu. Top talenti volí konkurenci s lepším brandem.
                  Vaše konverze jsou nízké, protože návštěvníci nevědí, proč si vybrat právě vás.
                </p>
                <p
                  class="body-lg text-gray-dark italic bg-red-50 p-4 rounded-lg border-l-4 border-primary"
                >
                  "Problém není ve vašem produktu. Problém je v tom, jak o něm vyprávíte."
                </p>
              </div>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4 pt-6">
              <div class="text-center">
                <div class="text-2xl font-800 text-primary">73%</div>
                <div class="text-sm text-gray-dark">startup failuje kvůli špatnému brandingu</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-800 text-primary">5x</div>
                <div class="text-sm text-gray-dark">vyšší valuace u silných brandů</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-800 text-primary">60%</div>
                <div class="text-sm text-gray-dark">nižší CAC u brandovaných firem</div>
              </div>
            </div>
          </div>

          <div class="space-y-6 flex flex-col justify-between">
            <div>
              <h2 class="heading-lg text-secondary mb-6">Jak tech firmám pomáháme vyniknout</h2>
              <div class="space-y-4">
                <p class="body-lg text-gray-dark">
                  Vytváříme <strong class="text-dark">brandové příběhy, které prodávají</strong>.
                  Naše značky mají charakter, směr a digitální inteligenci. Kombinujeme strategický
                  branding s technickou excelencí - rozumíme vašemu světu a mluvíme vaším jazykem.
                </p>
                <p class="body-lg text-gray-dark">
                  <strong class="text-dark">Výsledek?</strong> Brand, který investory zaujme,
                  talenty přiláká a zákazníky přesvědčí.
                </p>
              </div>
            </div>

            <!-- Process Steps -->
            <div class="space-y-3 pt-6">
              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 bg-secondary text-light rounded-full flex-center text-sm font-700"
                >
                  1
                </div>
                <span class="text-dark font-600">Strategická analýza a positioning</span>
              </div>
              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 bg-secondary text-light rounded-full flex-center text-sm font-700"
                >
                  2
                </div>
                <span class="text-dark font-600">Kreativní koncept a design systém</span>
              </div>
              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 bg-secondary text-light rounded-full flex-center text-sm font-700"
                >
                  3
                </div>
                <span class="text-dark font-600">Technická implementace a launch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-lg mb-4">Jak pomáháme tech firmám růst</h2>
          <p class="body-lg text-gray-dark max-w-3xl mx-auto">
            Tři balíčky navržené pro různé fáze růstu vaší tech firmy. Od startupu po market
            leadership.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-stretch">
          <!-- Tech Essentials -->
          <div
            class="bg-light p-8 rounded-lg shadow-sm border-2 border-transparent hover:border-secondary hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <div class="mb-6">
              <span class="bg-secondary text-light px-3 py-1 rounded-full text-sm font-600"
                >Starter</span
              >
            </div>
            <h3 class="text-2xl font-700 mb-4 group-hover:text-secondary transition-colors">
              Tech Essentials
            </h3>
            <p class="text-gray-dark mb-6">
              Pro startupy a menší tech firmy, které potřebují
              <strong>profesionální brandový základ</strong>
              pro fundraising a růst.
            </p>

            <ul class="space-y-2 mb-6 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-secondary mt-1">✓</span>
                <span>Tech-focused brand strategie & positioning</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-secondary mt-1">✓</span>
                <span>Moderní vizuální identita & logo design</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-secondary mt-1">✓</span>
                <span>Responzivní web s CMS (8-12 stránek)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-secondary mt-1">✓</span>
                <span>Kompletní brand guidelines</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-secondary mt-1">✓</span>
                <span>Investor-ready materials</span>
              </li>
            </ul>

            <div class="border-t pt-6 mt-auto">
              <div class="text-3xl font-800 text-primary mb-2">
                <span class="text-lg font-400 text-gray-dark">od</span> 180 000 Kč
              </div>
              <p class="text-sm text-gray-dark mb-6">
                Ideální pro: Pre-seed/Seed startupy, 10-30 lidí
              </p>
              <RouterLink
                to="/sluzby#tech-essentials"
                class="btn-primary text-center block px-6 py-3 group-hover:bg-secondary group-hover:border-secondary transition-colors"
              >
                Prozkoumat balíček
              </RouterLink>
            </div>
          </div>

          <!-- Scale Ready - Featured (větší) -->
          <div
            class="bg-light p-8 rounded-lg shadow-md border-2 border-primary transform scale-102 relative hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer group"
          >
            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span class="bg-primary text-light px-4 py-1 rounded-full text-sm font-600"
                >Nejoblíbenější</span
              >
            </div>
            <div class="mb-6 pt-4">
              <span class="bg-primary text-light px-3 py-1 rounded-full text-sm font-600"
                >Growth</span
              >
            </div>
            <h3 class="text-2xl font-700 mb-4 group-hover:text-primary transition-colors">
              Scale Ready
            </h3>
            <p class="text-gray-dark mb-6">
              Pro tech firmy připravené na <strong>rychlý růst a Series A</strong>. Komplexní
              brandový ekosystém pro škálování.
            </p>

            <ul class="space-y-2 mb-6 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-primary mt-1">✓</span>
                <span><strong>Vše z Tech Essentials balíčku</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-primary mt-1">✓</span>
                <span>Advanced website s integracemi</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-primary mt-1">✓</span>
                <span>Marketing automation & lead scoring</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-primary mt-1">✓</span>
                <span>Employee brand kit & advocacy program</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-primary mt-1">✓</span>
                <span>Growth marketing setup</span>
              </li>
            </ul>

            <div class="border-t pt-6 mt-auto">
              <div class="text-3xl font-800 text-primary mb-2">
                <span class="text-lg font-400 text-gray-dark">od</span> 280 000 Kč
              </div>
              <p class="text-sm text-gray-dark mb-6">Ideální pro: Series A firmy, 30-80 lidí</p>
              <RouterLink
                to="/sluzby#scale-ready"
                class="btn-primary text-center block px-6 py-3 group-hover:bg-red-700 transition-colors"
              >
                Vybrat tento balíček
              </RouterLink>
            </div>
          </div>

          <!-- Market Leader -->
          <div
            class="bg-light p-8 rounded-lg shadow-sm border-2 border-transparent hover:border-secondary hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <div class="mb-6">
              <span class="bg-secondary text-light px-3 py-1 rounded-full text-sm font-600"
                >Enterprise</span
              >
            </div>
            <h3 class="text-2xl font-700 mb-4 group-hover:text-secondary transition-colors">
              Market Leader
            </h3>
            <p class="text-gray-dark mb-6">
              Pro tech firmy s <strong>ambicemi na tržní dominanci</strong>
              a mezinárodní úspěch.
            </p>

            <ul class="space-y-2 mb-6 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-secondary mt-1">✓</span>
                <span><strong>Vše ze Scale Ready balíčku</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-secondary mt-1">✓</span>
                <span>Multi-market brand adaptace</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-secondary mt-1">✓</span>
                <span>Kompletní digitální ekosystém</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-secondary mt-1">✓</span>
                <span>Product sub-branding strategie</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-secondary mt-1">✓</span>
                <span>6 měsíců strategických konzultací</span>
              </li>
            </ul>

            <div class="border-t pt-6 mt-auto">
              <div class="text-3xl font-800 text-primary mb-2">
                <span class="text-lg font-400 text-gray-dark">od</span> 420 000 Kč
              </div>
              <p class="text-sm text-gray-dark mb-6">
                Ideální pro: Series B+, 80+ lidí, IPO příprava
              </p>
              <RouterLink
                to="/sluzby#market-leader"
                class="btn-primary text-center block px-6 py-3 group-hover:bg-secondary group-hover:border-secondary transition-colors"
              >
                Prozkoumat balíček
              </RouterLink>
            </div>
          </div>
        </div>

        <div class="text-center">
          <p class="text-gray-dark mb-4">Nevíte, který balíček je pro vás?</p>
          <RouterLink to="/sluzby" class="text-primary font-600 hover:underline text-lg">
            Porovnejte všechny balíčky a vypočítejte si ROI →
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section-padding bg-light">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-lg mb-4">Tým, který tech brandingu rozumí</h2>
          <p class="body-lg text-gray-dark max-w-3xl mx-auto">
            Jsme tři různé osobnosti spojené láskou k brandingu a technologiím. Každý z nás přináší
            desetiletí zkušeností z tech světa.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <!-- Patrik -->
          <div class="text-center group">
            <div
              class="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 overflow-hidden border-4 border-transparent group-hover:border-secondary transition-all duration-300"
            >
              <div class="w-full h-full flex-center text-6xl">👨‍💻</div>
            </div>
            <h3 class="text-2xl font-700 mb-2">Patrik</h3>
            <p class="text-secondary font-600 mb-4">Strategy & Tech Lead</p>
            <p class="text-gray-dark mb-4">
              Spojuje business strategii s technickou exekucí. Rozumí tech světu, protože v něm žije
              - od MVPs přes product-market fit až po IPO příběhy.
            </p>
            <div class="text-sm text-gray-600 italic">
              ⚡ Fun fact: Dokáže nakódovat funkční prototyp rychleji, než sní pizzu (a pizzu sní
              docela rychle)
            </div>
          </div>

          <!-- Boris -->
          <div class="text-center group">
            <div
              class="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden border-4 border-transparent group-hover:border-primary transition-all duration-300"
            >
              <div class="w-full h-full flex-center text-6xl">🎨</div>
            </div>
            <h3 class="text-2xl font-700 mb-2">Boris</h3>
            <p class="text-primary font-600 mb-4">Creative Director</p>
            <p class="text-gray-dark mb-4">
              Vizuální perfekcionista s citem pro tech estetiku. Vytváří design systémy, které nejen
              dobře vypadají, ale hlavně fungují při rychlém škálování.
            </p>
            <div class="text-sm text-gray-600 italic">
              🎨 Fun fact: Má sbírku 500+ fontů, ale v produkci používá jen 10 (zbytek je "pro
              inspiraci")
            </div>
          </div>

          <!-- Smouky -->
          <div class="text-center group">
            <div
              class="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 overflow-hidden border-4 border-transparent group-hover:border-secondary transition-all duration-300"
            >
              <div class="w-full h-full flex-center text-6xl">📊</div>
            </div>
            <h3 class="text-2xl font-700 mb-2">Smouky</h3>
            <p class="text-secondary font-600 mb-4">Operations & Client Success</p>
            <p class="text-gray-dark mb-4">
              Hlas rozumu v týmu a garant toho, že vše proběhne podle plánu. Specialista na project
              management a optimalizaci procesů pro tech prostředí.
            </p>
            <div class="text-sm text-gray-600 italic">
              📊 Fun fact: Excel tabulky a Gantt charts organizuje i ve volném čase. Jeho koníček je
              optimalizace čehokoli
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <RouterLink to="/o-nas" class="text-primary font-600 hover:underline text-lg">
            Poznejte náš kompletní příběh a hodnoty →
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Social Proof Section -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-lg mb-4">Naši klienti dosahují výsledků</h2>
          <p class="body-lg text-gray-dark">
            Reálné příběhy tech firem, které transformovaly svůj brand s Descodino
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div class="bg-light p-6 rounded-lg">
            <div class="mb-4">
              <div class="flex text-secondary">★★★★★</div>
            </div>
            <blockquote class="text-gray-dark mb-4 italic">
              "Descodino nám pomohlo vytvořit brand, který konečně odráží kvalitu našeho AI
              produktu. Po rebrandingu si nás investoři začali všímat a úspěšně jsme uzavřeli Series
              A."
            </blockquote>
            <cite class="block font-600 text-dark">Jan Novák</cite>
            <span class="text-sm text-gray-600">CEO & Founder, TechStartup AI</span>
          </div>

          <!-- Testimonial 2 -->
          <div class="bg-light p-6 rounded-lg">
            <div class="mb-4">
              <div class="flex text-secondary">★★★★★</div>
            </div>
            <blockquote class="text-gray-dark mb-4 italic">
              "Profesionální přístup, skvělé výsledky. Náš nový brand a web zvýšil konverze o 150% a
              konečně vypadáme jako enterprise-ready SaaS."
            </blockquote>
            <cite class="block font-600 text-dark">Marie Svobodová</cite>
            <span class="text-sm text-gray-600">CMO, DataCorp</span>
          </div>

          <!-- Testimonial 3 -->
          <div class="bg-light p-6 rounded-lg">
            <div class="mb-4">
              <div class="flex text-secondary">★★★★★</div>
            </div>
            <blockquote class="text-gray-dark mb-4 italic">
              "Konečně máme brand, který vypadá stejně dobře jako náš fintech produkt funguje.
              Descodino chápe tech svět a ví, jak na něj cílit."
            </blockquote>
            <cite class="block font-600 text-dark">Tomáš Dvořák</cite>
            <span class="text-sm text-gray-600">Founder, FinTech Solutions</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-dark text-light text-center relative overflow-hidden">
      <!-- Red gradient sides -->
      <div class="absolute inset-0">
        <div
          class="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-primary to-transparent opacity-20"
        ></div>
        <div
          class="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-primary to-transparent opacity-20"
        ></div>
      </div>

      <div class="container-custom relative z-10">
        <h2 class="heading-lg mb-6 text-light">Připraveni transformovat váš tech brand?</h2>
        <p class="body-lg mb-12 max-w-3xl mx-auto text-gray-300">
          Každý úspěšný tech příběh začíná rozhodnutím investovat do brandingu. Začněte svou
          transformaci ještě dnes s bezplatnou strategickou konzultací.
        </p>
        <div class="space-y-4">
          <button
            class="btn-large bg-primary text-light hover:bg-red-700 hover:transform hover:translate-y--2px hover:shadow-2xl transition-all duration-300"
            @click="$emit('openContactModal')"
          >
            Naplánovat strategickou konzultaci zdarma
          </button>
          <div class="text-gray-400">
            <RouterLink
              to="/sluzby"
              class="text-secondary font-600 hover:text-white hover:underline transition-colors"
            >
              Nebo si nejdřív prohlédněte naše balíčky →
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  openContactModal: []
}>()

// Smooth scroll to next section
const scrollToNextSection = () => {
  const problemSection = document.getElementById('problem-solution')
  if (problemSection) {
    problemSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
</script>
