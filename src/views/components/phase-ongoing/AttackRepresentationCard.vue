<script setup>
const props = defineProps({
  attack: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="flex border rounded-md p-2 m-4">
    <pre>{{ JSON.stringify(attack, null, 2) }}</pre>
  </div>
</template>
