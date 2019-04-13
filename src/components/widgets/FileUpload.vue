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
import { mainconfig, i18n } from "../../global";
export default {
  data: function() {
    return mainconfig;
  },
  methods: {
    onFileChange(e) {
      var input = event.target;
      var reader = new FileReader();
      reader.onload = function() {
        var text = reader.result;
        try {
          mainconfig.settings = JSON.parse(text);
          localStorage.setItem(
            "config_" + mainconfig.app.industry,
            JSON.stringify(mainconfig)
          );
          alert("The file was successfully uploaded.");
        } catch (e) {
          alert("Error when trying to parse the configuration file - " + e);
          console.error(e);
        }
      };
      reader.readAsText(input.files[0]);
    }
  }
};
</script>

