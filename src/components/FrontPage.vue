<template>
  <div v-if="homeHeroAction==1" class="form">
    <MainHeader/>
    <main :class="isMobilePhone ? '': 'wrap'">
      <MashupMainArea/>
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
  },
};
</script>
