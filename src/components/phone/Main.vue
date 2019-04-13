<template>
  <HomePage v-if="phonePageName=='home'"/>
  <LoginPage v-else-if="!isAuthenticated"/>
  <Mashup v-else-if="quickLinkId != -1"/>
  <IntroQuickLinks v-else-if="phonePageName=='quicklinks'"/>
  <QuickLinks v-else-if="phonePageName=='quicklinks1'"/>
  <HomePage v-else/>
</template>

<script>
import { mainconfig } from "../../global";
import HomePage from "./HomePage.vue";
import LoginPage from "./LoginPage.vue";
import QuickLinks from "./QuickLinks.vue";
import IntroQuickLinks from "./IntroQuickLinks.vue";
import Mashup from "./Mashup.vue";

export default {
  data: function() {
    return mainconfig;
  },
  components: {
    HomePage,
    LoginPage,
    IntroQuickLinks,
    QuickLinks,
    Mashup
  }
};
</script>