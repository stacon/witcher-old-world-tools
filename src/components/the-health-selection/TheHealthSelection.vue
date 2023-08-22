<script setup>
import { computed, ref, onMounted } from 'vue';
import { monsterLevelByMonsterHealth } from '@/utils';

const emit = defineEmits(['update:selectedHealth']);

const selectedHealth = ref(10);
const monsterLevel = computed(() => monsterLevelByMonsterHealth(selectedHealth.value));

const increaseHealth = () => {
  selectedHealth.value += 1;
  emit('update:selectedHealth', selectedHealth.value);
};

const decreaseHealth = () => {
  selectedHealth.value -= 1;
  emit('update:selectedHealth', selectedHealth.value);
};

onMounted(() => {
  emit('update:selectedHealth', selectedHealth.value);
});

const levelStyle = computed(() => {
  if (monsterLevel.value === 1) {
    return 'text-green-500';
  }
  if (monsterLevel.value === 2) {
    return 'text-yellow-500 font-semibold';
  }
  if (monsterLevel.value === 3) {
    return 'text-red-500 font-bold';
  }
});

const healthBGColor = computed(() => {
  if (monsterLevel.value === 3) {
    return 'bg-red-200 font-bold';
  }
  if (monsterLevel.value === 2) {
    return 'bg-yellow-100 font-semibold';
  }
  return 'bg-green-100 ';
});
</script>
<template>
  <div class="flex flex-col border-2 border-black rounded-xl w-44 text-center">
    <span class="flex justify-around items-center border-b-2 border-black text-center">
      Monster Level: <span class="text-3xl" :class="levelStyle">{{ monsterLevel }} </span>
    </span>
    <pre class="text-9xl leading-9xl" :class="healthBGColor">{{ selectedHealth }}</pre>
    <div class="flex border-t-2 border-black h-10">
      <button @click="increaseHealth()" class="border-r border-black flex-1 text-3xl">
        &#8593;
      </button>
      <button @click="decreaseHealth()" class="border-l border-black flex-1 text-3xl">
        &#8595;
      </button>
    </div>
  </div>
</template>
