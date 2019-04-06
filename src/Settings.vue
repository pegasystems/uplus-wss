<template>
  <div id="app">
    <SettingsHeader/>
    <main class="padding-2x flex flex-col">
      <SettingsMain/>
    </main>
  </div>
</template>

<script>
import { mainconfig } from "./global";

import SettingsHeader from "./components/settings/SettingsHeader.vue";
import SettingsMain from "./components/settings/SettingsMain.vue";

export default {
  name: "app",
  data: function() {
    return mainconfig;
  },
  components: {
    SettingsHeader,
    SettingsMain
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
