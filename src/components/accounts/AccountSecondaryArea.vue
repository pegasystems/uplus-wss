<template>
  <div class="col col-2">
    <div
      class="secondary-card"
      v-if="settings.pega_marketing.Host === '' || settings.pega_marketing.accountPage.placement === '' ||
      settings.pega_marketing.accountPage.containerName === '' || (loading && !settings.pega_marketing.showLoadingIndicator)"
    >
      <section
        class="offer-card-col"
        v-for="item in app.offers"
        :key="item.title"
      >
        <img
          class="offer-img"
          :src="'./img/' + item.img"
          :alt="$t('message.' + item.title)"
        />
        <div class="content">
          <h3>{{ $t('message.' + item.title) }}</h3>
          <p>{{ $t('message.' + item.message) }}</p>
          <a v-on:click="gotoOfferPage" href="./offer.html">{{
            $t('message.learnmore')
          }}</a>
        </div>
      </section>
    </div>
    <div
      class="secondary-card loading-container"
      style="min-height: 300rem"
      v-else-if="settings.pega_marketing.Host!== '' && loading && settings.pega_marketing.showLoadingIndicator"
    >
    <span class="loading">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </span>
    </div>
    <div class="secondary-card" v-else>
      <Offer v-for="(item,index) in data" :key="item.title" v-bind:offer="item" :data-offer-index="index" class='offer-container' />
    </div>
    <KeyRates
      v-if="
        app.industry === 'commercial_bank' &&
          typeof settings.keyrates !== 'undefined'
      "
    />
    <QuickLinks />
  </div>
</template>

<script>
import Offer from '../widgets/Offer.vue';
import QuickLinks from '../widgets/QuickLinks.vue';
import { mainconfig } from '../../global';
import { initNBAM, captureResponse } from '../../CDHIntegration';
import KeyRates from '../widgets/KeyRates.vue';

export default {
  data() {
    return {
      ...mainconfig,
      loading: true,
      data: [],
    };
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
  updated() {
    if (window.IntersectionObserver && mainconfig.settings.pega_marketing.useCaptureByChannel === true) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = entry.target.getAttribute('data-offer-index');
            captureResponse(this, this.data[idx], 'Impression');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 1 });
      document.querySelectorAll('.offer-container').forEach((offer) => { observer.observe(offer); });
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
      if (this.$gtag) {
        this.$gtag.pageview({
          page_path: mainconfig.currentPage,
        });
      }
      const stateObj = mainconfig.isAuthenticated ? { userId: mainconfig.userId } : {};
      window.history.pushState(stateObj, '', 'offer.html');
      mainconfig.offerIndex = 0;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      event.preventDefault();
    },
  },
};
</script>
