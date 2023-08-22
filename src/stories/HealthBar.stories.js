import TheHealthBar from '@/components/the-health-bar/TheHealthBar.vue';

export default {
  title: 'Molecules/TheHealthBar',
  component: TheHealthBar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  render: (props) => ({
    components: {
      TheHealthBar,
    },
    setup() {
      // Story args can be spread into the returned object
      return {
        props,
      };
    },
    // Then, the spread values can be accessed directly in the template
    template: '<TheHealthBar v-bind="props" />',
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'padded',
  },
};

export const HighHealth = {
  args: {
    health: 18,
    maxHealth: 20,
  },
};

export const MediumHealth = {
  args: {
    health: 10,
    maxHealth: 20,
  },
};

export const LowHealth = {
  args: {
    health: 2,
    maxHealth: 20,
  },
};
