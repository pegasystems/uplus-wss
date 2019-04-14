<template>
  <div class="flex top-nav">
    <a v-if="previousPage=='index.html'" href="./index.html">
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
import { mainconfig } from "../../global";
export default {
  props: {
    previousPage: { required: true }
  },
  data: function() {
    return mainconfig;
  },
  methods: {
    goBack: function(event) {
      mainconfig.phonePageName = this.previousPage;
      mainconfig.quickLinkId = -1;
    }
  }
};
</script>
