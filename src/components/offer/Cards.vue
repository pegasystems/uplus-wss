<template>
  <div class="offer-cards promo">
    <h4>{{ $t('message.' + app.offer.cards.title)}}</h4>
    <div class="flex">
      <div
        class="flex flex-col primary-card"
        v-for="(item,index) in app.offer.cards.data"
        v-bind:key="index"
      >
        <h3>{{ $t('message.' + item.title)}}</h3>
        <p class="flex-grow-1">{{ $t('message.' + item.message)}}</p>
        <span class="highlight border-brand color-brand">{{ $t('message.' + item.highlight)}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mainconfig } from "../../global";

export default {
  data: function() {
    return mainconfig;
  }
};
</script>

