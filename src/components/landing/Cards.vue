<template>
  <div class="landing-cards promo">
    <h4>{{ $t('message.' + app.landing.cards.title) }}</h4>
    <div class="flex">
      <div
        class="flex flex-col"
        v-for="(item, index) in app.landing.cards.data"
        v-bind:key="index"
      >
        <i :class="'pi color-brand ' + item.icon"></i>
        <p>{{ $t('message.' + item.title) }}</p>
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
