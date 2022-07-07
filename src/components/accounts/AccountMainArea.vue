<template>
  <div class="col col-1 primary-card">
    <Banner
      v-if="
        typeof settings.banner !== 'undefined' &&
        settings.banner.hidebanner !== 'true' &&
        settings.banner.hidebanner !== true
      "
    />
    <AccountPicker
      v-if="
        typeof settings.todo !== 'undefined' &&
        settings.todo.hideaccount !== 'true' &&
        settings.todo.hideaccount !== true
      "
    />
    <KPI
      v-if="
        (app.industry === 'health-pharma' ||
          app.industry === 'health-care' ||
          app.industry === 'health-payer') &&
        settings.todo.hideKPI !== 'true' &&
        settings.todo.hideKPI !== true
      "
    />
    <MashupMainArea
      v-if="typeof settings.todo !== 'undefined' && settings.todo.url !== ''"
      :key="reloadToDoMashup"
    />
    <BillPay
      v-if="
        typeof settings.billpay !== 'undefined' &&
        settings.billpay.hidebillpay !== 'true' &&
        settings.billpay.hidebillpay !== true
      "
    />
    <RecentActivity
      v-if="
        typeof settings.todo !== 'undefined' &&
        settings.todo.hideactivity !== 'true' &&
        settings.todo.hideactivity !== true
      "
      :key="reloadActivityMashup"
    />
  </div>
</template>

<script>
import MashupMainArea from '../MashupMainArea.vue';
import AccountPicker from '../widgets/AccountPicker.vue';
import KPI from '../widgets/KPI.vue';
import Banner from '../widgets/Banner.vue';
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
    Banner,
  },
};
</script>
