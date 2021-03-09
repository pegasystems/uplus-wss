<template>
  <div class="container-transparent">
    <h2>Quick links</h2>
    <p>Configuration of each of the mashup cases that can be accessed through the quick links component.</p>
    <div v-for="(item,index) in settings.quicklinks" v-bind:key="index">
      <Container :title="'Mashup Case ' + (index+1)" :expanded="index===0">
        <div class="layout-labels-left">
          <div class="field-item">
            <label
              class="width-auto"
              :for="'quicklinks-' + index + '-hideaccount'"
            >Hide from account page</label>
            <input :id="'quicklinks-' + index + '-hideaccount'" type="checkbox" v-model="item.hide" />
          </div>
        </div>
        <div class="layout-inline-grid-double layout-labels-top">
          <div v-for="titlel in settings.i18n.languages" v-bind:key="titlel" class="field-item">
            <label :for="'quicklinks-' + index + '-' + titlel">Case name in '{{ titlel }}'</label>
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
            <input
              :id="'quicklinks-' + index + '-actionparam'"
              type="text"
              v-model="item.actionparam"
            />
          </div>
          <div class="field-item">
            <label :for="'quicklinks-' + index + '-url'">URL</label>
            <input :id="'quicklinks-' + index + '-url'" type="text" v-model="item.url" />
          </div>
          <div class="field-item">
            <label :for="'quicklinks-' + index + '-objclass'">Classname</label>
            <input :id="'quicklinks-' + index + '-objclass'" type="text" v-model="item.objclass" />
          </div>
          <div class="field-item">
            <label :for="'quicklinks-' + index + '-startcase'">Start case</label>
            <input :id="'quicklinks-' + index + '-startcase'" type="text" v-model="item.startcase" />
          </div>
          <div class="field-item">
            <label :for="'quicklinks-' + index + '-application'">Application name</label>
            <input
              :id="'quicklinks-' + index + '-application'"
              type="text"
              v-model="item.application"
            />
          </div>
          <div class="field-item">
            <label :for="'quicklinks-' + index + '-channelid'">Channel ID</label>
            <input :id="'quicklinks-' + index + '-channelid'" type="text" v-model="item.channelid" />
          </div>
          <div class="field-item">
            <label :for="'quicklinks-' + index + '-tenantid'">Tenant ID</label>
            <input :id="'quicklinks-' + index + '-tenantid'" type="text" v-model="item.tenantid" />
          </div>
          <div class="field-item field-checkbox">
            <label class="width-auto" :for="'quicklinks-' + index + '-dataretained'">Retain state on reload</label>
            <input :id="'quicklinks-' + index + '-dataretained'" type="checkbox" v-model="item.dataretained" />
          </div>
          <div class="field-item">
            <label :for="'quicklinks-' + index + '-icon'">Icon (for mobile)</label>
            <input :id="'quicklinks-' + index + '-icon'" type="text" v-model="item.icon" />
          </div>
        </div>
        <div class="layout-labels-top">
          <div class="field-item">
            <label
              :for="'quicklinks-' + index + '-extraparam'"
            >Extra parameters (for example 'key1=value1,key2=value2')</label>
            <textarea :id="'quicklinks-' + index + '-extraparam'" v-model="item.extraparam" />
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
  components: {
    Container,
  },
};
</script>
