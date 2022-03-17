<template>
  <div v-if="homeHeroAction == 1 || viewKMHelp == 1" class="form flex flex-col">
    <MainHeader />
    <main class="wrap flex flex-col">
      <MashupMainArea />
    </main>
    <MainFooter />
  </div>
  <div v-else-if="offerURL !== ''" class="form flex flex-col">
    <MainHeader />
    <main class="wrap flex flex-col">
      <MicroSiteMainArea />
    </main>
    <MainFooter />
  </div>
  <div v-else class="front">
    <RTSOverlay v-if="settings.pega_marketing.enableRTS" />
    <MainHeader />
    <main :class="'flex flex-col' + (isRTSEnabled ? ' rts-enabled' : '')">
      <FrontMainArea />
      <FrontSecondaryArea />
    </main>
    <MainFooter />
  </div>
</template>

<script>
import { mainconfig } from '@/global';
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';
import FrontMainArea from '@/components/FrontMainArea.vue';
import FrontSecondaryArea from '@/components/FrontSecondaryArea.vue';
import MashupMainArea from '@/components/MashupMainArea.vue';
import MicroSiteMainArea from '@/components/MicroSiteMainArea.vue';
import RTSOverlay from '@/components/controls/RTSOverlay.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    MainHeader,
    FrontMainArea,
    MashupMainArea,
    FrontSecondaryArea,
    MainFooter,
    MicroSiteMainArea,
    RTSOverlay,
  },
};
</script>
