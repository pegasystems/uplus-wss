import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import '@/../public/insurance/js/config-settings';
import '@/../public/insurance/js/config-flow';
import '@/../public/insurance/i18n/lang-en';
import BillPay from '@/components/widgets/BillPay.vue';

describe('When rendering the BillPay component', () => {
  test('should turn off billpay when clicking on the button', async () => {
    const wrapper = mount(BillPay, {
      global: {
        mocks: {
          $t: (msg) => msg,
          $n: (msg) => msg,
          $d: (msg) => msg,
        },
        directives: {
          clickoutside: () => {}, // Bar matches v-bar
        },
      },
    });
    expect(wrapper.html()).toContain('message.on');
    const button = wrapper.findAll('button')[2];
    button.trigger('click');
    await nextTick();
    expect(wrapper.html()).toContain('message.off');
  });
});
