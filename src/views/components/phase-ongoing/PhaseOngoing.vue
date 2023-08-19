<script setup>
import { computed } from 'vue';
import PhaseTitle from '../phase-title/PhaseTitle.vue';
import Button from '@/components/button/Button.vue';
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
      <Button v-for="number in [1, 2, 3]" @click="onInflictDamageToMonsterClick(number)">
        {{ number }}
      </Button>
      <Button @click="monsterFightStore.startVenomousSteelAction()"> Venomous Steel </Button>
    </div>
    <div v-if="monsterHasRemainingHealth" class="flex gap-1 mt-2">
      <Button @click="onChargeAttackClick"> Charge </Button>
      <Button @click="onRandomAttackClick"> Charge/Bite </Button>
      <Button @click="onBiteAttackClick">Bite</Button>
    </div>
    <div class="flex flex-col gap-1 mt-2">
      <Button @click="onKnockedOutClick"> Player Knocked out </Button>
      <Button v-if="!monsterHasRemainingHealth" @click="onInflictDamageToMonsterClick(0)">
        Monster Slain
      </Button>
    </div>
  </div>
</template>
