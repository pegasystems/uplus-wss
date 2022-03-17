<template>
  <div class="background-brand landing-footer">
    <div class="promo">
      <h4>{{ $t('message.' + app.landing.footer.title) }}</h4>
      <button class="secondary">
        {{ $t('message.' + app.landing.footer.button_label) }}
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
