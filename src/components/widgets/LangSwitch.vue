<template>
  <button
    v-on:click="changeLanguage"
    :title="$t('message.change_language')"
    class="simple"
  >{{ $t("message.lang_" + currentLocale) }}</button>
</template>

<script>
import { mainconfig, i18n } from "../../global";
export default {
  data: function() {
    return Object.assign({}, mainconfig, {
      currentLocale: i18n.locale
    });
  },
  methods: {
    changeLanguage: function(event) {
      for (var i in settings.i18n.languages) {
        if (i18n.locale != settings.i18n.languages[i]) {
          this.currentLocale = settings.i18n.languages[i];
          i18n.locale = this.currentLocale;
          mainconfig.currentLocale = this.currentLocale;
          break;
        }
      }
    }
  }
};
</script>