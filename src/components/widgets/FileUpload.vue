<template>
  <div class="file-upload">
    <input
      type="file"
      @change="onFileChange"
      name="file"
      id="file"
      class="inputfile"
      title="Upload configuration"
    />
    <label for="file" title="Upload configuration">
      <i class="pi pi-document-upload-solid" />Upload config file
    </label>
  </div>
</template>

<script>
import { mainconfig, upgradeConfig } from '../../global';

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
          let response = { settings: JSON.parse(text) };
          response = upgradeConfig(response);
          mainconfig.settings = response.settings;
          localStorage.setItem(
            `config_${mainconfig.app.industry}`,
            JSON.stringify(response),
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
