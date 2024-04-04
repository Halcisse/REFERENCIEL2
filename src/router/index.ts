import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/AccueilView.vue')
    },
    {
      path: '/',
      name: 'metier',
      component: () => import('../views/Metier.vue')
    },
    {
      path: '/',
      name: 'vision',
      component: () => import('../views/Vision.vue')
    },
    {
      path: '/',
      name: 'metier',
      component: () => import('../views/Metier.vue')
    },
    {
      path: '/',
      name: 'services',
      component: () => import('../views/Services.vue')
    },
    {
      path: '/',
      name: 'serviceplus',
      component: () => import('../views/ServicePlus.vue')
    },
    {
      path: '/',
      name: 'glossaire',
      component: () => import('../views/Glossaire.vue')
    },
    {
      path: '/',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: "/:PathMatch(.*)*",
      name: "notfound",
      component: () => import('../views/NotFound.vue'),
    },
    
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
