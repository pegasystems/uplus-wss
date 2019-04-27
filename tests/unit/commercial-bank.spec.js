import { shallowMount } from '@vue/test-utils';
import '../../public/commercial_bank/js/config-settings';
import '../../public/commercial_bank/js/config-flow';
import '../../public/commercial_bank/i18n/lang-en';
import { mainconfig } from '@/global';
import App from '@/App.vue';

describe('Commercial Bank App on Desktop', () => {
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

describe('Commercial Bank App on Mobile', () => {
  it('renders on load', () => {
    mainconfig.isMobilePhone = true;
    const wrapper = shallowMount(App);
    expect(wrapper.html()).toMatch(
      '<div id="app"><phonepage-stub></phonepage-stub></div>',
    );
  });
});
