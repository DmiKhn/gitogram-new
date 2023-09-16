<template>
  <h2> {{ feed.username }}</h2>
  <avatar :username="feed.owner.login" :avatar="feed.owner.avatar_url"/>
  <div class="c-feed">
    <mainBlock>
      <template #mainInfo>
        <h1> {{ feed.name }}</h1>
        <p class="description" v-if="feed.description">
          {{ feed.description }}
        </p>
        <buttonBlock :likesCount="feed.stargazers_count" :forksCount="feed.forks_count"/>
      </template>
    </mainBlock>
    <!-- <h3>stars: {{ stars }}</h3> -->
  </div>
  <toggler class="commentToggler" @onToggle="toggle" />
  <div class="comments" v-if="shown">
    <ul class="comments-list">
      <li class="comments-item" v-for="n in 5" :key="n">
        <comment :text="feed.issues_url" :username="feed.name"/>
      </li>
    </ul>
  </div>
  <div class="dateInfo">15 MAY</div>
  <span>{{ feed.issues_url }}</span>
</template>

<script>
  import { buttonBlock } from '../../components/buttonBlock'
  import { mainBlock } from '../../components/mainBlock'
  import { toggler } from '../toggler'
  import { comment } from '../comment'
  import { avatar } from '../avatar'

  export default {
    name: 'Feed',
    props: {
      feed: {
        type: Object,
        required: true
      }
    },
    components: {
      toggler,
      comment,
      mainBlock,
      buttonBlock,
      avatar
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