<script>
import { computed, inject, watchEffect, getCurrentInstance } from 'vue';

export default {
  name: 'Tab',
  props: {
    name: String,
  },
  setup() {
    const instance = getCurrentInstance();
    const { tabs, active } = inject('tabsState');

    const index = computed(() =>
      tabs.value.findIndex((target) => target.uid === instance.uid),
    );
    const isActive = computed(() => index.value === active.value);

    watchEffect(() => {
      if (index.value === -1) {
        tabs.value.push(instance);
      }
    });

    return {
      isActive,
    };
  },
};
</script>

<template>
  <div v-if="isActive">
    <slot />
  </div>
</template>
