<template>
  <div class="form flex flex-col">
    <MainHeader />
    <main v-if="offerURL !== ''" class="flex flex-col">
      <div class="flex wrap height-100-pct"><MicroSiteMainArea /></div>
    </main>
    <main
      v-else-if="
        quickLinkId === -1 &&
        viewBill === -1 &&
        viewKMHelp === -1 &&
        viewBanner === -1
      "
      :class="'flex flex-col' + (isRTSEnabled ? ' rts-enabled' : '')"
    >
      <RTSOverlay v-if="settings.pega_marketing.enableRTS" />
      <div class="ribbon1"><div></div></div>
      <div>
        <h1 v-if="userId != -1" class="wrap account-msg">
          {{ $t('message.hello') + showWelcomeMessage() }}
        </h1>
        <div class="wrap cols flex flex-wrap">
          <AccountMainArea v-if="app.industry !== 'commercial_bank'" />
          <BankAccountMainArea v-if="app.industry === 'commercial_bank'" />
          <AccountSecondaryArea :key="reloadOffer" />
        </div>
      </div>
    </main>
    <main v-else class="mashup-main flex flex-col">
      <MashupMainArea class="wrap"/>
    </main>
    <MainFooter />
  </div>
</template>

<script>
import { mainconfig } from '../../global';
import MainHeader from '../MainHeader.vue';
import MainFooter from '../MainFooter.vue';
import MashupMainArea from '../MashupMainArea.vue';
import MicroSiteMainArea from '../MicroSiteMainArea.vue';
import AccountMainArea from './AccountMainArea.vue';
import BankAccountMainArea from './BankAccountMainArea.vue';
import AccountSecondaryArea from './AccountSecondaryArea.vue';
import RTSOverlay from '../controls/RTSOverlay.vue';

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
    MicroSiteMainArea,
    RTSOverlay,
  },
  methods: {
    showWelcomeMessage() {
      const name = this.settings.users[this.userId].name;
      return name;
    },
  },
};
</script>
