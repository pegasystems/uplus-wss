<template>
  <Mashup v-if="phonePageName === 'heroaction'" />
  <Mashup
    v-else-if="
      quickLinkId !== -1 ||
      viewKMHelp !== -1 ||
      offerAction !== -1 ||
      viewBill !== -1 ||
      viewBanner !== -1
    "
  />
  <HomePage
    v-else-if="phonePageName === '' || phonePageName === 'index.html'"
  />
  <OfferPage v-else-if="phonePageName.indexOf('offer') !== -1" />
  <LoginPage v-else-if="!isAuthenticated" />
  <IntroQuickLinks v-else-if="phonePageName === 'intro'" />
  <QuickLinks v-else-if="phonePageName === 'help'" />
  <Account v-else-if="phonePageName === 'account'" />
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
