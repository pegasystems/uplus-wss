<template>
  <span>
    <input
      type="file"
      @change="onFileChange"
      name="file"
      id="file"
      class="inputfile"
      title="Upload configuration"
    >
    <label for="file" title="Upload configuration">
      <i class="pi pi-document-upload-solid"/>
    </label>
  </span>
</template>

<script>
import { mainconfig } from '../../global';

export default {
  data() {
    return mainconfig;
  },
  methods: {
    onFileChange(e) {
      const input = e.target;
      const reader = new FileReader();
      reader.onload = function onloadFile() {
        const text = reader.result;
        try {
          mainconfig.settings = JSON.parse(text);
          localStorage.setItem(
            `config_${mainconfig.app.industry}`,
            JSON.stringify(mainconfig),
          );
          alert('The file was successfully uploaded.');
        } catch (ex) {
          alert(`Error when trying to parse the configuration file - ${e}`);
        }
      };
      reader.readAsText(input.files[0]);
    },
  },
};
</script>
