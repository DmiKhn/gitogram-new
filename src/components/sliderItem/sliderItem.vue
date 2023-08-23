<template>
  <div class="wrapper">
    <progressBar class="progress-bar" />
    <div class="avatar-container">
      <avatar />
    </div>
    <div class="content-wrapper">
      <slot name="contentItem"/>
      <p>content here</p>
    </div>
    <div class="button-block">
      <xButton />
    </div>
  </div>
</template>

<script>
  import { progressBar } from '../../components/progressBar'
  import { avatar } from '../avatar'
  import { xButton } from '../button'

  export default {
    name: 'Slider item',
    components: {
      progressBar,
      avatar,
      xButton
    }
  }
</script>

<style scoped>
  .wrapper {
    /* padding: 12px; */
    display: flex;
    flex-direction: column;
    align-content: space-between;
    background: #fff;
    border-radius: 12px;
    width: 370px;
    height: 667px;
    height: 100%;
  }
  .progress-bar {
    margin-top: 12px;
    margin-left: 6px;
    margin-right: 6px;
  }
  .content-wrapper {
    height: 400px;
    padding: 16px;
  }
  .avatar-container {
    border-bottom: 1px solid rgb(179, 179, 179);
  }

  .button-block {
    border-top: 1px solid rgb(179, 179, 179);
    /* align-self: center; */
    padding: 28px;

  }
</style>