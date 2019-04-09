<template>
  <div class="background-brand offer-footer">
    <div class="promo">
      <h4>{{ $t('message.' + app.offer.footer.title)}}</h4>
      <button class="secondary">{{ $t('message.' + app.offer.footer.button_label)}}</button>
    </div>
    <MainFooter/>
  </div>
</template>

<script>
import { mainconfig } from "../../global";
import MainFooter from "../MainFooter.vue";
export default {
  data: function() {
    return mainconfig;
  },
  components: {
    MainFooter
  }
};
</script>

