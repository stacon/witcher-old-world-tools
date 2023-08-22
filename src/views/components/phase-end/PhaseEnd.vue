<script setup>
import { computed } from 'vue';
import PhaseTitle from '../phase-title/PhaseTitle.vue';
import PHASES from '@/constants/monsterFightPhases';

const props = defineProps({
  phase: {
    type: String,
    required: true,
  },
});

const phase = props.phase;

const POST_END_INFO = {
  [PHASES.KNOCKED_OUT]: {
    title: 'Player Knocked Out',
    info: [
      "Take 1 Trail Token matching monsters Terrain (if you already haven't one).",
      'Add 0-cost Action card into your hand.',
      'In phase III draw up to 2 cards.',
    ],
  },
  [PHASES.WON]: {
    title: 'Monster Defeated!',
    info: [
      'When you defeat a Monster, take the Monster Card and gain 2 Gold.',
      'Place the Gold on your Player Board.',
      'Turn the Card over and read the fight description. You may read it out loud.',
      'Move up by 1 on the Trophy Track and suffer the Fatigue.',
      'Slide the Monster Card under your Player Board, so the Trophy ability is visible',
    ],
  },
  [PHASES.DRIVEN_AWAY]: {
    title: 'Monster Driven Away!',
    info: [
      'Gain 2 Gold! Place the Gold on your Player Board.',
      'Add 0-cost Action card into your hand',
    ],
  },
};

const title = computed(() => POST_END_INFO[phase].title);
const infoList = computed(() => POST_END_INFO[phase].info);
</script>
<template>
  <div class="text-center">
    <PhaseTitle>{{ title }}</PhaseTitle>
    <ol>
      <li v-for="info in infoList" :key="info">{{ info }}</li>
    </ol>
  </div>
</template>
