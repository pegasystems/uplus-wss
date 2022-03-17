<template>
  <div class="landing-intro">
    <h1>{{ $t('message.' + app.landing.header.title) }}</h1>
    <ul>
      <li
        v-for="(item, index) in app.landing.header.promotions"
        v-bind:key="index"
      >
        <i :class="'pi color-brand ' + item.icon"></i>
        {{ $t('message.' + item.message) }}
      </li>
    </ul>
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
