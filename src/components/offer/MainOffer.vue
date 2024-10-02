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
    <div class="wrap">
      <div class="primary-card flex flex-nowrap">
        <img
          class="hero-offer-img"
          :src="'./img/' + app.offer[offerType].hero_offer.image"
        />
        <div class="flex flex-col">
          <h2>
            {{ $t(`message.${app.offer[offerType].hero_offer.title}`) }}
          </h2>
          <p>{{ $t(`message.${app.offer[offerType].hero_offer.message}`) }}</p>
          <button v-on:click="applyOfferAction" class="strong margin-t-auto">
            {{ $t(`message.${app.offer[offerType].hero_offer.button_label}`) }}
          </button>
        </div>
      </div>
    </div>
    <div class="wrap options">
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
    <div class="wrap">
      <div
        class="primary-card flex flex-nowrap loading-container"
        style="min-height: 300px"
      >
        <span class="loading">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </span>
      </div>
    </div>
    <div class="wrap options" style="min-height: 300px">
      <section
        v-for="(item, index) in app.offer[offerType].main_offers"
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
  </template>
  <template v-else>
    <div class="wrap" v-if="hero_offer.url !== '' && hero_offer.img !== ''">
      <div
        class="primary-card flex flex-nowrap hero-offer"
        :data-hero-offer="1"
      >
        <img
          class="hero-offer-img"
          :src="hero_offer.img"
          :alt="hero_offer.title"
        />
        <div class="flex flex-col">
          <h2>
            {{ hero_offer.title }}
          </h2>
          <p>{{ hero_offer.message }}</p>
          <a
            v-if="action === 'TopURL' && hero_offer.url != ''"
            :href="hero_offer.url"
            :title="hero_offer.link"
            >{{ hero_offer.link }}</a
          >
          <a
            v-else-if="action === 'Popup' && hero_offer.url != ''"
            :href="hero_offer.url"
            target="_blank"
            :title="hero_offer.link"
            >{{ hero_offer.link }}</a
          >
          <button
            v-else
            class="strong margin-t-auto"
            v-on:click="applyOfferAction"
          >
            {{ hero_offer.link }}
          </button>
        </div>
      </div>
    </div>
    <div class="wrap options">
      <section v-for="(item, index) in data" :key="index" class="front-option">
        <div class="offer-card details" :data-offer-index="index">
          <button
            v-if="settings.pega_marketing.showAIOverlay"
            class="pi pi-polaris-solid ai-toggle"
            v-on:click="toggleAIOverlay(item)"
            title="toggle AI"
          ></button>
          <img class="option" :src="item.img" :alt="item.title" />
          <h3>
            {{ $t(item.title) }}
          </h3>
          <p>{{ $t(item.message) }}</p>
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
  </template>
</template>

<script>
import { mainconfig } from '../../global';
import { initNBAM, captureResponse } from '../../CDHIntegration';
import AIOverlay from '../controls/AIOverlay.vue';

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
      document.querySelectorAll('.offer-card').forEach((offer) => {
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
    toggleAIOverlay(item) {
      item.showAIoverlay = !item.showAIoverlay;
    },
    applyOfferAction() {
      if (this.settings.pega_marketing.Host === '') {
        mainconfig.offerAction = 1;
        if (mainconfig.isMobilePhone) {
          mainconfig.phonePageName = 'offer';
        }
        mainconfig.offerURL = this.hero_offer.url;
        mainconfig.previousPage = this.hero_offer.name;
      } else {
        if (this.hero_offer.url === '' && this.action === 'Mashup') {
          mainconfig.offerAction = 1;
        } else {
          if (mainconfig.isMobilePhone) {
            mainconfig.phonePageName = 'offer';
          }
          mainconfig.offerURL = this.hero_offer.url;
          mainconfig.previousPage = this.hero_offer.name;
        }
        this.hero_offer.useURL = true;
        if (this.action === 'BuiltIn') {
          mainconfig.offerURL = '/Basic';
          this.hero_offer.useURL = false;
        }
        mainconfig.CDHContainer = this.hero_offer;
        if (mainconfig.settings.pega_marketing.useCaptureByChannel === true) {
          captureResponse(this, this.hero_offer, 'Clicked');
        }
      }
    },
  },
  components: {
    AIOverlay,
  },
};
</script>
