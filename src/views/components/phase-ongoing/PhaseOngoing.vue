<script setup>
import { computed } from 'vue';
import PhaseTitle from '../phase-title/PhaseTitle.vue';
import { useMonsterFightStore } from '@/stores/monster-fight/monster-fight';

const monsterFightStore = useMonsterFightStore();

const monsterHealth = computed(() => monsterFightStore.currentMonsterHealth);

const onKnockedOutClick = () => {
  monsterFightStore.playerKnockedOut();
};

const onInflictDamageToMonsterClick = (damage) => {
  monsterFightStore.inflictDamageToMonster(damage);
};
</script>

<template>
  <div class="flex flex-col w-full items-center">
    <PhaseTitle>Remaining Monster Health: {{ monsterHealth }}</PhaseTitle>
    <div>
      <button>Damage:</button>
      <button @click="onInflictDamageToMonsterClick(1)">1</button>
      <button @click="onInflictDamageToMonsterClick(2)">2</button>
      <button @click="onInflictDamageToMonsterClick(3)">3</button>
      <button @click="onInflictDamageToMonsterClick(5)">5</button>
    </div>
    <div>
      <button>Poison</button>
    </div>
    <div>
      <button>Charge</button>
      <button>Charge/Bite</button>
      <button>Bite</button>
    </div>
    <div>
      <button @click="onKnockedOutClick">Knocked out</button>
    </div>
  </div>
</template>
