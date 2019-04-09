<template>
  <header>
    <button v-on:click="showSidePanel" class="nav-button">
      <i class="pi pi-bars"></i>
    </button>
    <a>
      <img v-on:click="goToHome" class="logo" :src="('./img/u+-logo.svg')" alt="U+">
    </a>
    <OperatorButton v-if="isAuthenticated"/>
  </header>
</template>

<script>
import { mainconfig } from "../../global";
import OperatorButton from "../widgets/OperatorButton.vue";
export default {
  data: function() {
    return mainconfig;
  },
  methods: {
    showSidePanel: function(event) {
      mainconfig.isSidePanelVisible = true;
    },
    goToHome: function() {
      mainconfig.phonePageName = "home";
      mainconfig.quickLinkId = -1;
    }
  },
  components: {
    OperatorButton
  }
};
</script>
