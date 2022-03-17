<template>
  <div class="container-transparent">
    <h2>Messaging and Co-Browse</h2>
    <p>
      Configuration of the messaging and Co-Browse components. Enter an empty
      'URL' to disable the functionality. For more details, click
      <a
        href="https://github.com/pegasystems/uplus-wss/wiki/How-to-configure-the-Pega-Chat-bot"
        >here</a
      >.
    </p>
    <Container title="Messaging" expanded>
      <div class="layout-labels-left">
        <div class="field-item">
          <label class="width-auto" for="chat-ShowAsButton"
            >Connect using legacy Web Chat Mashup</label
          >
          <input
            id="chat-ShowAsButton"
            type="checkbox"
            v-model="settings.pega_chat.UseLegacyWebChat"
          />
        </div>
      </div>
      <div
        class="layout-labels-top"
        v-if="settings.pega_chat.UseLegacyWebChat === false"
      >
        <div class="field-item">
          <label for="chat-DMMID">ID of the widget</label>
          <input
            id="chat-DMMID"
            type="text"
            v-model="settings.pega_chat.DMMID"
          />
        </div>
        <div class="field-item">
          <label for="chat-DMMURL">URL of the Digital Messaging Server</label>
          <input
            id="chat-DMMURL"
            type="text"
            v-model="settings.pega_chat.DMMURL"
          />
        </div>
        <div class="field-item">
          <label for="chat-DMMSecret"
            >Secret to generate JWT Token for authentication</label
          >
          <input
            id="chat-DMMSecret"
            type="text"
            v-model="settings.pega_chat.DMMSecret"
          />
        </div>
        <div class="field-item">
          <label for="chat-DMMPrivateURL"
            >URL of the DM server to send private data</label
          >
          <input
            id="chat-DMMPrivateURL"
            type="text"
            v-model="settings.pega_chat.DMMPrivateURL"
          />
        </div>
      </div>
      <div v-else>
        <div class="layout-labels-top layout-inline-grid-double">
          <div class="field-item">
            <label for="chat-MashupURL">URL</label>
            <input
              id="chat-MashupURL"
              type="text"
              v-model="settings.pega_chat.MashupURL"
            />
          </div>
          <div class="field-item">
            <label for="chat-WCBConfigName">Config name</label>
            <input
              id="chat-WCBConfigName"
              type="text"
              v-model="settings.pega_chat.WCBConfigName"
            />
          </div>
          <div class="field-item">
            <label for="chat-WebChatBotID">Bot ID</label>
            <input
              id="chat-WebChatBotID"
              type="text"
              v-model="settings.pega_chat.WebChatBotID"
            />
          </div>
          <div class="field-item">
            <label for="chat-ApplicationName">Application name</label>
            <input
              id="chat-ApplicationName"
              type="text"
              v-model="settings.pega_chat.ApplicationName"
            />
          </div>
          <div class="field-item">
            <label for="chat-TenantID">Tenant ID</label>
            <input
              id="chat-TenantID"
              type="text"
              v-model="settings.pega_chat.TenantID"
            />
          </div>
        </div>
        <div class="layout-labels-left">
          <div class="field-item">
            <label class="width-auto" for="chat-ShowAsButton"
              >Show the launch icon as button</label
            >
            <input
              id="chat-ShowAsButton"
              type="checkbox"
              v-model="settings.pega_chat.ShowAsButton"
            />
          </div>
          <div class="field-item">
            <label class="width-auto" for="chat-EnableProActiveNotification"
              >Enable Customer Decision Hub proactive notifications (must be
              configured)</label
            >
            <input
              id="chat-EnableProActiveNotification"
              type="checkbox"
              v-model="settings.pega_chat.EnableProActiveNotification"
            />
          </div>
          <div class="field-item">
            <label class="width-auto" for="chat-ResetLogout"
              >Reset chat when user logs out</label
            >
            <input
              id="chat-ResetLogout"
              type="checkbox"
              v-model="settings.pega_chat.ResetLogout"
            />
          </div>
        </div>
        <div class="layout-labels-top layout-inline-grid-double">
          <div class="field-item">
            <label
              class="width-auto"
              for="chat-ProActiveNotificationDismissTime"
              >Proactive notifications dismiss time (in ms)</label
            >
            <input
              id="chat-ProActiveNotificationDismissTime"
              type="text"
              v-model="settings.pega_chat.ProActiveNotificationDismissTime"
            />
          </div>
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
          <input
            id="chat-CoBrowseToken"
            type="text"
            v-model="settings.pega_chat.CoBrowseToken"
          />
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
