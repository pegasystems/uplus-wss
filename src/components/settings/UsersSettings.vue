<template>
  <div class="layout-inline-grid-double">
    <div
      class="layout-labels-left secondary-card"
      v-for="item in settings.users"
      v-bind:key="item.username"
      v-bind:title="item.username"
    >
      <div class="field-item">
        <label for="username">Username</label>
        <input id="username" type="text" v-model="item.username">
      </div>
      <div class="field-item">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="item.password">
      </div>
      <div class="field-item">
        <label for="img">Image</label>
        <input id="img" type="text" v-model="item.img">
      </div>
      <div class="field-item">
        <label for="company_name">Company</label>
        <input id="company_name" type="text" v-model="item.company_name">
      </div>
      <div class="field-item">
        <label for="name">Name</label>
        <input id="name" type="text" v-model="item.name">
      </div>
      <div class="field-item">
        <label for="pega_userid">Pega userid</label>
        <input id="pega_userid" type="text" v-model="item.pega_userid">
      </div>
      <div class="field-item">
        <label for="pega_pwd">Pega password</label>
        <input id="pega_pwd" type="password" v-model="item.pega_pwd">
      </div>
      <div class="field-item">
        <label for="load_by_default">Loaded by default</label>
        <input type="checkbox" id="load_by_default" v-model="item.load_by_default">
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