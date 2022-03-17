<template>
  <header class="flex flex-mid-align settings">
    <a href="./index.html">
      <img class="logo" :src="'./img/u+-logo.svg'" alt="U+" />
    </a>
    <h1 v-if="!isMobilePhone">{{ $t('message.settings') }}</h1>
  </header>
</template>

<script>
import { mainconfig } from '../../global';

export default {
  data() {
    return mainconfig;
  },
};
</script>
