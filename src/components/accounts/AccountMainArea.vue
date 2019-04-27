<template>
  <div class="col col-1 primary-card">
    <MashupMainArea v-if="settings.todo.url != ''"></MashupMainArea>
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
