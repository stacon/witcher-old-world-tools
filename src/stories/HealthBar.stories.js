import HealthBar from '@/components/HealthBar.vue';

export default {
  title: 'Molecules/HealthBar',
  component: HealthBar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  render: (props) => ({
    components: {
      HealthBar,
    },
    setup() {
      // Story args can be spread into the returned object
      return {
        props,
      };
    },
    // Then, the spread values can be accessed directly in the template
    template: '<HealthBar v-bind="props" />',
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'padded',
  },
};

export const LoggedIn = {
  args: {
    health: 18,
    maxHealth: 20,
  },
};
