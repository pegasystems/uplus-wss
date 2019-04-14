<template>
  <div class="main-offer primary-card flex flex-nowrap">
    <div
      class="image"
      v-bind:style="{ backgroundImage: 'url(./img/' + app.offer.main_offer.image + ')'}"
    ></div>
    <div class="details">
      <h3 class="color-brand">{{ $t('message.' + app.offer.main_offer.title)}}</h3>
      <p>{{ $t('message.' + app.offer.main_offer.message)}}</p>
      <button class="strong">{{ $t('message.' + app.offer.main_offer.button_label)}}</button>
    </div>
  </div>
</template>

<script>
import { mainconfig } from "../../global";

export default {
  data: function() {
    return mainconfig;
  }
};
</script>

