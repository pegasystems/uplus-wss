<template>
  <main class="flex flex-col">
    <TopNav previousPhonePage="home" />
    <AccountMainArea />
    <AccountSecondaryArea :key="reloadOffer" />
  </main>
</template>

<script>
import { mainconfig } from '../../global';
import TopNav from './TopNav.vue';
import AccountMainArea from '../accounts/AccountMainArea.vue';
import AccountSecondaryArea from './AccountSecondaryArea.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    TopNav,
    AccountMainArea,
    AccountSecondaryArea,
  },
};
</script>
