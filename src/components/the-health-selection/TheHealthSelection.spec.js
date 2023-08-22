import { nextTick } from 'vue';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import TheHealthSelection from './TheHealthSelection.vue';

describe('TheHealthSelection', () => {
  it('initializes with a health of 10 and emits it', async () => {
    const wrapper = mount(TheHealthSelection);

    await nextTick();

    expect(wrapper.emitted()).toHaveProperty('update:selectedHealth');
    expect(wrapper.emitted('update:selectedHealth')[0]).toEqual([10]);
    expect(wrapper.vm.selectedHealth).toBe(10);
  });

  it('increases health by 1 when up button is clicked', async () => {
    const wrapper = mount(TheHealthSelection);

    await wrapper.find('button[role="increase-health"]').trigger('click');

    expect(wrapper.vm.selectedHealth).toBe(11);
  });

  it('decreases health by 1 when down button is clicked', async () => {
    const wrapper = mount(TheHealthSelection);

    await wrapper.find('button[role="decrease-health"]').trigger('click');

    expect(wrapper.vm.selectedHealth).toBe(9);
  });
});
