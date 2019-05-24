<template>
  <section class="flex flex-col height-100-pct">
    <iframe
      :src="offerURL"
      style="overflow: hidden;"
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
