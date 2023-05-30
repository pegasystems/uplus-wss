<script setup>
import { inject } from 'vue';

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  title: String,
});

const selectedTitle = inject('selectedTitle');
</script>

<template>
  <div class="account-tabs-content" v-show="selectedTitle === title">
    <slot />
  </div>
</template>
