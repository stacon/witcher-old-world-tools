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
    class="px-4 py-1 font-bold border-2 rounded-lg text-black border-black hover:bg-gray-100 active:scale-95 transition-transform"
    :class="{
      'border-gray-300 text-gray-300 italic hover:bg-transparent cursor-default': disabled,
    }"
    @click="!disabled && emit('click')"
  >
    <slot></slot>
  </button>
</template>
