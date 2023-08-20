<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import draggable from 'vuedraggable';

import Button from '@/components/button/Button.vue';
import { useMonsterFightStore } from '@/stores/monster-fight/monster-fight';

import CardToDiscard from './CardToDiscard.vue';

const monsterFightStore = useMonsterFightStore();
const { venomousSteelDeck } = storeToRefs(monsterFightStore);
const { commitVenomousSteelAction, isDiscardedIndex } = monsterFightStore;

const deckToEdit = ref(venomousSteelDeck.value);
</script>

<template>
  <div class="flex flex-col">
    <span class="text-2xl mb-2">Rerrange/Discard enemy cards</span>
    <div>
      <draggable :list="deckToEdit" item-key="id" class="flex flex-col gap-1">
        <template #item="{ element, index }">
          <span
            class="cursor-default px-6 py-2 border-2 border-black rounded-lg"
            :class="{ 'border-red-500': isDiscardedIndex(index) }"
          >
            <CardToDiscard :card="element" />
          </span>
        </template>
      </draggable>
    </div>
    <Button @click="commitVenomousSteelAction(deckToEdit)" class="mt-2">
      Commit Venomous Steel
    </Button>
  </div>
</template>
