<template>
  <div class="image-preview"></div>
  <div class="paragraph"></div>
  <div class="paragraph-sec"></div>
  <div class="paragraph-third"></div>
</template>

<script>
  export default {
    name: 'placeholder',
    props: {
      paragraphs: Number
    }
  }
</script>

<style scoped>
  .image-preview {
    height: 150px;
    width: 100%;
    background-color: rgb(212, 212, 212);
    margin-bottom: 24px;
  }

  .paragraph {
    height: 24px;
    width: 60%;
    background-color: rgb(212, 212, 212);
    margin-bottom: 16px;
  }

  .paragraph-sec {
    height: 24px;
    width: 90%;
    background-color: rgb(212, 212, 212);
    margin-bottom: 16px;
  }

  .paragraph-third {
    height: 24px;
    width: 75%;
    background-color: rgb(212, 212, 212);
    margin-bottom: 16px;
  }
</style>