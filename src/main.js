import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import storiesPage from '@/pages/storiesPage/storiesPage.vue'
import router from '@/router'

createApp(App).use(store)
createApp(App).use(router).mount('#app')
createApp(storiesPage).use(router).mount('#stories')
