import { createApp } from 'vue';
import MainPage from '@/views/MainPage.vue';
import { mainconfig, i18n } from './global';
import VueGtag from 'vue-gtag';

const app = createApp(MainPage);

// Directive for dealing out with clicking outside of an overlay
let handleOutsideClick;
app.directive('clickoutside', {
  mounted(el, binding) {
    handleOutsideClick = (e) => {
      e.stopPropagation();
      const { handler } = binding.value;
      if (!el.contains(e.target)) {
        binding.instance[handler](e);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
  },
  unmounted() {
    document.removeEventListener('click', handleOutsideClick);
    document.removeEventListener('touchstart', handleOutsideClick);
  },
});
app.use(i18n);
app.use(VueGtag, {
  config: { id: mainconfig.settings.general.ga.trackingid },
  appName: 'Uplus',
  // eslint-disable-next-line no-undef
  enabled: process.env.NODE_ENV === 'production',
});
app.mount('#app');
