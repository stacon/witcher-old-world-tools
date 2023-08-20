<script setup>
import Button from '@/components/button/Button.vue';

const props = defineProps({
  selectVenomousSteelLevelHandler: {
    type: Function,
    required: true,
  },
});
</script>
<template>
  <div>
    <span class="text-2xl">Select Venomous Steel level</span>
    <div class="flex flex-col gap-1">
      <Button v-for="level in [1, 2, 3, 4, 5]" @click="selectVenomousSteelLevelHandler(level)">
        {{ level }}
      </Button>
    </div>
  </div>
</template>
