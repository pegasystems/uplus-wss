<template>
  <section class="offer-card-col">
    <img class="offer-img" :src="img" :alt="title">
    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
      <a v-if="url==='#'" href="./offer.html">{{ link }}</a>
      <a v-else-if="clickaction === 'TopURL'" :href="url" :title="link">{{ link }}</a>
      <a v-else-if="clickaction === 'Popup'" :href="url" target="_blank" :title="link">{{ link }}</a>
      <button v-else class="simple" v-on:click="showOffer(url, name)" :title="link">{{ link }}</button>
    </div>
  </section>
</template>

<script>
import { mainconfig } from '../../global';

export default {
  props: ['title', 'message', 'img', 'url', 'link', 'name', 'clickaction'],
  data() {
    return mainconfig;
  },
  methods: {
    showOffer(url, name) {
      mainconfig.offerURL = url;
      mainconfig.previousPage = name;
    },
  },
};
</script>
