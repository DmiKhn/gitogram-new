<template>
  <div class="story-post-wrapper">
    <div class="story-post-item" :class="{ active }">
      <progressBar class="progress-bar" :active="active" @onFinish="$emit('onProgressFinish')" />
      <div class="avatar-container">
        <avatar />
      </div>
      <div class="content-wrapper">
        <div class="loader" v-if="loading">
          <spinner />
        </div>
        <div class="info" v-else>
          <div
            v-if="data.content?.length"
            class="content-text"
            v-html="data.content"
          ></div>
          <placeholder />
        </div>
      </div>
      <div class="button-block">
        <xButton />
      </div>
    </div>
    <template v-if="active">
      <button class="btn btn-prev">
        <span class="icon">
          <icon name="arrowR" />
        </span>
      </button>
      <button class="btn btn-next">
        <span class="icon">
          <icon name="arrowR" />
        </span>
      </button>
    </template>
  </div>
</template>

<script>
  import { progressBar } from '../progressBar'
  import { avatar } from '../avatar'
  import { xButton } from '../button'
  import { spinner } from '../spinner'
  import { placeholder } from '../placeholder'
  import { icon } from '../../icons'

  export default {
    name: 'Slider item',
    components: {
      progressBar,
      avatar,
      xButton,
      spinner,
      placeholder,
      icon
    },
    emits: ['onPrevSlide', 'onNextSlide', 'onProgressFinish'],
    props: {}
  }
</script>

<style scoped>
  .story-post-wrapper {
    width: 375px;
    position: relative;
  }
  .story-post-item {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    background: #fff;
    border-radius: 12px;
    width: 370px;
    height: 100%;
    box-shadow: 0px 0px 8px 8px #f1f1f1;
  }
  .progress-bar {
    margin-top: 12px;
    margin-left: 6px;
    margin-right: 6px;
  }
  .content-wrapper {
    position: relative;
    height: 490px;
    padding: 16px;
    box-shadow: inset 0px -24px 24px -24px  rgb(218, 217, 217);
  }
  .avatar-container {
    border-bottom: 1px solid rgb(179, 179, 179);
  }
  .loader {
    margin: 0;
    position: absolute;
    top: 50%;
    margin-left: 37%;
  }
  .button-block {
    border-top: 1px solid rgb(179, 179, 179);
    padding: 28px;
  }
  .btn {
    width: 36px;
    height: 36px;
    padding: 6px;
    border-radius: 50%;
    border: 2px solid rgb(0, 0, 0);
    background-color: #fff;

    :hover {
      color: #31AE54;
      transition: 0.2s;
    }
  }
  .btn-next {
    position: absolute;
    top: 50%;
    right: -24px;
    transform: rotate(180deg);
  }
  .btn-prev {
    left: -24px;
    top: 50%;
    position: absolute;
  }
</style>