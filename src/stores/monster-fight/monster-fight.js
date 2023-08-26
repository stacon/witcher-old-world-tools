import { computed, reactive } from 'vue';
import { defineStore } from 'pinia';

import DECK_TYPE from '@/constants/deckType';
import VENOMOUS_STEEL_ACTION_STEPS from '@/constants/venomousSteelActionSteps';
import VENOMOUS_STEEL_LEVEL from '@/constants/venomousSteelLevel';
import { useUIAppStore } from '@/stores/ui/app/app';
import { monsterLevelByMonsterHealth, getMonsterActionsDeck } from '@/utils';

import PHASES from '@/constants/monsterFightPhases';
import MONSTER_ACTION from './constants/monster-actions';

const INITIAL_STATE = {
  phase: PHASES.NOT_STARTED,
  initialMosterHealth: 10,
  monsterLevel: null,
  history: [],
  deck: [],
  currentAttack: null,
};

const INITIAL_VENOMOUS_STEEL_STATE = Object.freeze({
  step: VENOMOUS_STEEL_ACTION_STEPS.NOT_STARTED,
  selectedLevel: null,
  venomousSteelDeck: [],
});

export const useMonsterFightStore = defineStore('monsterFight', () => {
  const uiApp = useUIAppStore();

  const state = reactive({ ...INITIAL_STATE });
  const venomousSteelState = reactive({ ...INITIAL_VENOMOUS_STEEL_STATE });

  const currentMonsterHealth = computed(() => state.deck.length);
  const phase = computed(() => state.phase);
  const currentAttack = computed(() => state.currentAttack);
  const monsterLevel = computed(() => state.monsterLevel);
  const venomousSteelActionStep = computed(() => venomousSteelState.step);
  const venomousSteelDeck = computed(() => venomousSteelState.venomousSteelDeck);
  const initialMosterHealth = computed(() => state.initialMosterHealth);

  const initiateFight = (initialMosterHealth, deckType = DECK_TYPE.BASIC) => {
    Object.assign(state, {
      ...INITIAL_STATE,
      phase: PHASES.ONGOING,
      initialMosterHealth,
      monsterLevel: monsterLevelByMonsterHealth(initialMosterHealth),
      deck: getMonsterActionsDeck(initialMosterHealth, deckType),
    });
  };

  const resetMonsterFight = () => {
    Object.assign(state, INITIAL_STATE);
    Object.assign(venomousSteelState, INITIAL_VENOMOUS_STEEL_STATE);
  };

  const playerKnockedOut = () => {
    if (currentMonsterHealth.value > 1) {
      return (state.phase = PHASES.KNOCKED_OUT);
    }
    return (state.phase = PHASES.DRIVEN_AWAY);
  };

  const checkIfMonsterIsDefeated = () => {
    if (currentMonsterHealth.value <= 0) {
      state.phase = PHASES.WON;
    }
  };

  const inflictDamageToMonster = (damage) => {
    if (damage >= currentMonsterHealth.value) {
      state.deck.splice(0, currentMonsterHealth.value);
    } else {
      state.deck.splice(0, damage);
    }
    checkIfMonsterIsDefeated();
  };

  const monsterAttack = (type) => {
    state.currentAttack = {
      type,
      action: state.deck.splice(0, 1)[0][type],
    };
  };

  const monsterChargeAttack = () => monsterAttack(MONSTER_ACTION.CHARGE);
  const monsterBiteAttack = () => monsterAttack(MONSTER_ACTION.BITE);
  const resetVenomousSteelAction = () => {
    Object.assign(venomousSteelState, INITIAL_VENOMOUS_STEEL_STATE);
  };
  const startVenomousSteelAction = () => {
    venomousSteelState.step = VENOMOUS_STEEL_ACTION_STEPS.SELECTING_LEVEL;
    uiApp.startModal({
      onClose: resetVenomousSteelAction,
    });
  };

  const selectVenomousSteelLevel = (level) => {
    venomousSteelState.selectedLevel = level;
    venomousSteelState.venomousSteelDeck = state.deck.slice(0, VENOMOUS_STEEL_LEVEL[level].see);
    venomousSteelState.step = VENOMOUS_STEEL_ACTION_STEPS.SELECTING_CARDS;
  };

  const stopVenomousSteelAction = () => {
    uiApp.closeModal();
    resetVenomousSteelAction();
  };

  const commitVenomousSteelAction = (newDeck) => {
    const remainingCards = newDeck.filter((_, index) => !isDiscardedIndex(index));
    state.deck.splice(
      0,
      VENOMOUS_STEEL_LEVEL[venomousSteelState.selectedLevel].see,
      ...remainingCards,
    );
    stopVenomousSteelAction();
  };

  const isDiscardedIndex = (index) =>
    index < VENOMOUS_STEEL_LEVEL[venomousSteelState.selectedLevel].discard;

  return {
    currentAttack,
    currentMonsterHealth,
    initialMosterHealth,
    monsterLevel,
    phase,
    venomousSteelActionStep,
    venomousSteelDeck,
    isDiscardedIndex,
    initiateFight,
    resetMonsterFight,
    playerKnockedOut,
    inflictDamageToMonster,
    monsterChargeAttack,
    monsterBiteAttack,
    startVenomousSteelAction,
    selectVenomousSteelLevel,
    stopVenomousSteelAction,
    commitVenomousSteelAction,
  };
});
