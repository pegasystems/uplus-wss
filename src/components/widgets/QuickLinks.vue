<template>
  <section class="secondary-card container">
    <h3>{{ $t("message.quicklinks") }}</h3>
    <nav>
      <ul class="quick-links">
        <li v-for="(item,index) in settings.quicklinks" :key="index">
          <a
            v-if="item.hide !== true"
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
      this.previousPage = this.settings.quicklinks[index].objclass;
      if (window.history) {
        window.history.pushState(
          { userId: mainconfig.userId, quickLinkId: mainconfig.quickLinkId },
          '',
          `quicklink${index}`,
        );
      }
    },
  },
};
</script>
