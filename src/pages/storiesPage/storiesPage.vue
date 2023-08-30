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
      <storiesSlider :initialSlide="Number($route.params.initialSlide)"/>
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

<style scoped>
  .wrapper {
    background-color: black;
  }
  .x-container {
    height: 100px;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header {
    margin-bottom: 32px;
  }

  .logo {
    width: 174px;
    margin: 16px 8px 0px 8px;
    color: white;
  }

  .close-btn {
    color: white;
    margin: 16px 8px 0px 8px;
    width: 24px;
  }

  .content {
    min-height: 500px;
  }
</style>