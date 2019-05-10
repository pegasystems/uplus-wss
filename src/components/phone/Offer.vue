<template>
  <div class="flex home-promo primary-card" v-if="settings.pega_marketing.Host === '' || loading">
    <div
      class="image"
      v-bind:style="{ backgroundImage: 'url(./img/' + app.phone.home_page.promo.image + ')' }"
    ></div>
    <div class="details">
      <p>{{ $t('message.phone_home_page_promo_message')}}</p>
      <a v-on:click="showPage('offer')">{{ $t('message.phone_home_page_promo_action')}}</a>
    </div>
  </div>
  <div v-else>
    <div class="flex home-promo primary-card" v-for="item in data" :key="item.title">
      <div class="image" v-bind:style="{ backgroundImage: 'url(' + item.img + ')' }"></div>
      <div class="details">
        <p>{{ item.message }}</p>
        <a v-on:click="showPage('offer')">{{ $t('message.' + item.link) }}</a>
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
    showPage(page) {
      mainconfig.phonePageName = page;
    },
  },
  mounted() {
    if (this.settings.pega_marketing.Host !== '') {
      const self = this;
      setTimeout(() => {
        initNBAM(self, 'phonePage', '');
      }, 200);
    }
  },
};
</script>
