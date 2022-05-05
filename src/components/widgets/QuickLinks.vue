<template>
  <section v-if="hasQuicklinks()" class="secondary-card container">
    <h3>{{ $t('message.quicklinks') }}</h3>
    <nav>
      <ul class="quick-links">
        <li v-for="(item, index) in settings.quicklinks" :key="index">
          <a
            v-if="item.hide !== true && showQuickLink(index)"
            v-on:click="selectLink(index)"
            >{{ settings.quicklinks[index].title[currentLocale] }}</a
          >
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
import { mainconfig } from '../../global';
import { sendClickStreamEvent } from '../../CDHIntegration';

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
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 0);
      }
      if (this.$gtag) {
        this.$gtag.pageview({ page_path: `quicklink${index}` });
      }
      sendClickStreamEvent(
        mainconfig,
        'PageView',
        `quicklink${index}`,
        window.loadPage,
      );
      window.loadPage = new Date();
    },
    hasQuicklinks() {
      for (const i in this.settings.quicklinks) {
        if (this.settings.quicklinks[i].hide !== true) return true;
      }
      return false;
    },
    showQuickLink(index) {
      return this.settings.quicklinks[index].hideusers
        ? !this.settings.quicklinks[index].hideusers
            .split(',')
            .includes(this.settings.users[mainconfig.userId].username)
        : true;
    },
  },
};
</script>
