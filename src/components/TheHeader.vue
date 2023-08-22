<!-- <script setup>
import { RouterLink } from 'vue-router';
import ROUTES from '@/router/routes.enum';
</script> -->
<template>
  <header>
    <header>
      <div class="flex flex-col w-full h-12 md:h-16 justify-center text-center">
        <h1
          class="font-cinzel-decorative flex flex-col transition-all text-2xl md:text-4xl font-bold text-center"
        >
          MONSTER FIGhT
        </h1>
        <sub class="font-cinzel-decorative leading-3 font-semibold text-gray-600">
          WITCHER : Old world monster fight emulator
        </sub>
        <!-- <nav class="flex w-full justify-center">
          <RouterLink class="inline-block px-4 border-l first:border-0 " :to="ROUTES.HOME">
            Home
          </RouterLink>
          <RouterLink class="inline-block px-4 border-l first:border-0" :to="ROUTES.TOOLS">
            Tools
          </RouterLink>
        </nav> -->
      </div>
    </header>
  </header>
</template>
