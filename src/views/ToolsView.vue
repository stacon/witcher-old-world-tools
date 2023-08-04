<script setup>
import BoardButton from '../components/BoardButton.vue';
import ROUTES from '@/router/routes.enum';
import tools from '@/config/tools.json';

const moreThanOneTools = tools.length > 1;
</script>

<template>
  <div
    class="transition-all grid grid-cols-1 gap-4 place-content-stretch mx-8 md:mx-32 my-4"
    :class="{ 'grid-cols-2 md:grid-cols-4': moreThanOneTools }"
  >
    <BoardButton
      v-for="tool in tools"
      :key="tool.id"
      :to="ROUTES.MONSTER_FIGHT"
      :status="tool.status"
    >
      {{ tool.name }}
    </BoardButton>
  </div>
</template>
