<template>
  <div class="layout-inline-grid-double">
    <div class="layout-labels-left secondary-card">
      <div v-for="titlel in settings.i18n.languages" v-bind:key="titlel" class="field-item">
        <label :for="'bill-pay-' + titlel">Case name in '{{ titlel }}'</label>
        <input :id="'bill-pay-' + titlel" type="text" v-model="settings.billpay.title[titlel]">
      </div>
      <div class="field-item">
        <label for="bill-pay-url">URL</label>
        <input id="bill-pay-url" type="text" v-model="settings.billpay.url">
      </div>
      <div class="field-item">
        <label for="bill-pay-objclass">Classname</label>
        <input id="bill-pay-objclass" type="text" v-model="settings.billpay.objclass">
      </div>
      <div class="field-item">
        <label for="bill-pay-startcase">Start case</label>
        <input id="bill-pay-startcase" type="text" v-model="settings.billpay.startcase">
      </div>
      <div class="field-item">
        <label for="bill-pay-application">Application name</label>
        <input id="bill-pay-application" type="text" v-model="settings.billpay.application">
      </div>
    </div>
  </div>
</template>

<script>
import { mainconfig } from "../../global";

export default {
  data: function() {
    return mainconfig;
  }
};
</script>