<template>
  <div class="avatarBlock">
    <div class="avatar">
      <img :src="avatar" class="img" :alt="username">
    </div>
    <div class="username">{{ username }}</div>
  </div>
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

<style scoped>
.avatarBlock {
  display: flex;
  align-items: center;
}

img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.avatar {
  padding: 3px;
  margin: 8px;
  width: 50px;
  height: 50px;
  border: 2px solid rgb(202, 47, 156);
  border-radius: 50%;
}

.username {
  font-family: 'Open Sans', sans-serif;
}
</style>