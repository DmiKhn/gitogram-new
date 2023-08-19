<template #headline>
  <div class="topmenu">
    <div class="rightBlock">Gitogram /</div>
    <div class="leftBlock">
      <div class="icon">
        <icon name="home" />
      </div>
      <div class="avatar">
        <img src="https://via.placeholder.com/300/300" class="img" alt="username avatar">
      </div>
      <div class="icon">
        <icon name="back" />
      </div>
    </div>
  </div>
</template>

<script>
  import { icon } from '../../icons'

  export default {
    name: 'headline',
    components: {
      icon
    },
    props: {
      avatar: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped src="./topmenu.scss"></style>