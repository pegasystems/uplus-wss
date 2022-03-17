<template>
  <PhonePage v-if="isMobilePhone" />
  <div v-else id="app" class="form offer">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import { mainconfig } from '@/global';
import PhonePage from '@/components/phone/PhonePage.vue';
import Header from '@/components/MainHeader.vue';
import Main from '@/components/offer/Main.vue';
import Footer from '@/components/offer/Footer.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    Header,
    Main,
    Footer,
    PhonePage,
  },
};
</script>
