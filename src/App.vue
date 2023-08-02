<script setup>
import { RouterLink, RouterView } from 'vue-router';
import ROUTES from './router/routes.enum';
import './style.css';
</script>

<template>
  <header>
    <div>
      <div class="text-3xl">Witcher: Old World Tools</div>
      <nav class="w-full">
        <RouterLink class="inline-block px-4 border-l first:border-0" :to="ROUTES.HOME">
          Home
        </RouterLink>
        <RouterLink class="inline-block px-4 border-l first:border-0" :to="ROUTES.TOOLS">
          Tools
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
