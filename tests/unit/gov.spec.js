import { shallowMount } from '@vue/test-utils';
import '../../public/gov/js/config-settings';
import '../../public/gov/js/config-flow';
import '../../public/gov/i18n/lang-en';
import { mainconfig } from '@/global';
import App from '@/App.vue';

describe('Gov App on Desktop', () => {
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

describe('Gov App on Mobile', () => {
  it('renders on load', () => {
    mainconfig.isMobilePhone = true;
    const wrapper = shallowMount(App);
    expect(wrapper.html()).toMatch(
      '<div id="app"><phonepage-stub></phonepage-stub></div>',
    );
  });
});
