import Vue from 'vue';
import App from './App.vue';
import OfferDetail from './OfferDetail.vue';
import Settings from './Settings.vue';
import LandingPage from './LandingPage.vue';
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

window.addEventListener('popstate', (event) => {
  console.log(event.state);
  mainconfig.isAuthenticated = false;
  mainconfig.userId = -1;
  mainconfig.quickLinkId = -1;
  mainconfig.viewBill = -1;
  mainconfig.homeHeroAction = -1;
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
