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
              :avatar="story.owner.avatar_url"
              :username="story.owner.login"
              @onPress="$router.push({name: 'stories', params: {initialSlide: story.id}})"
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
  import { mapGetters } from 'vuex'

  export default {
    name: 'stories',
    components: {
      topline,
      storyUserItem
    },
    computed: {
      ...mapGetters({
        stories: 'trendings/allState'
      })
    },
    methods: {
      handlePress (id) {
        console.log(id)
      }
    }
  }
</script>

<style lang="scss" scoped src="./stories.scss"></style>