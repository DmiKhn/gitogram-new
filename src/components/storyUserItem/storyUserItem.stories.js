import storyItem from './storyUserItem.vue'

export default {
  title: "Story item",
  components: { storyItem },
  argTypes: {
    username: {
      control: {type: "text"},
    }
  },
};

const template = (args) => ({
  components: {storyItem},
  data () {
    return {args}
  },
  template: `
    <storyItem v-bind="args" class="c-feed"></storyItem>
  `
});

export const Default = template.bind({});

Default.args = {
  username: 'Alex'
};