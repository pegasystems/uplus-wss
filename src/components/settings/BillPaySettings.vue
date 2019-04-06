<template>
  <div class="layout-inline-grid-double">
    <div class="layout-labels-left secondary-card">
      <div class="field-item">
        <label for="url">URL</label>
        <input id="url" type="text" v-model="settings.billpay.url">
      </div>
      <div class="field-item">
        <label for="objclass">Classname</label>
        <input id="objclass" type="text" v-model="settings.billpay.objclass">
      </div>
      <div class="field-item">
        <label for="startcase">Start case</label>
        <input id="startcase" type="text" v-model="settings.billpay.startcase">
      </div>
      <div class="field-item">
        <label for="application">Application name</label>
        <input id="application" type="text" v-model="settings.billpay.application">
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