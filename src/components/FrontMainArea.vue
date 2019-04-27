<template>
  <div class="wrap options primary-options">
    <section v-for="item in app.primarydetails" :key="item.img" class="front-option">
      <img class="option" :src="(item.img)" alt="Something">
      <div class="details">
        <h2 class="option-header">{{ $t("message." + item.title)}}</h2>
        <p>{{ $t("message." + item.message)}}</p>
        <a href="./offer.html">{{ $t("message." + item.link)}}</a>
      </div>
    </section>
  </div>
</template>

<script>
import { mainconfig } from '../global';

export default {
  data() {
    return mainconfig;
  },
};
</script>
