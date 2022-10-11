<template>
  <div
    class="flex home-promo secondary-card"
    v-if="
      settings.pega_marketing.Host === '' ||
      settings.pega_marketing.phonePage.placement === '' ||
      settings.pega_marketing.phonePage.containerName === '' ||
      (loading && !settings.pega_marketing.showLoadingIndicator) ||
      errorloading
    "
  >
    <div
      class="image"
      v-bind:style="{
        backgroundImage: 'url(./img/' + app.phone.home_page.promo.image + ')',
      }"
    ></div>
    <div class="details">
      <p>{{ $t('message.phone_home_page_promo_message') }}</p>
      <a v-on:click="showOfferPage">{{
        $t('message.phone_home_page_promo_action')
      }}</a>
    </div>
  </div>
  <div
    class="flex home-promo secondary-card loading-container"
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
  <div class="width-100-pct" v-else>
    <div
      class="flex home-promo secondary-card"
      v-for="(item, index) in data"
      :key="item.title"
    >
      <div class="offer-container" :data-offer-index="index">
        <div
          class="image"
          v-bind:style="{ backgroundImage: 'url(' + item.img + ')' }"
        ></div>
        <div class="details">
          <h4>{{ item.title }}</h4>
          <p>{{ item.message }}</p>
          <a
            v-if="
              settings.pega_marketing.phonePage.clickaction === 'TopURL' &&
              item.url !== ''
            "
            :href="item.url"
            :title="$t('message.' + item.link)"
            >{{ $t('message.' + item.link) }}</a
          >
          <a
            v-else-if="
              settings.pega_marketing.phonePage.clickaction === 'Popup' &&
              item.url !== ''
            "
            :href="item.url"
            target="_blank"
            :title="$t('message.' + item.link)"
            >{{ $t('message.' + item.link) }}</a
          >
          <button
            v-else
            class="simple"
            v-on:click="showOffer(item)"
            :title="$t('message.' + item.link)"
          >
            {{ $t('message.' + item.link) }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mainconfig } from '../../global';
import { initNBAM, captureResponse } from '../../CDHIntegration';

export default {
  data() {
    return {
      ...mainconfig,
      errorloading: false,
      loading: true,
      data: [],
    };
  },
  methods: {
    showOfferPage() {
      mainconfig.phonePageName = 'offer';
      const stateObj = mainconfig.isAuthenticated
        ? { userId: mainconfig.userId }
        : {};
      window.history.pushState(stateObj, '', 'offer.html');
      mainconfig.offerIndex = 0;
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
    },
    showOffer(item) {
      mainconfig.phonePageName = 'offer';
      mainconfig.offerURL = item.url;
      mainconfig.previousPage = item.name;
      item.useURL = true;
      if (this.settings.pega_marketing.phonePage.clickaction === 'BuiltIn') {
        mainconfig.offerURL = '/Basic';
        item.useURL = false;
      }
      mainconfig.CDHContainer = item;
      if (mainconfig.settings.pega_marketing.useCaptureByChannel === true) {
        captureResponse(this, item, 'Clicked');
      }
    },
  },
  mounted() {
    if (
      this.settings.pega_marketing.Host !== '' &&
      this.settings.pega_marketing.phonePage.placement !== '' &&
      this.settings.pega_marketing.phonePage.containerName !== ''
    ) {
      const self = this;
      let customerID = '';
      if (this.userId !== -1 && this.settings.users[this.userId].customerID) {
        customerID = this.settings.users[this.userId].customerID;
      }
      setTimeout(() => {
        initNBAM(
          self,
          'phonePage',
          customerID,
          this.previousPage,
          'index.html',
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
};
</script>
