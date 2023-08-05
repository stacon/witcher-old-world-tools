import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import DECK_TYPE from '@/constants/deckType';
import PHASES from './constants/phases';
import { getMonsterActionsDeck } from '@/stores/utils/getMonsterActionsDeck';
import { monsterLevelByMonsterHealth } from '@/utils';

const INITIAL_STATE = {
  phase: PHASES.NOT_STARTED,
  initialMosterHealth: 10,
  monsterLevel: null,
  history: [],
  deck: [],
};

const INITIAL_POISON_STATE = {
  deck: [],
};

export const useMonsterFightStore = defineStore('monsterFight', () => {
  const state = ref(INITIAL_STATE);
  const poisonState = ref(INITIAL_POISON_STATE);

  const currentMonsterHealth = computed(() => state.value.deck.length);
  const phase = computed(() => state.value.phase);

  const initiateFight = (initialMosterHealth, deckType = DECK_TYPE.BASIC) => {
    state.value = {
      ...INITIAL_STATE,
      phase: PHASES.ONGOING,
      initialMosterHealth,
      monsterLevel: monsterLevelByMonsterHealth(initialMosterHealth),
      deck: getMonsterActionsDeck(initialMosterHealth, deckType),
    };
  };

  const resetMonsterFight = () => {
    state.value = INITIAL_STATE;
    poisonState.value = INITIAL_POISON_STATE;
  };

  const playerKnockedOut = () => {
    if (currentMonsterHealth.value > 1) {
      return (state.value = { ...state.value, phase: PHASES.KNOCKED_OUT });
    }
    return (state.value = { ...state.value, phase: PHASES.DRIVEN_AWAY });
  };

  const inflictDamageToMonster = (damage) => {
    if (damage >= currentMonsterHealth.value) {
      state.value = { ...state.value, deck: [], phase: PHASES.WON };
      return;
    }
    state.value.deck.splice(0, damage);
  };

  return {
    initiateFight,
    resetMonsterFight,
    playerKnockedOut,
    inflictDamageToMonster,
    currentMonsterHealth,
    phase,
  };
});
