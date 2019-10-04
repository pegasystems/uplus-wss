import Vue from 'vue';
import DefaultPage from './DefaultPage.vue';
import OfferPage from './OfferPage.vue';
import SettingsPage from './SettingsPage.vue';
import LandingPage from './LandingPage.vue';
import CategoryPage from './CategoryPage.vue';
import './registerServiceWorker';
import { i18n } from './global';

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
        window.history.replaceState({}, '', curRoute);
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
export default app;
