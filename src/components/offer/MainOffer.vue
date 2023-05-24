<template>
  <template
    v-if="
      settings.pega_marketing.Host === '' ||
      settings.pega_marketing.offerPage.placement === '' ||
      settings.pega_marketing.offerPage.containerName === '' ||
      (loading && !settings.pega_marketing.showLoadingIndicator) ||
      errorloading
    "
  >
    <div class="options">
      <section
        v-for="(item, index) in app.offer[offerType].main_offers"
        :key="index"
        class="front-option"
      >
        <div class="details">
          <img class="option" :src="'./img/' + item.image" />
          <h3>
            {{ $t(`message.${item.title}`) }}
          </h3>
          <p>{{ $t(`message.${item.message}`) }}</p>
          <a v-on:click="applyOfferAction" class="strong">
            {{ $t(`message.${item.button_label}`) }}
          </a>
        </div>
      </section>
    </div>
  </template>
  <template
    v-else-if="
      settings.pega_marketing.Host !== '' &&
      loading &&
      settings.pega_marketing.showLoadingIndicator
    "
  >
    <div class="offer-cards promo loading-container" style="min-height: 300px">
      <span class="loading">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </span>
    </div>
  </template>
  <template v-else>
    <div
      class="main-offer primary-card flex flex-nowrap hero-offer"
      :data-hero-offer="1"
      v-if="hero_offer.url !== '' && hero_offer.img !== ''"
    >
      <div class="details">
        <img class="option" :src="hero_offer.img" :alt="hero_offer.title" />
        <h3 class="color-brand">{{ hero_offer.title }}</h3>
        <p>{{ hero_offer.message }}</p>
        <button v-on:click="applyOfferAction" class="strong">
          {{ hero_offer.link }}
        </button>
      </div>
    </div>
  </template>
</template>

<script>
/* eslint-disable no-underscore-dangle */
import { mainconfig } from '../../global';
import { initNBAM, captureResponse } from '../../CDHIntegration';

export default {
  props: ['offerType'],
  data() {
    return {
      ...mainconfig,
      errorloading: false,
      loading: true,
      action: '',
      data: [],
      hero_offer: { url: '' },
      currentOffer: -1,
    };
  },
  mounted() {
    if (
      this.offerType &&
      (this.currentOffer === -1 || this.currentOffer !== this.offerType)
    ) {
      this.currentOffer = this.offerType;
      this.loadOffer();
    }
  },
  updated() {
    if (
      this.offerType &&
      (this.currentOffer === -1 || this.currentOffer !== this.offerType)
    ) {
      this.currentOffer = this.offerType;
      this.loadOffer();
    }
    if (
      window.IntersectionObserver &&
      mainconfig.settings.pega_marketing.useCaptureByChannel === true
    ) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              let idx = entry.target.getAttribute('data-offer-index');
              if (idx !== null) {
                captureResponse(this, this.data[idx], 'Impression');
                observer.unobserve(entry.target);
              } else {
                idx = entry.target.getAttribute('data-hero-offer');
                if (idx !== null) {
                  captureResponse(this, this.hero_offer, 'Impression');
                  observer.unobserve(entry.target);
                }
              }
            }
          });
        },
        { threshold: 1 },
      );
      document.querySelectorAll('.offer-container').forEach((offer) => {
        observer.observe(offer);
      });
      document.querySelectorAll('.hero-offer').forEach((offer) => {
        observer.observe(offer);
      });
    }
  },
  methods: {
    loadOffer() {
      if (this.settings.pega_marketing.Host !== '') {
        this.data = [];
        this.hero_offer = { url: '', link: 'Apply Now' };
        this.action =
          this.$props && this.$props.offerType > 0
            ? this.settings.pega_marketing.extraOfferPages[
                this.$props.offerType - 1
              ].clickaction
            : this.settings.pega_marketing.offerPage.clickaction;
        const self = this;
        let customerID = '';
        if (this.userId !== -1 && this.settings.users[this.userId].customerID) {
          customerID = this.settings.users[this.userId].customerID;
        }
        setTimeout(() => {
          self.loading = true;
          self.errorloading = false;
          initNBAM(
            self,
            `${
              this.$props && this.$props.offerType > 0
                ? `extraOfferPages${this.$props.offerType}`
                : 'offerPage'
            }`,
            customerID,
            mainconfig.previousPage,
            mainconfig.currentPage,
          );
        }, 200);
      }
    },
    showOffer(item) {
      if (mainconfig.isMobilePhone) {
        mainconfig.phonePageName = 'offer';
      }
      mainconfig.offerURL = item.url;
      mainconfig.previousPage = item.name;
      item.useURL = true;
      if (this.action === 'BuiltIn') {
        mainconfig.offerURL = '/Basic';
        item.useURL = false;
      }
      mainconfig.CDHContainer = item;
      if (mainconfig.settings.pega_marketing.useCaptureByChannel === true) {
        captureResponse(this, item, 'Clicked');
      }
    },
    applyOfferAction() {
      if (this.hero_offer.url === '') {
        mainconfig.offerAction = 1;
      } else {
        if (mainconfig.isMobilePhone) {
          mainconfig.phonePageName = 'offer';
        }
        mainconfig.offerURL = this.hero_offer.url;
        mainconfig.previousPage = this.hero_offer.name;
      }
    },
  },
};
</script>
