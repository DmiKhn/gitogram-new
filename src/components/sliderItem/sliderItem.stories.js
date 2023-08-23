import sliderItem from './sliderItem.vue'

export default {
  title: "Slider Item",
  components: { sliderItem }
}

export const defaultView = () => ({
  components: { sliderItem },
  template: `
    <sliderItem></sliderItem>
  `
})
