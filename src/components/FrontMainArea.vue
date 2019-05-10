<template>
  <div v-if="settings.pega_marketing.Host === '' || loading" class="wrap options primary-options">
    <section v-for="item in app.primarydetails" :key="item.img" class="front-option">
      <img class="option" :src="(item.img)" :alt="$t('message.' + item.title)">
      <div class="details">
        <h2 class="option-header">{{ $t("message." + item.title)}}</h2>
        <p>{{ $t("message." + item.message)}}</p>
        <a href="./offer.html">{{ $t("message." + item.link)}}</a>
      </div>
    </section>
  </div>
  <div v-else class="wrap options primary-options">
    <section v-for="item in data" :key="item.img" class="front-option">
      <img class="option" :src="(item.img)" :alt="(item.title)">
      <div class="details">
        <h2 class="option-header">{{ item.title }}</h2>
        <p>{{ item.message }}</p>
        <a :href="item.url">{{ $t("message." + item.link)}}</a>
      </div>
    </section>
  </div>
</template>

<script>
import { mainconfig, initNBAM } from '../global';

export default {
  data() {
    return Object.assign({}, mainconfig, {
      loading: true,
      data: [],
    });
  },
  mounted() {
    if (this.settings.pega_marketing.Host !== '') {
      const self = this;
      setTimeout(() => {
        initNBAM(self, 'homePage', '');
      }, 200);
    }
  },
};
</script>
