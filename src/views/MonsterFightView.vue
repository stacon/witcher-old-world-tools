<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useMonsterFightStore } from '@/stores/monster-fight/monster-fight';
import PHASES from '@/constants/monsterFightPhases';
import PhaseNotStarted from './components/phase-not-started/PhaseNotStarted.vue';
import PhaseOngoing from './components/phase-ongoing/PhaseOngoing.vue';
import PhaseEnd from './components/phase-end/PhaseEnd.vue';

const { phase } = storeToRefs(useMonsterFightStore());
const { resetMonsterFight } = useMonsterFightStore();

const showResetButton = computed(() => phase !== PHASES.NOT_STARTED);
const onResetClick = resetMonsterFight;

const activeComponent = computed(() => {
  switch (phase.value) {
    case PHASES.NOT_STARTED:
      return PhaseNotStarted;
    case PHASES.ONGOING:
      return PhaseOngoing;
    default:
      return PhaseEnd;
  }
});
</script>

<template>
  <div class="flex flex-col items-center">
    <component :is="activeComponent" :phase="phase" />
    <button
      class="px-8 py-2 border border-black bg-black text-white font-semibold rounded-lg mt-4"
      v-if="showResetButton"
      @click="onResetClick"
    >
      Reset
    </button>
  </div>
</template>
