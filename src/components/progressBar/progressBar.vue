<template>
  <div :class="{active: startProgress}" class="c-progress">
      <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
  export default {
    name: 'progress',
    data () {
      return {
        startProgress: false
      }
    },
    props: {
      active: {
        type: Boolean
      }
    },
    emits: ['onFinish'],
    methods: {
      emitOnFinish () {
        this.$emit('onFinish')
      }
    },
    mounted () {
      setTimeout(() => {
        this.startProgress = this.active
      }, 0)
      this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
    },
    beforeUnmount () {
      this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
    },
    watch: {
      active () {
        this.startProgress = !this.startProgress
      }
    }
  }
</script>

<style scoped lang="scss">
  .c-progress {
    background: rgba(49, 174, 84, 0.3);
    height: 2px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    // width: 100%;

    &.active {
      .indicator {
        width: 100%;
      }
    }
  }
  .indicator {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0;
    background: #31AE54;
    transition: 7s;
  }
</style>