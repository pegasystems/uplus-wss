<template>
  <div class="layout-inline-grid-double">
    <div class="layout-labels-left secondary-card">
      <div class="field-item">
        <label for="url">URL</label>
        <input id="url" type="text" v-model="settings.homeheroaction.url">
      </div>
      <div class="field-item">
        <label for="objclass">Classname</label>
        <input id="objclass" type="text" v-model="settings.homeheroaction.objclass">
      </div>
      <div class="field-item">
        <label for="startcase">Start case</label>
        <input id="startcase" type="text" v-model="settings.homeheroaction.startcase">
      </div>
      <div class="field-item">
        <label for="application">Application name</label>
        <input id="application" type="text" v-model="settings.homeheroaction.application">
      </div>
      <div class="field-item">
        <label for="pega_userid">Pega userid</label>
        <input id="pega_userid" type="text" v-model="settings.homeheroaction.pega_userid">
      </div>
      <div class="field-item">
        <label for="pega_pwd">Pega password</label>
        <input id="pega_pwd" type="password" v-model="settings.homeheroaction.pega_pwd">
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