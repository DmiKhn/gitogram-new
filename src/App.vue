<template>
  <RouterView />
  <div class="topBlock">
    <topmenu />
    <stories />
  </div>
  <div class="feedBlock">
    <!-- <sliderItem /> -->
    <feeds />
  </div>
</template>

<script>
import { stories } from './pages/stories'
import { topmenu } from './pages/topmenu'
import { feeds } from './pages/feeds'
// import { spinner } from './components/spinner'
// import { sliderItem } from './components/sliderItem'

export default {
  name: 'App',
  components: {
    stories, topmenu, feeds
  }
}
</script>

<style src="./global.scss" lang="scss"></style>
