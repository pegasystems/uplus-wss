<template>
  <main class="home flex flex-col">
    <iframe
      v-if="offerURL!==''"
      :src="offerURL"
      style="overflow: hidden; height: 570px"
      width="100%"
      height="100%"
      border="0"
      frameborder="0"
    ></iframe>
    <MainOffer v-else/>
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
