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
    name: 'feeds',
    components: {
      topline,
      storyUserItem
    },
    data () {
      return {
        stories
      }
    }
  }
</script>

<style lang="scss" scoped src="./feeds.scss"></style>