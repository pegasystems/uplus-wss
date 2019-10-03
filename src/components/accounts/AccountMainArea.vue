<template>
  <div class="col col-1 primary-card">
    <AccountPicker
      v-if="typeof settings.todo !== 'undefined' && settings.todo.hideaccount!=='true' && settings.todo.hideaccount!==true"
    />
    <KPI v-if="app.industry  === 'health-pharma' || app.industry  === 'health-care'" />
    <MashupMainArea
      v-if="typeof settings.todo !== 'undefined' && settings.todo.url !== ''"
      :key="reloadAccountMashup"
    />
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
import KPI from '../widgets/KPI.vue';
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
    KPI,
    BillPay,
    RecentActivity,
  },
};
</script>
