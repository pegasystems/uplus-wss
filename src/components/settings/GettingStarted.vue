<template>
  <div>
    <h2>Welcome to the U+ demo website</h2>
    <div class="container-transparent">
      <h3>Step 1</h3>
      <p>
        Start by downloading the settings config file template provided here:
      </p>
      <FileDownload />
    </div>
    <div class="container-transparent">
      <h3>Step 2</h3>
      <p>
        Update this file to include information from your Pega application
        including users, quick links, chat...
      </p>
    </div>
    <div class="container-transparent">
      <h3>Step 3</h3>
      <p>Upload your updated config file here:</p>
      <FileUpload />
    </div>
    <div class="container-transparent">
      <h3>Step 4</h3>
      <p>
        After uploading the file, the changes are automatically saved. You will
        be able to review your settings by navigating to each section on the
        panel to the left. Any changes made here can be saved and redownloaded.
        Click on the 'Reset to default' to reset back your configuration to the
        default config.
      </p>
    </div>
  </div>
</template>

<script>
import { mainconfig } from '../../global';
import FileUpload from '../widgets/FileUpload.vue';
import FileDownload from '../widgets/FileDownload.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    FileUpload,
    FileDownload,
  },
};
</script>
