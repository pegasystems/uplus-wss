<template>
  <footer :class="isMobilePhone ? 'background-brand':''">
    <div class="wrap flex">
      <nav>
        <div class="flex">
          <a>{{ $t('message.aboutus') }}</a>
          <a v-if="!isMobilePhone">{{ $t('message.reviews') }}</a>
          <a v-if="!isMobilePhone">{{ $t('message.privacy') }}</a>
          <a href="./settings.html">{{ $t('message.settings') }}</a>
        </div>
      </nav>
      <LangSwitch v-if="settings.i18n.showLangSwitch" />
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
