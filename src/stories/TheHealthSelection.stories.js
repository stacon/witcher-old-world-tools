import TheHealthSelection from '@/components/the-health-selection/TheHealthSelection.vue';

export default {
  title: 'Molecules/TheHealthSelection',
  component: TheHealthSelection,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  render: (props) => ({
    components: {
      TheHealthSelection,
    },
    setup() {
      // Story args can be spread into the returned object
      return {
        props,
      };
    },
    // Then, the spread values can be accessed directly in the template
    template: '<TheHealthSelection v-bind="props" />',
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'padded',
  },
};

export const Default = {
  args: {},
};
