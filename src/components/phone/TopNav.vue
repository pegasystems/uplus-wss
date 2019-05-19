<template>
  <div class="flex top-nav">
    <a v-if="previousPhonePage=='index.html'" href="./index.html">
      <i class="pi pi-caret-left"></i>
    </a>
    <button v-else v-on:click="goBack" class="simple">
      <i class="pi pi-caret-left"></i>
    </button>
    <div class="flex-align-r">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mainconfig } from '../../global';

export default {
  props: {
    previousPhonePage: { required: true },
  },
  data() {
    return mainconfig;
  },
  methods: {
    goBack() {
      mainconfig.phonePageName = this.previousPhonePage;
      mainconfig.quickLinkId = -1;
    },
  },
};
</script>
