<template>
  <div class="flex flex-col" v-if="settings.pega_marketing.Host === '' || loading">
    <div class="wrap hero-wrap flex">
      <div class="flex flex-col">
        <h1 class="hero">
          {{ hero_offer.title }}
          <br v-if=" hero_offer.message !=''">
          {{ hero_offer.message }}
        </h1>
        <button v-on:click="applyHeroAction" class="more">{{ hero_offer.link }}</button>
      </div>
    </div>
    <div class="wrap options primary-options">
      <section v-for="(item,index) in app.primarydetails" :key="index" class="front-option">
        <img class="option" :src="(item.img)" :alt="$t('message.' + item.title)">
        <div class="details">
          <h2 class="option-header">{{ $t("message." + item.title)}}</h2>
          <p>{{ $t("message." + item.message)}}</p>
          <a href="./offer.html">{{ $t("message." + item.link)}}</a>
        </div>
      </section>
    </div>
  </div>
  <div class="flex flex-col" v-else>
    <div
      v-if="!isAuthenticated && homeHeroAction!=1 && offerURL===''"
      class="wrap hero-wrap flex"
      :class="hero_offer.img!=='' ? 'hero-with-img':''"
    >
      <div class="flex flex-col">
        <h1 class="hero">
          {{ hero_offer.title }}
          <br v-if=" hero_offer.message !=''">
          {{ hero_offer.message }}
        </h1>
        <button v-on:click="applyHeroAction" class="more">{{ hero_offer.link }}</button>
      </div>
      <div v-if="hero_offer.img!==''">
        <img :src="(hero_offer.img)" :alt="(hero_offer.title)">
      </div>
    </div>
    <div class="wrap options primary-options">
      <section v-for="(item,index) in data" :key="index" class="front-option">
        <img class="option" :src="(item.img)" :alt="(item.title)">
        <div class="details">
          <h2 class="option-header">{{ item.title }}</h2>
          <p>{{ item.message }}</p>
          <a
            v-if="settings.pega_marketing.homePage.clickaction === 'TopURL'"
            :href="item.url"
            :title="$t('message.' + item.link)"
          >{{ $t("message." + item.link)}}</a>
          <a
            v-else-if="settings.pega_marketing.homePage.clickaction === 'Popup'"
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
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mainconfig, initNBAM } from '../global';

export default {
  data() {
    return Object.assign({}, mainconfig, {
      loading: true,
      data: [],
      hero_offer: {
        img: '',
        url: '',
        title: this.$t(`message.${mainconfig.app.herotext.title}`),
        message: this.$t(`message.${mainconfig.app.herotext.titlespan}`),
        link: this.$t(`message.${mainconfig.app.herotext.buttonlabel}`),
      },
    });
  },
  mounted() {
    if (
      this.settings.pega_marketing.Host !== '' &&
      this.settings.pega_marketing.homePage.placement !== '' &&
      this.settings.pega_marketing.homePage.containerName !== ''
    ) {
      const self = this;
      setTimeout(() => {
        initNBAM(self, 'homePage', '', self.previousPage, 'index.html');
      }, 200);
    }
  },
  methods: {
    showOffer(item) {
      mainconfig.offerURL = item.url;
      mainconfig.previousPage = item.name;
    },
    applyHeroAction() {
      if (this.hero_offer.url === '') {
        mainconfig.homeHeroAction = 1;
      } else {
        mainconfig.offerURL = this.hero_offer.url;
        mainconfig.previousPage = this.hero_offer.name;
      }
    },
  },
};
</script>
