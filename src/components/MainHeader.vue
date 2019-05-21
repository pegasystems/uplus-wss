<template>
  <header class="flex flex-col">
    <div class="wrap header flex">
      <a>
        <img v-on:click="goHomePage" class="logo" :src="('./img/u+-logo.svg')" alt="U+">
      </a>
      <nav class="flex-grow-1">
        <ul class="flex flex-mid-align flex-grow-1">
          <MenuItem v-for="item in app.menuitems" v-bind:key="item.title" v-bind:title="item.title"></MenuItem>
        </ul>
      </nav>
      <a
        class="margin-r-2x"
        v-if="isAuthenticated && settings.kmhelp.url !==''"
        v-on:click="showKMHelp"
      >{{ $t('message.kmhelp') }}</a>
      <OperatorButton v-if="isAuthenticated"/>
      <LoginButton v-else/>
      <MainHeaderMenu/>
    </div>
  </header>
</template>

<script>
import MenuItem from './controls/MenuItem.vue';
import MainHeaderMenu from './widgets/MainHeaderMenu.vue';
import OperatorButton from './widgets/OperatorButton.vue';
import LoginButton from './widgets/LoginButton.vue';
import { mainconfig } from '../global';

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
        mainconfig.reloadAccountMashup += 1;
        this.goHomePage();
      } else if (typeof e.data === 'object') {
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
    goHomePage() {
      mainconfig.quickLinkId = -1;
      mainconfig.viewBill = -1;
      mainconfig.homeHeroAction = -1;
      mainconfig.offerAction = -1;
      mainconfig.toDo = -1;
      mainconfig.viewKMHelp = -1;
      mainconfig.offerURL = '';
      if (window.history) {
        if (mainconfig.isAuthenticated) {
          window.history.pushState(
            { userId: mainconfig.userId },
            '',
            'account',
          );
        } else {
          window.history.pushState({}, '', 'index.html');
        }
      }
    },
    showKMHelp() {
      mainconfig.viewKMHelp = 1;
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
