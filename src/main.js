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
      let curRoute = this.currentRoute;
      if (
        window.history &&
        window.history.state !== null &&
        typeof window.history.state.page !== 'undefined'
      ) {
        curRoute = window.history.state.page;
      }
      if (curRoute.endsWith('offer.html')) return OfferPage;
      if (curRoute.endsWith('landingpage.html')) return LandingPage;
      if (curRoute.endsWith('category.html')) return CategoryPage;
      if (curRoute.endsWith('settings.html')) return SettingsPage;
      return DefaultPage;
    },
  },
  render(h) {
    return h(this.ViewComponent);
  },
});

window.addEventListener('popstate', (event) => {
  console.log('popstate');
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
