import Feed from './feed.vue'

export default {
  title: "Feed block",
  components: { Feed },
  argTypes: {
    title: {
      control: {type: "text"},
    },
    username: {
      control: {type: "text"},
    },
    stars: {
      control: {type: "text"},
    },
    description: {
      control: {type: "text"},
    }
  },
};

const template = (args) => ({
  components: {Feed},
  data () {
    return {args}
  },
  template: `
    <Feed v-bind="args" class="c-feed"></Feed>
  `
});

export const Default = template.bind({});

Default.args = {
  title: 'Vue.js',
  username: 'Alex',
  stars: '5',
  description: 'text and desc here'
};