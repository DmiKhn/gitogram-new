import avatar from './avatar.vue';

export default {
  title: 'avatar',
  component: { avatar }
};

export const defaultView = () => ({
  component: { avatar },
  template: `
    <avatar
      avatarUrl="https://via.placeholder.com/300/300"
      username="Peter"
    />
  `
});

defaultView.story = {
  name: 'Стандартный вид'
}