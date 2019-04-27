import { shallowMount } from '@vue/test-utils';
import '../../public/health_provider/js/config-settings';
import '../../public/health_provider/js/config-flow';
import '../../public/health_provider/i18n/lang-en';
import { mainconfig } from '@/global';
import App from '@/App.vue';

describe('Health Provider App on Desktop', () => {
  it('renders on load', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.html()).toMatch(
      '<div id="app"><frontpage-stub></frontpage-stub></div>',
    );
  });

  it('when authenticated', () => {
    mainconfig.isAuthenticated = true;
    const wrapper = shallowMount(App);
    expect(wrapper.html()).toMatch(
      '<div id="app"><accountpage-stub></accountpage-stub></div>',
    );
  });
});

describe('Health Provider App on Mobile', () => {
  it('renders on load', () => {
    mainconfig.isMobilePhone = true;
    const wrapper = shallowMount(App);
    expect(wrapper.html()).toMatch(
      '<div id="app"><phonepage-stub></phonepage-stub></div>',
    );
  });
});
