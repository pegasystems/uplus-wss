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
