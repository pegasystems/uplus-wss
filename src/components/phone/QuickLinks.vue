<template>
  <main class="flex flex-col">
    <TopNav previousPage="home"/>
    <div class="flex flex-col primary-card">
      <h1>{{ $t('message.phone_quick_links_title')}}</h1>
      <nav>
        <ul class="quick-links">
          <li v-for="(item,index) in settings.quicklinks" :key="index">
            <a
              v-on:click="selectLink(index)"
              href="#"
            >{{ settings.quicklinks[index].title[currentLocale] }}</a>
          </li>
        </ul>
      </nav>
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
    selectLink: function(index) {
      this.quickLinkId = index;
    }
  }
};
</script>