<template>
  <router-link to="#" class="c-story-user-item" @click="$emit('onPress')">
    <div class="avatar">
      <img :src="avatar" class="img" alt="username avatar">
    </div>
    <div class="username">{{ username }}</div>
  </router-link>
</template>

<script>
  export default {
    name: 'storyItem',
    props: {
      avatar: {
        type: String,
        required: true
      },
      username: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped src="./storyUserItem.scss"></style>