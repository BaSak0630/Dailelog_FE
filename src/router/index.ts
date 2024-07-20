import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ReadView from '@/views/ReadView.vue'
import WriteView from '@/views/WriteView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/write',
      name: 'write',
      component: WriteView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/post/:postId',
      name: 'post',
      component: ReadView,
      props: true
    }
  ]
})

export default router
