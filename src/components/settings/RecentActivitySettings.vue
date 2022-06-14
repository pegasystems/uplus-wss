<template>
  <div class="container-transparent">
    <h2>Recent component</h2>
    <p>
      Configuration of the mashup displayed as the Recent Activity inside the
      account page.
    </p>
    <div class="container">
      <div class="body">
        <div
          class="layout-labels-top layout-inline-grid-double"
          v-if="settings.general.connection.type === 'dxv1'"
        >
          <div class="field-item field-checkbox">
            <input
              id="recentactivity-showattachments"
              type="checkbox"
              v-model="settings.recentactivity.showattachments"
            />
            <label class="width-auto" for="recentactivity-showattachments"
              >Show attachments</label
            >
          </div>
        </div>
        <div class="layout-labels-top layout-inline-grid-double">
          <div class="field-item">
            <label for="recentactivity-action">Action</label>
            <select
              id="recentactivity-action"
              v-model="settings.recentactivity.action"
            >
              <option>createNewWork</option>
              <option>display</option>
              <option v-if="settings.general.connection.type === 'mashup'">
                getNextWork
              </option>
              <option>openAssignment</option>
              <option v-if="settings.general.connection.type === 'mashup'">
                openWorkItem
              </option>
              <option>openWorkByHandle</option>
            </select>
          </div>
          <div class="field-item">
            <label
              for="recentactivity-actionparam"
              v-if="settings.recentactivity.action !== 'createNewWork'"
              >Action parameter</label
            >
            <input
              id="recentactivity-actionparam"
              type="text"
              v-model="settings.recentactivity.actionparam"
              v-if="settings.recentactivity.action !== 'createNewWork'"
            />
          </div>
          <div class="field-item">
            <label for="recentactivity-url">URL</label>
            <input
              id="recentactivity-url"
              type="text"
              v-model="settings.recentactivity.url"
            />
          </div>
          <div class="field-item">
            <label for="recentactivity-objclass">Classname</label>
            <input
              id="recentactivity-objclass"
              type="text"
              v-model="settings.recentactivity.objclass"
            />
          </div>
          <div
            class="field-item"
            v-if="settings.general.connection.type === 'mashup'"
          >
            <label for="recentactivity-startcase">Start case</label>
            <input
              id="recentactivity-startcase"
              type="text"
              v-model="settings.recentactivity.startcase"
            />
          </div>
          <div class="field-item">
            <label for="recentactivity-application">Application name</label>
            <input
              id="recentactivity-application"
              type="text"
              v-model="settings.recentactivity.application"
            />
          </div>
          <div
            class="field-item"
            v-if="settings.general.connection.type === 'mashup'"
          >
            <label for="recentactivity-channelid">Channel ID</label>
            <input
              id="recentactivity-channelid"
              type="text"
              v-model="settings.recentactivity.channelid"
            />
          </div>
          <div
            class="field-item"
            v-if="settings.general.connection.type === 'mashup'"
          >
            <label for="recentactivity-tenantid">Tenant ID</label>
            <input
              id="recentactivity-tenantid"
              type="text"
              v-model="settings.recentactivity.tenantid"
            />
          </div>
          <div
            class="field-item field-checkbox"
            v-if="settings.general.connection.type === 'mashup'"
          >
            <input
              id="recentactivity-dataretained"
              type="checkbox"
              v-model="settings.recentactivity.dataretained"
            />
            <label class="width-auto" for="recentactivity-dataretained"
              >Retain state on reload</label
            >
          </div>
        </div>
        <div class="layout-labels-top">
          <div class="field-item">
            <label for="todo-extraparam"
              >Extra parameters (for example 'key1=value1,key2=value2')</label
            >
            <textarea
              id="recentactivity-extraparam"
              v-model="settings.recentactivity.extraparam"
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
};
</script>
