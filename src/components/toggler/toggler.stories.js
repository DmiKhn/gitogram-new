import Toggler from './toggler.vue'

export default {
  title: "Toggle switch",
  components: { Toggler },
  argTypes: {
    active: {
      control: {type: "boolean"},
    },
    onclick: {
      action: 'clicked'
    }
  },
};

const template = (args) => ({
  components: {Toggler},
  parameters: {
    actions: {active: true}
  },
  data () {
    return {args}
  },
  template: `
    <Toggler v-bind="args" class="c-feed"></Toggler>
  `
});

export const Default = template.bind({});

Default.args = {
  active: false
};