<template>
  <div class="container-transparent">
    <h2>Banner component</h2>
    <p>Configuration of the banner component inside the account page.</p>
    <div class="container">
      <div class="body">
        <div class="layout-labels-left layout-inline-grid-double">
          <div class="field-item">
            <input
              id="banner-hidebanner"
              type="checkbox"
              v-model="settings.banner.hidebanner"
            />
            <label for="banner-hidebanner">Hide banner</label>
          </div>
          <div class="field-item">
            <input
              id="banner-hidebanner-button"
              type="checkbox"
              v-model="settings.banner.hidebanner_button"
            />
            <label for="banner-hidebanner-button">Hide banner button</label>
          </div>
          <div class="field-item">
            <input
              id="banner-background-color"
              type="color"
              v-model="settings.banner.color"
            />
            <label for="banner-background-color">Background color</label>
          </div>
        </div>
        <div class="layout-labels-top layout-inline-grid-double">
          <div class="field-item">
            <label for="banner-action">Action</label>
            <select
              id="banner-action"
              v-model="settings.banner.action"
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
              settings.banner.action !== 'createNewWork' &&
              settings.banner.action !== 'getNextWork'
            "
          >
            <label for="banner-actionparam">Action parameter</label>
            <input
              id="banner-actionparam"
              type="text"
              v-model="settings.banner.actionparam"
              v-if="
                settings.general.connection.type.indexOf('dx') === -1 ||
                settings.banner.action !== 'display'
              "
            />
            <select
              id="banner-action"
              v-model="settings.banner.actionparam"
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
              settings.banner.action === 'createNewWork' ||
              (settings.general.connection.type.indexOf('dx') === -1 &&
                settings.banner.action === 'display')
            "
          >
            <label for="banner-objclass">Classname</label>
            <input
              id="banner-objclass"
              type="text"
              v-model="settings.banner.objclass"
            />
          </div>
          <div
            class="field-item"
            v-if="
              settings.general.connection.type.indexOf('dx') === 0 &&
              settings.banner.action === 'display'
            "
          >
            <label for="banner-heading">Heading</label>
            <input
              id="banner-heading"
              type="text"
              v-model="settings.banner.heading"
            />
          </div>
          <div
            class="field-item"
            v-if="
              settings.general.connection.type === 'mashup' &&
              settings.banner.action === 'createNewWork'
            "
          >
            <label for="banner-startcase">Start case</label>
            <input
              id="banner-startcase"
              type="text"
              v-model="settings.banner.startcase"
            />
          </div>
          <div class="field-item">
            <label for="banner-url">URL</label>
            <input id="banner-url" type="text" v-model="settings.banner.url" />
          </div>
          <div class="field-item">
            <label for="banner-application">Application name</label>
            <input
              id="banner-application"
              type="text"
              v-model="settings.banner.application"
            />
          </div>
          <div
            class="field-item"
            v-if="settings.general.connection.type === 'mashup'"
          >
            <label for="banner-channelid">Channel ID</label>
            <input
              id="banner-channelid"
              type="text"
              v-model="settings.banner.channelid"
            />
          </div>
          <div
            class="field-item"
            v-if="settings.general.connection.type === 'mashup'"
          >
            <label for="banner-tenantid">Tenant ID</label>
            <input
              id="banner-tenantid"
              type="text"
              v-model="settings.banner.tenantid"
            />
          </div>
          <div
            class="field-item field-checkbox"
            v-if="settings.general.connection.type === 'mashup'"
          >
            <input
              id="banner-dataretained"
              type="checkbox"
              v-model="settings.banner.dataretained"
            />
            <label class="width-auto" for="banner-dataretained"
              >Retain state on reload</label
            >
          </div>
        </div>
        <div class="layout-labels-top">
          <div class="field-item">
            <label for="banner-extraparam"
              >Extra parameters (for example 'key1=value1,key2=value2')</label
            >
            <textarea
              id="banner-extraparam"
              v-model="settings.banner.extraparam"
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
        this.settings.banner.action !== 'display'
      ) {
        this.settings.banner.actionparam = '';
      } else {
        this.settings.banner.actionparam = 'workList';
      }
    },
  },
};
</script>
