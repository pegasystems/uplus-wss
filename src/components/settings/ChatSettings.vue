<template>
  <div class="container-transparent">
    <h2>Pega Chat and Co-Browse</h2>
    <p>Configuration of the PegaChat Mashup and Co-Browse components. Enter an empty 'URL' to disable the functionality.</p>
    <Container title="Pega Chat" expanded>
      <div class="layout-labels-top layout-inline-grid-double">
        <div class="field-item">
          <label for="chat-MashupURL">URL</label>
          <input id="chat-MashupURL" type="text" v-model="settings.pega_chat.MashupURL" />
        </div>
        <div class="field-item">
          <label for="chat-WCBConfigName">Config name</label>
          <input id="chat-WCBConfigName" type="text" v-model="settings.pega_chat.WCBConfigName" />
        </div>
        <div class="field-item">
          <label for="chat-WebChatBotID">Bot ID</label>
          <input id="chat-WebChatBotID" type="text" v-model="settings.pega_chat.WebChatBotID" />
        </div>
        <div class="field-item">
          <label for="chat-ApplicationName">Application name</label>
          <input id="chat-ApplicationName" type="text" v-model="settings.pega_chat.ApplicationName" />
        </div>
      </div>
      <div class="layout-labels-left">
        <div class="field-item">
          <label class="width-auto" for="chat-ShowAsButton">Show the launch icon as button</label>
          <input id="chat-ShowAsButton" type="checkbox" v-model="settings.pega_chat.ShowAsButton" />
        </div>
        <div class="field-item">
          <label
            class="width-auto"
            for="chat-EnableProActiveNotification"
          >Enable Pega Marketing proactive notifications (must be configured)</label>
          <input
            id="chat-EnableProActiveNotification"
            type="checkbox"
            v-model="settings.pega_chat.EnableProActiveNotification"
          />
        </div>
      </div>
      <div class="layout-labels-top layout-inline-grid-double">
        <div class="field-item">
          <label
            class="width-auto"
            for="chat-ProActiveNotificationDismissTime"
          >Proactive notifications dismiss time (in ms)</label>
          <input
            id="chat-ProActiveNotificationDismissTime"
            type="text"
            v-model="settings.pega_chat.ProActiveNotificationDismissTime"
          />
        </div>
      </div>
    </Container>
    <Container title="Co-Browse" expanded>
      <div class="layout-labels-top layout-inline-grid-double">
        <div class="field-item">
          <label for="chat-CoBrowseServerURL">URL</label>
          <input
            id="chat-CoBrowseServerURL"
            type="text"
            v-model="settings.pega_chat.CoBrowseServerURL"
          />
        </div>
        <div class="field-item">
          <label for="chat-CoBrowseToken">Token</label>
          <input id="chat-CoBrowseToken" type="text" v-model="settings.pega_chat.CoBrowseToken" />
        </div>
      </div>
    </Container>
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
