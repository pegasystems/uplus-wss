<template>
  <div class="container-transparent">
    <h2>Home Hero Action</h2>
    <p>Configuration of the mashup displayed when clicking on the "Learn more" button inside the Hero placement of the Home page</p>
    <div class="container">
      <div class="body">
        <div class="layout-labels-top layout-inline-grid-double">
          <div class="field-item">
            <label for="hero-action-action">Action</label>
            <select id="hero-action-action" v-model="settings.homeheroaction.action">
              <option>createNewWork</option>
              <option>display</option>
              <option v-if="settings.general.connection.type==='mashup'">getNextWork</option>
              <option>openAssignment</option>
              <option v-if="settings.general.connection.type==='mashup'">openWorkItem</option>
              <option>openWorkByHandle</option>
            </select>
          </div>
          <div class="field-item">
            <label for="hero-action-actionparam" v-if="settings.homeheroaction.action!=='createNewWork'">Action parameter</label>
            <input v-if="settings.homeheroaction.action!=='createNewWork'"
              id="hero-action-actionparam"
              type="text"
              v-model="settings.homeheroaction.actionparam"
            />
          </div>
          <div class="field-item">
            <label for="hero-action-url">URL</label>
            <input id="hero-action-url" type="text" v-model="settings.homeheroaction.url" />
          </div>
          <div class="field-item">
            <label for="hero-action-objclass">Classname</label>
            <input id="hero-action-objclass" type="text" v-model="settings.homeheroaction.objclass" />
          </div>
          <div class="field-item" v-if="settings.general.connection.type==='mashup'">
            <label for="hero-action-startcase">Start case</label>
            <input
              id="hero-action-startcase"
              type="text"
              v-model="settings.homeheroaction.startcase"
            />
          </div>
          <div class="field-item">
            <label for="hero-action-application">Application name</label>
            <input
              id="hero-action-application"
              type="text"
              v-model="settings.homeheroaction.application"
            />
          </div>
          <div class="field-item">
            <label for="hero-action-pega_userid">Pega userid</label>
            <input
              id="hero-action-pega_userid"
              type="text"
              v-model="settings.homeheroaction.pega_userid"
            />
          </div>
          <div class="field-item">
            <label for="hero-action-pega_pwd">Pega password</label>
            <input
              id="hero-action-pega_pwd"
              type="password"
              v-model="settings.homeheroaction.pega_pwd"
            />
          </div>
          <div class="field-item" v-if="settings.general.connection.type==='mashup'">
            <label for="hero-action-channelid">Channel ID</label>
            <input id="hero-action-channelid" type="text" v-model="settings.homeheroaction.channelid" />
          </div>
          <div class="field-item" v-if="settings.general.connection.type==='mashup'">
            <label for="hero-action-tenantid">Tenant ID</label>
            <input id="hero-action-tenantid" type="text" v-model="settings.homeheroaction.tenantid" />
          </div>
          <div class="field-item field-checkbox" v-if="settings.general.connection.type==='mashup'">
            <input id="hero-action-dataretained" type="checkbox" v-model="settings.homeheroaction.dataretained" />
            <label class="width-auto" for="hero-action-dataretained">Retain state on reload</label>
          </div>
        </div>
        <div class="layout-labels-top">
          <div class="field-item">
            <label
              for="hero-action-extraparam"
            >Extra parameters (for example 'key1=value1,key2=value2')</label>
            <textarea id="hero-action-extraparam" v-model="settings.homeheroaction.extraparam" />
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
