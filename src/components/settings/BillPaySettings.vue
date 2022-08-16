<template>
  <div class="container-transparent">
    <h2>Bill Pay component</h2>
    <p>
      Configuration of the mashup displayed when clicking on the 'Pay now'
      action inside the account page.
    </p>
    <div class="container">
      <div class="body">
        <div class="layout-labels-left">
          <div class="field-item">
            <input
              id="bill-pay-hidebillpay"
              type="checkbox"
              v-model="settings.billpay.hidebillpay"
            />
            <label class="width-auto" for="bill-pay-hidebillpay"
              >Hide Bill Pay</label
            >
          </div>
        </div>
        <div class="layout-labels-top layout-inline-grid-double">
          <div class="field-item">
            <label for="billpay-action">Action</label>
            <select
              id="billpay-action"
              v-model="settings.billpay.action"
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
              settings.billpay.action !== 'createNewWork' &&
              settings.billpay.action !== 'getNextWork'
            "
          >
            <label for="billpay-actionparam">Action parameter</label>
            <input
              id="billpay-actionparam"
              type="text"
              v-model="settings.billpay.actionparam"
              v-if="
                settings.general.connection.type.indexOf('dx') === -1 ||
                settings.billpay.action !== 'display'
              "
            />
            <select
              id="billpay-action"
              v-model="settings.billpay.actionparam"
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
              settings.billpay.action === 'createNewWork' ||
              (settings.general.connection.type.indexOf('dx') === -1 &&
                settings.billpay.action === 'display')
            "
          >
            <label for="billpay-objclass">Classname</label>
            <input
              id="billpay-objclass"
              type="text"
              v-model="settings.billpay.objclass"
            />
          </div>
          <div
            class="field-item"
            v-if="
              settings.general.connection.type.indexOf('dx') === 0 &&
              settings.billpay.action === 'display'
            "
          >
            <label for="billpay-heading">Heading</label>
            <input
              id="billpay-heading"
              type="text"
              v-model="settings.billpay.heading"
            />
          </div>
          <div
            class="field-item"
            v-if="
              settings.general.connection.type === 'mashup' &&
              settings.billpay.action === 'createNewWork'
            "
          >
            <label for="billpay-startcase">Start case</label>
            <input
              id="billpay-startcase"
              type="text"
              v-model="settings.billpay.startcase"
            />
          </div>
          <div class="field-item">
            <label for="billpay-url">URL</label>
            <input
              id="billpay-url"
              type="text"
              v-model="settings.billpay.url"
            />
          </div>
          <div class="field-item">
            <label for="billpay-application">Application name</label>
            <input
              id="billpay-application"
              type="text"
              v-model="settings.billpay.application"
            />
          </div>
          <div
            class="field-item"
            v-if="settings.general.connection.type === 'mashup'"
          >
            <label for="billpay-channelid">Channel ID</label>
            <input
              id="billpay-channelid"
              type="text"
              v-model="settings.billpay.channelid"
            />
          </div>
          <div
            class="field-item"
            v-if="settings.general.connection.type === 'mashup'"
          >
            <label for="billpay-tenantid">Tenant ID</label>
            <input
              id="billpay-tenantid"
              type="text"
              v-model="settings.billpay.tenantid"
            />
          </div>
          <div
            class="field-item field-checkbox"
            v-if="settings.general.connection.type === 'mashup'"
          >
            <input
              id="billpay-dataretained"
              type="checkbox"
              v-model="settings.billpay.dataretained"
            />
            <label class="width-auto" for="billpay-dataretained"
              >Retain state on reload</label
            >
          </div>
        </div>
        <div class="layout-labels-top">
          <div class="field-item">
            <label for="billpay-extraparam"
              >Extra parameters (for example 'key1=value1,key2=value2')</label
            >
            <textarea
              id="billpay-extraparam"
              v-model="settings.billpay.extraparam"
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
        this.settings.billpay.action !== 'display'
      ) {
        this.settings.billpay.actionparam = '';
      } else {
        this.settings.billpay.actionparam = 'workList';
      }
    },
  },
};
</script>
