<script setup>
import { computed } from 'vue';
import ATTACK_TYPE from '@/constants/attackType';

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  action: {
    type: Object,
    required: true,
  },
  compact: {
    type: Boolean,
    default: false,
  },
});

const attackAnouncement = computed(() =>
  props.type === ATTACK_TYPE.BITE ? 'Monster went for a bite!' : 'Monster charged!',
);

const damageRepresentation = computed(() => {
  if (typeof props.action.damage === 'number' && props.action.damage > 0) {
    return `Take ${props.action.damage} damage`;
  }
  if (typeof props.action.damage === 'string') {
    return `Take damage equal to your ${props.action.damage} skill`;
  }

  return null;
});
const trash = computed(() => props.action.trash);
const discardFromHand = computed(() => props.action.discard);
const discardFromDeck = computed(() => props.action.discardDeck);
const skillReduceType = computed(() => props.action.decreaseSkill?.skill);
const skillReduceAmount = computed(() => props.action.decreaseSkill?.amount);
const specialAttackNumber = computed(() => props.action.specialAttackId);
</script>

<template>
  <div>
    <div v-if="!props.compact" class="font-cinzel">{{ attackAnouncement }}</div>
    <div class="flex flex-col gap-1">
      <div class="font-bold">
        <div v-if="damageRepresentation">{{ damageRepresentation }}</div>
        <div v-if="trash">Trash {{ trash }} cards from your hand</div>
        <div v-if="discardFromHand">Discard {{ discardFromHand }} cards from your hand</div>
        <div v-if="discardFromDeck">Discard {{ discardFromDeck }} cards from your deck</div>
        <div v-if="skillReduceType">Reduce {{ skillReduceType }} by {{ skillReduceAmount }}</div>
        <div v-if="specialAttackNumber">Resolve special attack {{ specialAttackNumber }}</div>
      </div>
    </div>
  </div>
</template>
