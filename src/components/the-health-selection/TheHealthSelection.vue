<script setup>
import { computed, ref, onMounted } from 'vue';
import { monsterLevelByMonsterHealth } from '@/utils';

const emit = defineEmits(['update:selectedHealth']);

const selectedHealth = ref(10);
const monsterLevel = computed(() => monsterLevelByMonsterHealth(selectedHealth.value));

const changeHealth = (amount) => {
  selectedHealth.value += amount;
  emit('update:selectedHealth', selectedHealth.value);
};

onMounted(() => {
  emit('update:selectedHealth', selectedHealth.value);
});

const styles = {
  level: {
    1: 'text-green-500',
    2: 'text-yellow-500 font-semibold',
    3: 'text-red-500 font-bold',
  },
  healthBG: {
    1: 'bg-green-200',
    2: 'bg-yellow-200 font-semibold',
    3: 'bg-red-200 font-bold',
  },
};

const levelStyle = computed(() => styles.level[monsterLevel.value]);
const healthBGColor = computed(() => styles.healthBG[monsterLevel.value]);
</script>

<template>
  <div class="flex flex-col border-2 border-black rounded-xl w-44 text-center">
    <span class="flex justify-around items-center border-b-2 border-black text-center">
      Monster Level:
      <span class="text-3xl transition-colors ease-in-out" :class="levelStyle"
        >{{ monsterLevel }}
      </span>
    </span>
    <pre class="text-9xl leading-9xl transition-colors ease-in-out" :class="healthBGColor">{{
      selectedHealth
    }}</pre>
    <div class="flex border-t-2 border-black h-10">
      <button
        @click="changeHealth(1)"
        role="increase-health"
        class="flex-1 text-3xl md:hover:bg-green-50 rounded-bl-xl active:bg-green-500 md:active:bg-green-500 transition-colors ease-in-out"
      >
        &#9650;
      </button>
      <div class="bg-black h-full w-0.5"></div>
      <button
        @click="changeHealth(-1)"
        role="decrease-health"
        class="flex-1 text-3xl md:hover:bg-red-50 rounded-br-xl active:bg-red-500 md:active:bg-red-500 transition-colors ease-in-out"
      >
        &#9660;
      </button>
    </div>
  </div>
</template>
