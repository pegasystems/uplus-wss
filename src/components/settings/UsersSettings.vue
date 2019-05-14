<template>
  <div class="layout-inline-grid-double">
    <div
      class="layout-labels-left secondary-card"
      v-for="(item,index) in settings.users"
      v-bind:key="index"
      v-bind:title="'user(' + index+1 + ')'"
    >
      <div class="field-item">
        <label :for="'user-' + index + '-username'">Username</label>
        <input :id="'user-' + index + '-username'" type="text" v-model="item.username">
      </div>
      <div class="field-item">
        <label :for="'user-' + index + '-password'">Password</label>
        <input :id="'user-' + index + '-password'" type="password" v-model="item.password">
      </div>
      <div class="field-item">
        <label :for="'user-' + index + '-img'">Image</label>
        <input :id="'user-' + index + '-img'" type="text" v-model="item.img">
      </div>
      <div class="field-item">
        <label :for="'user-' + index + '-company_name'">Company</label>
        <input :id="'user-' + index + '-company_name'" type="text" v-model="item.company_name">
      </div>
      <div class="field-item">
        <label :for="'user-' + index + '-name'">Name</label>
        <input :id="'user-' + index + '-name'" type="text" v-model="item.name">
      </div>
      <div class="field-item">
        <label :for="'user-' + index + '-accountid'">Account ID (Mashup &nbsp; Chat)</label>
        <input :id="'user-' + index + '-accountid'" type="text" v-model="item.accountID">
      </div>
      <div class="field-item">
        <label :for="'user-' + index + '-contactid'">Contact ID (Mashup &nbsp; Chat)</label>
        <input :id="'user-' + index + '-contactid'" type="text" v-model="item.contactID">
      </div>
      <div class="field-item">
        <label :for="'user-' + index + '-subscriberid'">Subscriber ID (for PegaMkt)</label>
        <input :id="'user-' + index + '-subscriberid'" type="text" v-model="item.subscriberID">
      </div>
      <div class="field-item">
        <label :for="'user-' + index + '-extraparam'">Extra params (comma separated)</label>
        <input :id="'user-' + index + '-extraparam'" type="text" v-model="item.extraparam">
      </div>
      <div class="field-item">
        <label :for="'user-' + index + '-pega_userid'">Pega userid</label>
        <input :id="'user-' + index + '-pega_userid'" type="text" v-model="item.pega_userid">
      </div>
      <div class="field-item">
        <label :for="'user-' + index + '-pega_pwd'">Pega password</label>
        <input :id="'user-' + index + '-pega_pwd'" type="password" v-model="item.pega_pwd">
      </div>
      <div class="field-item">
        <label :for="'user-' + index + '-load_by_default'">Loaded by default</label>
        <input
          type="checkbox"
          :id="'user-' + index + '-load_by_default'"
          v-model="item.load_by_default"
        >
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
