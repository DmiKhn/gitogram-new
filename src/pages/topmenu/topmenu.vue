<template #headline>
  <div class="topmenu">
    <div class="rightBlock">
      <!-- <router-link class="icon-right" to="/stories">
        <icon name="logo" />
      </router-link> -->
      <button class="icon-right">
        <icon name="logo" />
      </button>
    </div>
    <div class="leftBlock">
      <button class="icon-left">
        <icon name="home" />
      </button>
      <button class="avatar">
        <img src="https://via.placeholder.com/300/300" class="img" alt="username avatar">
      </button>
      <button class="icon-left">
        <icon name="back" />
      </button>
    </div>
  </div>
</template>

<script>
  import { icon } from '../../icons'

  export default {
    name: 'headline',
    components: {
      icon
    }
  }
</script>

<style lang="scss" scoped src="./topmenu.scss"></style>