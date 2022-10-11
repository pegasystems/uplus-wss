<template>
  <section class="offer-card-col flex flex-col">
    <button
      v-if="settings.pega_marketing.showAIOverlay"
      class="pi pi-polaris-solid ai-toggle"
      v-on:click="toggleAIOverlay(offer)"
      title="toggle AI"
    ></button>
    <div class="offer-card">
      <img class="offer-img" :src="offer.img" :alt="offer.title" />
      <div class="content">
        <h3>{{ offer.title }}</h3>
        <p>{{ offer.message }}</p>
        <a
          v-if="offer.url === '#'"
          v-on:click="gotoOfferPage"
          href="./offer.html"
          >{{ offer.link }}</a
        >
        <a
          v-else-if="
            settings.pega_marketing.accountPage.clickaction === 'TopURL' &&
            offer.url != ''
          "
          :href="offer.url"
          >{{ $t('message.' + offer.link) }}</a
        >
        <a
          v-else-if="
            settings.pega_marketing.accountPage.clickaction === 'Popup' &&
            offer.url != ''
          "
          :href="offer.url"
          target="_blank"
          >{{ $t('message.' + offer.link) }}</a
        >
        <button v-else class="simple" v-on:click="showOffer(offer)">
          {{ $t('message.' + offer.link) }}
        </button>
        <AIOverlay
          v-if="settings.pega_marketing.showAIOverlay"
          :offer="offer"
          :class="offer.showAIoverlay ? 'show' : ''"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mainconfig } from '../../global';
import AIOverlay from '../controls/AIOverlay.vue';
import { captureResponse, sendClickStreamEvent } from '../../CDHIntegration';

export default {
  props: {
    offer: { required: true, type: Object },
  },
  data() {
    return mainconfig;
  },
  methods: {
    showOffer(offer) {
      if (mainconfig.isMobilePhone) {
        mainconfig.phonePageName = 'offer';
      }
      mainconfig.offerURL = offer.url;
      mainconfig.previousPage = offer.name;
      offer.useURL = true;
      if (
        mainconfig.settings.pega_marketing.accountPage.clickaction === 'BuiltIn'
      ) {
        mainconfig.offerURL = '/Basic';
        offer.useURL = false;
      }
      mainconfig.CDHContainer = offer;
      if (mainconfig.settings.pega_marketing.useCaptureByChannel === true) {
        captureResponse(this, offer, 'Clicked');
      }
    },
    toggleAIOverlay(item) {
      item.showAIoverlay = !item.showAIoverlay;
    },
    gotoOfferPage(event) {
      sendClickStreamEvent(mainconfig, 'PageView', 'Offer', window.loadPage);
      window.loadPage = new Date();
      mainconfig.currentPage = 'offer.html';
      const stateObj = mainconfig.isAuthenticated
        ? { userId: mainconfig.userId }
        : {};
      window.history.pushState(stateObj, '', 'offer.html');
      if (this.$gtag) {
        this.$gtag.pageview({
          page_path: mainconfig.currentPage,
        });
      }
      mainconfig.offerIndex = 0;
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
      event.preventDefault();
    },
  },
  components: {
    AIOverlay,
  },
};
</script>
