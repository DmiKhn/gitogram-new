<template>
  <img :src="avatar" class="img" :alt="username">
</template>

<script>
  export default {
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

<!-- <style lang="scss" scoped src="./buttonBlock.scss"></style> -->