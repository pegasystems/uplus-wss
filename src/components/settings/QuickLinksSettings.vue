<template>
  <div class="layout-inline-grid-double">
    <div
      class="layout-labels-left secondary-card"
      v-for="(item,index) in settings.quicklinks"
      v-bind:key="index"
    >
      <div v-for="titlel in settings.i18n.languages" v-bind:key="titlel" class="field-item">
        <label for="title">Case name in '{{ titlel }}'</label>
        <input id="title" type="text" v-model="item.title[titlel]">
      </div>
      <div class="field-item">
        <label for="url">URL</label>
        <input id="url" type="text" v-model="item.url">
      </div>
      <div class="field-item">
        <label for="objclass">Classname</label>
        <input id="objclass" type="text" v-model="item.objclass">
      </div>
      <div class="field-item">
        <label for="startcase">Start case</label>
        <input id="startcase" type="text" v-model="item.startcase">
      </div>
      <div class="field-item">
        <label for="application">Application name</label>
        <input id="application" type="text" v-model="item.application">
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