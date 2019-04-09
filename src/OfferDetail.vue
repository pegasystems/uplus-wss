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

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i,800");
@import url("./css/normalize.min.css");
@import url("./css/_init.css");
@import url("./css/_text.css");
@import url("./css/_layout.css");
@import url("./css/_controls.css");
@import url("./css/_color.css");
@import url("./css/_icons.css");
@import url("./css/_chat.css");
@import url("./css/_offer.css");
@import url("./css/_responsive.css");
</style>
