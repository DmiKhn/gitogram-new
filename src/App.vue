<template>
  <topmenu />
  <feeds />
  <avatar />
  <feedblock />
  <feedblock />
  <feedblock />
  <feedblock />
</template>

<script>
import { avatar } from './components/avatar'
import { feeds } from './pages/feeds'
import { topmenu } from './pages/topmenu'
import { feedblock } from './pages/feedblock'

export default {
  name: 'App',
  components: {
    feeds, topmenu, feedblock, avatar
  }
}
</script>

<style src="./global.scss" lang="scss"></style>
