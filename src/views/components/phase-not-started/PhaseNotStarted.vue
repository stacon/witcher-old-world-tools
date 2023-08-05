<script setup>
import { computed } from 'vue';
import DECK_TYPE from '@/constants/deckType';
import { useUIMonsterFightViewStore } from '@/stores/ui/monster-fight-view/monsterFightView';
import PhaseTitle from '../phase-title/PhaseTitle.vue';

const ui = useUIMonsterFightViewStore();
const onInitiateFightClick = ui.onInitiateFightClick;
const monsterLevel = computed(() => ui.monsterLevel);

const DECK_SELECTIONS = [
  { type: DECK_TYPE.BASIC, description: 'Basic' },
  { type: DECK_TYPE.MONSTER_TRAIL, description: 'Monster Trail' },
  { type: DECK_TYPE.LEGENDARY_HUNT, description: 'Legendary Hunt' },
];
</script>
<template>
  <div class="flex flex-col items-center">
    <PhaseTitle>Select monster deck</PhaseTitle>
    <div>
      <form @submit.prevent class="flex flex-col">
        <label for="InitialMonsterHealth">
          <span>Monster Health:</span>
          <input id="InitialMonsterHealth" type="number" v-model="ui.inputMonsterHealth" />
        </label>
        <span>You are fighting a level {{ monsterLevel }} monster</span>
        <div class="flex justify-around">
          <button
            v-for="selection in DECK_SELECTIONS"
            :key="selection.type"
            type="submit"
            @click="onInitiateFightClick(selection.type)"
          >
            {{ selection.description }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
