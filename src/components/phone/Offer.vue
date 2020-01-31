<template>
  <div
    class="flex home-promo secondary-card"
    v-if="settings.pega_marketing.Host === '' || loading"
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
  <div class="width-100-pct" v-else>
    <div
      class="flex home-promo secondary-card"
      v-for="item in data"
      :key="item.title"
    >
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
</template>

<script>
import { mainconfig, initNBAM } from '../../global';

export default {
  data() {
    return Object.assign({}, mainconfig, {
      loading: true,
      data: [],
    });
  },
  methods: {
    showOfferPage() {
      mainconfig.phonePageName = 'offer';
      window.history.pushState({}, '', 'offer.html');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    showOffer(item) {
      mainconfig.phonePageName = 'offer';
      mainconfig.offerURL = item.url;
      mainconfig.previousPage = item.name;
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
};
</script>
