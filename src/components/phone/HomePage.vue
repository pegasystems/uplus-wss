<template>
  <main class="home flex flex-col">
    <div class="hero background-brand">
      <h1>{{ $t('message.' + app.phone.home_page.title) }}</h1>
    </div>
    <div class="main-actions primary-card">
      <button
        v-on:click="showPage(item.page)"
        class="simple"
        v-for="(item, index) in app.phone.home_page.actions"
        v-bind:key="index"
      >
        <i :class="'pi color-brand ' + item.icon"></i>
        {{ $t('message.' + item.title) }}
      </button>
    </div>
    <Offer />
    <MainFooter />
  </main>
</template>

<script>
import { mainconfig } from '../../global';
import Offer from './Offer.vue';
import MainFooter from '../MainFooter.vue';

export default {
  data() {
    return mainconfig;
  },
  methods: {
    showPage(page) {
      mainconfig.phonePageName = page;
      if (page === 'heroaction') {
        mainconfig.homeHeroAction = 1;
      }
      if (mainconfig.isAuthenticated) {
        window.history.pushState(
          { userId: mainconfig.userId },
          '',
          mainconfig.phonePageName === ''
            ? 'index.html'
            : mainconfig.phonePageName,
        );
      } else {
        window.history.pushState(
          {},
          '',
          mainconfig.phonePageName === ''
            ? 'index.html'
            : mainconfig.phonePageName,
        );
      }
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
    },
  },
  components: {
    Offer,
    MainFooter,
  },
};
</script>
