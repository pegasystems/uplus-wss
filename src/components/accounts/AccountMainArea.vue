<template>
  <div class="col col-1 primary-card">
    <MashupMainArea v-if="settings.todo.url != ''" :key="componentKey"/>
    <AccountPicker/>
    <BillPay v-if="typeof settings.billpay != 'undefined'"/>
    <RecentActivity/>
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
    /* Will listen for message from the Mashup iframe to force a reload back of the MashupComponent */
    const self = this;
    window.addEventListener('message', (e) => {
      if (e.data === 'pegaMashupNavigateBack') {
        self.componentKey += 1;
      }
    });
  },
};
</script>
