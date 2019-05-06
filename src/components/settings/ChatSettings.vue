<template>
  <div class="layout-inline-grid-double">
    <div class="layout-labels-left secondary-card">
      <div class="field-item">
        <label for="chat-SSAConfigName">SSA config name</label>
        <input id="chat-SSAConfigName" type="text" v-model="settings.pega_chat.SSAConfigName">
      </div>
      <div class="field-item">
        <label for="chat-MashupURL">WebChat URL</label>
        <input id="chat-MashupURL" type="text" v-model="settings.pega_chat.MashupURL">
      </div>
      <div class="field-item">
        <label for="chat-WCBConfigName">WebChat config name</label>
        <input id="chat-WCBConfigName" type="text" v-model="settings.pega_chat.WCBConfigName">
      </div>
      <div class="field-item">
        <label for="chat-WebChatBotID">WebChat Bot ID</label>
        <input id="chat-WebChatBotID" type="text" v-model="settings.pega_chat.WebChatBotID">
      </div>
      <div class="field-item">
        <label for="chat-ApplicationName">WebChat Application name</label>
        <input id="chat-ApplicationName" type="text" v-model="settings.pega_chat.ApplicationName">
      </div>
      <div class="field-item">
        <label for="chat-CoBrowseServerURL">CoBrowse URL</label>
        <input
          id="chat-CoBrowseServerURL"
          type="text"
          v-model="settings.pega_chat.CoBrowseServerURL"
        >
      </div>
      <div class="field-item">
        <label for="chat-CoBrowseToken">CoBrowse Token</label>
        <input id="chat-CoBrowseToken" type="text" v-model="settings.pega_chat.CoBrowseToken">
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
