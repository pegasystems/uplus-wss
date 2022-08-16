<template>
  <div class="container-transparent">
    <h2>To Do component</h2>
    <p>
      Configuration of the mashup displayed as the To Do list inside the account
      page.
    </p>
    <div class="container">
      <div class="body">
        <div class="layout-labels-top layout-inline-grid-double">
          <div class="field-item field-checkbox">
            <input
              id="todo-hideaccount"
              type="checkbox"
              v-model="settings.todo.hideaccount"
            />
            <label class="width-auto" for="todo-hideaccount"
              >Hide account details</label
            >
          </div>
        </div>
        <div class="layout-labels-top layout-inline-grid-double">
          <div
            class="field-item field-checkbox"
            v-if="
              app.industry === 'health-pharma' ||
              app.industry === 'health-care' ||
              app.industry === 'health-payer'
            "
          >
            <input
              id="todo-hidekpi"
              type="checkbox"
              v-model="settings.todo.hideKPI"
            />
            <label class="width-auto" for="todo-hidekpi"
              >Hide KPI details</label
            >
          </div>
        </div>
        <div class="layout-labels-top layout-inline-grid-double">
          <div class="field-item">
            <label for="todo-action">Action</label>
            <select
              id="todo-action"
              v-model="settings.todo.action"
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
              settings.todo.action !== 'createNewWork' &&
              settings.todo.action !== 'getNextWork'
            "
          >
            <label for="todo-actionparam">Action parameter</label>
            <input
              id="todo-actionparam"
              type="text"
              v-model="settings.todo.actionparam"
              v-if="
                settings.general.connection.type.indexOf('dx') === -1 ||
                settings.todo.action !== 'display'
              "
            />
            <select id="todo-action" v-model="settings.todo.actionparam" v-else>
              <option value="workList" selected>Show the worklist</option>
              <option value="taskList">Show a tasklist</option>
              <option value="dataView">Display a data view</option>
            </select>
          </div>
          <div
            class="field-item"
            v-if="
              settings.todo.action === 'createNewWork' ||
              (settings.general.connection.type.indexOf('dx') === -1 &&
                settings.todo.action === 'display')
            "
          >
            <label for="todo-objclass">Classname</label>
            <input
              id="todo-objclass"
              type="text"
              v-model="settings.todo.objclass"
            />
          </div>
          <div
            class="field-item"
            v-if="
              settings.general.connection.type.indexOf('dx') === 0 &&
              settings.todo.action === 'display'
            "
          >
            <label for="todo-heading">Heading</label>
            <input
              id="todo-heading"
              type="text"
              v-model="settings.todo.heading"
            />
          </div>
          <div
            class="field-item"
            v-if="
              settings.general.connection.type === 'mashup' &&
              settings.todo.action === 'createNewWork'
            "
          >
            <label for="todo-startcase">Start case</label>
            <input
              id="todo-startcase"
              type="text"
              v-model="settings.todo.startcase"
            />
          </div>
          <div class="field-item">
            <label for="todo-url">URL</label>
            <input id="todo-url" type="text" v-model="settings.todo.url" />
          </div>
          <div class="field-item">
            <label for="todo-application">Application name</label>
            <input
              id="todo-application"
              type="text"
              v-model="settings.todo.application"
            />
          </div>
          <div
            class="field-item"
            v-if="settings.general.connection.type === 'mashup'"
          >
            <label for="todo-channelid">Channel ID</label>
            <input
              id="todo-channelid"
              type="text"
              v-model="settings.todo.channelid"
            />
          </div>
          <div
            class="field-item"
            v-if="settings.general.connection.type === 'mashup'"
          >
            <label for="todo-tenantid">Tenant ID</label>
            <input
              id="todo-tenantid"
              type="text"
              v-model="settings.todo.tenantid"
            />
          </div>
          <div
            class="field-item field-checkbox"
            v-if="settings.general.connection.type === 'mashup'"
          >
            <input
              id="todo-dataretained"
              type="checkbox"
              v-model="settings.todo.dataretained"
            />
            <label class="width-auto" for="todo-dataretained"
              >Retain state on reload</label
            >
          </div>
        </div>
        <div class="layout-labels-top">
          <div class="field-item">
            <label for="todo-extraparam"
              >Extra parameters (for example 'key1=value1,key2=value2')</label
            >
            <textarea id="todo-extraparam" v-model="settings.todo.extraparam" />
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
        this.settings.todo.action !== 'display'
      ) {
        this.settings.todo.actionparam = '';
      } else {
        this.settings.todo.actionparam = 'workList';
      }
    },
  },
};
</script>
