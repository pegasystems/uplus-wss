import { createApp } from 'vue';
import MainPage from '@/views/MainPage.vue';
import { mainconfig, i18n } from './global';
import { createGtag } from "vue-gtag";

const app = createApp(MainPage);

// Resize observer for sending the height of the iframe to the parent
if(window.self !== window.top) {
  const appEl = document.getElementById('app');
  if(appEl) {
    appEl.classList.add('app-iframe');
  }
  const onResize = () => {
    // Obviously you can format your data object however you want
    window.parent.postMessage({
      type: 'resize',
      height: document.body.scrollHeight,
    }, '*');
  }

  (new ResizeObserver( () =>
    onResize()
  )).observe(document.body);
}
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
if(process.env.NODE_ENV === 'production' && mainconfig.settings.general.ga.enabled) {
  const gtag = createGtag({
  tagId: mainconfig.settings.general.ga.trackingid,
  appName: 'Uplus'})
  app.use(gtag);
}
app.mount('#app');
