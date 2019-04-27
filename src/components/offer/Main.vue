<template>
  <main class="wrap flex flex-col">
    <MainOffer/>
    <Cards/>
    <Details/>
    <Highlight/>
  </main>
</template>

<script>
import { mainconfig } from '../../global';
import MainOffer from './MainOffer.vue';
import Cards from './Cards.vue';
import Details from './Details.vue';
import Highlight from './Highlight.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    MainOffer,
    Cards,
    Details,
    Highlight,
  },
};
</script>
