<script setup>
import { computed } from 'vue';
import PhaseTitle from '../phase-title/PhaseTitle.vue';
import { useMonsterFightStore } from '@/stores/monster-fight/monster-fight';

const monsterFightStore = useMonsterFightStore();

const monsterHealth = computed(() => monsterFightStore.currentMonsterHealth);
const currentAttack = computed(() => monsterFightStore.currentAttack);
const monsterHasRemainingHealth = computed(() => monsterHealth.value > 0);
const monsterLevel = computed(() => monsterFightStore.monsterLevel);
const onBiteAttackClick = monsterFightStore.monsterBiteAttack;
const onChargeAttackClick = monsterFightStore.monsterChargeAttack;
const onRandomAttackClick = () => {
  const randomAttack = Math.floor(Math.random() * 2) + 1;
  switch (randomAttack) {
    case 1:
      return onChargeAttackClick();
    default:
      return onBiteAttackClick();
  }
};

const onKnockedOutClick = () => {
  monsterFightStore.playerKnockedOut();
};

const onInflictDamageToMonsterClick = (damage) => {
  monsterFightStore.inflictDamageToMonster(damage);
};
</script>

<template>
  <div class="flex flex-col w-full items-center">
    <PhaseTitle>Remaining Monster (lvl {{ monsterLevel }}) Health: {{ monsterHealth }}</PhaseTitle>
    <div class="flex border rounded-md p-2 m-4" v-if="currentAttack">
      <pre>{{ JSON.stringify(currentAttack, null, 2) }}</pre>
    </div>
    <div class="flex gap-1" v-if="monsterHasRemainingHealth">
      <button>Inflict Damage:</button>
      <button class="px-2 border border-black rounded-lg" @click="onInflictDamageToMonsterClick(1)">
        1
      </button>
      <button class="px-2 border border-black rounded-lg" @click="onInflictDamageToMonsterClick(2)">
        2
      </button>
      <button class="px-2 border border-black rounded-lg" @click="onInflictDamageToMonsterClick(3)">
        3
      </button>
      <button disabled class="px-2 border border-gray-300 rounded-lg text-gray-300 italic">
        Poison
      </button>
    </div>
    <div v-if="monsterHasRemainingHealth" class="flex gap-1 mt-2">
      <button class="px-2 border border-black rounded-lg" @click="onChargeAttackClick">
        Charge
      </button>
      <button class="px-2 border border-black rounded-lg" @click="onRandomAttackClick">
        Charge/Bite
      </button>
      <button class="px-2 border border-black rounded-lg" @click="onBiteAttackClick">Bite</button>
    </div>
    <div class="flex flex-col gap-1 mt-2">
      <button class="px-2 border border-black rounded-lg" @click="onKnockedOutClick">
        Player Knocked out
      </button>
      <button
        v-if="!monsterHasRemainingHealth"
        class="px-2 border border-black rounded-lg"
        @click="onInflictDamageToMonsterClick(0)"
      >
        Monster Slain
      </button>
    </div>
  </div>
</template>
