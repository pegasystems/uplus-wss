<template>
  <OfferPage v-if="currentPage.indexOf('offer.html') !== -1" />
  <SettingsPage v-else-if="currentPage.indexOf('settings.html') !== -1" />
  <LandingPage v-else-if="currentPage.indexOf('landingpage.html') !== -1" />
  <CategoryPage v-else-if="currentPage.indexOf('category.html') !== -1" />
  <DefaultPage v-else />
</template>

<script>
import { mainconfig } from './global';
import DefaultPage from './DefaultPage.vue';
import OfferPage from './OfferPage.vue';
import SettingsPage from './SettingsPage.vue';
import LandingPage from './LandingPage.vue';
import CategoryPage from './CategoryPage.vue';

export default {
  data() {
    return mainconfig;
  },
  created() {
    this.currentPage = window.location.pathname.substring(
      window.location.pathname.lastIndexOf('/') + 1,
    );
    if (
      window.history &&
      window.history.state !== null &&
      typeof window.history.state.page !== 'undefined'
    ) {
      this.currentPage = window.history.state.page;
      window.history.replaceState({}, '', this.currentPage);
    }
    mainconfig.currentPage = this.currentPage;
  },
  components: {
    DefaultPage,
    OfferPage,
    SettingsPage,
    LandingPage,
    CategoryPage,
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
</style>
