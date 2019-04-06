<template>
  <section class="secondary-card container">
    <h3>{{ $t("message.quicklinks") }}</h3>
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
  </section>
</template>

<script>
import { mainconfig } from "../../global";

export default {
  name: "",
  data: function() {
    return mainconfig;
  },
  methods: {
    selectLink: function(index) {
      this.quickLinkId = index;
    }
  }
};
</script>
