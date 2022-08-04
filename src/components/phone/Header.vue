<template>
  <header>
    <button v-on:click="showSidePanel" class="nav-button">
      <i class="pi pi-bars"></i>
    </button>
    <a class="logo-link">
      <img
        v-on:click="goToHome"
        class="logo"
        :src="'./img/u+-logo.svg'"
        alt="U+"
      />
    </a>
    <a
      class="kmhelp"
      v-if="
        (isAuthenticated || settings.kmhelp.username !== '') &&
        settings.kmhelp.url !== ''
      "
      v-on:click="showKMHelp"
      >{{ $t('message.kmhelp') }}</a
    >
    <OperatorButton v-if="isAuthenticated" />
    <LoginButton
      v-else-if="phonePageName === '' || phonePageName === 'index.html'"
    />
  </header>
</template>

<script>
import { mainconfig } from '../../global';
import OperatorButton from '../widgets/OperatorButton.vue';
import LoginButton from '../widgets/LoginButton.vue';
import { sendClickStreamEvent } from '../../CDHIntegration';

export default {
  data() {
    return mainconfig;
  },
  mounted() {
    window.addEventListener('message', this.iFrameMessageListener);
  },
  unmounted() {
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
        } else if (mainconfig.viewKMHelp !== -1) {
          mainconfig.viewKMHelp = -1;
        } else if (mainconfig.viewBill !== -1) {
          mainconfig.viewBill = -1;
        } else if (mainconfig.viewBanner !== -1) {
          mainconfig.viewBanner = -1;
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
      } else if (e.data) {
        let elem = {};
        try {
          elem = JSON.parse(e.data);
        } catch {
          elem = {};
        }
        if (
          elem.channelName === 'PWMashup' &&
          elem.message &&
          elem.message.payload &&
          elem.message.payload.name === 'confirm' &&
          elem.message.uid.indexOf('ProactiveChat') === -1
        ) {
          if (mainconfig.quickLinkId !== -1) {
            const serverUrl =
              mainconfig.settings.quicklinks[mainconfig.quickLinkId].url;
            const testiframe = document.createElement('iframe');
            const urllogout = `${serverUrl}?pyActivity=LogOff`;
            testiframe.setAttribute('src', urllogout);
            testiframe.setAttribute('style', 'display:none');
            testiframe.onload = function onloadMashup() {
              document.body.removeChild(testiframe);
            };
            document.body.appendChild(testiframe);
          }
        }
      }
    },
    showSidePanel() {
      mainconfig.isSidePanelVisible = true;
    },
    goToHome() {
      mainconfig.homeHeroAction = -1;
      mainconfig.phonePageName = '';
      mainconfig.quickLinkId = -1;
      mainconfig.viewKMHelp = -1;
      mainconfig.viewBill = -1;
      mainconfig.viewBanner = -1;
      mainconfig.offerAction = -1;
      mainconfig.offerURL = '';
      mainconfig.CDHContainer = {};
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
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
    },
    showKMHelp() {
      mainconfig.previousPage = mainconfig.currentPage;
      mainconfig.currentPage = 'help.html';
      sendClickStreamEvent(mainconfig, 'PageView', 'Help', window.loadPage);
      window.loadPage = new Date();
      if (this.$gtag) {
        this.$gtag.pageview({
          page_path: mainconfig.currentPage,
        });
      }
      mainconfig.viewKMHelp = 1;
      mainconfig.logoutURL.kmhelp = `${mainconfig.settings.kmhelp.url}?pyActivity=LogOff`;
      mainconfig.reloadMashup += 1;
    },
  },
  components: {
    OperatorButton,
    LoginButton,
  },
};
</script>
