<template>
  <div v-if="homeHeroAction==1" class="form">
    <MainHeader/>
    <main class="wrap flex flex-col">
      <MashupMainArea/>
    </main>
    <MainFooter/>
  </div>
  <div v-else-if="offerURL!==''" class="form">
    <MainHeader/>
    <main class="wrap flex flex-col">
      <MicroSiteMainArea/>
    </main>
    <MainFooter/>
  </div>
  <div v-else class="front">
    <MainHeader/>
    <main class="flex flex-col">
      <FrontMainArea/>
      <FrontSecondaryArea/>
    </main>
    <MainFooter/>
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
  },
};
</script>
