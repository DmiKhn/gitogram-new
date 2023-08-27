<template>
  <div class="wrapper">
    <header class="header">
      <div class="x-container">
        <button class="logo" @click="$router.push()">
          <icon name="logo"/>
        </button>
        <button class="close-btn" @click="$router.push()">
          <icon name="close"/>
        </button>
      </div>
    </header>
    <div class="content">
      <storiesSlider />
    </div>
  </div>
</template>

<script>
  import { icon } from '../../icons'
  import { storiesSlider } from '../storiesSlider'

  export default {
    name: 'Stories Page',
    components: {
      icon,
      storiesSlider
    }
  }
</script>