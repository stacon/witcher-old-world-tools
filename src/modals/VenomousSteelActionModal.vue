<script setup>
import draggable from 'vuedraggable';
import { computed, ref } from 'vue';

const VENOMOUS_STEEL_LEVEL = {
  1: { see: 3, discard: 0 },
  2: { see: 2, discard: 1 },
  3: { see: 4, discard: 1 },
  4: { see: 4, discard: 2 },
  5: { see: 4, discard: 2 },
};

const dragOptions = computed(() => ({
  animation: 0,
  group: 'name',
  disabled: false,
}));

const list = ref([
  { id: 1, name: 'Card 1' },
  { id: 2, name: 'Card 2' },
  { id: 3, name: 'Card 3' },
  { id: 4, name: 'Card 4' },
]);
</script>
<template>
  <div class="flex flex-col items-center bg-white border border-black rounded-lg">
    <span class="text-3xl">Venomous Steel</span>

    <draggable v-model="list" v-bind="dragOptions" item-key="id" class="flex flex-col gap-1">
      <template #item="{ element }">
        <span class="cursor-default px-6 py-2 border border-black rounded-lg">
          {{ element.name }}
        </span>
      </template>
    </draggable>
  </div>
</template>
