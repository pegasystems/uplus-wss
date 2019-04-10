<template>
  <div class="layout-inline-grid-double">
    <div class="layout-labels-left secondary-card">
      <div v-for="titlel in settings.i18n.languages" v-bind:key="titlel" class="field-item">
        <label :for="'hero-action-' + titlel">Case name in '{{ titlel }}'</label>
        <input
          :id="'hero-action-' + titlel"
          type="text"
          v-model="settings.homeheroaction.title[titlel]"
        >
      </div>
      <div class="field-item">
        <label for="hero-action-url">URL</label>
        <input id="hero-action-url" type="text" v-model="settings.homeheroaction.url">
      </div>
      <div class="field-item">
        <label for="hero-action-objclass">Classname</label>
        <input id="hero-action-objclass" type="text" v-model="settings.homeheroaction.objclass">
      </div>
      <div class="field-item">
        <label for="hero-action-startcase">Start case</label>
        <input id="hero-action-startcase" type="text" v-model="settings.homeheroaction.startcase">
      </div>
      <div class="field-item">
        <label for="hero-action-application">Application name</label>
        <input
          id="hero-action-application"
          type="text"
          v-model="settings.homeheroaction.application"
        >
      </div>
      <div class="field-item">
        <label for="hero-action-pega_userid">Pega userid</label>
        <input
          id="hero-action-pega_userid"
          type="text"
          v-model="settings.homeheroaction.pega_userid"
        >
      </div>
      <div class="field-item">
        <label for="hero-action-pega_pwd">Pega password</label>
        <input id="hero-action-pega_pwd" type="password" v-model="settings.homeheroaction.pega_pwd">
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