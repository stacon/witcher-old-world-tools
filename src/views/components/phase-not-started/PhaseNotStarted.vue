<script setup>
import { computed } from 'vue';
import DECK_TYPE from '@/constants/deckType';
import { useUIMonsterFightViewStore } from '@/stores/ui/monster-fight-view/monsterFightView';
import PhaseTitle from '../phase-title/PhaseTitle.vue';

const ui = useUIMonsterFightViewStore();
const onInitiateFightClick = ui.onInitiateFightClick;
const monsterLevel = computed(() => ui.monsterLevel);
const inputErrors = computed(() => ui.errors);

const DECK_SELECTIONS = [
  { type: DECK_TYPE.BASIC, description: 'Basic' },
  { type: DECK_TYPE.MONSTER_TRAIL, description: 'Monster Trail' },
  { type: DECK_TYPE.LEGENDARY_HUNT, description: 'Legendary Hunt' },
];
</script>
<template>
  <div class="flex flex-col items-center text-center">
    <PhaseTitle>Select monster deck</PhaseTitle>
    <div>
      <form @submit.prevent class="flex flex-col">
        <label for="InitialMonsterHealth">
          <span>Monster Health:</span>
          <input
            id="InitialMonsterHealth"
            type="number"
            class="ml-1 w-7 text-center"
            v-model="ui.inputMonsterHealth"
          />
          <span class="ml-1">level {{ monsterLevel }}</span>
        </label>
        <div class="flex gap-x-2 justify-around">
          <button
            v-for="selection in DECK_SELECTIONS"
            :key="selection.type"
            type="submit"
            @click="onInitiateFightClick(selection.type)"
          >
            {{ selection.description }}
          </button>
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
