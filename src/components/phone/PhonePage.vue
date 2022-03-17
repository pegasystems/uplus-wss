<template>
  <div class="flex flex-col">
    <Aside />
    <Header />
    <Main />
  </div>
</template>

<script>
import { mainconfig } from '../../global';
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
  },
};
</script>
