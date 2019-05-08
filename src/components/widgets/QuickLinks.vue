<template>
  <section class="secondary-card container">
    <h3>{{ $t("message.quicklinks") }}</h3>
    <nav>
      <ul class="quick-links">
        <li v-for="(item,index) in settings.quicklinks" :key="index">
          <a
            href="#"
            v-on:click="selectLink(index)"
          >{{ settings.quicklinks[index].title[currentLocale] }}</a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
import { mainconfig } from '../../global';

export default {
  data() {
    return mainconfig;
  },
  methods: {
    selectLink(index) {
      this.quickLinkId = index;
    },
  },
};
</script>
