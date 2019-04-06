<template>
  <div class="col col-1 primary-card">
    <AccountPicker/>
    <div v-if="typeof settings.billpay != 'undefined'">
      <BillPay/>
    </div>
    <RecentActivity/>
  </div>
</template>

<script>
import AccountPicker from "../widgets/AccountPicker.vue";
import BillPay from "../widgets/BillPay.vue";
import RecentActivity from "../widgets/RecentActivity.vue";
import { mainconfig } from "../../global";

export default {
  data: function() {
    return mainconfig;
  },
  components: {
    AccountPicker,
    BillPay,
    RecentActivity
  }
};
</script>
