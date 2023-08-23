<template>
  <div class="x-container">
    <ul class="list">
      <li class="item" v-for="item in items" :key="item.id">
        <feed
          v-bind="getFeedData(item)"
          :feed="item"
        />
      </li>
    </ul>
    <pre>{{ items }}</pre>
  </div>
</template>

<script>
  import * as api from '../../api'
  import { feed } from '../../components/feed'

  export default {
    name: 'Feeds',
    components: { feed },
    data () {
      return {
        items: []
      }
    },
    methods: {
      getFeedData (item) {
        return {
          title: item.name,
          description: item.description,
          username: item.owner.login,
          stars: item.stargazers_count
        }
      }
    },
    async created () {
      try {
        const { data } = await api.trendings.getTrendings()
        this.items = data.items
      } catch (error) {
        console.log(error)
      }
    }
  }
</script>

<style lang="scss" src="./feeds.scss" scoped></style>