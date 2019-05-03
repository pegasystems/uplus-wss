<template>
  <div class="layout-inline-grid-double">
    <div
      class="layout-labels-left secondary-card"
      v-for="(item,index) in settings.quicklinks"
      v-bind:key="index"
    >
      <div v-for="titlel in settings.i18n.languages" v-bind:key="titlel" class="field-item">
        <label :for="'quicklinks-' + index + '-' + titlel">Case name in '{{ titlel }}'</label>
        <input :id="'quicklinks-' + index + '-' + titlel" type="text" v-model="item.title[titlel]">
      </div>
      <div class="field-item">
        <label :for="'quicklinks-' + index + '-action'">Action</label>
        <select :id="'quicklinks-' + index + '-action'" v-model="item.action">
          <option>createNewWork</option>
          <option>display</option>
          <option>getNextWork</option>
          <option>openAssignment</option>
          <option>openWorkItem</option>
          <option>openWorkByHandle</option>
          <option>createNewWork</option>
        </select>
      </div>
      <div class="field-item">
        <label :for="'quicklinks-' + index + '-actionparam'">Action parameter</label>
        <input :id="'quicklinks-' + index + '-actionparam'" type="text" v-model="item.actionparam">
      </div>
      <div class="field-item">
        <label :for="'quicklinks-' + index + '-url'">URL</label>
        <input :id="'quicklinks-' + index + '-url'" type="text" v-model="item.url">
      </div>
      <div class="field-item">
        <label :for="'quicklinks-' + index + '-objclass'">Classname</label>
        <input :id="'quicklinks-' + index + '-objclass'" type="text" v-model="item.objclass">
      </div>
      <div class="field-item">
        <label :for="'quicklinks-' + index + '-startcase'">Start case</label>
        <input :id="'quicklinks-' + index + '-startcase'" type="text" v-model="item.startcase">
      </div>
      <div class="field-item">
        <label :for="'quicklinks-' + index + '-application'">Application name</label>
        <input :id="'quicklinks-' + index + '-application'" type="text" v-model="item.application">
      </div>
      <div class="field-item">
        <label :for="'quicklinks-' + index + '-icon'">Icon</label>
        <input :id="'quicklinks-' + index + '-icon'" type="text" v-model="item.icon">
      </div>
      <div class="field-item">
        <label :for="'quicklinks-' + index + '-extraparam'">Extra params (comma separated)</label>
        <input :id="'quicklinks-' + index + '-extraparam'" type="text" v-model="item.extraparam">
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
