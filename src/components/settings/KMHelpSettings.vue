<template>
  <div class="container-transparent">
    <h2>Knowledge Management</h2>
    <p>
      Configuration of the mashup used for Knowledge Management and displayed when clicking on the "Help" link in the header.
      Enter an empty 'URL' to disable this functionality.
    </p>
    <div class="container">
      <div class="body">
        <div class="layout-labels-top layout-inline-grid-double">
          <div class="field-item">
            <label for="kmhelp-action">Action</label>
            <select id="kmhelp-action" v-model="settings.kmhelp.action">
              <option>createNewWork</option>
              <option>display</option>
              <option v-if="settings.general.connection.type==='mashup'">getNextWork</option>
              <option>openAssignment</option>
              <option v-if="settings.general.connection.type==='mashup'">openWorkItem</option>
              <option>openWorkByHandle</option>
            </select>
          </div>
          <div class="field-item">
            <label for="kmhelp-actionparam" v-if="settings.kmhelp.action!=='createNewWork'">Action parameter</label>
            <input id="kmhelp-actionparam" type="text" v-model="settings.kmhelp.actionparam" v-if="settings.kmhelp.action!=='createNewWork'"/>
          </div>
          <div class="field-item">
            <label for="kmhelp-url">URL</label>
            <input id="kmhelp-url" type="text" v-model="settings.kmhelp.url" />
          </div>
          <div class="field-item">
            <label for="kmhelp-objclass">Classname</label>
            <input id="kmhelp-objclass" type="text" v-model="settings.kmhelp.objclass" />
          </div>
          <div class="field-item" v-if="settings.general.connection.type==='mashup'">
            <label for="kmhelp-startcase">Start case</label>
            <input id="kmhelp-startcase" type="text" v-model="settings.kmhelp.startcase" />
          </div>
          <div class="field-item">
            <label for="kmhelp-application">Application name</label>
            <input id="kmhelp-application" type="text" v-model="settings.kmhelp.application" />
          </div>
          <div class="field-item">
            <label for="kmhelp-username">Username (for unauthenticated access)</label>
            <input id="kmhelp-username" type="text" v-model="settings.kmhelp.username" />
          </div>
          <div class="field-item">
            <label for="kmhelp-password">Password (for unauthenticated access)</label>
            <input id="kmhelp-password" type="text" v-model="settings.kmhelp.password" />
          </div>
          <div class="field-item" v-if="settings.general.connection.type==='mashup'">
            <label for="kmhelp-channelid">Channel ID</label>
            <input id="kmhelp-channelid" type="text" v-model="settings.kmhelp.channelid" />
          </div>
          <div class="field-item" v-if="settings.general.connection.type==='mashup'">
            <label for="kmhelp-tenantid">Tenant ID</label>
            <input id="kmhelp-tenantid" type="text" v-model="settings.kmhelp.tenantid" />
          </div>
          <div class="field-item field-checkbox" v-if="settings.general.connection.type==='mashup'">
            <input id="kmhelp-dataretained" type="checkbox" v-model="settings.kmhelp.dataretained" />
            <label class="width-auto" for="kmhelp-dataretained">Retain state on reload</label>
          </div>
        </div>
        <div class="layout-labels-top">
          <div class="field-item">
            <label for="kmhelp-extraparam">Extra parameters (for example 'key1=value1,key2=value2')</label>
            <textarea id="kmhelp-extraparam" v-model="settings.kmhelp.extraparam" />
          </div>
        </div>
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
