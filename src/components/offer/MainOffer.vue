<template>
  <div v-if="settings.pega_marketing.Host === '' || settings.pega_marketing.offerPage.placement === '' ||
      settings.pega_marketing.offerPage.containerName === '' || (loading && !settings.pega_marketing.showLoadingIndicator)">
    <div class="main-offer primary-card flex flex-nowrap">
      <div class="image" v-bind:style="{ backgroundImage: `url(./img/${app.offer[offerType].main_offer.image})`}"></div>
      <div class="details">
        <h3 class="color-brand">{{ $t(`message.${app.offer[offerType].main_offer.title}`) }}</h3>
        <p>{{ $t(`message.${app.offer[offerType].main_offer.message}`) }}</p>
        <button v-on:click="applyOfferAction" class="strong">{{ $t(`message.${app.offer[offerType].main_offer.button_label}`) }}</button>
      </div>
    </div>
    <div class="offer-cards promo">
      <h4>{{ $t('message.' + app.offer[offerType].cards.title)}}</h4>
      <div class="flex">
        <div
          class="flex flex-col primary-card"
          v-for="(item,index) in app.offer[offerType].cards.data"
          v-bind:key="index"
        >
          <h3>{{ $t('message.' + item.title)}}</h3>
          <p class="flex-grow-1">{{ $t('message.' + item.message)}}</p>
          <span class="highlight border-brand color-brand">{{ $t('message.' + item.highlight)}}</span>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="settings.pega_marketing.Host!== '' && loading && settings.pega_marketing.showLoadingIndicator">
    <div style="height:100rem">
    </div>
    <div class="offer-cards promo loading-container" style="min-height: 300rem">
      <span class="loading">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </span>
    </div>
  </div>
  <div v-else>
    <div class="main-offer primary-card flex flex-nowrap" v-if="hero_offer.url !== '' && hero_offer.img !== ''">
      <div class="image" v-bind:style="{ backgroundImage: 'url(' + hero_offer.img + ')'}"></div>
      <div class="details">
        <h3 class="color-brand">{{ hero_offer.title }}</h3>
        <p>{{ hero_offer.message }}</p>
        <button v-on:click="applyOfferAction" class="strong">{{ hero_offer.link }}</button>
      </div>
    </div>
    <div v-else style="height:100rem">
    </div>
    <div class="offer-cards promo">
      <h4>{{ $t('message.' + app.offer[offerType].cards.title)}}</h4>
      <div class="flex">
        <div class="flex flex-col primary-card" v-for="(item,index) in data" v-bind:key="index">
          <div class='offer-container' :data-offer-index="index">
          <h3>{{ item.title}}</h3>
          <p class="flex-grow-1">{{ item.message}}</p>
          <div
            v-if="item.img !=''"
            class="image"
            v-bind:style="{ backgroundImage: 'url(' + item.img + ')'}"
          ></div>
          <span class="highlight border-brand">
            <a
              v-if="settings.pega_marketing.offerPage.clickaction === 'TopURL' && item.url!=''"
              :href="item.url"
              :title="$t('message.' + item.link)"
            >{{ $t("message." + item.link)}}</a>
            <a
              v-else-if="settings.pega_marketing.offerPage.clickaction === 'Popup' && item.url!=''"
              :href="item.url"
              target="_blank"
              :title="$t('message.' + item.link)"
            >{{ $t("message." + item.link)}}</a>
            <button
              v-else
              class="simple"
              v-on:click="showOffer(item)"
              :title="$t('message.' + item.link)"
            >{{ $t("message." + item.link)}}</button>
          </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mainconfig } from '../../global';
import { initNBAM, captureResponse } from '../../CDHIntegration';

export default {
  props: ['offerType'],
  data() {
    return {
      ...mainconfig,
      loading: true,
      data: [],
      hero_offer: { url: '' },
    };
  },
  mounted() {
    if (
      this.settings.pega_marketing.Host !== '' &&
      this.settings.pega_marketing.offerPage.placement !== '' &&
      this.settings.pega_marketing.offerPage.containerName !== ''
    ) {
      const self = this;
      let customerID = '';
      if (this.userId !== -1 && this.settings.users[this.userId].customerID) {
        customerID = this.settings.users[this.userId].customerID;
      }
      setTimeout(() => {
        initNBAM(
          self,
          `offerPage${this.offerIndex > 0 ? this.offerIndex : ''}`,
          customerID,
          this.previousPage,
          this.currentPage,
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
  methods: {
    showOffer(item) {
      mainconfig.offerURL = item.url;
      mainconfig.previousPage = item.name;
      if (mainconfig.settings.pega_marketing.useCaptureByChannel === true) {
        captureResponse(this, item, 'Clicked');
      }
    },
    applyOfferAction() {
      if (this.hero_offer.url === '') {
        mainconfig.offerAction = 1;
      } else {
        mainconfig.offerURL = this.hero_offer.url;
        mainconfig.previousPage = this.hero_offer.name;
      }
    },
  },
};
</script>
