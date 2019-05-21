<template>
  <div class="col col-1 primary-card">
    <MashupMainArea
      v-if="typeof settings.todo !== 'undefined' && settings.todo.url !== ''"
      :key="componentKey"
    />
    <AccountPicker/>
    <BillPay
      v-if="typeof settings.billpay !== 'undefined' && settings.billpay.hidebillpay!=='true' && settings.billpay.hidebillpay!==true"
    />
    <RecentActivity
      v-if="typeof settings.todo !== 'undefined' && settings.todo.hideactivity!=='true' && settings.todo.hideactivity!==true"
    />
  </div>
</template>

<script>
import MashupMainArea from '../MashupMainArea.vue';
import AccountPicker from '../widgets/AccountPicker.vue';
import BillPay from '../widgets/BillPay.vue';
import RecentActivity from '../widgets/RecentActivity.vue';
import { mainconfig } from '../../global';

export default {
  data() {
    return Object.assign({}, mainconfig, {
      componentKey: 1,
    });
  },
  components: {
    MashupMainArea,
    AccountPicker,
    BillPay,
    RecentActivity,
  },
  mounted() {
    window.addEventListener('message', this.iFrameMessageListener);
  },
  destroyed() {
    window.removeEventListener('message', this.iFrameMessageListener);
  },
  methods: {
    /* Will listen for message from the Mashup iframe to force a reload back of the MashupComponent */
    iFrameMessageListener(e) {
      if (e.data === 'pegaMashupNavigateBack') {
        this.componentKey += 1;
      } else if (typeof e.data === 'object') {
        if (e.data.key === 'Intent' && typeof e.data.value === 'string') {
          mainconfig.intent = e.data.value;
          mainconfig.reloadOffer += 1;
        } else if (
          e.data.key === 'PreviousPage' &&
          typeof e.data.value === 'string'
        ) {
          mainconfig.previousPage = e.data.value;
          mainconfig.reloadOffer += 1;
        }
      }
    },
  },
};
</script>
