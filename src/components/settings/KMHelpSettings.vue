<template>
  <div class="layout-inline-grid-double">
    <div class="layout-labels-left secondary-card">
      <div class="field-item">
        <label for="kmhelp-action">Action</label>
        <select id="kmhelp-action" v-model="settings.kmhelp.action">
          <option>createNewWork</option>
          <option>display</option>
          <option>getNextWork</option>
          <option>openAssignment</option>
          <option>openWorkItem</option>
          <option>openWorkByHandle</option>
          <option>createNewWork</option>
        </select>
      </div>
      <div class="field-item">
        <label for="kmhelp-actionparam">Action parameter</label>
        <input id="kmhelp-actionparam" type="text" v-model="settings.kmhelp.actionparam">
      </div>
      <div class="field-item">
        <label for="kmhelp-url">URL</label>
        <input id="kmhelp-url" type="text" v-model="settings.kmhelp.url">
      </div>
      <div class="field-item">
        <label for="kmhelp-objclass">Classname</label>
        <input id="kmhelp-objclass" type="text" v-model="settings.kmhelp.objclass">
      </div>
      <div class="field-item">
        <label for="kmhelp-startcase">Start case</label>
        <input id="kmhelp-startcase" type="text" v-model="settings.kmhelp.startcase">
      </div>
      <div class="field-item">
        <label for="kmhelp-application">Application name</label>
        <input id="kmhelp-application" type="text" v-model="settings.kmhelp.application">
      </div>
      <div class="field-item">
        <label for="kmhelp-application">Extra params (comma separated)</label>
        <input id="kmhelp-application" type="text" v-model="settings.kmhelp.extraparam">
      </div>
    </div>
  </div>
</template>

<script>
import { mainconfig } from '../../global';

export default {
  data() {
    return mainconfig;
  },
};
</script>
