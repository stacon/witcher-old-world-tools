<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import { useMonsterFightStore } from '@/stores/monster-fight/monster-fight';
import VENOMOUS_STEEL_ACTION_STEPS from '@/constants/venomousSteelActionSteps';

import LevelSelectionStep from './LevelSelectionStep.vue';
import CardSelectionStep from './CardSelectionStep.vue';

const monsterFightStore = useMonsterFightStore();
const { venomousSteelActionStep } = storeToRefs(monsterFightStore);
const { selectVenomousSteelLevel } = monsterFightStore;

const isOnLevelSelectionStep = computed(
  () => venomousSteelActionStep.value === VENOMOUS_STEEL_ACTION_STEPS.SELECTING_LEVEL,
);
const isOnCardsSelectionStep = computed(
  () => venomousSteelActionStep.value === VENOMOUS_STEEL_ACTION_STEPS.SELECTING_CARDS,
);
</script>
<template>
  <div class="flex flex-col items-center bg-white border border-black rounded-lg p-4">
    <LevelSelectionStep
      v-if="isOnLevelSelectionStep"
      :selectVenomousSteelLevelHandler="selectVenomousSteelLevel"
    />
    <CardSelectionStep v-if="isOnCardsSelectionStep" />
  </div>
</template>
