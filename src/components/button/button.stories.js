import xButton from './button.vue'

export default {
  title: "xButton",
  components: { xButton },
  argTypes: {
    text: {
      control: {type: "text"},
    },
  },
};

const template = (args) => ({
  components: {xButton},
  data () {
    return {args}
  },
  template: `
    <xButton v-bind="args"></xButton>
  `
});

export const Default = template.bind({});

Default.args = {
  text: 'follow'
};