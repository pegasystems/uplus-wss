<template>
  <main v-if="offerURL === ''" class="wrap flex flex-col">
    <MainOffer/>
    <Details/>
    <Highlight/>
  </main>
  <main v-else class="wrap flex flex-col">
    <MicroSiteMainArea/>
  </main>
</template>

<script>
import { mainconfig } from '../../global';
import MainOffer from './MainOffer.vue';
import Details from './Details.vue';
import Highlight from './Highlight.vue';
import MicroSiteMainArea from '../MicroSiteMainArea.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    MainOffer,
    Details,
    Highlight,
    MicroSiteMainArea,
  },
};
</script>
