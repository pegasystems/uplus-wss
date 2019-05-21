<template>
  <div v-if="settings.pega_marketing.Host === '' || loading">
    <div class="main-offer primary-card flex flex-nowrap">
      <div
        class="image"
        v-bind:style="{ backgroundImage: 'url(./img/' + app.offer.main_offer.image + ')'}"
      ></div>
      <div class="details">
        <h3 class="color-brand">{{ $t('message.' + app.offer.main_offer.title)}}</h3>
        <p>{{ $t('message.' + app.offer.main_offer.message)}}</p>
        <button
          v-on:click="applyOfferAction"
          class="strong"
        >{{ $t('message.' + app.offer.main_offer.button_label)}}</button>
      </div>
    </div>
    <div class="offer-cards promo">
      <h4>{{ $t('message.' + app.offer.cards.title)}}</h4>
      <div class="flex">
        <div
          class="flex flex-col primary-card"
          v-for="(item,index) in app.offer.cards.data"
          v-bind:key="index"
        >
          <h3>{{ $t('message.' + item.title)}}</h3>
          <p class="flex-grow-1">{{ $t('message.' + item.message)}}</p>
          <span class="highlight border-brand color-brand">{{ $t('message.' + item.highlight)}}</span>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div
      v-if="typeof hero_offer.title === 'undefined'"
      class="main-offer primary-card flex flex-nowrap"
    >
      <div
        class="image"
        v-bind:style="{ backgroundImage: 'url(./img/' + app.offer.main_offer.image + ')'}"
      ></div>
      <div class="details">
        <h3 class="color-brand">{{ $t('message.' + app.offer.main_offer.title)}}</h3>
        <p>{{ $t('message.' + app.offer.main_offer.message)}}</p>
        <button
          v-on:click="applyOfferAction"
          class="strong"
        >{{ $t('message.' + app.offer.main_offer.button_label)}}</button>
      </div>
    </div>
    <div v-else class="main-offer primary-card flex flex-nowrap">
      <div class="image" v-bind:style="{ backgroundImage: 'url(' + hero_offer.image + ')'}"></div>
      <div class="details">
        <h3 class="color-brand">{{ hero_offer.title }}</h3>
        <p>{{ $t('message.' + hero_offer.message)}}</p>
        <button class="strong">{{ hero_offer.link }}</button>
      </div>
    </div>
    <div class="offer-cards promo">
      <h4>{{ $t('message.' + app.offer.cards.title)}}</h4>
      <div class="flex">
        <div class="flex flex-col primary-card" v-for="(item,index) in data" v-bind:key="index">
          <h3>{{ item.title}}</h3>
          <p class="flex-grow-1">{{ item.message}}</p>
          <span class="highlight border-brand">
            <a
              v-if="settings.pega_marketing.offerPage.clickaction === 'TopURL'"
              :href="item.url"
              :title="$t('message.' + item.link)"
            >{{ $t("message." + item.link)}}</a>
            <a
              v-else-if="settings.pega_marketing.offerPage.clickaction === 'Popup'"
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
</template>

<script>
import { mainconfig, initNBAM } from '../../global';

export default {
  data() {
    return Object.assign({}, mainconfig, {
      loading: true,
      data: [],
      hero_offer: {},
    });
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
          'offerPage',
          customerID,
          this.previousPage,
          'offer.html',
        );
      }, 200);
    }
  },
  methods: {
    showOffer(item) {
      mainconfig.offerURL = item.url;
      mainconfig.previousPage = item.name;
    },
    applyOfferAction() {
      mainconfig.offerAction = 1;
    },
  },
};
</script>
