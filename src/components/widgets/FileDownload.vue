<template>
  <button v-on:click="downloadFile" class="light margin-r-2x" title="Download configuration">
    <i class="pi pi-document-download-solid"/>
  </button>
</template>

<script>
import { mainconfig, i18n } from "../../global";
export default {
  data: function() {
    return mainconfig;
  },
  methods: {
    downloadFile() {
      var data = JSON.stringify(mainconfig.settings);
      var filename = "config-text.json";
      var blob = new Blob([data], { type: "text/plain;charset=utf-8;" });
      if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
      } else {
        var elem = window.document.createElement("a");
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
      }
    }
  }
};
</script>

