<script setup>
import { computed } from 'vue';
import DECK_TYPE from '@/constants/deckType';
import { useUIMonsterFightViewStore } from '@/stores/ui/monster-fight-view/monsterFightView';
import Button from '@/components/button/Button.vue';
import TheHealthSelection from '@/components/the-health-selection/TheHealthSelection.vue';
import PhaseTitle from '../phase-title/PhaseTitle.vue';

const ui = useUIMonsterFightViewStore();
const onInitiateFightClick = ui.onInitiateFightClick;
const inputErrors = computed(() => ui.errors);

const DECK_SELECTIONS = [
  { type: DECK_TYPE.BASIC, description: 'Basic' },
  { type: DECK_TYPE.MONSTER_TRAIL, description: 'Monster Trail', disabled: true },
  { type: DECK_TYPE.LEGENDARY_HUNT, description: 'Legendary Hunt' },
];
</script>
<template>
  <div class="flex flex-col items-center text-center">
    <PhaseTitle>Select monster deck</PhaseTitle>
    <div>
      <form @submit.prevent class="flex flex-col items-center">
        <label for="InitialMonsterHealth">
          <span>Set monster health:</span>
          <TheHealthSelection @update:selectedHealth="ui.setMonsterHealth" />
        </label>
        <div class="flex flex-col gap-y-2 sm:flex-row sm:gap-x-2 justify-around mt-2">
          <Button
            v-for="selection in DECK_SELECTIONS"
            :key="selection.type"
            :disabled="selection.disabled"
            @click="onInitiateFightClick(selection.type)"
          >
            {{ selection.description }}
          </Button>
        </div>
        <div>
          <span class="text-red-500" v-for="error in inputErrors" :key="error">
            {{ error }}
          </span>
        </div>
      </form>
    </div>
  </div>
</template>
