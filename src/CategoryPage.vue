<template>
  <div id="app">
    <PhonePage v-if="isMobilePhone" />
    <AccountPage v-else-if="isAuthenticated" />
    <MainPage v-else />
  </div>
</template>

<script>
import { mainconfig } from './global';
import PhonePage from './components/phone/PhonePage.vue';
import MainPage from './components/category/MainPage.vue';
import AccountPage from './components/accounts/AccountPage.vue';

export default {
  data() {
    return mainconfig;
  },
  created() {
    mainconfig.isCategoryPage = true;
  },
  components: {
    MainPage,
    AccountPage,
    PhonePage,
  },
};
</script>
