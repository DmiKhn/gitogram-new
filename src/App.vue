<template>
  <div class="topBlock">
    <topmenu />
    <stories />
  </div>
  <router-view />
  <div class="feedBlock">
    <feeds />
  </div>
</template>

<script>
// import { storiesPage } from './pages/storiesPage'
import { stories } from './pages/stories'
import { topmenu } from './pages/topmenu'
import { feeds } from './pages/feeds'

export default {
  name: 'App',
  components: {
    stories, topmenu, feeds
  }
}
</script>

<style src="./global.scss" lang="scss"></style>
