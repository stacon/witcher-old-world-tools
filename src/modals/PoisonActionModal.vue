<script setup>
import draggable from 'vuedraggable';
import { computed, ref } from 'vue';

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
    <span class="text-3xl">Poison</span>
    <draggable v-model="list" v-bind="dragOptions" item-key="id" class="flex flex-col gap-1">
      <template #item="{ element }">
        <span class="cursor-default px-6 py-2 border border-black rounded-lg">
          {{ element.name }}
        </span>
      </template>
    </draggable>
  </div>
</template>
