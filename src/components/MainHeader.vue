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
  methods: {
    goHomePage() {
      mainconfig.quickLinkId = -1;
      mainconfig.viewBill = -1;
      mainconfig.homeHeroAction = -1;
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
