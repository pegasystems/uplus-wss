<script setup>
import { useSlots, ref, provide } from 'vue';

const props = defineProps({
  defaultSelectedIndex: Number,
});


const slots = useSlots();
const tabTitles = ref(
  slots.default()[0].children.map((tab) => tab.props.title),
);
const selectedTitle = ref(tabTitles.value[props.defaultSelectedIndex || 0]);

provide('selectedTitle', selectedTitle);
</script>

<template>
  <div class="account-tabs">
    <ul class="account-tabs-header">
      <li
        v-for="title in tabTitles"
        :key="title"
        class="account-tabs-item"
        :class="{ selected: selectedTitle === title }"
        @click="selectedTitle = title"
      >
        {{ title }}
      </li>
    </ul>

    <slot />
  </div>
</template>
