<template>
  <div class="landing-benefits promo">
    <h4>{{ $t('message.' + app.landing.benefits.title) }}</h4>
    <div class="flex">
      <div
        v-for="(item, index) in app.landing.benefits.data"
        v-bind:key="index"
      >
        <i :class="'pi ' + item.icon"></i>
        <span>{{ $t('message.' + item.message) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mainconfig } from '../../global';

export default {
  data() {
    return mainconfig;
  },
};
</script>
