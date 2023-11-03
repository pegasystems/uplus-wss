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
      <div class="layout-labels-top">
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
    </Container>
    <Container title="Proactive chat on page load" expanded>
      <div class="layout-labels-top layout-inline-grid-double">
        <div class="field-item">
          <label for="chat-DMMProactiveChatNewSessionTimeout"
            >Time to wait (in ms) - use 0 to disable</label
          >
          <input
            id="chat-DMMProactiveChatNewSessionTimeout"
            type="number"
            v-model="settings.pega_chat.DMMProactiveChatNewSessionTimeout"
          />
        </div>
        <div class="field-item">
          <label for="chat-DMMProactiveChatNewSessionCode">Trigger code</label>
          <input
            id="chat-DMMProactiveChatNewSessionCode"
            type="text"
            v-model="settings.pega_chat.DMMProactiveChatNewSessionCode"
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
