import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import DECK_TYPE from '@/constants/deckType';
import { getMonsterActionsDeck } from '@/stores/utils/getMonsterActionsDeck';

const PHASES = Object.freeze({
  NON_STARTED: 'non-started',
  ONGOING: 'ongoing',
  VIPER: 'viper',
  WON: 'won',
  KNOCKED_OUT: 'knocked-out',
});

const INITIAL_STATE = {
  phase: PHASES.NON_STARTED,
  initialMosterHealth: null,
  monsterLevel: null,
  deck: [],
};

const INITIAL_POISON_STATE = {
  deck: [],
};

export const useMonsterFightStore = defineStore('monsterFight', () => {
  const state = ref(INITIAL_STATE);
  const poisonState = ref(INITIAL_POISON_STATE);

  const initiateFight = (initialMosterHealth, deckType = DECK_TYPE.BASIC) => {
    state.value = {
      ...INITIAL_STATE,
      phase: PHASES.ONGOING,
      deck: getMonsterActionsDeck(initialMosterHealth, deckType),
    };
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
    initiateFight,
    monsterLevel,
  };
});
