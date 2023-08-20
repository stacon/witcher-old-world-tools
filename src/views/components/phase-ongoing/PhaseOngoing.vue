<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import PhaseTitle from '../phase-title/PhaseTitle.vue';
import Button from '@/components/button/Button.vue';
import { useMonsterFightStore } from '@/stores/monster-fight/monster-fight';

const monsterFightStore = useMonsterFightStore();
const { currentMonsterHealth, currentAttack, monsterLevel } = storeToRefs(monsterFightStore);
const {
  inflictDamageToMonster,
  monsterBiteAttack,
  monsterChargeAttack,
  playerKnockedOut,
  startVenomousSteelAction,
} = monsterFightStore;

const monsterHasRemainingHealth = computed(() => currentMonsterHealth.value > 0);
const onBiteAttackClick = monsterBiteAttack;
const onChargeAttackClick = monsterChargeAttack;
const onKnockedOutClick = playerKnockedOut;
const onInflictDamageToMonsterClick = inflictDamageToMonster;
const onRandomAttackClick = () => {
  const randomAttack = Math.floor(Math.random() * 2) + 1;
  switch (randomAttack) {
    case 1:
      return onChargeAttackClick();
    default:
      return onBiteAttackClick();
  }
};
</script>

<template>
  <div class="flex flex-col w-full items-center gap-1">
    <PhaseTitle
      >Remaining Monster (lvl {{ monsterLevel }}) Health: {{ currentMonsterHealth }}</PhaseTitle
    >

    <div class="flex border rounded-md p-2 m-4" v-if="currentAttack">
      <pre>{{ JSON.stringify(currentAttack, null, 2) }}</pre>
    </div>

    <div class="flex gap-1" v-if="monsterHasRemainingHealth">
      <Button
        v-for="number in [1, 2, 3]"
        :key="number"
        @click="onInflictDamageToMonsterClick(number)"
      >
        <span v-for="_ in new Array(number).fill(null)" :key="JSON.stringify(_)"> &#9876; </span>
      </Button>
    </div>

    <div>
      <Button @click="startVenomousSteelAction()"> Venomous Steel </Button>
    </div>

    <div class="bg-gray-300 w-60 h-0.5" />

    <div v-if="monsterHasRemainingHealth" class="flex gap-1">
      <Button @click="onChargeAttackClick"> Charge </Button>
      <Button @click="onRandomAttackClick"> Charge/Bite </Button>
      <Button @click="onBiteAttackClick">Bite</Button>
    </div>

    <div class="bg-gray-300 w-60 h-0.5" />

    <div class="flex flex-col gap-1">
      <Button @click="onKnockedOutClick"> Player Knocked out </Button>
      <Button v-if="!monsterHasRemainingHealth" @click="onInflictDamageToMonsterClick(0)">
        Monster Slain
      </Button>
    </div>
  </div>
</template>
