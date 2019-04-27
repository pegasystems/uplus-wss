<template>
  <div class="flex flex-col">
    <Aside/>
    <Header/>
    <Main/>
    <MainFooter v-if="phonePageName=='home'"/>
  </div>
</template>

<script>
import { mainconfig } from '../../global';
import MainFooter from '../MainFooter.vue';
import Aside from './Aside.vue';
import Header from './Header.vue';
import Main from './Main.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    Header,
    Main,
    Aside,
    MainFooter,
  },
};
</script>
