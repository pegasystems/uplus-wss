<template>
  <div class="container-transparent">
    <h2>Quick links</h2>
    <p>
      Configuration of each of the mashup cases that can be accessed through the
      quick links component.
    </p>
    <div v-for="(item, index) in settings.quicklinks" v-bind:key="index">
      <Container :title="'Mashup Case ' + (index + 1)" :expanded="index === 0">
        <div class="layout-labels-left layout-inline-grid-double">
          <div class="field-item">
            <input
              :id="'quicklinks-' + index + '-hideaccount'"
              type="checkbox"
              v-model="item.hide"
            />
            <label
              class="width-auto"
              :for="'quicklinks-' + index + '-hideaccount'"
              >Hide from account page</label
            >
          </div>
          <div
            class="field-item field-checkbox"
            v-if="settings.general.connection.type === 'mashup'"
          >
            <input
              :id="'quicklinks-' + index + '-dataretained'"
              type="checkbox"
              v-model="item.dataretained"
            />
            <label
              class="width-auto"
              :for="'quicklinks-' + index + '-dataretained'"
              >Retain state on reload</label
            >
          </div>
        </div>
        <div class="layout-inline-grid-double layout-labels-top">
          <div
            v-for="titlel in settings.i18n.languages"
            v-bind:key="titlel"
            class="field-item"
          >
            <label :for="'quicklinks-' + index + '-' + titlel"
              >Case name in '{{ titlel }}'</label
            >
            <input
              :id="'quicklinks-' + index + '-' + titlel"
              type="text"
              v-model="item.title[titlel]"
            />
          </div>
        </div>
        <div class="layout-inline-grid-double layout-labels-top">
          <div class="field-item">
            <label :for="'quicklinks-' + index + '-action'">Action</label>
            <select
              :id="'quicklinks-' + index + '-action'"
              v-model="item.action"
              @change="onActionChange(index)"
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
              item.action !== 'createNewWork' && item.action !== 'getNextWork'
            "
          >
            <label :for="'quicklinks-' + index + '-actionparam'"
              >Action parameter</label
            >
            <input
              :id="'quicklinks-' + index + '-actionparam'"
              type="text"
              v-model="item.actionparam"
              v-if="
                settings.general.connection.type.indexOf('dx') === -1 ||
                settings.todo.action !== 'display'
              "
            />
            <select
              :id="'quicklinks-' + index + '-actionparam'"
              v-model="item.actionparam"
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
              item.action === 'createNewWork' ||
              (settings.general.connection.type.indexOf('dx') === -1 &&
                item.action === 'display')
            "
          >
            <label :for="'quicklinks-' + index + '-objclass'">Classname</label>
            <input
              :id="'quicklinks-' + index + '-objclass'"
              type="text"
              v-model="item.objclass"
            />
          </div>
          <div
            class="field-item"
            v-if="
              settings.general.connection.type.indexOf('dx') === 0 &&
              item.action === 'display'
            "
          >
            <label :for="'quicklinks-' + index + '-heading'">Heading</label>
            <input
              :id="'quicklinks-' + index + '-heading'"
              type="text"
              v-model="item.heading"
            />
          </div>
          <div
            class="field-item"
            v-if="
              settings.general.connection.type === 'mashup' &&
              item.action === 'createNewWork'
            "
          >
            <label :for="'quicklinks-' + index + '-startcase'"
              >Start case</label
            >
            <input
              :id="'quicklinks-' + index + '-startcase'"
              type="text"
              v-model="item.startcase"
            />
          </div>
          <div class="field-item">
            <label :for="'quicklinks-' + index + '-url'">URL</label>
            <input
              :id="'quicklinks-' + index + '-url'"
              type="text"
              v-model="item.url"
            />
          </div>
          <div class="field-item">
            <label :for="'quicklinks-' + index + '-application'"
              >Application name</label
            >
            <input
              :id="'quicklinks-' + index + '-application'"
              type="text"
              v-model="item.application"
            />
          </div>
          <div
            class="field-item"
            v-if="settings.general.connection.type === 'mashup'"
          >
            <label :for="'quicklinks-' + index + '-channelid'"
              >Channel ID</label
            >
            <input
              :id="'quicklinks-' + index + '-channelid'"
              type="text"
              v-model="item.channelid"
            />
          </div>
          <div
            class="field-item"
            v-if="settings.general.connection.type === 'mashup'"
          >
            <label :for="'quicklinks-' + index + '-tenantid'">Tenant ID</label>
            <input
              :id="'quicklinks-' + index + '-tenantid'"
              type="text"
              v-model="item.tenantid"
            />
          </div>
          <div class="field-item">
            <label :for="'quicklinks-' + index + '-icon'"
              >Icon (for mobile)</label
            >
            <input
              :id="'quicklinks-' + index + '-icon'"
              type="text"
              v-model="item.icon"
            />
          </div>
          <div class="field-item">
            <label :for="'quicklinks-' + index + '-hideusers'"
              >Hide for below users (for example User1,User2)</label
            >
            <input
              :id="'quicklinks-' + index + '-hideusers'"
              type="text"
              v-model="item.hideusers"
            />
          </div>
        </div>
        <div class="layout-labels-top">
          <div class="field-item">
            <label :for="'quicklinks-' + index + '-extraparam'"
              >Extra parameters (for example 'key1=value1,key2=value2')</label
            >
            <textarea
              :id="'quicklinks-' + index + '-extraparam'"
              v-model="item.extraparam"
            />
          </div>
        </div>
      </Container>
    </div>
  </div>
</template>

<script>
import { mainconfig } from '../../global';
import Container from '../controls/Container.vue';

export default {
  data() {
    return mainconfig;
  },
  methods: {
    onActionChange(index) {
      if (
        this.settings.general.connection.type.indexOf('dx') === -1 ||
        this.settings.quicklinks[index].action !== 'display'
      ) {
        this.settings.quicklinks[index].actionparam = '';
      } else {
        this.settings.quicklinks[index].actionparam = 'workList';
      }
    },
  },
  components: {
    Container,
  },
};
</script>
