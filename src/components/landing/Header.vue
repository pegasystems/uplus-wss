<template>
  <header class="flex flex-col flex-mid-align">
    <a href="index.html">
      <img class="logo" :src="('./img/u+-logo.svg')" alt="U+">
    </a>
  </header>
</template>

<script>
import { mainconfig } from '../../global';

export default {
  data() {
    return mainconfig;
  },
};
</script>
