<template>
  <div class="flex flex-col" v-if="settings.pega_marketing.Host === '' || loading">
    <div class="wrap hero-wrap flex flex-col">
      <h1 class="hero">
        {{ $t('message.' + app.herotext.title)}}
        <br>
        {{ $t('message.' + app.herotext.titlespan)}}
      </h1>
      <button
        v-on:click="applyHeroAction"
        class="more"
      >{{ $t('message.' + app.herotext.buttonlabel) }}</button>
    </div>
    <div class="wrap options primary-options">
      <section v-for="item in app.primarydetails" :key="item.img" class="front-option">
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
      class="wrap hero-wrap flex flex-col"
    >
      <div>
        <h1 class="hero">
          {{ $t('message.' + app.herotext.title)}}
          <br>
          {{ $t('message.' + app.herotext.titlespan)}}
        </h1>
        <button
          v-on:click="applyHeroAction"
          class="more"
        >{{ $t('message.' + app.herotext.buttonlabel) }}</button>
      </div>
    </div>
    <div class="wrap options primary-options">
      <section v-for="item in data" :key="item.img" class="front-option">
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
      hero_offer: {},
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
      mainconfig.homeHeroAction = 1;
    },
  },
};
</script>
