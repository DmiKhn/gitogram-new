<template>
  <div class="buttonBlock">
    <button class="firstBtn">
      <div class="starIcon">
        <icon name="star" />
      </div>
      Star
    </button>
    <button class="secondBtn">{{ likesCount }}</button>
    <button class="thirdBtn">
      <div class="forkIcon">
        <icon name="fork" />
      </div>
      Fork
    </button>
    <button class="forthBtn">{{ forksCount }}</button>
  </div>
</template>

<script>
  import { icon } from '../../icons'

  export default {
    title: 'btnBlock',
    components: {
      icon
    },
    props: {
      likesCount: {
        type: Number
      },
      forksCount: {
        type: Number
      }
    }
  }
</script>

<style scoped>
  button {
    border: 1px solid #dddddd;
    padding: 6px 12px;
  }

  button:hover {
    background: #dddddd;
  }

  .buttonBlock {
    display: flex;
  }

  .firstBtn {
    display: flex;
    align-items: center;
    border-radius: 8px 0 0 8px;
    border-right: 0;
  }

  .starIcon {
    width: 16px;
    margin-right: 6px;
  }

  .secondBtn {
    border-right: 0;
  }

  .thirdBtn {
    display: flex;
    align-items: center;
    border-right: 0;
  }

  .forkIcon {
    width: 14px;
    margin-right: 6px;
  }

  .forthBtn {
    border-radius: 0 8px 8px  0;
  }
</style>

<!-- <style lang="scss" scoped src="./buttonBlock.scss"></style> -->