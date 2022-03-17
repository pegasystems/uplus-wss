<template>
  <button
    v-on:click="changeLanguage"
    :title="$t('message.change_language')"
    class="simple"
  >
    {{ $t('message.lang_' + currentLocale) }}
  </button>
</template>

<script>
import { mainconfig, i18n } from '../../global';

export default {
  data() {
    return { ...mainconfig, currentLocale: i18n.global.locale };
  },
  methods: {
    changeLanguage() {
      const numLang = this.settings.i18n.languages.length - 1;
      for (let i = 0; i <= numLang; i++) {
        if (i18n.global.locale === this.settings.i18n.languages[i]) {
          if (i === numLang) {
            this.currentLocale = this.settings.i18n.languages[0];
          } else {
            this.currentLocale = this.settings.i18n.languages[i + 1];
          }
          i18n.global.locale = this.currentLocale;
          mainconfig.currentLocale = this.currentLocale;
          break;
        }
      }
    },
  },
};
</script>
