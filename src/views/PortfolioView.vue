<template>
  <div class="portfolio-page">
    <!-- Show project detail if selected -->
    <ProjectDetail 
      v-if="selectedProject" 
      :project="selectedProject" 
      @close="selectedProject = null" 
    />
    
    <!-- Show portfolio grid by default -->
    <template v-else>
      <PortfolioHero />
      <PortfolioGrid @project-click="handleProjectClick" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PortfolioHero, PortfolioGrid, ProjectDetail } from '@/components/portfolio';

// Project detail interface matching ProjectDetail component
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

// Basic project interface from PortfolioGrid
interface BasicProject {
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

// Reactive state
const selectedProject = ref<ProjectDetail | null>(null);

// Demo detailed project data
const projectDetails: Record<number, ProjectDetail> = {
  1: {
    id: 1,
    title: 'TechStart AI Platform',
    description: 'Kompletní brandová identita a web pro AI startup specializující se na automatizaci business procesů.',
    category: 'Startup',
    categoryBg: 'bg-blue-100 text-blue-800',
    icon: '🤖',
    imageBg: 'bg-gradient-to-br from-blue-400 to-purple-600',
    duration: '4 měsíce',
    client: 'TechStart AI s.r.o.',
    team: ['Patrik (Strategy & Development)', 'Boris (Design)', 'Smouky (Project Management)'],
    challenge: 'Mladý AI startup potřeboval etablovat se na competitive trhu a získat důvěru enterprise klientů. Problémem byla absence konzistentní brandové identity a nekonvertující web.',
    solution: 'Vytvořili jsme kompletní brand strategy zaměřenou na technologické leadership a důvěryhodnost. Navrhli jsme moderní identitu reflektující AI capabilities a vybudovali performantní web s důrazem na conversion optimization.',
    solutionFeatures: [
      'Strategický positioning jako "AI-first" solution',
      'Modern visual identity s tech estetikou',
      'Performance-optimized web s conversion tracking',
      'Automated lead nurturing sequence',
      'Technical content strategy pro thought leadership'
    ],
    results: 'Projekt výrazně posílil market position startupu a vedl k signifikantnímu růstu business metrik. Klient získal důvěru enterprise segmentu.',
    keyMetrics: [
      { label: 'Nárůst leads', value: '+300%' },
      { label: 'Conversion rate', value: '+150%' },
      { label: 'Enterprise inquiries', value: '+400%' },
      { label: 'Brand awareness', value: '+250%' }
    ],
    stats: [
      { label: 'Page Speed', value: '98/100', color: 'text-green-600' },
      { label: 'SEO Score', value: '95/100', color: 'text-blue-600' },
      { label: 'Conversion Rate', value: '8.2%', color: 'text-primary' },
      { label: 'Load Time', value: '1.2s', color: 'text-secondary' }
    ],
    technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel', 'Figma', 'Adobe CC'],
    services: ['Brand Strategy', 'Visual Identity', 'Web Development', 'SEO Optimization', 'Content Strategy']
  },
  2: {
    id: 2,
    title: 'CloudFlow SaaS',
    description: 'Redesign a rebranding pro B2B SaaS platformu zaměřenou na workflow management pro enterprise klienty.',
    category: 'SaaS',
    categoryBg: 'bg-cyan-100 text-cyan-800',
    icon: '☁️',
    imageBg: 'bg-gradient-to-br from-cyan-400 to-blue-600',
    duration: '6 měsíců',
    client: 'CloudFlow Technologies',
    team: ['Patrik (Strategy & Development)', 'Boris (UX/UI Design)', 'Smouky (Operations)'],
    challenge: 'Established SaaS platforma s outdated designem a klesající conversion rates. Potřeba repositioning pro enterprise segment a modernizace user experience.',
    solution: 'Komplexní rebrand s důrazem na enterprise credibility a user-centric design. Vytvořili jsme scalable design system a optimalizovali onboarding flow.',
    solutionFeatures: [
      'Enterprise-focused brand positioning',
      'Comprehensive design system',
      'Optimized user onboarding flow',
      'Advanced analytics implementation',
      'A/B tested conversion funnels'
    ],
    results: 'Rebranding vedl k výraznému zlepšení conversion rates a posílení pozice na enterprise trhu. Platform získala několik významných enterprise klientů.',
    keyMetrics: [
      { label: 'Conversion improvement', value: '+150%' },
      { label: 'Enterprise signups', value: '+280%' },
      { label: 'User retention', value: '+65%' },
      { label: 'Support tickets', value: '-40%' }
    ],
    stats: [
      { label: 'User Satisfaction', value: '92%', color: 'text-green-600' },
      { label: 'Performance', value: '96/100', color: 'text-blue-600' },
      { label: 'Accessibility', value: '100%', color: 'text-primary' },
      { label: 'Mobile Score', value: '94/100', color: 'text-secondary' }
    ],
    technologies: ['React', 'TypeScript', 'Styled Components', 'Node.js', 'PostgreSQL', 'AWS'],
    services: ['Rebranding', 'UX/UI Design', 'Frontend Development', 'User Research', 'Analytics Setup']
  }
  // Add more detailed projects as needed...
};

// Handle project click from grid
const handleProjectClick = (project: BasicProject) => {
  const detailedProject = projectDetails[project.id];
  if (detailedProject) {
    selectedProject.value = detailedProject;
  }
};
</script>

<style scoped>
/* Any portfolio-specific styles */
</style>