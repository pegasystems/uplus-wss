<template>
  <div class="background-brand offer-footer">
    <div class="promo">
      <h4>{{ $t('message.' + app.offer[offerIndex].footer.title) }}</h4>
      <button class="secondary" style="pointer-events: none">
        {{ $t('message.' + app.offer[offerIndex].footer.button_label) }}
      </button>
    </div>
    <MainFooter />
  </div>
</template>

<script>
import { mainconfig } from '../../global';
import MainFooter from '../MainFooter.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    MainFooter,
  },
};
</script>
