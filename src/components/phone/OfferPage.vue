<template>
  <main class="home flex flex-col">
    <MainOffer/>
    <Cards/>
  </main>
</template>

<script>
import { mainconfig } from '../../global';
import MainOffer from '../offer/MainOffer.vue';
import Cards from '../offer/Cards.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    MainOffer,
    Cards,
  },
};
</script>
