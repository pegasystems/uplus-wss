import Vue from 'vue';
import './registerServiceWorker';
import App from './App.vue';
import {
  i18n,
} from './global';

new Vue({
  el: '#app',
  i18n,
  render: h => h(App),
}).$mount('#app');
