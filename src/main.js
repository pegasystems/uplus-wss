import Vue from 'vue';
import App from './App.vue';
import OfferDetail from './OfferDetail.vue';
import Settings from './Settings.vue';
import LandingPage from './LandingPage.vue';
import './registerServiceWorker';
import {
  i18n,
} from './global';

const app = new Vue({
  el: '#app',
  i18n,
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent() {
      if (this.currentRoute.endsWith('offer.html')) return OfferDetail;
      if (this.currentRoute.endsWith('landingpage.html')) return LandingPage;
      if (this.currentRoute.endsWith('settings.html')) return Settings;
      return App;
    },
  },
  render(h) {
    return h(this.ViewComponent);
  },
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
});
