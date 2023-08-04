<script setup>
import './style.css';
import { RouterView } from 'vue-router';
import TheHeader from './components/TheHeader.vue';
</script>

<template>
  <div class="flex flex-col h-screen">
    <TheHeader />
    <main class="m-2 h-full">
      <RouterView />
    </main>
  </div>
</template>
