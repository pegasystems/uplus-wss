<template>
  <button
    v-on:click="downloadFile"
    class="file-download"
    title="Download configuration"
  >
    <i class="pi pi-document-download-solid" />Download config file
  </button>
</template>

<script>
import { mainconfig } from '../../global';

export default {
  data() {
    return mainconfig;
  },
  methods: {
    downloadFile() {
      const data = JSON.stringify(mainconfig.settings);
      const filename = 'config-text.json';
      const blob = new Blob([data], { type: 'text/plain;charset=utf-8;' });
      if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
      } else {
        const elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
      }
    },
  },
};
</script>
