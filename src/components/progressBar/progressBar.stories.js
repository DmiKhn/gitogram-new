import progressBar from './progressBar.vue'

export default {
  title: 'Progress Bar',
  components: { progressBar },
  argType: {
    onFinish: {
      action: "onFinish",
      description: "When progress loaded"
    }
  }
};

export const defaultView = (args) => ({
  components: { xProgress: progressBar },
  data() {
    return { args }
  },
  template: `<x-progress @onFinish="args.onFinish" />`,
})

