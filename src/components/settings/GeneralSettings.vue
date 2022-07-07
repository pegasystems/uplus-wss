<template>
  <div class="container-transparent">
    <h2>General</h2>
    <p>
      General configuration settings. For more details on how to configure
      two-factor authentication, click
      <a
        href="https://github.com/pegasystems/uplus-wss/wiki/How-to-configure-two-factor-authentication"
        >here</a
      >.
    </p>
    <div class="container">
      <div class="body">
        <Container title="Theming" expanded>
          <div class="layout-labels-left layout-inline-grid-double">
            <div class="field-item">
              <input
                id="theming-override"
                type="checkbox"
                v-model="settings.general.theming.override"
              />
              <label for="theming-override">Override default theme</label>
            </div>
            <div class="field-item" v-if="settings.general.theming.override">
              <input
                id="branding-color"
                type="color"
                v-model="settings.general.theming.brandColor"
              />
              <label for="branding-color">Branding color</label>
              <input
                id="interactive-color"
                type="color"
                v-model="settings.general.theming.interactiveColor"
              />
              <label for="interactive-color">Interactive color</label>
            </div>
          </div>
        </Container>
        <Container title="Pega Platform access" expanded>
          <div class="layout-labels-left">
            <div class="field-item">
              <label for="ga-connection-type">Type</label>
              <select
                id="ga-connection-type"
                v-model="settings.general.connection.type"
                @change="onConnectionTypeChange"
              >
                <option value="mashup">
                  Web Mashup (Infinity UI with sections)
                </option>
                <option value="embedui">Embed UI (Cosmos React - 8.7)</option>
                <option value="dxv1">
                  DX API v1 (Mashup Web component - 8.1+)
                </option>
                <option value="dxv2">
                  DX API v2 (Mashup Web component - 8.5+)
                </option>
              </select>
            </div>
            <div
              class="field-item"
              v-if="
                settings.general.connection.type === 'dxv1' ||
                settings.general.connection.type === 'dxv2'
              "
            >
              <label for="ga-connection-authtype">Authentication</label>
              <select
                id="ga-connection-authtype"
                v-model="settings.general.connection.authtype"
              >
                <option value="basic">Basic authentication</option>
                <option value="oauth2password">
                  OAuth 2.0 Password Grant Type
                </option>
              </select>
            </div>
            <div
              class="field-item"
              v-if="settings.general.connection.type === 'embedui'"
            >
              <label for="ga-connection-authtype">Authentication</label>
              <select
                id="ga-connection-authtype"
                v-model="settings.general.connection.authtype"
              >
                <option value="oauth2clientcredentials">
                  OAuth 2.0 Client Credentials Type
                </option>
              </select>
            </div>
            <div
              class="field-item"
              v-if="
                settings.general.connection.authtype === 'oauth2password' ||
                settings.general.connection.authtype ===
                  'oauth2clientcredentials'
              "
            >
              <label for="ga-connection-clientid">Client ID</label>
              <input
                type="text"
                id="ga-connection-clientid"
                v-model="settings.general.connection.clientid"
              />
            </div>
            <div
              class="field-item"
              v-if="settings.general.connection.authtype === 'oauth2password'"
            >
              <label for="ga-connection-clientsecret">Client secret</label>
              <input
                type="text"
                id="ga-connection-clientsecret"
                v-model="settings.general.connection.clientsecret"
              />
            </div>
            <div
              class="field-item"
              v-if="settings.general.connection.type === 'dxv2'"
            >
              <label for="ga-connection-webportal">Web portal</label>
              <input
                type="text"
                id="ga-connection-webportal"
                v-model="settings.general.connection.webportal"
              />
            </div>
            <div
              class="field-item"
              v-if="settings.general.connection.type === 'embedui'"
            >
              <label for="ga-connection-c11nserver"
                >C11n URL (staticContentUrl)</label
              >
              <input
                type="text"
                id="ga-connection-c11nserver"
                v-model="settings.general.connection.c11nserver"
              />
            </div>
          </div>
          <div
            class="field-item"
            v-if="
              settings.general.connection.type === 'dxv1' ||
              settings.general.connection.type === 'dxv2'
            "
          >
            <input
              id="ga-connection-bshowattachment"
              type="checkbox"
              v-model="settings.general.connection.showAttachments"
            />
            <label for="ga-connection-bshowattachment">Show attachments</label>
          </div>
        </Container>
        <Container title="Google Analytics" expanded>
          <div class="layout-labels-left">
            <div class="field-item">
              <input
                id="ga-enabled"
                type="checkbox"
                v-model="settings.general.ga.enabled"
              />
              <label for="ga-enabled">Enable</label>
            </div>
            <div class="field-item">
              <label for="ga-trackingid">Tracking ID</label>
              <input
                id="ga-trackingid"
                type="text"
                v-model="settings.general.ga.trackingid"
              />
            </div>
          </div>
        </Container>
        <Container title="Two-factor authentication" expanded>
          <div class="layout-labels-left">
            <div class="field-item">
              <input
                id="2fa-enabled"
                type="checkbox"
                v-model="settings.general.auth_2fa.enabled"
              />
              <label for="2fa-enabled">Enable</label>
            </div>
            <div class="field-item">
              <label for="2fa-url">Server Base URL</label>
              <input
                id="2fa-url"
                type="text"
                v-model="settings.general.auth_2fa.url"
              />
            </div>
            <div class="field-item">
              <label for="2fa-sendMode">OTP send mode</label>
              <select
                id="2fa-sendMode"
                v-model="settings.general.auth_2fa.sendMode"
              >
                <option value="email">Email</option>
                <option value="sms">SMS</option>
              </select>
            </div>
          </div>
          <h4>Email</h4>
          <div class="layout-labels-top layout-inline-grid-double">
            <div class="field-item">
              <label for="2fa-email-correspondenceName"
                >Correspondence name</label
              >
              <input
                id="2fa-email-correspondenceName"
                type="text"
                v-model="
                  settings.general.auth_2fa.emailSettings.correspondenceName
                "
              />
            </div>
            <div class="field-item">
              <label for="2fa-email-emailAccount">Email account</label>
              <input
                id="2fa-email-emailAccount"
                type="text"
                v-model="settings.general.auth_2fa.emailSettings.emailAccount"
              />
            </div>
            <div class="field-item">
              <label for="2fa-email-subject">Subject</label>
              <input
                id="2fa-email-subject"
                type="text"
                v-model="settings.general.auth_2fa.emailSettings.subject"
              />
            </div>
            <div class="field-item">
              <label for="2fa-email-validateMaxAge">Validate max age</label>
              <input
                id="2fa-email-validateMaxAge"
                type="text"
                v-model="settings.general.auth_2fa.emailSettings.validateMaxAge"
              />
            </div>
          </div>
          <h4>SMS</h4>
          <div class="layout-labels-top layout-inline-grid-double">
            <div class="field-item">
              <label for="2fa-sms-from">From</label>
              <input
                id="2fa-sms-from"
                type="text"
                v-model="settings.general.auth_2fa.smsSettings.from"
              />
            </div>
            <div class="field-item">
              <label for="2fa-sms-account">Account</label>
              <input
                id="2fa-sms-account"
                type="text"
                v-model="settings.general.auth_2fa.smsSettings.account"
              />
            </div>
            <div class="field-item">
              <label for="2fa-sms-message">Message</label>
              <input
                id="2fa-sms-message"
                type="text"
                v-model="settings.general.auth_2fa.smsSettings.message"
              />
            </div>
            <div class="field-item">
              <label for="2fa-sms-validateMaxAge">Validate max age</label>
              <input
                id="2fa-sms-validateMaxAge"
                type="text"
                v-model="settings.general.auth_2fa.smsSettings.validateMaxAge"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
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
    onConnectionTypeChange() {
      if (this.settings.general.connection.type === 'mashup') {
        this.settings.general.connection.authtype = 'basic';
      } else if (this.settings.general.connection.type === 'embedui') {
        this.settings.general.connection.authtype = 'oauth2clientcredentials';
      } else if (this.settings.general.connection.type === 'dxv1') {
        this.settings.general.connection.authtype = 'basic';
      } else if (this.settings.general.connection.type === 'dxv2') {
        this.settings.general.connection.authtype = 'oauth2password';
      }
    },
  },
};
</script>
