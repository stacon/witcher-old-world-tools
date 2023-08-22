import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import TheHealthBar from './TheHealthBar.vue';

describe('TheHealthBar', () => {
  it('shows green health bar when health is above 50%', () => {
    const wrapper = mount(TheHealthBar, {
      props: {
        health: 75,
        maxHealth: 100,
      },
    });

    const healthBar = wrapper.find('div[role="healthbar"]');
    expect(healthBar.classes()).toContain('bg-green-600');
    expect(healthBar.element.style.width).toBe('75%');
  });

  it('shows yellow health bar when health is between 26% and 50%', () => {
    const wrapper = mount(TheHealthBar, {
      props: {
        health: 40,
        maxHealth: 100,
      },
    });

    const healthBar = wrapper.find('div[role="healthbar"]');
    expect(healthBar.classes()).toContain('bg-yellow-600');
    expect(healthBar.element.style.width).toBe('40%');
  });

  it('shows red health bar when health is 25% or below', () => {
    const wrapper = mount(TheHealthBar, {
      props: {
        health: 20,
        maxHealth: 100,
      },
    });

    const healthBar = wrapper.find('div[role="healthbar"]');
    expect(healthBar.classes()).toContain('bg-red-600');
    expect(healthBar.element.style.width).toBe('20%');
  });

  it('hides health value when it is zero', () => {
    const wrapper = mount(TheHealthBar, {
      props: {
        health: 0,
        maxHealth: 100,
      },
    });

    const healthValue = wrapper.find('span');
    expect(healthValue.classes()).toContain('opacity-0');
  });
});
