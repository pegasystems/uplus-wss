<template>
  <div class="container-transparent">
    <h2>Banner component</h2>
    <p>Configuration of the Banner component inside the account page.</p>
    <div class="container">
      <div class="body">
        <div class="layout-labels-left">
          <div class="layout-inline-grid-double layout-labels-left">
            <div class="field-item">
              <label class="width-auto" for="banner-hidebanner">Hide banner</label>
              <input id="banner-hidebanner" type="checkbox" v-model="settings.banner.hidebanner" />
            </div>
            <div class="field-item">
              <label class="width-auto" for="banner-hidebanner_button">Hide banner button</label>
              <input id="banner-hidebanner_button" type="checkbox" v-model="settings.banner.hidebanner_button" />
            </div>
          </div>
          <div class="field-item">
            <label class="width-auto" for="banner-background-color">Background color</label>
            <input id="banner-background-color" type="color" v-model="settings.banner.color" />
          </div>
        </div>
        <div class="layout-labels-top layout-inline-grid-double">
          <div class="field-item">
            <label for="banner-action">Action</label>
            <select id="banner-action" v-model="settings.banner.action">
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
            <label for="banner-actionparam">Action parameter</label>
            <input id="banner-actionparam" type="text" v-model="settings.banner.actionparam" />
          </div>
          <div class="field-item">
            <label for="banner-url">URL</label>
            <input id="banner-url" type="text" v-model="settings.banner.url" />
          </div>
          <div class="field-item">
            <label for="banner-objclass">Classname</label>
            <input id="banner-objclass" type="text" v-model="settings.banner.objclass" />
          </div>
          <div class="field-item">
            <label for="banner-startcase">Start case</label>
            <input id="banner-startcase" type="text" v-model="settings.banner.startcase" />
          </div>
          <div class="field-item">
            <label for="banner-application">Application name</label>
            <input id="banner-application" type="text" v-model="settings.banner.application" />
          </div>
          <div class="field-item">
            <label for="banner-channelid">Channel ID</label>
            <input id="banner-channelid" type="text" v-model="settings.banner.channelid" />
          </div>
        </div>
        <div class="layout-labels-top">
          <div class="field-item">
            <label
              for="banner-application"
            >Extra parameters (for example 'key1=value1,key2=value2')</label>
            <textarea id="banner-application" v-model="settings.banner.extraparam" />
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
