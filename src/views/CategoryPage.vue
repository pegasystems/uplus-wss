<template>
  <PhonePage v-if="isMobilePhone" />
  <MainPage v-else id="app" />
</template>

<script>
import { mainconfig } from '@/global';
import PhonePage from '@/components/phone/PhonePage.vue';
import MainPage from '@/components/category/MainPage.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    MainPage,
    PhonePage,
  },
};
</script>
