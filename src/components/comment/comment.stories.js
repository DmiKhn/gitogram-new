import Comment from './comment.vue'

export default {
  title: "Comment",
  components: { Comment },
  argTypes: {
    text: {
      control: {type: "text"},
    },
    username: {
      control: {type: "text"},
    },
  },
};

const template = (args) => ({
  components: {Comment},
  data () {
    return {args}
  },
  template: `
  <Comment v-bind="args">
    <span v-bind="username" class="username">{{ username }}</span>
    Some text here!
  </Comment>
  `
});

export const Default = template.bind({});

Default.args = {
  text: 'follow',
  username: 'Peter'
};