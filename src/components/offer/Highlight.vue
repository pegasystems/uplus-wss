<template>
  <div class="offer-intro">
    <h1>{{ $t('message.' + app.offer.header.title)}}</h1>
    <ul>
      <li v-for="(item,index) in app.offer.header.promotions" v-bind:key="index">
        <i :class="'pi color-brand ' + item.icon"></i>
        {{ $t('message.' + item.message)}}
      </li>
    </ul>
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

