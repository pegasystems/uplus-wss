<template>
  <div id="app">
    <PhonePage v-if="isMobilePhone"/>
    <AccountPage v-else-if="isAuthenticated"/>
    <FrontPage v-else/>
  </div>
</template>

<script>
import { mainconfig } from "./global";

import PhonePage from "./components/phone/PhonePage.vue";
import FrontPage from "./components/FrontPage.vue";
import AccountPage from "./components/accounts/AccountPage.vue";

export default {
  name: "app",
  data: function() {
    return mainconfig;
  },
  components: {
    FrontPage,
    AccountPage,
    PhonePage
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i,800");
@import url("./css/normalize.min.css");
@import url("./css/_init.css");
@import url("./css/_text.css");
@import url("./css/_layout.css");
@import url("./css/_controls.css");
@import url("./css/_color.css");
@import url("./css/_icons.css");
@import url("./css/_chat.css");
@import url("./css/_landing.css");
@import url("./css/_phone.css");
@import url("./css/_responsive.css");
</style>
