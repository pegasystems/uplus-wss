<template>
  <div class="flex flex-col wrap">
    <div class="flex offer-request">
      <Highlight/>
      <OfferForm/>
    </div>
    <Cards/>
  </div>
</template>

<script>
import { mainconfig } from "../../global";
import Cards from "./Cards.vue";
import OfferForm from "./Form.vue";
import Highlight from "./Highlight.vue";

export default {
  data: function() {
    return mainconfig;
  },
  components: {
    Highlight,
    Cards,
    OfferForm
  }
};
</script>

