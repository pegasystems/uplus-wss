<template>
  <div class="container-transparent">
    <h2>Customer Decision Hub</h2>
    <p>
      Configuration to use Customer Decision Hub to generate offers. Enter an
      empty 'Host' to disable this functionality. For more details, click
      <a
        href="https://github.com/pegasystems/uplus-wss/wiki/Integration-with-the-Customer-Decision-Hub"
        >here</a
      >.
    </p>
    <Container title="General" expanded>
      <div class="layout-labels-top layout-inline-grid-double">
        <div class="field-item">
          <label for="NBAM-Host">Host</label>
          <input
            id="NBAM-Host"
            type="text"
            v-model="settings.pega_marketing.Host"
          />
        </div>
        <div class="field-item">
          <label for="NBAM-Port">Port</label>
          <input
            id="NBAM-Port"
            type="text"
            v-model="settings.pega_marketing.Port"
          />
        </div>
        <div class="field-item">
          <label for="NBAM-Channel">Channel</label>
          <input
            id="NBAM-Channel"
            type="text"
            v-model="settings.pega_marketing.channel"
          />
        </div>
        <div class="field-item">
          <label for="NBAM-requestTimeout"
            >Timeout for XHR request (in ms)</label
          >
          <input
            id="NBAM-requestTimeout"
            type="integer"
            v-model="settings.pega_marketing.requestTimeout"
          />
        </div>
        <div class="field-item">
          <label for="NBAM-APILevel">API level</label>
          <select id="NBAM-APILevel" v-model="settings.pega_marketing.apiLevel">
            <option>V2</option>
            <option>V3</option>
          </select>
        </div>
        <div
          v-if="settings.pega_marketing.apiLevel === 'V3'"
          class="field-item"
        >
          <label for="NBAM-contextName">Context name</label>
          <input
            id="NBAM-contextName"
            v-model="settings.pega_marketing.contextName"
          />
        </div>
        <div
          v-if="settings.pega_marketing.apiLevel === 'V3'"
          class="field-item"
        >
          <label for="NBAM-appID">App ID (CDH configured for MultiApp)</label>
          <input id="NBAM-appID" v-model="settings.pega_marketing.appID" />
        </div>
      </div>
      <div class="layout-labels-left">
        <div
          v-if="settings.pega_marketing.apiLevel === 'V3'"
          class="field-item field-checkbox"
        >
          <input
            id="NBAM-useCaptureByChannel"
            type="checkbox"
            v-model="settings.pega_marketing.useCaptureByChannel"
          />
          <label class="width-auto" for="NBAM-useCaptureByChannel"
            >Enable capturing responses to actions</label
          >
        </div>
        <div class="field-item field-checkbox">
          <input
            id="NBAM-showAIOverlay"
            type="checkbox"
            v-model="settings.pega_marketing.showAIOverlay"
          />
          <label class="width-auto" for="NBAM-showAIOverlay"
            >Show AI overlay</label
          >
        </div>
        <div class="field-item field-checkbox">
          <input
            id="NBAM-enableRTS"
            type="checkbox"
            v-model="settings.pega_marketing.enableRTS"
          />
          <label class="width-auto" for="NBAM-enableRTS"
            >Enable Real-time data streaming</label
          >
        </div>
        <div class="field-item field-checkbox">
          <input
            id="NBAM-enableClickStream"
            type="checkbox"
            v-model="settings.pega_marketing.enableClickStream"
          />
          <label class="width-auto" for="NBAM-enableClickStream"
            >Enable Click Stream</label
          >
        </div>
        <div class="field-item field-checkbox">
          <input
            id="NBAM-replaceHomePageHeader"
            type="checkbox"
            v-model="settings.pega_marketing.replaceHomePageHeader"
          />
          <label class="width-auto" for="NBAM-replaceHomePageHeader"
            >Replace Home Page header with Hero placement</label
          >
        </div>
        <div class="field-item field-checkbox">
          <input
            id="NBAM-showLoadingIndicator"
            type="checkbox"
            v-model="settings.pega_marketing.showLoadingIndicator"
          />
          <label class="width-auto" for="NBAM-showLoadingIndicator"
            >Display progress indicator while loading the offers</label
          >
        </div>
      </div>
    </Container>
    <Container title="Home Page" expanded>
      <div class="layout-labels-top layout-inline-grid-double">
        <div class="field-item">
          <label for="NBAM-HomePage-ContainerName">Container name</label>
          <input
            id="NBAM-HomePage-ContainerName"
            type="text"
            v-model="settings.pega_marketing.homePage.containerName"
          />
        </div>
        <div class="field-item">
          <label for="NBAM-HomePage-Placement">Placement (Hero or Tile)</label>
          <input
            id="NBAM-HomePage-Placement"
            type="text"
            v-model="settings.pega_marketing.homePage.placement"
          />
        </div>
        <div class="field-item">
          <label for="NBAM-HomePage-ClickAction">Click action</label>
          <select
            id="NBAM-HomePage-ClickAction"
            v-model="settings.pega_marketing.homePage.clickaction"
          >
            <option value="Mashup">Mashup</option>
            <option value="BuiltIn">Built-in</option>
            <option value="Popup">Popup</option>
            <option value="TopURL">TopURL</option>
          </select>
        </div>
      </div>
    </Container>
    <Container title="Account Page">
      <div class="layout-labels-top layout-inline-grid-double">
        <div class="field-item">
          <label for="NBAM-AccountPage-ContainerName">Container name</label>
          <input
            id="NBAM-AccountPage-ContainerName"
            type="text"
            v-model="settings.pega_marketing.accountPage.containerName"
          />
        </div>
        <div class="field-item">
          <label for="NBAM-AccountPage-Placement"
            >Placement (Hero or Tile)</label
          >
          <input
            id="NBAM-AccountPage-Placement"
            type="text"
            v-model="settings.pega_marketing.accountPage.placement"
          />
        </div>
        <div class="field-item">
          <label for="NBAM-AccountPage-ClickAction">Click action</label>
          <select
            id="NBAM-AccountPage-ClickAction"
            v-model="settings.pega_marketing.accountPage.clickaction"
          >
            <option value="Mashup">Mashup</option>
            <option value="BuiltIn">Built-in</option>
            <option value="Popup">Popup</option>
            <option value="TopURL">TopURL</option>
          </select>
        </div>
      </div>
    </Container>
    <Container title="Home Page for mobile">
      <div class="layout-labels-top layout-inline-grid-double">
        <div class="field-item">
          <label for="NBAM-PhonePage-ContainerName">Container name</label>
          <input
            id="NBAM-PhonePage-ContainerName"
            type="text"
            v-model="settings.pega_marketing.phonePage.containerName"
          />
        </div>
        <div class="field-item">
          <label for="NBAM-PhonePage-Placement">Placement (Hero or Tile)</label>
          <input
            id="NBAM-PhonePage-Placement"
            type="text"
            v-model="settings.pega_marketing.phonePage.placement"
          />
        </div>
        <div class="field-item">
          <label for="NBAM-PhonePage-ClickAction">Click action</label>
          <select
            id="NBAM-PhonePage-ClickAction"
            v-model="settings.pega_marketing.phonePage.clickaction"
          >
            <option value="Mashup">Mashup</option>
            <option value="BuiltIn">Built-in</option>
            <option value="Popup">Popup</option>
            <option value="TopURL">TopURL</option>
          </select>
        </div>
      </div>
    </Container>
    <Container title="Offer Page">
      <div class="layout-labels-top layout-inline-grid-double">
        <div class="field-item">
          <label for="NBAM-OfferPage-ContainerName">Container name</label>
          <input
            id="NBAM-OfferPage-ContainerName"
            type="text"
            v-model="settings.pega_marketing.offerPage.containerName"
          />
        </div>
        <div class="field-item">
          <label for="NBAM-OfferPage-Placement">Placement (Hero or Tile)</label>
          <input
            id="NBAM-OfferPage-Placement"
            type="text"
            v-model="settings.pega_marketing.offerPage.placement"
          />
        </div>
        <div class="field-item">
          <label for="NBAM-OfferPage-ClickAction">Click action</label>
          <select
            id="NBAM-OfferPage-ClickAction"
            v-model="settings.pega_marketing.offerPage.clickaction"
          >
            <option value="Mashup">Mashup</option>
            <option value="BuiltIn">Built-in</option>
            <option value="Popup">Popup</option>
            <option value="TopURL">TopURL</option>
          </select>
        </div>
      </div>
    </Container>
    <Container
      :title="'Offer ' + (index + 1)"
      v-for="(item, index) in settings.pega_marketing.extraOfferPages"
      v-bind:key="index"
    >
      <div class="layout-labels-top layout-inline-grid-double">
        <div class="field-item">
          <label :for="'NBAM-OfferPage-' + index + '-ContainerName'"
            >Container name</label
          >
          <input
            :id="'NBAM-OfferPage-' + index + '-ContainerName'"
            type="text"
            v-model="item.containerName"
          />
        </div>
        <div class="field-item">
          <label :for="'NBAM-OfferPage-' + index + '-Placement'"
            >Placement (Hero or Tile)</label
          >
          <input
            :id="'NBAM-OfferPage-' + index + '-Placement'"
            type="text"
            v-model="item.placement"
          />
        </div>
        <div class="field-item">
          <label :for="'NBAM-OfferPage-' + index + '-ClickAction'"
            >Click action</label
          >
          <select
            :id="'NBAM-OfferPage-' + index + '-ClickAction'"
            v-model="item.clickaction"
          >
            <option value="Mashup">Mashup</option>
            <option value="BuiltIn">Built-in</option>
            <option value="Popup">Popup</option>
            <option value="TopURL">TopURL</option>
          </select>
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
