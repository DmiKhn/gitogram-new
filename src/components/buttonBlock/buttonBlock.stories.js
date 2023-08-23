import btnBlock from './buttonBlock.vue'

export default {
  title: "Button block",
  components: { btnBlock },
  argTypes: {
    firstB: {
      control: {type: "text"},
    },
    secondB: {
      control: {type: "text"},
    },
    thirdB: {
      control: {type: "text"},
    },
    fourthB: {
      control: {type: "text"},
    },
  },
};

const template = (args) => ({
  components: {btnBlock},
  data () {
    return {args}
  },
  template: `
    <btnBlock v-bind="args"></btnBlock>
  `
});

export const Default = template.bind({});

Default.args = {
  firstB: 'Star',
  secondB: '157k',
  thirdB: 'Fork',
  fourthB: '5'
};