<template>
  <div class="height-100-pct">
    <TopNav
      style="display: none"
      :previousPhonePage="phonePageName === 'heroaction' ? '' : 'help'"
    />
    <main>
      <MashupMainArea />
    </main>
  </div>
</template>

<script>
import { mainconfig } from '../../global';
import TopNav from './TopNav.vue';
import MashupMainArea from '../MashupMainArea.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    TopNav,
    MashupMainArea,
  },
};
</script>
