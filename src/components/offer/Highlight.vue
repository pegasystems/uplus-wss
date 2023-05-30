<template>
  <div class="wrap">
    <div class="highlight-card flex-mid-align">
      <div class="flex flex-col">
        <h2>{{ $t('message.' + app.offer[offerIndex].details.title) }}</h2>
        <span>{{
          $t('message.' + app.offer[offerIndex].details.message)
        }}</span>
      </div>
      <div class="offer-highlights">
        <div
          class="flex flex-mid-align"
          v-for="(item, index) in app.offer[offerIndex].highlights.data"
          v-bind:key="index"
        >
          <i :class="'pi color-brand ' + item.icon"></i>
          <div class="flex flex-col">
            <p>{{ $t('message.' + item.title) }}</p>
            <span>{{ $t('message.' + item.message) }}</span>
          </div>
        </div>
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
