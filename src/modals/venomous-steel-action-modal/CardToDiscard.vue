<script setup>
import ATTACK_TYPE from '@/constants/attackType';
import TheAttackRepresentation from '@/components/the-attack-representation/TheAttackRepresentation.vue';
const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
});

console.log(props.card);
</script>

<template>
  <div class="flex justify-around">
    <div class="flex flex-col w-1/2 text-center">
      <span class="font-cinzel-decorative font-bold">CHARGE</span>
      <TheAttackRepresentation
        :type="ATTACK_TYPE.CHARGE"
        :action="card[ATTACK_TYPE.CHARGE]"
        compact
      />
    </div>
    <div class="bg-gray-300 w-1 rounded-lg mx-1"></div>
    <div class="flex flex-col w-1/2 text-center">
      <span class="font-cinzel-decorative font-bold">BITE</span>
      <TheAttackRepresentation :type="ATTACK_TYPE.BITE" :action="card[ATTACK_TYPE.BITE]" compact />
    </div>
  </div>
</template>
