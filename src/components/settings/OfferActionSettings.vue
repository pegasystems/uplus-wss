<template>
  <div class="container-transparent">
    <h2>Offer Action</h2>
    <p>
      Configuration of the mashup displayed when clicking on the "Apply now"
      button inside the main offer of the offer page (offer.html)
    </p>
    <div class="container">
      <div class="body">
        <div class="layout-labels-top layout-inline-grid-double">
          <div class="field-item">
            <label for="offeraction-action">Action</label>
            <select
              id="offeraction-action"
              v-model="settings.offeraction.action"
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
              settings.offeraction.action !== 'createNewWork' &&
              settings.offeraction.action !== 'getNextWork'
            "
          >
            <label for="offeraction-actionparam">Action parameter</label>
            <input
              id="offeraction-actionparam"
              type="text"
              v-model="settings.offeraction.actionparam"
              v-if="
                settings.general.connection.type.indexOf('dx') === -1 ||
                settings.offeraction.action !== 'display'
              "
            />
            <select
              id="offeraction-action"
              v-model="settings.offeraction.actionparam"
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
              settings.offeraction.action === 'createNewWork' ||
              (settings.general.connection.type.indexOf('dx') === -1 &&
                settings.offeraction.action === 'display')
            "
          >
            <label for="offeraction-objclass">Classname</label>
            <input
              id="offeraction-objclass"
              type="text"
              v-model="settings.offeraction.objclass"
            />
          </div>
          <div
            class="field-item"
            v-if="
              settings.general.connection.type.indexOf('dx') === 0 &&
              settings.offeraction.action === 'display'
            "
          >
            <label for="offeraction-heading">Heading</label>
            <input
              id="offeraction-heading"
              type="text"
              v-model="settings.offeraction.heading"
            />
          </div>
          <div
            class="field-item"
            v-if="
              settings.general.connection.type === 'mashup' &&
              settings.offeraction.action === 'createNewWork'
            "
          >
            <label for="offeraction-startcase">Start case</label>
            <input
              id="offeraction-startcase"
              type="text"
              v-model="settings.offeraction.startcase"
            />
          </div>
          <div class="field-item">
            <label for="offeraction-url">URL</label>
            <input
              id="offeraction-url"
              type="text"
              v-model="settings.offeraction.url"
            />
          </div>
          <div class="field-item">
            <label for="offeraction-application">Application name</label>
            <input
              id="offeraction-application"
              type="text"
              v-model="settings.offeraction.application"
            />
          </div>
          <div class="field-item">
            <label for="offeraction-username"
              >Username (for unauthenticated access)</label
            >
            <input
              id="offeraction-username"
              type="text"
              v-model="settings.offeraction.username"
            />
          </div>
          <div class="field-item">
            <label for="offeraction-password"
              >Password (for unauthenticated access)</label
            >
            <input
              id="offeraction-password"
              type="text"
              v-model="settings.offeraction.password"
            />
          </div>
          <div
            class="field-item"
            v-if="settings.general.connection.type === 'mashup'"
          >
            <label for="offeraction-channelid">Channel ID</label>
            <input
              id="offeraction-channelid"
              type="text"
              v-model="settings.offeraction.channelid"
            />
          </div>
          <div
            class="field-item"
            v-if="settings.general.connection.type === 'mashup'"
          >
            <label for="offeraction-tenantid">Tenant ID</label>
            <input
              id="offeraction-tenantid"
              type="text"
              v-model="settings.offeraction.tenantid"
            />
          </div>
          <div
            class="field-item field-checkbox"
            v-if="settings.general.connection.type === 'mashup'"
          >
            <input
              id="offeraction-dataretained"
              type="checkbox"
              v-model="settings.offeraction.dataretained"
            />
            <label class="width-auto" for="offeraction-dataretained"
              >Retain state on reload</label
            >
          </div>
        </div>
        <div class="layout-labels-top">
          <div class="field-item">
            <label for="offeraction-extraparam"
              >Extra parameters (for example 'key1=value1,key2=value2')</label
            >
            <textarea
              id="offeraction-extraparam"
              v-model="settings.offeraction.extraparam"
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
        this.settings.offeraction.action !== 'display'
      ) {
        this.settings.offeraction.actionparam = '';
      } else {
        this.settings.offeraction.actionparam = 'workList';
      }
    },
  },
};
</script>
