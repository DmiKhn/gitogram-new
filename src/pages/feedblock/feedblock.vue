<template>
  <div class="feedBlock">
    <div class="userInfo">
      <div class="avatar">
        <img src="https://via.placeholder.com/300/300" class="img" alt="username avatar">
      </div>
      <div class="userNickname">John Doe</div>
    </div>
    <feed />
    <!-- <mainBlock>
      <template #mainInfo>
        <h1>Vue.js</h1>
        <p class="description">
          Javascript framwork for building web applications
        </p>
        <buttonBlock />
      </template>
    </mainBlock>
    <div class="commentToggler">
      <feed />
    </div> -->
  </div>
</template>

<script>
  import { feed } from '../../components/feed'
  // import { buttonBlock } from '../../components/buttonBlock'
  // import { mainBlock } from '../../components/mainBlock'
  import stories from '../../pages/stories/data.json'

  export default {
    name: 'feed-item',
    components: {
      feed
    },
    data () {
      return {
        stories
      }
    }
  }
</script>

<style lang="scss" scoped src="./feedblock.scss"></style>
