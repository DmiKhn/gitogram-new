import { createRouter, createWebHashHistory } from 'vue-router'

import storiesPage from '@/pages/storiesPage/storiesPage.vue'
import auth from '@/pages/auth/auth.vue'
import notFound from '@/components/notFound/notFound.vue'
import { feeds } from '@/pages/feeds'

const routes = [
  {
    path: '/',
    name: 'feeds',
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
  },
  {
    path: '/auth',
    component: auth,
    name: 'auth'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  try {
    const token = localStorage.getItem('token')
    const responce = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `token ${token}`
      }
    })

    if (responce.status === 401) {
      next({ name: 'auth' })
      throw new Error('Some error')
    }
    next()
  } catch (e) {
    next({ name: 'auth' })
  }
})

export default router