<template>
  <div class="flex flex-col phone">
    <Aside/>
    <Header/>
    <Main/>
    <MainFooter/>
  </div>
</template>

<script>
import { mainconfig } from "../../global";
import MainFooter from "../MainFooter.vue";
import Aside from "./Aside.vue";
import Header from "./Header.vue";
import Main from "./Main.vue";

export default {
  data: function() {
    return mainconfig;
  },
  components: {
    Header,
    Main,
    Aside,
    MainFooter
  }
};
</script>
