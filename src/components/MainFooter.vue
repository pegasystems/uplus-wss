<template>
  <footer>
    <div class="wrap flex">
      <nav>
        <ul class="flex">
          <a href="#">{{ $t('message.aboutus') }}</a>
          <a href="#">{{ $t('message.reviews') }}</a>
          <a href="#">{{ $t('message.privacy') }}</a>
          <a href="./settings.html">{{ $t('message.settings') }}</a>
        </ul>
      </nav>
      <LangSwitch v-if="settings.i18n.showLangSwitch"/>
      <p class="flex-align-r copyright">{{ $t('message.copyright') }}</p>
    </div>
  </footer>
</template>

<script>
import { mainconfig } from "../global";
import LangSwitch from "./widgets/LangSwitch.vue";
export default {
  data: function() {
    return mainconfig;
  },
  components: {
    LangSwitch
  }
};
</script>

