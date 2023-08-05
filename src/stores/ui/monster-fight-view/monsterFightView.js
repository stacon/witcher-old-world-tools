import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useMonsterFightStore } from '@/stores/monster-fight/monster-fight';
import { monsterLevelByMonsterHealth } from '@/utils';

export const useUIMonsterFightViewStore = defineStore('UI/monsterFightView', () => {
  const monsterFightStore = useMonsterFightStore();
  const inputMonsterHealth = ref(10);

  const onInitiateFightClick = (type) => {
    monsterFightStore.initiateFight(inputMonsterHealth.value, type);
  };

  const monsterLevel = computed(() => monsterLevelByMonsterHealth(inputMonsterHealth.value));

  return {
    inputMonsterHealth,
    onInitiateFightClick,
    monsterLevel,
  };
});
