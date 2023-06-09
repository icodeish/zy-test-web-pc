import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect:'/container',
      children:[{
          path: '/container',
          name: 'container',
          component: () => import(/*webpackChunkName:'Components'*/ '@/components/container.vue'),
      }]
    },
  
  ]
})

export default router
