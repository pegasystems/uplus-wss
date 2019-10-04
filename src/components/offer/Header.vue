<template>
  <header class="flex flex-col flex-mid-align">
    <a v-on:click="gotoHomePage" href="./index.html">
      <img class="logo" :src="('./img/u+-logo.svg')" alt="U+" />
    </a>
    <h1>{{ $t('message.' + app.offer.header.title)}}</h1>
    <p>{{ $t('message.' + app.offer.header.msg)}}</p>
  </header>
</template>

<script>
import { mainconfig } from '../../global';

export default {
  data() {
    return mainconfig;
  },
  methods: {
    gotoHomePage(event) {
      mainconfig.currentPage = 'index.html';
      window.history.replaceState(
        {},
        '',
        mainconfig.isAuthenticated ? 'account' : 'index.html',
      );
      event.preventDefault();
    },
  },
};
</script>
