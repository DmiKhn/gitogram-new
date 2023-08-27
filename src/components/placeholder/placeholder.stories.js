import placeholder from './placeholder.vue'

export default {
  title: "Placeholder",
  components: { placeholder }
}

export const defaultView = () => ({
  components: { placeholder },
  template: `
    <placeholder></placeholder>
  `
})