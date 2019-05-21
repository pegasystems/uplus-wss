<template>
  <header>
    <button v-on:click="showSidePanel" class="nav-button">
      <i class="pi pi-bars"></i>
    </button>
    <a>
      <img v-on:click="goToHome" class="logo" :src="('./img/u+-logo.svg')" alt="U+">
    </a>
    <OperatorButton v-if="isAuthenticated"/>
    <LoginButton v-else/>
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
  methods: {
    showSidePanel() {
      mainconfig.isSidePanelVisible = true;
    },
    goToHome() {
      mainconfig.phonePageName = 'home';
      mainconfig.quickLinkId = -1;
      mainconfig.offerURL = '';
    },
  },
  components: {
    OperatorButton,
    LoginButton,
  },
};
</script>
