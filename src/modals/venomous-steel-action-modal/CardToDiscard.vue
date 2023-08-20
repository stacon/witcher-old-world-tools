<script setup>
const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="flex justify-around">
    <div class="flex flex-col w-1/2">
      <span class="text-xl">Charge</span>
      <pre class="text-xs">{{ JSON.stringify(card.charge, null, 1) }}</pre>
    </div>
    <div class="bg-gray-300 w-1 rounded-lg mx-2"></div>
    <div class="flex flex-col w-1/2">
      <span class="text-xl text-center">Bite</span>
      <pre class="text-xs">{{ JSON.stringify(card.bite, null, 1) }}</pre>
    </div>
  </div>
</template>
