<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
  },
});

const emit = defineEmits(['click']);
</script>
<template>
  <button
    :[disabled]="disabled"
    class="px-2 border rounded-lg text-black border-black"
    :class="{ 'border-gray-300 text-gray-300 italic': disabled }"
    @click="emit('click')"
  >
    <slot></slot>
  </button>
</template>
