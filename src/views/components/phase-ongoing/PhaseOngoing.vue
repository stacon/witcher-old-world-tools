<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import PhaseTitle from '../phase-title/PhaseTitle.vue';
import { useMonsterFightStore } from '@/stores/monster-fight/monster-fight';
import Button from '@/components/button/Button.vue';
import HealthBar from '@/components/HealthBar.vue';
import AttackRepresentationCard from './AttackRepresentationCard.vue';

const monsterFightStore = useMonsterFightStore();
const { currentMonsterHealth, currentAttack, monsterLevel, initialMosterHealth } =
  storeToRefs(monsterFightStore);
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
  <div class="flex flex-col items-center gap-1 max-w-xl">
    <PhaseTitle> Fighting against lvl {{ monsterLevel }} monster </PhaseTitle>

    <div class="flex no-wrap w-full mb-5 text-center gap-1">
      <HealthBar :health="currentMonsterHealth" :maxHealth="initialMosterHealth" />
    </div>

    <div
      v-if="monsterHasRemainingHealth"
      class="flex flex-col w-full items-center gap-1 p-2 border-2 border-gray-600 rounded-lg"
    >
      <span class="text-xl">Monster Actions</span>
      <AttackRepresentationCard v-if="currentAttack" :attack="currentAttack" />
      <div class="flex items-center gap-1">
        <Button @click="onChargeAttackClick"> Charge </Button>
        <Button @click="onRandomAttackClick"> Charge/Bite </Button>
        <Button @click="onBiteAttackClick">Bite</Button>
      </div>
    </div>

    <div
      v-if="monsterHasRemainingHealth"
      class="flex flex-col w-full items-center gap-1 p-2 border-2 border-gray-600 rounded-lg"
    >
      <span class="text-xl">Witcher Actions</span>
      <div class="flex gap-1">
        <Button
          v-for="number in [1, 2, 3]"
          :key="number"
          @click="onInflictDamageToMonsterClick(number)"
        >
          <span v-for="_ in new Array(number).fill(null)" :key="JSON.stringify(_)"> &#9876; </span>
        </Button>
      </div>

      <Button @click="startVenomousSteelAction()"> Viper: Venomous Steel </Button>
    </div>

    <div class="flex flex-col w-full items-center gap-1 p-2 border-2 border-gray-600 rounded-lg">
      <span class="text-xl">Outcomes</span>
      <Button @click="onKnockedOutClick"> Player Knocked out </Button>
      <Button v-if="!monsterHasRemainingHealth" @click="onInflictDamageToMonsterClick(0)">
        Monster Slain
      </Button>
    </div>
  </div>
</template>
