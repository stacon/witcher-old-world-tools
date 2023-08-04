<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  to: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

const disabled = computed(() => props.status !== 'ACTIVE');
</script>
<template>
  <router-link
    @click="disabled && $event.stopPropagation()"
    :to="to"
    class="inline-block p-4 py-3 border-2 border-black rounded-lg bg-white text-black font-bold text-xl cursor-pointer transition-transform w-full text-center"
    :class="{
      'pointer-events-none bg-gray-300 text-gray-500 cursor-default': disabled,
      'active:scale-95': !disabled
    }"
  >
    <slot></slot>
  </router-link>
</template>
