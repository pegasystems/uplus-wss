import Vue from 'vue';
import DefaultPage from './DefaultPage.vue';
import OfferPage from './OfferPage.vue';
import SettingsPage from './SettingsPage.vue';
import LandingPage from './LandingPage.vue';
import CategoryPage from './CategoryPage.vue';
import './registerServiceWorker';
import { mainconfig, i18n } from './global';

const app = new Vue({
  el: '#app',
  i18n,
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent() {
      if (this.currentRoute.endsWith('offer.html')) return OfferPage;
      if (this.currentRoute.endsWith('landingpage.html')) return LandingPage;
      if (this.currentRoute.endsWith('category.html')) return CategoryPage;
      if (this.currentRoute.endsWith('settings.html')) return SettingsPage;
      return DefaultPage;
    },
  },
  render(h) {
    return h(this.ViewComponent);
  },
});

window.addEventListener('popstate', (event) => {
  mainconfig.isAuthenticated = false;
  mainconfig.userId = -1;
  mainconfig.quickLinkId = -1;
  mainconfig.viewBill = -1;
  mainconfig.homeHeroAction = -1;
  mainconfig.offerAction = -1;
  mainconfig.toDo = -1;
  mainconfig.viewKMHelp = -1;
  mainconfig.offerURL = '';
  mainconfig.previousPage = '';
  if (event.state === null || !event.state) return;
  if (typeof event.state.userId !== 'undefined') {
    mainconfig.userId = event.state.userId;
    mainconfig.isAuthenticated = true;
    if (typeof event.state.quickLinkId !== 'undefined') {
      mainconfig.quickLinkId = event.state.quickLinkId;
    }
  }
  app.currentRoute = window.location.pathname;
});
