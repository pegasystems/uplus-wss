<template>
  <div class="secondary-options">
    <div
      class="banner"
      v-bind:style="{ backgroundImage: 'url(img/secondary-options.jpg)' }"
    ></div>
    <div class="wrap options">
      <section
        v-for="item in app.secondarydetails"
        :key="item.className"
        :class="item.className"
        class="front-option"
      >
        <h2 class="option-header">{{ $t('message.' + item.title) }}</h2>
        <p>{{ $t('message.' + item.message) }}</p>
        <a>{{ $t('message.' + item.link) }}</a>
      </section>
    </div>
  </div>
</template>

<script>
import { mainconfig } from '../global';

export default {
  data() {
    return mainconfig;
  },
};
</script>
