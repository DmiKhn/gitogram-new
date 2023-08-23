<template>
  <h2> {{ feed.username }}</h2>
  <div class="c-feed">
    <mainBlock>
      <template #mainInfo>
        <h1> {{ "Vue.js" || feed.title }}</h1>
        <p class="description" v-if="description">
          {{ "description text here" || feed.description }}
        </p>
        <buttonBlock/>
      </template>
    </mainBlock>
    <!-- <h3>stars: {{ stars }}</h3> -->
  </div>
  <toggler class="commentToggler" @onToggle="toggle" />
  <div class="comments" v-if="shown">
    <ul class="comments-list">
      <li class="comments-item" v-for="n in 5" :key="n">
        <comment text="Some text" username="John Doe"/>
      </li>
    </ul>
  </div>
  <div class="dateInfo">15 MAY</div>
</template>

<script>
  import { buttonBlock } from '../../components/buttonBlock'
  import { mainBlock } from '../../components/mainBlock'
  import { toggler } from '../toggler'
  import { comment } from '../comment'

  export default {
    name: 'Feed',
    props: {
      feed: Object
      // title: String,
      // username: String,
      // stars: String,
      // description: String
    },
    components: {
      toggler,
      comment,
      mainBlock,
      buttonBlock
    },
    data () {
      return {
        shown: false
      }
    },
    methods: {
      toggle (isOpened) {
        this.shown = isOpened
      }
    }
  }
</script>

<style lang="scss" scoped src="./feed.scss"></style>