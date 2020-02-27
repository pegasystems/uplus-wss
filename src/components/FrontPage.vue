<template>
  <div v-if="homeHeroAction==1 || viewKMHelp==1" class="form flex flex-col">
    <MainHeader />
    <main class="wrap flex flex-col">
      <MashupMainArea />
    </main>
    <MainFooter />
  </div>
  <div v-else-if="offerURL!==''" class="form flex flex-col">
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
import { mainconfig } from '../global';
import MainHeader from './MainHeader.vue';
import MainFooter from './MainFooter.vue';
import FrontMainArea from './FrontMainArea.vue';
import FrontSecondaryArea from './FrontSecondaryArea.vue';
import MashupMainArea from './MashupMainArea.vue';
import MicroSiteMainArea from './MicroSiteMainArea.vue';
import RTSOverlay from './controls/RTSOverlay.vue';

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
