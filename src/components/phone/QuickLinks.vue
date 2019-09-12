<template>
  <main class="flex flex-col">
    <TopNav previousPhonePage="home" />
    <div class="flex flex-col primary-card">
      <i class="top-icon pi pi-document-data color-brand"></i>
      <h1 class="small">{{ $t('message.phone_quick_links_title')}}</h1>
      <nav>
        <ul class="quick-links">
          <li v-for="(item,index) in settings.quicklinks" :key="index">
            <i :class="'pi background-brand ' + (item.icon==''? 'pi-document-data': item.icon)"></i>
            <a v-on:click="selectLink(index)">{{ settings.quicklinks[index].title[currentLocale] }}</a>
          </li>
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
    },
  },
};
</script>
