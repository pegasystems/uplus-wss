<template>
  <PhonePage v-if="isMobilePhone" />
  <AccountPage v-else-if="isAuthenticated" />
  <FrontPage v-else />
</template>

<script>
import { mainconfig } from '@/global';
import PhonePage from '@/components/phone/PhonePage.vue';
import FrontPage from '@/views/FrontPage.vue';
import AccountPage from '@/components/accounts/AccountPage.vue';

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
@import url('../assets/css/normalize.min.css');
@import url('../assets/css/_init.css');
@import url('../assets/css/_text.css');
@import url('../assets/css/_layout.css');
@import url('../assets/css/_controls.css');
@import url('../assets/css/_color.css');
@import url('../assets/css/_icons.css');
@import url('../assets/css/_chat.css');
@import url('../assets/css/_offer.css');
@import url('../assets/css/_landing.css');
@import url('../assets/css/_phone.css');
@import url('../assets/css/_responsive.css');
@import url('../assets/css/_webcomponent.css');
</style>
