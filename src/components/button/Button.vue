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
    class="font-cinzel-decorative px-4 py-1 font-extrabold border-2 rounded-lg text-black hover:bg-gray-100 active:scale-95 transition-transform focus:border-red-800 focus:outline-none"
    :class="{
      'border-gray-500': !disabled,
      'border-gray-300 text-gray-300 italic hover:bg-transparent cursor-default': disabled,
    }"
    @click="!disabled && emit('click')"
  >
    <slot></slot>
  </button>
</template>
