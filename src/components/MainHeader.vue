<template>
  <header
    class="flex flex-col"
    v-bind:style="
      !isAuthenticated && offerURL == '' && homeHeroImg != ''
        ? { backgroundImage: 'url(' + homeHeroImg + ')' }
        : {}
    "
  >
    <div class="wrap header flex">
      <a>
        <img
          v-on:click="goHomePage"
          class="logo"
          :src="'./img/u+-logo.svg'"
          alt="U+"
        />
      </a>
      <nav class="flex-grow-1">
        <ul class="flex flex-mid-align flex-grow-1">
          <MenuItem
            v-for="(item, index) in app.menuitems"
            v-bind:pagetype="item.pagetype"
            v-bind:key="index"
            v-bind:title="item.title"
            v-bind:href="app.offer.length > 1 ? `offer${index + 1}.html` : null"
          ></MenuItem>
        </ul>
      </nav>
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
      <LoginButton v-else />
      <MainHeaderMenu />
    </div>
    <div v-if="currentPage.indexOf('offer') === 0">
      <h1>{{ $t('message.' + app.offer[offerIndex].header.title) }}</h1>
      <p>{{ $t('message.' + app.offer[offerIndex].header.msg) }}</p>
    </div>
  </header>
</template>

<script>
import MenuItem from './controls/MenuItem.vue';
import MainHeaderMenu from './widgets/MainHeaderMenu.vue';
import OperatorButton from './widgets/OperatorButton.vue';
import LoginButton from './widgets/LoginButton.vue';
import { mainconfig } from '../global';
import { sendClickStreamEvent } from '../CDHIntegration';

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
        mainconfig.reloadToDoMashup += 1;
        mainconfig.reloadActivityMashup += 1;
        this.goHomePage();
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
      } else if (
        typeof e.data === 'object' &&
        typeof e.data.action !== 'undefined'
      ) {
        if (
          e.data.action === 'showkmarticle' &&
          typeof e.data.articleid === 'string'
        ) {
          mainconfig.KMArticleID = e.data.articleid;
          this.showKMHelp();
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
    goHomePage(skipClickStream) {
      mainconfig.quickLinkId = -1;
      mainconfig.viewBill = -1;
      mainconfig.viewBanner = -1;
      mainconfig.homeHeroAction = -1;
      mainconfig.offerAction = -1;
      mainconfig.toDo = -1;
      mainconfig.viewKMHelp = -1;
      mainconfig.offerURL = '';
      mainconfig.offerIndex = 0;
      mainconfig.CDHContainer = {};
      if (window.history) {
        if (mainconfig.isAuthenticated) {
          mainconfig.currentPage = 'account';
          window.history.pushState(
            { userId: mainconfig.userId },
            '',
            mainconfig.currentPage,
          );
        } else {
          mainconfig.currentPage = 'index.html';
          window.history.pushState({}, '', mainconfig.currentPage);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      window.loadPage = new Date();
      if (skipClickStream && skipClickStream === true) return;
      sendClickStreamEvent(mainconfig, 'PageView', 'Home', window.loadPage);
    },
    showKMHelp() {
      this.goHomePage(true);
      mainconfig.previousPage = mainconfig.currentPage;
      mainconfig.currentPage = 'help.html';
      sendClickStreamEvent(mainconfig, 'PageView', 'Help', window.loadPage);
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
    MenuItem,
    LoginButton,
    OperatorButton,
    MainHeaderMenu,
  },
};
</script>
