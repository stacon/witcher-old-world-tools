import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import DECK_TYPE from '@/constants/deckType';
import PHASES from './constants/phases';
import MONSTER_ACTION from './constants/monster-actions';
import { monsterLevelByMonsterHealth, getMonsterActionsDeck } from '@/utils';
import { useUIAppStore } from '@/stores/ui/app/app';

const INITIAL_STATE = {
  phase: PHASES.NOT_STARTED,
  initialMosterHealth: 10,
  monsterLevel: null,
  history: [],
  deck: [],
  currentAttack: null,
};

const INITIAL_POISON_STATE = {
  initialPoisonDeck: [],
};

export const useMonsterFightStore = defineStore('monsterFight', () => {
  const state = ref(INITIAL_STATE);
  const poisonState = ref(INITIAL_POISON_STATE);

  const uiApp = useUIAppStore();

  const currentMonsterHealth = computed(() => state.value.deck.length);
  const phase = computed(() => state.value.phase);
  const currentAttack = computed(() => state.value.currentAttack);
  const monsterLevel = computed(() => state.value.monsterLevel);

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
  const monsterAttack = (type) => {
    state.value = {
      ...state.value,
      currentAttack: {
        type,
        action: state.value.deck.splice(0, 1)[0][type],
      },
    };
  };

  const monsterChargeAttack = () => monsterAttack(MONSTER_ACTION.CHARGE);
  const monsterBiteAttack = () => monsterAttack(MONSTER_ACTION.BITE);

  const resetPoisonAction = () => {
    poisonState.value = INITIAL_POISON_STATE;
  };
  const startPoisonAction = () => {
    uiApp.startModal({
      onClose: resetPoisonAction,
    });
  };

  const stopPoisonAction = () => {
    uiApp.closeModal();
    resetPoisonAction();
  };

  const inPoisonAction = computed(() => initialPoisonDeck.length);

  return {
    currentMonsterHealth,
    phase,
    currentAttack,
    monsterLevel,
    inPoisonAction,
    initiateFight,
    resetMonsterFight,
    playerKnockedOut,
    inflictDamageToMonster,
    monsterChargeAttack,
    monsterBiteAttack,
    startPoisonAction,
    stopPoisonAction,
  };
});
