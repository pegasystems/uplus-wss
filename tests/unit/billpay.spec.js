import '../../public/insurance/js/config-settings';
import '../../public/insurance/js/config-flow';
import '../../public/insurance/i18n/lang-en';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import { i18n } from '@/global';
import BillPay from '@/components/widgets/BillPay.vue';

const localVue = createLocalVue();

localVue.use(VueI18n);

describe('When rendering the BillPay component', () => {
  it('should turn off billpay when clicking on the button', (done) => {
    const wrapper = shallowMount(BillPay, {
      localVue,
      mocks: {
        $t: (msg) => msg,
        $n: (msg) => msg,
        $d: (msg) => msg,
      },
    });
    expect(wrapper.html()).toContain('message.on');
    const buttons = wrapper.findAll('button');
    buttons.at(2).trigger('click');
    Vue.nextTick(() => {
      expect(wrapper.html()).toContain('message.off');
      done();
    });
  });

  it('should correctly localize the content', () => {
    const Constructor = Vue.extend(BillPay);
    const vm = new Constructor({ i18n }).$mount();
    expect(vm.$el.innerHTML).toContain('Enroll in autopay');
  });
});
