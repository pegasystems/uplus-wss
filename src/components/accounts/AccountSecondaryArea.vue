<template>
  <div class="col col-2">
    <div
      class="secondary-card"
      v-if="
        settings.pega_marketing.Host === '' ||
        settings.pega_marketing.accountPage.placement === '' ||
        settings.pega_marketing.accountPage.containerName === '' ||
        (loading && !settings.pega_marketing.showLoadingIndicator) ||
        errorloading
      "
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
      style="min-height: 300px"
      v-else-if="
        settings.pega_marketing.Host !== '' &&
        loading &&
        settings.pega_marketing.showLoadingIndicator
      "
    >
      <span class="loading">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </span>
    </div>
    <div class="secondary-card" v-else>
      <div
        v-for="(item, index) in data"
        :key="item.title"
        @mouseover="checkRTSEventHover(index, item, true)"
        @mouseleave="checkRTSEventHover(index, item, false)"
      >
        <Offer
          v-bind:offer="item"
          :data-offer-index="index"
          class="offer-container"
        />
      </div>
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
import {
  initNBAM,
  captureResponse,
  sendRTSEvent,
  sendClickStreamEvent,
} from '../../CDHIntegration';
import KeyRates from '../widgets/KeyRates.vue';

export default {
  data() {
    return {
      ...mainconfig,
      errorloading: false,
      loading: true,
      data: [],
      RTSstate: {
        index: -1,
        id: 0,
      },
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
    if (
      window.IntersectionObserver &&
      mainconfig.settings.pega_marketing.useCaptureByChannel === true
    ) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const idx = entry.target.getAttribute('data-offer-index');
              captureResponse(this, this.data[idx], 'Impression');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 1 },
      );
      document.querySelectorAll('.offer-container').forEach((offer) => {
        observer.observe(offer);
      });
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
      sendClickStreamEvent(mainconfig, 'PageView', 'Offer', window.loadPage);
      window.loadPage = new Date();
      const stateObj = mainconfig.isAuthenticated
        ? { userId: mainconfig.userId }
        : {};
      window.history.pushState(stateObj, '', 'offer.html');
      mainconfig.offerIndex = 0;
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
      event.preventDefault();
    },
    checkRTSEventHover(index, item, state) {
      if (mainconfig.isRTSEnabled === true) {
        if (this.RTSstate.index === -1) {
          this.RTSstate.index = index;
          this.RTSstate.id = setTimeout(() => {
            this.generateRTSEvent(item);
          }, 3000);
        } else if (this.RTSstate.index === index && state === false) {
          clearTimeout(this.RTSstate.id);
          this.RTSstate.id = 0;
          this.RTSstate.index = -1;
        }
      }
    },
    generateRTSEvent(item) {
      const el = document.querySelector('.comment');
      const today = new Date();
      let month = today.getMonth() + 1;
      if (month < 10) {
        month = `0${month}`;
      }
      const date = `${today.getFullYear()}-${month}-${today.getDate()}`;
      const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
      el.innerHTML += `<p>${date} ${time} - Sending event - group:${item.category} - value:${item.name}</p`;
      el.scrollTop = el.scrollHeight;
      sendRTSEvent(this, item);
    },
  },
};
</script>
