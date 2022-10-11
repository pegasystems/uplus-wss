<template>
  <div
    v-if="
      settings.pega_marketing.Host === '' ||
      settings.pega_marketing.offerPage.placement === '' ||
      settings.pega_marketing.offerPage.containerName === '' ||
      (loading && !settings.pega_marketing.showLoadingIndicator) ||
      errorloading
    "
  >
    <div class="main-offer primary-card flex flex-nowrap">
      <div
        class="image"
        v-bind:style="{
          backgroundImage: `url(./img/${app.offer[offerType].main_offer.image})`,
        }"
      ></div>
      <div class="details">
        <h3 class="color-brand">
          {{ $t(`message.${app.offer[offerType].main_offer.title}`) }}
        </h3>
        <p>{{ $t(`message.${app.offer[offerType].main_offer.message}`) }}</p>
        <button v-on:click="applyOfferAction" class="strong">
          {{ $t(`message.${app.offer[offerType].main_offer.button_label}`) }}
        </button>
      </div>
    </div>
    <div class="offer-cards promo">
      <h4>{{ $t('message.' + app.offer[offerType].cards.title) }}</h4>
      <div class="flex">
        <div
          class="flex flex-col primary-card"
          v-for="(item, index) in app.offer[offerType].cards.data"
          v-bind:key="index"
        >
          <h3>{{ $t('message.' + item.title) }}</h3>
          <p class="flex-grow-1">{{ $t('message.' + item.message) }}</p>
          <span class="highlight border-brand color-brand">{{
            $t('message.' + item.highlight)
          }}</span>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else-if="
      settings.pega_marketing.Host !== '' &&
      loading &&
      settings.pega_marketing.showLoadingIndicator
    "
  >
    <div style="height: 100px"></div>
    <div class="offer-cards promo loading-container" style="min-height: 300px">
      <span class="loading">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </span>
    </div>
  </div>
  <div v-else>
    <div
      class="main-offer primary-card flex flex-nowrap"
      v-if="hero_offer.url !== '' && hero_offer.img !== ''"
    >
      <div
        class="image"
        v-bind:style="{ backgroundImage: 'url(' + hero_offer.img + ')' }"
      ></div>
      <div class="details">
        <h3 class="color-brand">{{ hero_offer.title }}</h3>
        <p>{{ hero_offer.message }}</p>
        <button v-on:click="applyOfferAction" class="strong">
          {{ hero_offer.link }}
        </button>
      </div>
    </div>
    <div v-else style="height: 100px"></div>
    <div class="offer-cards promo">
      <h4>{{ $t('message.' + app.offer[offerType].cards.title) }}</h4>
      <div class="flex">
        <div
          class="flex flex-col primary-card"
          v-for="(item, index) in data"
          v-bind:key="index"
        >
          <div class="offer-container" :data-offer-index="index">
            <h3>{{ item.title }}</h3>
            <p class="flex-grow-1">{{ item.message }}</p>
            <div
              v-if="item.img != ''"
              class="image"
              v-bind:style="{ backgroundImage: 'url(' + item.img + ')' }"
            ></div>
            <span class="highlight border-brand">
              <a
                v-if="action === 'TopURL' && item.url != ''"
                :href="item.url"
                :title="$t('message.' + item.link)"
                >{{ $t('message.' + item.link) }}</a
              >
              <a
                v-else-if="action === 'Popup' && item.url != ''"
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
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
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
