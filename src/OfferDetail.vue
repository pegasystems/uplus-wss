<template>
  <div id="app" class="form offer">
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import { mainconfig } from "./global";

import Header from "./components/offer/Header.vue";
import Main from "./components/offer/Main.vue";
import Footer from "./components/offer/Footer.vue";

export default {
  name: "app",
  data: function() {
    return mainconfig;
  },
  components: {
    Header,
    Main,
    Footer
  }
};
</script>

