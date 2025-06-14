import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sluzby',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
    },
    {
      path: '/o-nas',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortfolioView.vue'),
    },
  ],
})

export default router
