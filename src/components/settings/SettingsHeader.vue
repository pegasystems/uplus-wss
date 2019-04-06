<template>
  <header class="flex flex-mid-align settings">
    <a href="./index.html">
      <img class="logo" :src="('./img/u+-logo.svg')" alt="U+">
    </a>
    <h1>{{ $t('message.settings') }}</h1>
    <FileUpload/>
  </header>
</template>

<script>
import { mainconfig } from "../../global";
import FileUpload from "../widgets/FileUpload.vue";

export default {
  data: function() {
    return mainconfig;
  },
  components: {
    FileUpload
  }
};
</script>