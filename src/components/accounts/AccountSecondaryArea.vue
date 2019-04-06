<template>
  <div class="col col-2">
    <Offer
      v-for="item in app.offers"
      :key="item.title"
      v-bind:title="item.title"
      v-bind:message="item.message"
      v-bind:img="('./img/' + item.img)"
    />
    <QuickLinks/>
  </div>
</template>

<script>
import Offer from "../controls/Offer.vue";
import QuickLinks from "../widgets/QuickLinks.vue";
import { mainconfig } from "../../global";

export default {
  data: function() {
    return mainconfig;
  },
  components: {
    Offer,
    QuickLinks
  }
};
</script>
