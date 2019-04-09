<template>
  <div id="app">
    <Header/>
    <main class="padding-2x flex flex-col">
      <Main/>
    </main>
  </div>
</template>

<script>
import { mainconfig } from "./global";

import Header from "./components/settings/Header.vue";
import Main from "./components/settings/Main.vue";

export default {
  name: "app",
  data: function() {
    return mainconfig;
  },
  components: {
    Header,
    Main
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
@import url("./css/_responsive.css");
</style>
