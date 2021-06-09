<template>
  <PhonePage v-if="isMobilePhone" />
  <AccountPage v-else-if="isAuthenticated" />
  <FrontPage v-else />
</template>

<script>
import { mainconfig } from './global';
import PhonePage from './components/phone/PhonePage.vue';
import FrontPage from './components/FrontPage.vue';
import AccountPage from './components/accounts/AccountPage.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    FrontPage,
    AccountPage,
    PhonePage,
  },
};
</script>

<style>
@import url('./css/normalize.min.css');
@import url('./css/_init.css');
@import url('./css/_text.css');
@import url('./css/_layout.css');
@import url('./css/_controls.css');
@import url('./css/_color.css');
@import url('./css/_icons.css');
@import url('./css/_chat.css');
@import url('./css/_offer.css');
@import url('./css/_landing.css');
@import url('./css/_phone.css');
@import url('./css/_responsive.css');
@import url('./css/_webcomponent.css');
</style>
