<template>
  <div class="flex flex-col offer-details">
    <div
      class="flex flex-nowrap"
      v-for="(item, index) in app.category.details"
      v-bind:key="index"
    >
      <div class="details">
        <div
          class="image"
          v-bind:style="{
            backgroundImage: 'url(./img/' + item.image + ')',
            order: '' + (index % 2),
          }"
        ></div>
      </div>
      <div class="details">
        <h3>{{ $t('message.' + item.title) }}</h3>
        <span class="background-brand line"></span>
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
