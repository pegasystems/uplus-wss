<template>
  <main class="home flex flex-col">
    <h1 class="background-brand">{{ $t('message.' + app.phone.home_page.title)}}</h1>
    <div class="main-actions primary-card">
      <button
        v-on:click="showPage(item.page)"
        class="simple"
        v-for="(item,index) in app.phone.home_page.actions"
        v-bind:key="index"
      >
        <i :class="'pi color-brand ' + item.icon"></i>
        {{ $t('message.' + item.title)}}
      </button>
    </div>
    <div class="flex home-promo primary-card">
      <div
        class="image"
        v-bind:style="{ backgroundImage: 'url(./img/' + app.phone.home_page.promo.image + ')' }"
      ></div>
      <div class="details">
        <p>{{ $t('message.phone_home_page_promo_message')}}</p>
        <a>{{ $t('message.phone_home_page_promo_action')}}</a>
      </div>
    </div>
  </main>
</template>

<script>
import { mainconfig } from "../../global";
export default {
  data: function() {
    return mainconfig;
  },
  methods: {
    showPage: function(page) {
      mainconfig.phonePageName = page;
    }
  }
};
</script>