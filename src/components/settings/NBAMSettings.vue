<template>
  <div class="layout-inline-grid-double">
    <div class="layout-labels-left secondary-card">
      <div class="field-item">
        <label for="NBAM-Host">Host</label>
        <input id="NBAM-Host" type="text" v-model="settings.pega_marketing.Host">
      </div>
      <div class="field-item">
        <label for="NBAM-Port">Port</label>
        <input id="NBAM-Port" type="text" v-model="settings.pega_marketing.Port">
      </div>
    </div>
  </div>
</template>

<script>
import { mainconfig } from "../../global";

export default {
  data: function() {
    return mainconfig;
  }
};
</script>