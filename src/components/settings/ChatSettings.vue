<template>
  <div class="layout-inline-grid-double">
    <div class="layout-labels-left secondary-card">
      <div class="field-item">
        <label for="chat-WCBConfigName">WCB config name</label>
        <input id="chat-WCBConfigName" type="text" v-model="settings.pega_chat.WCBConfigName">
      </div>
      <div class="field-item">
        <label for="chat-WebChatBotID">WebChat Bot ID</label>
        <input id="chat-WebChatBotID" type="text" v-model="settings.pega_chat.WebChatBotID">
      </div>
      <div class="field-item">
        <label for="chat-ApplicationName">Application name</label>
        <input id="chat-ApplicationName" type="text" v-model="settings.pega_chat.ApplicationName">
      </div>
      <div class="field-item">
        <label for="chat-MashupURL">URL</label>
        <input id="chat-MashupURL" type="text" v-model="settings.pega_chat.MashupURL">
      </div>
      <div class="field-item">
        <label for="chat-ContactID">Contact ID</label>
        <input id="chat-ContactID" type="text" v-model="settings.pega_chat.ContactID">
      </div>
      <div class="field-item">
        <label for="chat-AccountNumber">Account number</label>
        <input id="chat-AccountNumber" type="text" v-model="settings.pega_chat.AccountNumber">
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