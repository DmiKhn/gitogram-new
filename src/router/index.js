import { createRouter, createWebHashHistory } from 'vue-router'

import storiesPage from '@/pages/storiesPage/storiesPage.vue'
import notFound from '@/components/notFound/notFound.vue'
import { feeds } from '@/pages/feeds'

const routes = [
  {
    path: '/',
    component: feeds
  },
  {
    path: '/stories/:initialSlide',
    component: storiesPage,
    name: 'stories'
  },
  {
    path: '/:pathMath(.*)',
    component: notFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router