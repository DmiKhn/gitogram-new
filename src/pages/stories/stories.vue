<template>
  <div class="topline">
    <topline>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in stories" :key="story.id">
            <storyUserItem
              :avatar="story.avatar"
              :username="story.username"
              @onPress="handlePress(story.id)"
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
    }
  }
</script>

<style lang="scss" scoped src="./stories.scss"></style>