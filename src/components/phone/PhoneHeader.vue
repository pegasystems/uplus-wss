<template>
  <header class="flex flex-row flex-mid-align">
    <button class="simple">
      <i class="pi pi-bars"></i>
    </button>
    <a href="#">
      <img class="logo" :src="('./img/u+-logo.svg')" alt="U+">
    </a>
  </header>
</template>

<script>
import { mainconfig } from "../../global";
export default {
  props: {
    isAuthenticated: Boolean
  },
  data: function() {
    return mainconfig;
  }
};
</script>
