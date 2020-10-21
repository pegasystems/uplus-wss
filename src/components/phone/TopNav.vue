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
      if (mainconfig.quickLinkId !== -1) {
        const urllogout = `${mainconfig.settings.quicklinks[mainconfig.quickLinkId].url}?pyActivity=LogOff`;
        const testiframe = document.createElement('iframe');
        testiframe.setAttribute('src', urllogout);
        testiframe.setAttribute('style', 'display:none');
        testiframe.onload = function onloadMashup() {
          document.body.removeChild(testiframe);
        };
        document.body.appendChild(testiframe);
      }
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
