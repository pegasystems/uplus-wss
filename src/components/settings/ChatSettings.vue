<template>
  <div class="layout-inline-grid-double">
    <div class="layout-labels-left secondary-card">
      <div class="field-item">
        <label for="WCBConfigName">WCBConfigName</label>
        <input id="WCBConfigName" type="text" v-model="settings.pega_chat.WCBConfigName">
      </div>
      <div class="field-item">
        <label for="WebChatBotID">WebChatBotID</label>
        <input id="WebChatBotID" type="text" v-model="settings.pega_chat.WebChatBotID">
      </div>
      <div class="field-item">
        <label for="ApplicationName">ApplicationName</label>
        <input id="ApplicationName" type="text" v-model="settings.pega_chat.ApplicationName">
      </div>
      <div class="field-item">
        <label for="MashupURL">URL</label>
        <input id="MashupURL" type="text" v-model="settings.pega_chat.MashupURL">
      </div>
      <div class="field-item">
        <label for="ContactID">ContactID</label>
        <input id="ContactID" type="text" v-model="settings.pega_chat.ContactID">
      </div>
      <div class="field-item">
        <label for="AccountNumber">AccountNumber</label>
        <input id="AccountNumber" type="text" v-model="settings.pega_chat.AccountNumber">
      </div>
      <div class="field-item">
        <label for="UserName">UserName</label>
        <input id="UserName" type="text" v-model="settings.pega_chat.UserName">
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