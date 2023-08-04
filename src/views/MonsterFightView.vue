<script setup>
import { ref } from 'vue';

const monsterHP = ref(0);
</script>
<template>
  <div class="text-3xl">Give monster HP (up to 20)</div>
  <input type="number" v-model="monsterHP" />
</template>