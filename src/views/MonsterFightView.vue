<script setup>
import { computed } from 'vue';
import { useMonsterFightStore } from '@/stores/monster-fight/monster-fight';
import PHASES from '@/stores/monster-fight/constants/phases';
import PhaseNotStarted from './components/phase-not-started/PhaseNotStarted.vue';
import PhaseOngoing from './components/phase-ongoing/PhaseOngoing.vue';
import PhaseWon from './components/phase-won/PhaseWon.vue';
import PhaseDrivenAway from './components/phase-driven-away/PhaseDrivenAway.vue';
import PhaseKnockedOut from './components/phase-knocked-out/PhaseKnockedOut.vue';

const monsterFightState = useMonsterFightStore();
const phase = computed(() => monsterFightState.phase);
const showResetButton = computed(() => phase.value !== PHASES.NOT_STARTED);
const onResetClick = monsterFightState.resetMonsterFight;

const activeComponent = computed(() => {
  switch (phase.value) {
    case PHASES.NOT_STARTED:
      return PhaseNotStarted;
    case PHASES.ONGOING:
      return PhaseOngoing;
    case PHASES.WON:
      return PhaseWon;
    case PHASES.DRIVEN_AWAY:
      return PhaseDrivenAway;
    case PHASES.KNOCKED_OUT:
      return PhaseKnockedOut;
    default:
      return null;
  }
});
</script>

<template>
  <div class="flex flex-col items-center">
    <component :is="activeComponent" />
    <button
      class="px-8 py-2 border border-black bg-black text-white font-semibold rounded-lg mt-4"
      v-if="showResetButton"
      @click="onResetClick"
    >
      Reset
    </button>
  </div>
</template>
