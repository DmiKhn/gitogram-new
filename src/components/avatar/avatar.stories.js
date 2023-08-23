import avatar from './avatar.vue';

export default {
  title: 'Avatar',
  components: { avatar }
};

export const defaultView = () => ({
  // name: "Стандартный вид",
  components: { avatar },
  template: `
    <avatar
      avatarUrl="https://via.placeholder.com/300/300"
      username="Peter"
    />
  `
});

// defaultView.story = {
//   name: 'Стандартный вид'
// }