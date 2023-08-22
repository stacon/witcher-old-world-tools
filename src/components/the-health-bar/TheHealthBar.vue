<script setup>
import { computed } from 'vue';

const props = defineProps({
  health: {
    type: Number,
    required: true,
  },
  maxHealth: {
    type: Number,
    required: true,
  },
});

const healthPercentage = computed(() => {
  return (props.health / props.maxHealth) * 100;
});

const healthBarColor = computed(() => {
  if (healthPercentage.value > 50) return 'bg-green-600';
  if (healthPercentage.value > 25) return 'bg-yellow-600';
  return 'bg-red-600';
});
</script>

<template>
  <div class="relative border-2 border-black rounded-lg w-full bg-slate-100">
    <div
      role="healthbar"
      class="w-full text-center font-bold transition-all duration-500 ease-in-out h-full"
      :class="healthBarColor"
      :style="{ width: `${healthPercentage}%` }"
    >
      <span class="text-white" :class="{ 'opacity-0': !health }">{{ health }}</span>
    </div>
  </div>
</template>
