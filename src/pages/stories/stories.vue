<template>
  <div class="topline">
    <topline>
      <template #content>
        <ul class="stories">
          <li
            class="stories-item"
            v-for="story in stories"
            :key="story.id"
          >
            <storyUserItem
              :avatar="owner.avater_url"
              :username="name"
              @onPress="$router.push({name: 'stories', params: {initialSlide: id}})"
            />
          </li>
        </ul>
      </template>
    </topline>
  </div>
</template>

<script>
  import { topline } from '../../components/topline'
  import { storyUserItem } from '../../components/storyUserItem'

  import stories from './data.json'
  // import router from '../../router'

  export default {
    name: 'stories',
    components: {
      topline,
      storyUserItem
    },
    data () {
      return {
        stories
        // items: []
      }
    },
    methods: {
      handlePress (id) {
        console.log(id)
      }
    }
  }
</script>

<style lang="scss" scoped src="./stories.scss"></style>