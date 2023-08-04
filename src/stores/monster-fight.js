import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const PHASES = Object.freeze({
  NON_STARTED: 'non-started',
  ONGOING: 'ongoing',
  WON: 'won',
  KNOCKED_OUT: 'knocked-out',
})

const INITIAL_STATE = Object.freeze({
  phase: PHASES.NON_STARTED,
  monsterHealth: null,
  monsterLevel: null,
  deck: [],
})

export const useMonsterFightStore = defineStore('monsterFight', () => {
  const state = ref(INITIAL_STATE);

  const setMonsterHealth = (health) => {
    state.value.monsterHealth = health;
  };

  const monsterLevel = computed(() => {
    if (state.value.monsterHealth <= 12) {
      return 1;
    }
    if (state.value.monsterHealth <= 15) {
      return 2;
    }
    return 3;
  });

  return {
    setMonsterHealth,
    monsterLevel,
  };
});
