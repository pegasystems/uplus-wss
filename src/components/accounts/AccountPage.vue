<template>
  <div class="form">
    <main-header/>
    <main v-if="quickLinkId === -1 && viewBill === -1" class="flex flex-col">
      <div v-if="app.industry  === 'commercial_bank'">
        <h1 class="wrap">{{ $t("message.hello") }} {{ settings.users[userId].name }}</h1>
        <div class="wrap cols flex flex-wrap">
          <BankAccountMainArea/>
          <AccountSecondaryArea/>
        </div>
      </div>
      <div v-else>
        <h1 class="wrap">{{ $t("message.accountoverview") }}</h1>
        <div class="wrap cols flex flex-wrap">
          <AccountMainArea/>
          <AccountSecondaryArea/>
        </div>
      </div>
    </main>
    <MashupMainArea v-else/>
    <main-footer/>
  </div>
</template>

<script>
import { mainconfig } from '../../global';
import MainHeader from '../MainHeader.vue';
import MainFooter from '../MainFooter.vue';
import MashupMainArea from '../MashupMainArea.vue';
import AccountMainArea from './AccountMainArea.vue';
import BankAccountMainArea from './BankAccountMainArea.vue';
import AccountSecondaryArea from './AccountSecondaryArea.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    MainHeader,
    AccountMainArea,
    BankAccountMainArea,
    AccountSecondaryArea,
    MashupMainArea,
    MainFooter,
  },
};
</script>
