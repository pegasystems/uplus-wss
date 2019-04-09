<template>
  <div class="top-nav">
    <button v-on:click="goBack" class="simple">
      <i class="pi pi-caret-left"></i>
    </button>
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
