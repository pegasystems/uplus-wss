import Vue from 'vue';
import MainPage from './MainPage.vue';
import './registerServiceWorker';
import { i18n } from './global';

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
