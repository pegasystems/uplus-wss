import Vue from 'vue';
import VueGtag from 'vue-gtag';
import MainPage from './MainPage.vue';
import './registerServiceWorker';
import { i18n, mainconfig } from './global';

if (mainconfig.settings.general.ga.enabled === true) {
  Vue.use(VueGtag, {
    config: { id: mainconfig.settings.general.ga.trackingid },
    appName: 'Uplus',
    enabled: process.env.NODE_ENV === 'production',
  });
}

const app = new Vue({
  el: '#app',
  i18n,
  computed: {
    ViewComponent() {
      return MainPage;
    },
  },
  render(h) {
    return h(this.ViewComponent);
  },
});
export default app;
