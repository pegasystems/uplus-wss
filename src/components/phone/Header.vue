<template>
  <header>
    <button v-on:click="showSidePanel" class="nav-button">
      <i class="pi pi-bars"></i>
    </button>
    <a>
      <img v-on:click="goToHome" class="logo" :src="('./img/u+-logo.svg')" alt="U+" />
    </a>
    <OperatorButton v-if="isAuthenticated" />
    <LoginButton v-else-if="phonePageName==='' && !isAuthenticated" />
  </header>
</template>

<script>
import { mainconfig } from '../../global';
import OperatorButton from '../widgets/OperatorButton.vue';
import LoginButton from '../widgets/LoginButton.vue';

export default {
  data() {
    return mainconfig;
  },
  mounted() {
    window.addEventListener('message', this.iFrameMessageListener);
  },
  destroyed() {
    window.removeEventListener('message', this.iFrameMessageListener);
  },
  methods: {
    /* Will listen for message from the Mashup iframe to force a reload back of the MashupComponent */
    iFrameMessageListener(e) {
      if (e.data === 'pegaMashupNavigateBack') {
        if (mainconfig.offerURL !== '') {
          mainconfig.offerURL = '';
        } else if (mainconfig.quickLinkId !== -1) {
          mainconfig.quickLinkId = -1;
        }
        mainconfig.phonePageName = '';
      } else if (
        typeof e.data === 'object' &&
        typeof e.data.key !== 'undefined'
      ) {
        if (e.data.key === 'Intent' && typeof e.data.value === 'string') {
          mainconfig.intent = e.data.value;
          mainconfig.reloadOffer += 1;
        } else if (
          e.data.key === 'PreviousPage' &&
          typeof e.data.value === 'string'
        ) {
          mainconfig.previousPage = e.data.value;
          mainconfig.reloadOffer += 1;
        }
      }
    },
    showSidePanel() {
      mainconfig.isSidePanelVisible = true;
    },
    goToHome() {
      mainconfig.phonePageName = '';
      mainconfig.quickLinkId = -1;
      mainconfig.offerURL = '';
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
  components: {
    OperatorButton,
    LoginButton,
  },
};
</script>
