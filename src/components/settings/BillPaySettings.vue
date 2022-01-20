<template>
  <div class="container-transparent">
    <h2>Bill Pay component</h2>
    <p>Configuration of the mashup displayed when clicking on the 'Pay now' action inside the account page.</p>
    <div class="container">
      <div class="body">
        <div class="layout-labels-left">
          <div class="field-item">
            <input id="bill-pay-hidebillpay" type="checkbox" v-model="settings.billpay.hidebillpay" />
            <label class="width-auto" for="bill-pay-hidebillpay">Hide Bill Pay</label>
          </div>
        </div>
        <div class="layout-labels-top layout-inline-grid-double">
          <div class="field-item">
            <label for="bill-pay-action">Action</label>
            <select id="bill-pay-action" v-model="settings.billpay.action">
              <option>createNewWork</option>
              <option>display</option>
              <option v-if="settings.general.connection.type==='mashup'">getNextWork</option>
              <option>openAssignment</option>
              <option v-if="settings.general.connection.type==='mashup'">openWorkItem</option>
              <option>openWorkByHandle</option>
            </select>
          </div>
          <div class="field-item">
            <label for="bill-pay-actionparam"  v-if="settings.billpay.action!=='createNewWork'">Action parameter</label>
            <input id="bill-pay-actionparam" type="text" v-model="settings.billpay.actionparam"  v-if="settings.billpay.action!=='createNewWork'"/>
          </div>
          <div class="field-item">
            <label for="bill-pay-url">URL</label>
            <input id="bill-pay-url" type="text" v-model="settings.billpay.url" />
          </div>
          <div class="field-item">
            <label for="bill-pay-objclass">Classname</label>
            <input id="bill-pay-objclass" type="text" v-model="settings.billpay.objclass" />
          </div>
          <div class="field-item" v-if="settings.general.connection.type==='mashup'">
            <label for="bill-pay-startcase">Start case</label>
            <input id="bill-pay-startcase" type="text" v-model="settings.billpay.startcase" />
          </div>
          <div class="field-item">
            <label for="bill-pay-application">Application name</label>
            <input id="bill-pay-application" type="text" v-model="settings.billpay.application" />
          </div>
          <div class="field-item" v-if="settings.general.connection.type==='mashup'">
            <label for="bill-pay-channelid">Channel ID</label>
            <input id="bill-pay-channelid" type="text" v-model="settings.billpay.channelid" />
          </div>
          <div class="field-item" v-if="settings.general.connection.type==='mashup'">
            <label for="bill-pay-tenantid">Tenant ID</label>
            <input id="bill-pay-tenantid" type="text" v-model="settings.billpay.tenantid" />
          </div>
          <div class="field-item field-checkbox" v-if="settings.general.connection.type==='mashup'">
            <input id="bill-pay-dataretained" type="checkbox" v-model="settings.billpay.dataretained" />
            <label class="width-auto" for="bill-pay-dataretained">Retain state on reload</label>
          </div>
        </div>
        <div class="layout-labels-top">
          <div class="field-item">
            <label
              for="bill-pay-extraparam"
            >Extra parameters (for example 'key1=value1,key2=value2')</label>
            <textarea id="bill-pay-extraparam" v-model="settings.billpay.extraparam" />
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
