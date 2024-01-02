<template>
  <template
    v-if="
      settings.pega_marketing.Host === '' ||
      settings.pega_marketing.homePage.placement === '' ||
      settings.pega_marketing.homePage.containerName === '' ||
      (loading && !settings.pega_marketing.showLoadingIndicator) ||
      errorloading
    "
  >
    <div class="hero-main">
      <div class="wrap hero-wrap flex">
        <div class="flex flex-col hero-heading">
          <h1 class="hero">
            {{ $t(`message.${app.herotext.title}`) }}
            <span v-if="$t(`message.${app.herotext.titlespan}`) !== ''">{{
              $t(`message.${app.herotext.titlespan}`)
            }}</span>
          </h1>
          <button v-on:click="applyHeroAction" class="strong">
            {{ $t(`message.${app.herotext.buttonlabel}`) }}
          </button>
        </div>
        <div class="flex hero-image">
          <div class="hero-splash"></div>
        </div>
      </div>
    </div>
    <div class="ribbon"><div></div></div>
    <div class="wrap primary-options">
      <h2>
        {{ $t(`message.${app.primaryheading}`) }}
      </h2>
      <div class="options">
        <section
          v-for="(item, index) in app.primarydetails"
          :key="index"
          class="front-option"
        >
          <div class="details">
            <img
              class="option"
              :src="item.img"
              :alt="$t('message.' + item.title)"
            />
            <h3 class="option-header">{{ $t('message.' + item.title) }}</h3>
            <p>{{ $t('message.' + item.message) }}</p>
            <a v-on:click="gotoOfferPage" href="./offer.html">{{
              $t('message.' + item.link)
            }}</a>
          </div>
        </section>
      </div>
    </div>
  </template>
  <template
    v-else-if="
      settings.pega_marketing.Host !== '' &&
      loading &&
      settings.pega_marketing.showLoadingIndicator
    "
  >
    <div class="hero-main">
      <div class="wrap hero-wrap flex">
        <div class="loading-container">
          <span class="loading">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </span>
        </div>
      </div>
    </div>
    <div class="ribbon"><div></div></div>
    <div class="wrap primary-options" style="min-height: 400px">
      <div class="options">
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
  </template>
  <template v-else>
    <div
      v-if="!isAuthenticated && homeHeroAction != 1 && offerURL === ''"
      class="hero-main"
    >
      <div
        v-if="hero_offer.title !== ''"
        class="wrap flex"
        :class="hero_offer.img !== '' ? 'hero-with-img' : 'hero-no-img'"
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
        <div class="flex flex-nowrap flex-row-reverse">
          <img
            class="hero-offer-img"
            v-if="hero_offer.img !== ''"
            :src="hero_offer.img"
            :alt="hero_offer.title"
          />
          <div class="flex flex-col">
            <h1 class="hero hero-offer" :data-hero-offer="1">
              {{ hero_offer.title }}
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
            <button v-else v-on:click="applyHeroAction" class="strong">
              {{ hero_offer.link }}
            </button>
          </div>
        </div>

        <AIOverlay
          v-if="settings.pega_marketing.showAIOverlay"
          :offer="hero_offer"
          :class="hero_offer.showAIoverlay ? 'show' : ''"
        />
      </div>
      <div v-else class="wrap hero-wrap flex">
        <div class="flex flex-col hero-heading">
          <h1 class="hero">
            {{ $t(`message.${app.herotext.title}`) }}
            <span v-if="$t(`message.${app.herotext.titlespan}`) !== ''">{{
              $t(`message.${app.herotext.titlespan}`)
            }}</span>
          </h1>
          <button v-on:click="applyHeroAction" class="strong">
            {{ $t(`message.${app.herotext.buttonlabel}`) }}
          </button>
        </div>
        <div class="flex hero-image">
          <div class="hero-splash"></div>
        </div>
      </div>
    </div>
    <div class="ribbon"><div></div></div>
    <div class="wrap primary-options">
      <h2>
        {{ $t(`message.${app.primaryheading}`) }}
      </h2>
      <div class="options">
        <section
          v-for="(item, index) in data"
          :key="index"
          class="front-option cdh-offer"
          @mouseover="checkRTSEventHover(index, item, true)"
          @mouseleave="checkRTSEventHover(index, item, false)"
        >
          <div class="offer-card details" :data-offer-index="index">
            <button
              v-if="settings.pega_marketing.showAIOverlay"
              class="pi pi-polaris-solid ai-toggle"
              v-on:click="toggleAIOverlay(item)"
              title="toggle AI"
            ></button>
            <img class="option" :src="item.img" :alt="item.title" />
            <h3 class="option-header">{{ item.title }}</h3>
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
        title: '',
        message: '',
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
      document.querySelectorAll('.offer-card').forEach((offer) => {
        observer.observe(offer);
      });
      document.querySelectorAll('.hero-offer').forEach((offer) => {
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
      sendClickStreamEvent(
        mainconfig,
        'PegaView',
        'HeroOffer',
        window.loadPage,
      );
      window.loadPage = new Date();
      if (
        this.hero_offer.url === '' &&
        mainconfig.settings.pega_marketing.homePage.clickaction === 'Mashup'
      ) {
        mainconfig.homeHeroAction = 1;
        window.history.pushState({}, '', 'heroaction');
      } else {
        mainconfig.offerURL = this.hero_offer.url;
        mainconfig.previousPage = this.hero_offer.name;
      }
      this.hero_offer.useURL = true;
      if (
        mainconfig.settings.pega_marketing.homePage.clickaction === 'BuiltIn'
      ) {
        mainconfig.offerURL = '/Basic';
        this.hero_offer.useURL = false;
      }
      mainconfig.CDHContainer = this.hero_offer;
      if (mainconfig.settings.pega_marketing.useCaptureByChannel === true) {
        captureResponse(this, this.hero_offer, 'Clicked');
      }
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
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
