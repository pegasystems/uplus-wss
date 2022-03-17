<template>
  <div class="offer-highlights">
    <div
      class="flex"
      v-for="(item, index) in app.offer[offerIndex].highlights.data"
      v-bind:key="index"
    >
      <i :class="'pi color-brand ' + item.icon"></i>
      <div class="flex flex-col flex-grow-1">
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
