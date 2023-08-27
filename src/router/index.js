import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/App.vue'
import Stories from '@/pages/storiesPage/storiesPage.vue'
import NotFound from '@/components/notFound/notFound.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/stories',
    component: Stories
  },
  {
    path: '/:pathMath(.*)',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router