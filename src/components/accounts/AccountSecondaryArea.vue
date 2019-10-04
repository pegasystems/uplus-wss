<template>
  <div class="col col-2">
    <div class="secondary-card" v-if="settings.pega_marketing.Host === '' || loading">
      <section class="offer-card-col" v-for="item in app.offers" :key="item.title">
        <img class="offer-img" :src="('./img/' + item.img)" :alt="$t('message.' + item.title)" />
        <div class="content">
          <h3>{{ $t('message.' + item.title) }}</h3>
          <p>{{ $t('message.' + item.message) }}</p>
          <a v-on:click="gotoOfferPage" href="./offer.html">{{ $t('message.learnmore') }}</a>
        </div>
      </section>
    </div>
    <div class="secondary-card" v-else>
      <Offer v-for="item in data" :key="item.title" v-bind:offer="item" />
    </div>
    <KeyRates
      v-if="app.industry  === 'commercial_bank' && typeof settings.keyrates !== 'undefined'"
    />
    <QuickLinks />
  </div>
</template>

<script>
import Offer from '../widgets/Offer.vue';
import QuickLinks from '../widgets/QuickLinks.vue';
import { mainconfig, initNBAM } from '../../global';
import KeyRates from '../widgets/KeyRates.vue';

export default {
  data() {
    return Object.assign({}, mainconfig, {
      loading: true,
      data: [],
    });
  },
  mounted() {
    if (
      this.settings.pega_marketing.Host !== '' &&
      this.settings.pega_marketing.accountPage.placement !== '' &&
      this.settings.pega_marketing.accountPage.containerName !== ''
    ) {
      const self = this;
      let customerID = '';
      if (this.userId !== -1 && this.settings.users[this.userId].customerID) {
        customerID = this.settings.users[this.userId].customerID;
      }
      setTimeout(() => {
        initNBAM(
          self,
          'accountPage',
          customerID,
          self.previousPage,
          'account.html',
        );
      }, 200);
    }
  },
  components: {
    Offer,
    QuickLinks,
    KeyRates,
  },
  methods: {
    gotoOfferPage(event) {
      mainconfig.currentPage = 'offer.html';
      window.history.replaceState({}, '', 'offer.html');
      event.preventDefault();
    },
  },
};
</script>
