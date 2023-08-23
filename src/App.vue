<template>
  <div class="topBlock">
    <topmenu />
    <stories />
  </div>
  <div class="feedBlock">
    <feeds />
    <!-- <feedblock />
    <feedblock />
    <feedblock /> -->
  </div>
</template>

<script>
// import { avatar } from './components/avatar'
import { stories } from './pages/stories'
import { topmenu } from './pages/topmenu'
import { feeds } from './pages/feeds'
// import { sliderItem } from './components/sliderItem'

export default {
  name: 'App',
  components: {
    stories, topmenu, feeds
  }
}
</script>

<style src="./global.scss" lang="scss"></style>
