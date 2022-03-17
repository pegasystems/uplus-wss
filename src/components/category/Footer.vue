<template>
  <div class="background-brand offer-footer">
    <div class="promo">
      <h4>{{ $t('message.' + app.category.footer.title) }}</h4>
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
