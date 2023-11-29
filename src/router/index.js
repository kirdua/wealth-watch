import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/Home.vue')
const About = () => import('@/views/about/About.vue')
const Commodities = () => import('@/views/commodities/Commodities.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/commodities',
      name: 'commodities',
      component: Commodities
    },
    {
      path: '/:catchAll(.*)*',
      redirect: { name: 'home' }
    }
  ]
})

export default router
