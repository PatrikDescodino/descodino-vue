<template>
  <footer class="bg-dark text-light section-padding">
    <div class="container-custom">
      <!-- Hlavní sekce footeru -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Brand sekce s mottem -->
        <div class="lg:col-span-1">
          <h4 class="text-xl font-700 mb-4">Descodino</h4>
          <p class="text-gray-light mb-4">Design + Code + Innovation</p>
          <p class="text-sm text-gray-light italic">
            "V digitálním věku nestačí být jen hezký. Musíš být chytrý, strategický a efektivní."
          </p>
        </div>

        <!-- Menu -->
        <div>
          <h4 class="text-lg font-600 mb-4">Menu</h4>
          <ul class="space-y-3 list-none">
            <li>
              <a href="/" class="text-gray-light hover:text-primary transition-colors no-underline"
                >Domů</a
              >
            </li>
            <li>
              <a
                href="/sluzby"
                class="text-gray-light hover:text-primary transition-colors no-underline"
                >Služby</a
              >
            </li>
            <li>
              <a
                href="/o-nas"
                class="text-gray-light hover:text-primary transition-colors no-underline"
                >O nás</a
              >
            </li>
            <li>
              <a
                href="/portfolio"
                class="text-gray-light hover:text-primary transition-colors no-underline"
                >Portfolio</a
              >
            </li>
          </ul>
        </div>

        <!-- Služby -->
        <div>
          <h4 class="text-lg font-600 mb-4">Naše služby</h4>
          <ul class="space-y-3 list-none">
            <li>
              <a
                href="/sluzby#tech-essentials"
                class="text-gray-light hover:text-primary transition-colors"
                >Tech Essentials</a
              >
            </li>
            <li>
              <a
                href="/sluzby#scale-ready"
                class="text-gray-light hover:text-primary transition-colors"
                >Scale Ready</a
              >
            </li>
            <li>
              <a
                href="/sluzby#market-leader"
                class="text-gray-light hover:text-primary transition-colors"
                >Market Leader</a
              >
            </li>
            <li>
              <a
                href="/roi-calculator"
                class="text-primary hover:text-primary-light transition-colors font-600"
                >📊 ROI Kalkulačka</a
              >
            </li>
          </ul>
        </div>

        <!-- Kontakt a nástroje -->
        <div>
          <h4 class="text-lg font-600 mb-4">Kontakt</h4>
          <div class="space-y-3">
            <p class="text-gray-light">
              <a
                href="mailto:patrik@descodino.studio"
                class="text-gray-light hover:text-primary transition-colors no-underline"
              >
                patrik@descodino.studio
              </a>
            </p>
            <div class="pt-4">
              <h5 class="text-sm font-600 mb-2 text-gray-light">Užitečné nástroje:</h5>
              <ul class="space-y-2 text-sm list-none">
                <li>
                  <a href="#" class="text-gray-light hover:text-primary transition-colors"
                    >Hosting doporučení</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-light hover:text-primary transition-colors"
                    >Design nástroje</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Partneři sekce -->
      <div class="border-t border-gray-600 pt-8 mb-8">
        <h4 class="text-lg font-600 mb-6 text-center">Důvěřují nám</h4>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center opacity-60">
          <!-- Placeholder pro loga partnerů -->
          <div
            class="bg-gray-700 h-12 rounded flex items-center justify-center text-xs text-gray-400"
          >
            Partner 1
          </div>
          <div
            class="bg-gray-700 h-12 rounded flex items-center justify-center text-xs text-gray-400"
          >
            Partner 2
          </div>
          <div
            class="bg-gray-700 h-12 rounded flex items-center justify-center text-xs text-gray-400"
          >
            Partner 3
          </div>
          <div
            class="bg-gray-700 h-12 rounded flex items-center justify-center text-xs text-gray-400"
          >
            Partner 4
          </div>
          <div
            class="bg-gray-700 h-12 rounded flex items-center justify-center text-xs text-gray-400"
          >
            Partner 5
          </div>
          <div
            class="bg-gray-700 h-12 rounded flex items-center justify-center text-xs text-gray-400"
          >
            Partner 6
          </div>
        </div>
      </div>

      <!-- Spodní část s právními odkazy -->
      <div class="border-t border-gray-600 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="flex flex-wrap gap-6 text-sm">
            <a href="/gdpr" class="text-gray-light hover:text-primary transition-colors">GDPR</a>
            <a
              href="/obchodni-podminky"
              class="text-gray-light hover:text-primary transition-colors"
              >Obchodní podmínky</a
            >
            <a href="/reklamacni-rad" class="text-gray-light hover:text-primary transition-colors"
              >Reklamační řád</a
            >
            <a href="/cookies" class="text-gray-light hover:text-primary transition-colors"
              >Cookies</a
            >
          </div>
          <p class="text-gray-light text-sm">&copy; 2024 Descodino. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
