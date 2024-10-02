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
            >Base URL of the Digital Messaging server to send private data &
            custom event acknowledgements</label
          >
          <input
            id="chat-DMMPrivateURL"
            type="text"
            v-model="settings.pega_chat.DMMPrivateURL"
          />
        </div>
      </div>
    </Container>

    <Container title="Custom Events">
      <div
        v-for="(event, index) in settings.CustomEvents"
        :key="index"
        class="layout-labels-top"
      >
        <div class="flex event-header">
          <h4 class="event-title">Custom Event {{ index + 1 }}</h4>
          <!--<h4 class="event-title" v-if="event.CustomEventName">{{ event.CustomEventName }}</h4>-->
          <i
            @click="removeCustomEvent(index)"
            class="pi pi-trash remove-event"
          ></i>
        </div>
        <div class="field-item">
          <label for="chat-CustomEventName">Event Name</label>
          <input
            id="chat-CustomEventName"
            type="text"
            v-model="event.CustomEventName"
          />
        </div>

        <div class="field-item">
          <label for="chat-CustomEventAction">Event action</label>
          <select id="chat-CustomEventAction" v-model="event.CustomEventAction">
            <option value="HighlightElement">Highlight Element</option>
            <option value="ClickElement">Click Element</option>
          </select>
        </div>

        <div class="field-item">
          <label for="chat-ElementName"
            >Element To Select (Enter the elements text value e.g. 'Log
            in')</label
          >
          <input
            id="chat-ElementName"
            type="text"
            v-model="event.ElementName"
          />
        </div>

        <div class="layout-labels-top layout-inline-grid-double">
          <div class="field-item field-checkbox">
            <input
              type="checkbox"
              v-model="event.SendAcknowledgement"
              :id="'chat-' + index + '-SendAcknowledgement'"
            />
            <label
              v-if="!event.SendAcknowledgement"
              class="width-auto"
              :for="'chat-' + index + '-SendAcknowledgement'"
              >Send Event Acknowledgement</label
            >
            <label
              v-if="event.SendAcknowledgement"
              class="width-auto"
              :for="'chat-' + index + '-SendAcknowledgement'"
              >Send Event Acknowledgement After:</label
            >
          </div>

          <div class="field-item" v-if="event.SendAcknowledgement">
            <!--<label for="chat-AcknowledgeOn">Send Event Acknowledgement After</label>-->
            <select id="chat-AcknowledgeOn" v-model="event.AcknowledgeOn">
              <option value="LoginSuccess">Login Success</option>
              <option value="After5Seconds">5 seconds</option>
              <option value="After30Seconds">30 seconds</option>
            </select>
          </div>
        </div>

        <hr v-if="index != settings.CustomEvents.length - 1" />
      </div>

      <a class="add-event" @click="addCustomEvent"
        >Add Event <i class="pi pi-plus"></i>
      </a>
      <br />
      <br />
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
  methods: {
    addCustomEvent() {
      const new_event = {
        CustomEventAction: 'HighlightElement',
        CustomEventName: '',
        ElementName: '',
        SendAcknowledgement: false,
        AcknowledgeOn: 'After5Seconds',
      };
      this.settings.CustomEvents.push(new_event);
    },
    removeCustomEvent(index) {
      console.log('removeCustomEvent', index);
      this.settings.CustomEvents.splice(index, 1);
    },
  },
};
</script>
