<template>
  <div v-if="isMobilePhone" class="phone">
    <PhoneHeader/>
    <PhoneMain/>
  </div>
  <div v-else-if="homeHeroAction==1" class="form">
    <MainHeader/>
    <MashupMainArea></MashupMainArea>
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
import { mainconfig } from "../global";
import MainHeader from "./MainHeader.vue";
import MainFooter from "./MainFooter.vue";
import FrontMainArea from "./FrontMainArea.vue";
import FrontSecondaryArea from "./FrontSecondaryArea.vue";
import MashupMainArea from "./MashupMainArea.vue";
import PhoneHeader from "./phone/PhoneHeader.vue";
import PhoneMain from "./phone/PhoneMain.vue";

export default {
  data: function() {
    return mainconfig;
  },
  components: {
    PhoneHeader,
    PhoneMain,
    MainHeader,
    FrontMainArea,
    MashupMainArea,
    FrontSecondaryArea,
    MainFooter
  }
};
</script>
