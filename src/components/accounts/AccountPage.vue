<template>
  <div class="form flex flex-col">
    <MainHeader />
    <main v-if="offerURL !== ''" class="wrap">
      <MicroSiteMainArea />
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
      <div v-if="app.industry === 'commercial_bank'">
        <h1 v-if="userId != -1" class="wrap">
          {{ $t('message.hello') + showWelcomeMessage() }}
        </h1>
        <h1 v-else class="wrap">{{ $t('message.hello') }}</h1>
        <div class="wrap cols flex flex-wrap">
          <BankAccountMainArea />
          <AccountSecondaryArea :key="reloadOffer" />
        </div>
      </div>
      <div v-else>
        <h1 class="wrap">{{ $t('message.accountoverview') }}</h1>
        <div class="wrap cols flex flex-wrap">
          <AccountMainArea />
          <AccountSecondaryArea :key="reloadOffer" />
        </div>
      </div>
    </main>
    <main v-else class="wrap">
      <MashupMainArea />
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
      return name.substring(0, name.lastIndexOf(' '));
    },
  },
};
</script>
