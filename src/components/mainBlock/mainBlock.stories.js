import mainBlock from './mainBlock.vue'

export default {
  title: "Main Block",
  components: { mainBlock },
  argTypes: {
    theme: {
      control: {type: "text"},
    }
  }
};

const template = (args) => ({
  components: {mainBlock},
  data () {
    return {args}
  },
  template: `
    <mainBlock v-bind="args" class="c-feed"></mainBlock>
  `
});

// export const Default = template.bind({});

// Default.args = {
//   theme: 'dark'
// };