<template>
  <div class="container-transparent">
    <h2>Offer Action</h2>
    <p>Configuration of the mashup displayed when clicking on the "Apply now" button inside the main offer of the offer page (offer.html)</p>
    <div class="container">
      <div class="body">
        <div class="layout-labels-top layout-inline-grid-double">
          <div class="field-item">
            <label for="offer-action-action">Action</label>
            <select id="offer-action-action" v-model="settings.offeraction.action">
              <option>createNewWork</option>
              <option>display</option>
              <option v-if="settings.general.connection.type==='mashup'">getNextWork</option>
              <option>openAssignment</option>
              <option v-if="settings.general.connection.type==='mashup'">openWorkItem</option>
              <option>openWorkByHandle</option>
            </select>
          </div>
          <div class="field-item">
            <label for="offer-action-actionparam" v-if="settings.offeraction.action!=='createNewWork'">Action parameter</label>
            <input
              id="offer-action-actionparam"
              type="text"
              v-model="settings.offeraction.actionparam" v-if="settings.offeraction.action!=='createNewWork'"
            />
          </div>
          <div class="field-item">
            <label for="offer-action-url">URL</label>
            <input id="offer-action-url" type="text" v-model="settings.offeraction.url" />
          </div>
          <div class="field-item">
            <label for="offer-action-objclass">Classname</label>
            <input id="offer-action-objclass" type="text" v-model="settings.offeraction.objclass" />
          </div>
          <div class="field-item" v-if="settings.general.connection.type==='mashup'">
            <label for="offer-action-startcase">Start case</label>
            <input id="offer-action-startcase" type="text" v-model="settings.offeraction.startcase" />
          </div>
          <div class="field-item">
            <label for="offer-action-application">Application name</label>
            <input
              id="offer-action-application"
              type="text"
              v-model="settings.offeraction.application"
            />
          </div>
          <div class="field-item">
            <label for="offer-action-pega_userid">Pega userid</label>
            <input
              id="offer-action-pega_userid"
              type="text"
              v-model="settings.offeraction.pega_userid"
            />
          </div>
          <div class="field-item">
            <label for="offer-action-pega_pwd">Pega password</label>
            <input
              id="offer-action-pega_pwd"
              type="password"
              v-model="settings.offeraction.pega_pwd"
            />
          </div>
          <div class="field-item" v-if="settings.general.connection.type==='mashup'">
            <label for="offer-action-channelid">Channel ID</label>
            <input id="offer-action-channelid" type="text" v-model="settings.offeraction.channelid" />
          </div>
          <div class="field-item" v-if="settings.general.connection.type==='mashup'">
            <label for="offer-action-tenantid">Tenant ID</label>
            <input id="offer-action-tenantid" type="text" v-model="settings.offeraction.tenantid" />
          </div>
          <div class="field-item field-checkbox" v-if="settings.general.connection.type==='mashup'">
            <input id="offer-action-dataretained" type="checkbox" v-model="settings.offeraction.dataretained" />
            <label class="width-auto" for="offer-action-dataretained">Retain state on reload</label>
          </div>
        </div>
        <div class="layout-labels-top">
          <div class="field-item">
            <label
              for="offer-action-extraparam"
            >Extra parameters (for example 'key1=value1,key2=value2')</label>
            <textarea id="offer-action-extraparam" v-model="settings.offeraction.extraparam" />
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
