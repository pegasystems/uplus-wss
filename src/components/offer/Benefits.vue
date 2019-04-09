<template>
  <div class="offer-benefits promo">
    <h4>{{ $t('message.' + app.offer.benefits.title)}}</h4>
    <div class="flex">
      <div v-for="(item,index) in app.offer.benefits.data" v-bind:key="index">
        <i :class="'pi ' + item.icon"></i>
        <span>{{ $t('message.' + item.message)}}</span>
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

