<script setup>
import './style.css';
import { RouterView } from 'vue-router';
import TheHeader from './components/TheHeader.vue';
import ModalsArea from './modals/ModalsArea.vue';
import { useUIAppStore } from '@/stores/ui/app/app';

const uiAppStore = useUIAppStore();
</script>

<template>
  <div class="relative">
    <div class="flex flex-col h-screen">
      <TheHeader />
      <main class="m-2 h-full">
        <RouterView />
      </main>
    </div>
    <div
      v-if="uiAppStore.modalVisible"
      @click.stop="uiAppStore.closeModal()"
      class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"
    ></div>
    <ModalsArea
      v-if="uiAppStore.modalVisible"
      class="absolute top-6 md:top-10 left-1/2 -translate-x-1/2 w-10/12"
    />
  </div>
</template>
