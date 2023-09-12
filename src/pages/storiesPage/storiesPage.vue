<template>
  <div class="wrapper">
    <header class="header">
      <div class="x-container">
        <button class="logo" @click="$router.push('/')">
          <icon name="logo"/>
        </button>
        <button class="close-btn" @click="$router.push('/')">
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
    name: 'storiesPage',
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
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }

  .header {
    margin-bottom: 16px;
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
    display: flex;
    min-height: 93vh;
    /* width: 1000px; */
    align-items: center;
  }
</style>