import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useMonsterFightStore } from '@/stores/monster-fight/monster-fight';
import { monsterLevelByMonsterHealth } from '@/utils';

export const useUIMonsterFightViewStore = defineStore('UI/monsterFightView', () => {
  const monsterFightStore = useMonsterFightStore();
  const inputMonsterHealth = ref(10);
  const errors = ref([]);

  const onInitiateFightClick = (type) => {
    errors.value = [];
    inputMonsterHealth.value < 10 && errors.value.push('Monster health must be at least 10');
    inputMonsterHealth.value > 20 && errors.value.push('Monster health must be at most 20');

    if (errors.value.length) return;

    monsterFightStore.initiateFight(inputMonsterHealth.value, type);
  };

  const monsterLevel = computed(() => monsterLevelByMonsterHealth(inputMonsterHealth.value));

  return {
    inputMonsterHealth,
    onInitiateFightClick,
    monsterLevel,
    errors,
  };
});
