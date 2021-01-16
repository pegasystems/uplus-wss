<template>
  <div class="flex top-nav">
    <button v-on:click="goBack" class="simple">
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
      mainconfig.homeHeroAction = -1;
      mainconfig.quickLinkId = -1;
      if (mainconfig.isAuthenticated) {
        window.history.pushState(
          { userId: mainconfig.userId },
          '',
          mainconfig.phonePageName === ''
            ? 'index.html'
            : mainconfig.phonePageName,
        );
      } else {
        window.history.pushState(
          {},
          '',
          mainconfig.phonePageName === ''
            ? 'index.html'
            : mainconfig.phonePageName,
        );
      }
    },
  },
};
</script>
