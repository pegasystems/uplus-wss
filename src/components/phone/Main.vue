<template>
  <HomePage v-if="phonePageName=='home'"/>
  <LoginPage v-else-if="!isAuthenticated"/>
  <Mashup v-else-if="quickLinkId != -1"/>
  <QuickLinks v-else-if="phonePageName=='quicklinks'"/>
  <HomePage v-else/>
</template>

<script>
import { mainconfig } from "../../global";
import HomePage from "./HomePage.vue";
import LoginPage from "./LoginPage.vue";
import QuickLinks from "./QuickLinks.vue";
import Mashup from "./Mashup.vue";

export default {
  data: function() {
    return mainconfig;
  },
  components: {
    HomePage,
    LoginPage,
    QuickLinks,
    Mashup
  }
};
</script>