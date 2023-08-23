<template>
  <button class="button">{{ text || "Follow" }}</button>
</template>

<script>
  export default {
    title: 'xButton',
    props: {
      text: String
    }
  }
</script>

<style scoped>
  .button {
    /* min-width: 270px; */
    width: 315px;
    color: #fff;
    padding: 12px 14px;
    border-radius: 8px;
    background-color: #31AE54;
  }
</style>