<template>
  <div class="col col-1 primary-card">
    <MashupMainArea
      v-if="typeof settings.todo !== 'undefined' && settings.todo.url !== ''"
      :key="componentKey"
    />
    <AccountDetails/>
    <section class="content">
      <h2>{{ $t("message.balance") }}</h2>
      <img :src="('./img/balances.svg')" alt="Balances chart">
    </section>
  </div>
</template>

<script>
import { mainconfig } from '../../global';
import MashupMainArea from '../MashupMainArea.vue';
import AccountDetails from '../widgets/AccountDetails.vue';

export default {
  data() {
    return Object.assign({}, mainconfig, {
      componentKey: 1,
    });
  },
  components: {
    MashupMainArea,
    AccountDetails,
  },
  mounted() {
    /* Will listen for message from the Mashup iframe to force a reload back of the MashupComponent */
    const self = this;
    window.addEventListener('message', (e) => {
      if (e.data === 'pegaMashupNavigateBack') {
        self.componentKey += 1;
      }
    });
  },
};
</script>
