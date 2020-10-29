<template>
  <section v-if="hasQuicklinks()" class="secondary-card container">
    <h3>{{ $t('message.quicklinks') }}</h3>
    <nav>
      <ul class="quick-links">
        <li v-for="(item, index) in settings.quicklinks" :key="index">
          <a v-if="item.hide !== true" v-on:click="selectLink(index)">{{
            settings.quicklinks[index].title[currentLocale]
          }}</a>
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    hasQuicklinks() {
      for (const i in this.settings.quicklinks) {
        if (this.settings.quicklinks[i].hide !== true) return true;
      }
      return false;
    },
  },
};
</script>
