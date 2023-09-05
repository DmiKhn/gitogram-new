<template>
  <div class="topBlock">
    <topmenu />
    <stories />
  </div>
  <div class="x-container">
    <ul class="list">
      <li class="item" v-for="item in trendings" :key="item.id">
        <feed :feed="item" />
      </li>
    </ul>
  </div>
</template>

<script>
  // import * as api from '../../api'
  import { feed } from '../../components/feed'
  import { stories } from '../stories'
  import { topmenu } from '../topmenu'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'Feeds',
    components: { feed, stories, topmenu },
    data () {
      return {
        items: []
      }
    },
    methods: {
      ...mapActions({
        fetchTrendings: 'trendings/fetchTrendings'
      })
    },
    computed: {
      ...mapGetters({
        trendings: 'trendings/allState'
      })
    },
    async created () {
      try {
        await this.fetchTrendings()
      } catch (error) {
        console.log(error)
      }
    }
  }
</script>

<style lang="scss" src="./feeds.scss" scoped></style>