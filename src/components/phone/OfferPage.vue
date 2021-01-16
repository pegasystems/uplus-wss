<template>
  <main class="home flex flex-col full-height">
    <iframe
      v-if="offerURL!==''"
      :src="offerURL"
      style="overflow: hidden;"
      width="100%"
      height="100%"
      border="0"
      frameborder="0"
    ></iframe>
    <MainOffer v-else v-bind:offerType="offerIndex"/>
  </main>
</template>

<script>
import { mainconfig } from '../../global';
import MainOffer from '../offer/MainOffer.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    MainOffer,
  },
};
</script>
