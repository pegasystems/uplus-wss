<template>
  <HomePage v-if="phonePageName=='home'" :key="isAuthenticated" />
  <OfferPage v-else-if="phonePageName=='offer'" />
  <LoginPage v-else-if="!isAuthenticated" />
  <Mashup v-else-if="quickLinkId != -1" />
  <IntroQuickLinks v-else-if="phonePageName=='quicklinks'" />
  <QuickLinks v-else-if="phonePageName=='quicklinks1'" />
  <Account v-else-if="phonePageName=='account'" />
  <HomePage v-else />
</template>

<script>
import { mainconfig } from '../../global';
import HomePage from './HomePage.vue';
import OfferPage from './OfferPage.vue';
import LoginPage from './LoginPage.vue';
import QuickLinks from './QuickLinks.vue';
import IntroQuickLinks from './IntroQuickLinks.vue';
import Account from './Account.vue';
import Mashup from './Mashup.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    HomePage,
    OfferPage,
    LoginPage,
    IntroQuickLinks,
    QuickLinks,
    Account,
    Mashup,
  },
};
</script>
