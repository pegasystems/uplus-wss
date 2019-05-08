<template>
  <footer :class="isMobilePhone ? 'background-brand':''">
    <div class="wrap flex">
      <nav>
        <ul class="flex">
          <a href="#">{{ $t('message.aboutus') }}</a>
          <a href="#" v-if="!isMobilePhone">{{ $t('message.reviews') }}</a>
          <a href="#" v-if="!isMobilePhone">{{ $t('message.privacy') }}</a>
          <a href="./settings.html">{{ $t('message.settings') }}</a>
        </ul>
      </nav>
      <LangSwitch v-if="settings.i18n.showLangSwitch"/>
      <p class="flex-align-r copyright">{{ $t('message.copyright') }}</p>
    </div>
  </footer>
</template>

<script>
import { mainconfig } from '../global';
import LangSwitch from './widgets/LangSwitch.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    LangSwitch,
  },
};
</script>
