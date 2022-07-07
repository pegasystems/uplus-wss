<template>
  <div class="container-transparent">
    <h2>Activity component</h2>
    <p>
      Configuration of the mashup displayed as the Activity list inside the
      account page. If the url is not configured, a static set of events is
      displayed - to hide the activity feed, check the setting hide activity
      feed below.
    </p>
    <div class="container">
      <div class="body">
        <div class="layout-labels-top layout-inline-grid-double">
          <div class="field-item field-checkbox">
            <input
              id="todo-hideactivity"
              type="checkbox"
              v-model="settings.todo.hideactivity"
            />
            <label class="width-auto" for="todo-hideactivity"
              >Hide activity feed</label
            >
          </div>
        </div>
        <div class="layout-labels-top layout-inline-grid-double">
          <div class="field-item">
            <label for="activity-action">Action</label>
            <select id="activity-action" v-model="settings.activity.action">
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
              for="activity-actionparam"
              v-if="settings.activity.action !== 'createNewWork'"
              >Action parameter</label
            >
            <input
              id="activity-actionparam"
              type="text"
              v-model="settings.activity.actionparam"
              v-if="settings.activity.action !== 'createNewWork'"
            />
          </div>
          <div class="field-item">
            <label for="activity-url">URL</label>
            <input
              id="activity-url"
              type="text"
              v-model="settings.activity.url"
            />
          </div>
          <div class="field-item">
            <label for="activity-objclass">Classname</label>
            <input
              id="activity-objclass"
              type="text"
              v-model="settings.activity.objclass"
            />
          </div>
          <div
            class="field-item"
            v-if="settings.general.connection.type === 'mashup'"
          >
            <label for="activity-startcase">Start case</label>
            <input
              id="activity-startcase"
              type="text"
              v-model="settings.activity.startcase"
            />
          </div>
          <div class="field-item">
            <label for="activity-application">Application name</label>
            <input
              id="activity-application"
              type="text"
              v-model="settings.activity.application"
            />
          </div>
          <div
            class="field-item"
            v-if="settings.general.connection.type === 'mashup'"
          >
            <label for="activity-channelid">Channel ID</label>
            <input
              id="activity-channelid"
              type="text"
              v-model="settings.activity.channelid"
            />
          </div>
          <div
            class="field-item"
            v-if="settings.general.connection.type === 'mashup'"
          >
            <label for="activity-tenantid">Tenant ID</label>
            <input
              id="activity-tenantid"
              type="text"
              v-model="settings.activity.tenantid"
            />
          </div>
          <div
            class="field-item field-checkbox"
            v-if="settings.general.connection.type === 'mashup'"
          >
            <input
              id="activity-dataretained"
              type="checkbox"
              v-model="settings.activity.dataretained"
            />
            <label class="width-auto" for="activity-dataretained"
              >Retain state on reload</label
            >
          </div>
        </div>
        <div class="layout-labels-top">
          <div class="field-item">
            <label for="activity-extraparam"
              >Extra parameters (for example 'key1=value1,key2=value2')</label
            >
            <textarea
              id="activity-extraparam"
              v-model="settings.activity.extraparam"
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
