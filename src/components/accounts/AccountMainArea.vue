<template>
  <div class="col col-1 primary-card">
    <MashupMainArea
      v-if="typeof settings.todo !== 'undefined' && settings.todo.url !== ''"
      :key="reloadAccountMashup"
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
    return mainconfig;
  },
  components: {
    MashupMainArea,
    AccountPicker,
    BillPay,
    RecentActivity,
  },
};
</script>
