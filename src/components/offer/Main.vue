<template>
  <main v-if="offerAction !== -1" class="mashup-main flex flex-col">
      <MashupMainArea class="wrap" />
  </main>
  <main v-else-if="offerURL !== ''" class="flex flex-col">
    <div class="wrap flex height-100-pct">
      <MicroSiteMainArea />
    </div>
  </main>
  <main v-else class="flex flex-col hero-main">
    <div class="ribbon1">
      <div><div class="wrap"></div></div>
    </div>
    <div class="wrap offer-heading">
      <h1>{{ $t('message.' + app.offer[offerIndex].header.title) }}</h1>
      <p>{{ $t('message.' + app.offer[offerIndex].header.msg) }}</p>
    </div>
    <MainOffer v-bind:offerType="offerIndex" />
    <div class="highlight-main">
      <Highlight />
    </div>
  </main>
</template>

<script>
import { mainconfig } from '../../global';
import MainOffer from './MainOffer.vue';
import Highlight from './Highlight.vue';
import MicroSiteMainArea from '../MicroSiteMainArea.vue';
import MashupMainArea from '../MashupMainArea.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    MainOffer,
    Highlight,
    MicroSiteMainArea,
    MashupMainArea,
  },
};
</script>
