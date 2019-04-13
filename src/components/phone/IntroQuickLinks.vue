<template>
  <main class="flex flex-col intro-quicklinks">
    <TopNav previousPage="home">
      <button v-on:click="nextPage">{{ $t("message.phone_quick_links_intro_action")}}</button>
    </TopNav>
    <h1>{{ $t("message.phone_quick_links_intro_title")}}</h1>
    <p>{{ $t("message.phone_quick_links_intro_msg")}}</p>
    <div class="bottom-banner">
      <p>{{ $t("message.phone_quick_links_intro_banner_msg")}}</p>
      <a>
        <i class="pi pi-ambulance"/>
        {{ $t("message.phone_quick_links_intro_banner_action")}}
      </a>
    </div>
  </main>
</template>

<script>
import { mainconfig } from "../../global";
import TopNav from "./TopNav.vue";
export default {
  data: function() {
    return mainconfig;
  },
  components: {
    TopNav
  },
  methods: {
    nextPage: function(event) {
      mainconfig.phonePageName = "quicklinks1";
    }
  }
};
</script>