<template>
  <div class="col col-1 primary-card">
    <AccountDetails/>
    <section class="content">
      <h2>{{ $t("message.balance") }}</h2>
      <img :src="('./img/balances.svg')" alt="Balances chart">
    </section>
  </div>
</template>

<script>
import { mainconfig } from "../../global";

import AccountDetails from "../widgets/AccountDetails.vue";
export default {
  data: function() {
    return mainconfig;
  },
  components: {
    AccountDetails
  }
};
</script>
