<template>
  <div class="container-transparent">
    <h2>Home Hero Action</h2>
    <p>
      Configuration of the mashup displayed when clicking on the "Learn more"
      button inside the Hero placement of the Home page
    </p>
    <div class="container">
      <div class="body">
        <div class="layout-labels-top layout-inline-grid-double">
          <div class="field-item">
            <label for="homeheroaction-action">Action</label>
            <select
              id="homeheroaction-action"
              v-model="settings.homeheroaction.action"
              @change="onActionChange"
            >
              <option>createNewWork</option>
              <option>display</option>
              <option
                v-if="settings.general.connection.type.indexOf('dx') === -1"
              >
                getNextWork
              </option>
              <option>openAssignment</option>
              <option v-if="settings.general.connection.type === 'mashup'">
                openWorkItem
              </option>
              <option>openWorkByHandle</option>
            </select>
          </div>
          <div
            class="field-item"
            v-if="
              settings.homeheroaction.action !== 'createNewWork' &&
              settings.homeheroaction.action !== 'getNextWork'
            "
          >
            <label for="homeheroaction-actionparam">Action parameter</label>
            <input
              id="homeheroaction-actionparam"
              type="text"
              v-model="settings.homeheroaction.actionparam"
              v-if="
                settings.general.connection.type.indexOf('dx') === -1 ||
                settings.homeheroaction.action !== 'display'
              "
            />
            <select
              id="homeheroaction-action"
              v-model="settings.homeheroaction.actionparam"
              v-else
            >
              <option value="workList" selected>Show the worklist</option>
              <option value="taskList">Show a tasklist</option>
              <option value="dataView">Display a data view</option>
            </select>
          </div>
          <div
            class="field-item"
            v-if="
              settings.homeheroaction.action === 'createNewWork' ||
              (settings.general.connection.type.indexOf('dx') === -1 &&
                settings.homeheroaction.action === 'display')
            "
          >
            <label for="homeheroaction-objclass">Classname</label>
            <input
              id="homeheroaction-objclass"
              type="text"
              v-model="settings.homeheroaction.objclass"
            />
          </div>
          <div
            class="field-item"
            v-if="
              settings.general.connection.type.indexOf('dx') === 0 &&
              settings.homeheroaction.action === 'display'
            "
          >
            <label for="homeheroaction-heading">Heading</label>
            <input
              id="homeheroaction-heading"
              type="text"
              v-model="settings.homeheroaction.heading"
            />
          </div>
          <div
            class="field-item"
            v-if="
              settings.general.connection.type === 'mashup' &&
              settings.homeheroaction.action === 'createNewWork'
            "
          >
            <label for="homeheroaction-startcase">Start case</label>
            <input
              id="homeheroaction-startcase"
              type="text"
              v-model="settings.homeheroaction.startcase"
            />
          </div>
          <div class="field-item">
            <label for="homeheroaction-url">URL</label>
            <input
              id="homeheroaction-url"
              type="text"
              v-model="settings.homeheroaction.url"
            />
          </div>
          <div class="field-item">
            <label for="homeheroaction-application">Application name</label>
            <input
              id="homeheroaction-application"
              type="text"
              v-model="settings.homeheroaction.application"
            />
          </div>
          <div class="field-item">
            <label for="homeheroaction-pega_userid">Pega userid</label>
            <input
              id="homeheroaction-pega_userid"
              type="text"
              v-model="settings.homeheroaction.pega_userid"
            />
          </div>
          <div class="field-item">
            <label for="homeheroaction-pega_pwd">Pega password</label>
            <input
              id="homeheroaction-pega_pwd"
              type="password"
              v-model="settings.homeheroaction.pega_pwd"
            />
          </div>
          <div
            class="field-item"
            v-if="settings.general.connection.type === 'mashup'"
          >
            <label for="homeheroaction-channelid">Channel ID</label>
            <input
              id="homeheroaction-channelid"
              type="text"
              v-model="settings.homeheroaction.channelid"
            />
          </div>
          <div
            class="field-item"
            v-if="settings.general.connection.type === 'mashup'"
          >
            <label for="homeheroaction-tenantid">Tenant ID</label>
            <input
              id="homeheroaction-tenantid"
              type="text"
              v-model="settings.homeheroaction.tenantid"
            />
          </div>
          <div
            class="field-item field-checkbox"
            v-if="settings.general.connection.type === 'mashup'"
          >
            <input
              id="homeheroaction-dataretained"
              type="checkbox"
              v-model="settings.homeheroaction.dataretained"
            />
            <label class="width-auto" for="homeheroaction-dataretained"
              >Retain state on reload</label
            >
          </div>
        </div>
        <div class="layout-labels-top">
          <div class="field-item">
            <label for="homeheroaction-extraparam"
              >Extra parameters (for example 'key1=value1,key2=value2')</label
            >
            <textarea
              id="homeheroaction-extraparam"
              v-model="settings.homeheroaction.extraparam"
            />
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
  methods: {
    onActionChange() {
      if (
        this.settings.general.connection.type.indexOf('dx') === -1 ||
        this.settings.homeheroaction.action !== 'display'
      ) {
        this.settings.homeheroaction.actionparam = '';
      } else {
        this.settings.homeheroaction.actionparam = 'workList';
      }
    },
  },
};
</script>
