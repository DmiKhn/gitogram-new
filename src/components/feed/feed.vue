<template>
  <div class="c-feed">
    <toggler @onToggle="toggle" />
    <div class="comments" v-if="shown">
      <ul class="comments-list">
        <li class="comments-item" v-for="n in 5" :key="n">
          <comment text="Some text" username="John Doe"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { toggler } from '../toggler'
  import { comment } from '../comment'

  export default {
    name: 'feed-item',
    components: {
    toggler,
    comment
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
