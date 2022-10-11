<template>
  <div
    class="flex flex-col"
    v-if="
      settings.pega_marketing.Host === '' ||
      settings.pega_marketing.homePage.placement === '' ||
      settings.pega_marketing.homePage.containerName === '' ||
      (loading && !settings.pega_marketing.showLoadingIndicator) ||
      errorloading
    "
  >
    <div class="wrap hero-wrap flex">
      <div class="flex flex-col">
        <h1 class="hero">
          {{ $t(`message.${app.herotext.title}`) }}
          <span>{{ $t(`message.${app.herotext.titlespan}`) }}</span>
        </h1>
        <button v-on:click="applyHeroAction" class="more">
          {{ $t(`message.${app.herotext.buttonlabel}`) }}
        </button>
      </div>
    </div>
    <div class="wrap options primary-options">
      <section
        v-for="(item, index) in app.primarydetails"
        :key="index"
        class="front-option"
      >
        <div>
          <img
            class="option"
            :src="item.img"
            :alt="$t('message.' + item.title)"
          />
        </div>
        <div class="details">
          <h2 class="option-header">{{ $t('message.' + item.title) }}</h2>
          <p>{{ $t('message.' + item.message) }}</p>
          <a v-on:click="gotoOfferPage" href="./offer.html">{{
            $t('message.' + item.link)
          }}</a>
        </div>
      </section>
    </div>
  </div>
  <div
    class="flex flex-col"
    v-else-if="
      settings.pega_marketing.Host !== '' &&
      loading &&
      settings.pega_marketing.showLoadingIndicator
    "
  >
    <div class="wrap hero-wrap flex">
      <div class="flex flex-col"></div>
    </div>
    <div class="wrap options primary-options" style="min-height: 400px">
      <section
        v-for="(item, index) in app.primarydetails"
        :key="index"
        class="front-option loading-container"
      >
        <span class="loading">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </span>
      </section>
    </div>
  </div>
  <div class="flex flex-col" v-else>
    <div
      v-if="!isAuthenticated && homeHeroAction != 1 && offerURL === ''"
      class="wrap flex flex-col"
    >
      <button
        v-if="
          settings.pega_marketing.showAIOverlay &&
          (hero_offer.url !== '' || hero_offer.img !== '')
        "
        class="pi pi-polaris-solid ai-toggle"
        v-on:click="toggleAIOverlay(hero_offer)"
        title="toggle AI"
      ></button>
      <div
        class="flex hero-wrap"
        :class="hero_offer.img !== '' ? 'hero-with-img' : ''"
      >
        <div class="flex flex-col">
          <h1 class="hero">
            {{ hero_offer.title }}
            <span>{{ hero_offer.message }}</span>
          </h1>
          <a
            v-if="
              settings.pega_marketing.homePage.clickaction === 'TopURL' &&
              hero_offer.url !== ''
            "
            :href="hero_offer.url"
            >{{ hero_offer.link }}</a
          >
          <a
            v-else-if="
              settings.pega_marketing.homePage.clickaction === 'Popup' &&
              hero_offer.url !== ''
            "
            :href="hero_offer.url"
            target="_blank"
            >{{ hero_offer.link }}</a
          >
          <button v-else v-on:click="applyHeroAction" class="more">
            {{ hero_offer.link }}
          </button>
        </div>
        <div v-if="hero_offer.img !== ''">
          <img :src="hero_offer.img" :alt="hero_offer.title" />
        </div>
        <AIOverlay
          v-if="settings.pega_marketing.showAIOverlay"
          :offer="hero_offer"
          :class="hero_offer.showAIoverlay ? 'show' : ''"
        />
      </div>
    </div>
    <div class="wrap options primary-options">
      <section
        v-for="(item, index) in data"
        :key="index"
        class="front-option cdh-offer"
        @mouseover="checkRTSEventHover(index, item, true)"
        @mouseleave="checkRTSEventHover(index, item, false)"
      >
        <button
          v-if="settings.pega_marketing.showAIOverlay"
          class="pi pi-polaris-solid ai-toggle"
          v-on:click="toggleAIOverlay(item)"
          title="toggle AI"
        ></button>
        <div class="offer-card" :data-offer-index="index">
          <div>
            <img class="option" :src="item.img" :alt="item.title" />
          </div>
          <div class="details">
            <h2 class="option-header">{{ item.title }}</h2>
            <p>{{ item.message }}</p>
            <a
              v-if="
                settings.pega_marketing.homePage.clickaction === 'TopURL' &&
                item.url != ''
              "
              :href="item.url"
              >{{ $t('message.' + item.link) }}</a
            >
            <a
              v-else-if="
                settings.pega_marketing.homePage.clickaction === 'Popup' &&
                item.url != ''
              "
              :href="item.url"
              target="_blank"
              >{{ $t('message.' + item.link) }}</a
            >
            <button v-else class="simple" v-on:click="showOffer(item)">
              {{ $t('message.' + item.link) }}
            </button>
          </div>
          <AIOverlay
            v-if="settings.pega_marketing.showAIOverlay"
            :offer="item"
            :class="item.showAIoverlay ? 'show' : ''"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mainconfig } from '../global';
import {
  initNBAM,
  sendRTSEvent,
  captureResponse,
  sendClickStreamEvent,
} from '../CDHIntegration';
import AIOverlay from './controls/AIOverlay.vue';

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
      hero_offer: {
        img: '',
        url: '',
        title: this.$t(`message.${mainconfig.app.herotext.title}`),
        message: this.$t(`message.${mainconfig.app.herotext.titlespan}`),
        link: this.$t(`message.${mainconfig.app.herotext.buttonlabel}`),
      },
    };
  },
  mounted() {
    if (
      this.settings.pega_marketing.Host !== '' &&
      this.settings.pega_marketing.homePage.placement !== '' &&
      this.settings.pega_marketing.homePage.containerName !== ''
    ) {
      const self = this;
      setTimeout(() => {
        initNBAM(
          self,
          'homePage',
          '',
          self.previousPage,
          mainconfig.currentPage,
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
      document.querySelectorAll('.offer-card').forEach((offer) => {
        observer.observe(offer);
      });
    }
  },
  methods: {
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
    showOffer(item) {
      mainconfig.offerURL = item.url;
      mainconfig.previousPage = item.name;
      item.useURL = true;
      if (
        mainconfig.settings.pega_marketing.homePage.clickaction === 'BuiltIn'
      ) {
        mainconfig.offerURL = '/Basic';
        item.useURL = false;
      }
      mainconfig.CDHContainer = item;
      if (mainconfig.settings.pega_marketing.useCaptureByChannel === true) {
        captureResponse(this, item, 'Clicked');
      }
    },
    applyHeroAction() {
      if (this.hero_offer.url === '') {
        mainconfig.homeHeroAction = 1;
        window.history.pushState({}, '', 'heroaction');
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 0);
      } else {
        mainconfig.offerURL = this.hero_offer.url;
        mainconfig.previousPage = this.hero_offer.name;
      }
      sendClickStreamEvent(
        mainconfig,
        'PegaView',
        'HeroOffer',
        window.loadPage,
      );
      window.loadPage = new Date();
    },
    toggleAIOverlay(item) {
      item.showAIoverlay = !item.showAIoverlay;
    },
    gotoOfferPage(event) {
      mainconfig.currentPage = 'offer.html';
      if (this.$gtag) {
        this.$gtag.pageview({
          page_path: mainconfig.currentPage,
        });
      }
      sendClickStreamEvent(mainconfig, 'PegaView', 'Offer', window.loadPage);
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
  },
  components: {
    AIOverlay,
  },
};
</script>
