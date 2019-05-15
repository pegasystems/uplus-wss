<template>
  <section class="offer-card-col">
    <img class="offer-img" :src="img" :alt="title">
    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
      <a v-if="url==='#'" href="./offer.html">{{ link }}</a>
      <button v-else v-on:click="showOffer(url)" :title="link" class="simple">{{ link}}</button>
    </div>
  </section>
</template>

<script>
import { mainconfig } from '../../global';

export default {
  props: ['title', 'message', 'img', 'url', 'link'],
  data() {
    return mainconfig;
  },
  methods: {
    showOffer(url) {
      mainconfig.offerURL = url;
    },
  },
};
</script>
