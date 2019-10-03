<template>
  <main class="flex flex-col">
    <TopNav previousPhonePage />
    <div class="flex flex-col primary-card">
      <i class="top-icon pi pi-document-data color-brand"></i>
      <h1 class="small">{{ $t('message.phone_quick_links_title')}}</h1>
      <nav>
        <ul class="quick-links">
          <button
            v-on:click="selectLink(index)"
            class="simple"
            v-for="(item,index) in settings.quicklinks"
            :key="index"
          >
            <i :class="'pi background-brand ' + (item.icon==''? 'pi-document-data': item.icon)"></i>
            {{ settings.quicklinks[index].title[currentLocale] }}
          </button>
        </ul>
      </nav>
    </div>
  </main>
</template>

<script>
import { mainconfig } from '../../global';
import TopNav from './TopNav.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    TopNav,
  },
  methods: {
    selectLink(index) {
      this.quickLinkId = index;
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
