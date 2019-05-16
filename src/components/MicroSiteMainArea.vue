<template>
  <section class="flex flex-col">
    <iframe
      :src="offerURL"
      style="overflow: hidden; height: 570px"
      width="100%"
      height="100%"
      border="0"
      frameborder="0"
    ></iframe>
  </section>
</template>

<script>
import { mainconfig } from '../global';

export default {
  data() {
    return mainconfig;
  },
};
</script>
