import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContadorView from '@/components/ContadorView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contador',
      name: 'contador',
      component: ContadorView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    
  ]
})

export default router
