<template>
  <div class="c-stories-slider">
    <div class="stories-container">
      <ul class="stories">
        <li class="stories-item"
          v-for="(trending) in trendings"
          :key="trending.id"
        >
          <sliderItem
            :data="getStoryData(trending)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { sliderItem } from '../../components/sliderItem'
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'Stories Slider',
    components: {
      sliderItem
    },
    data () {
      return {}
    },
    computed: {
      ...mapState({
        trendings: state => state.trendings.data
      })
    },
    methods: {
      ...mapActions({
        fetchTrendings: 'trendings/fetchTrendings'
      }),
      getStoryData (obj) {
        return {
          id: obj.id,
          userAvatar: obj.owner?.avatar_url,
          username: obj.owner?.login,
          content: obj.readme
        }
      }
    },
    async created () {
      await this.fetchTrendings()
    }
  }
</script>