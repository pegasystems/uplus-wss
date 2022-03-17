<template>
  <div class="category-highlights offer-highlights promo">
    <h2>{{ $t('message.' + app.category.highlights.title) }}</h2>
    <div class="flex">
      <section
        class="flex"
        v-for="(item, index) in app.category.highlights.data"
        v-bind:key="index"
      >
        <i :class="'pi color-brand ' + item.icon"></i>
        <div class="flex flex-col flex-grow-1">
          <p>{{ $t('message.' + item.title) }}</p>
          <span>{{ $t('message.' + item.message) }}</span>
        </div>
      </section>
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
