import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUIAppStore = defineStore('UI/app', () => {
  const modalVisible = ref(false);
  const onCloseModalCallback = ref(null);

  const startModal = ({ onClose }) => {
    onCloseModalCallback.value = onClose;
    modalVisible.value = true;
  };

  const closeModal = () => {
    onCloseModalCallback.value?.();
    modalVisible.value = false;
  };

  return {
    modalVisible,
    startModal,
    closeModal,
  };
});
