<template>
  <div class="container-transparent">
    <h2>Customer Decision Hub</h2>
    <p>
      Configuration to use Customer Decision Hub to generate offers. Enter an empty
      'Host' to disable this functionality. For more details, click
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
          <label for="NBAM-APILevel">API level</label>
          <select
            id="NBAM-APILevel"
            v-model="settings.pega_marketing.apiLevel"
          >
            <option>V2</option>
            <option>V3</option>
          </select>
        </div>
        <div v-if="settings.pega_marketing.apiLevel === 'V3'" class="field-item">
          <label for="NBAM-contextName">Context name</label>
          <select
            id="NBAM-contextName"
            v-model="settings.pega_marketing.contextName"
          >
            <option>Account</option>
            <option>Customer</option>
          </select>
        </div>
      </div>
      <div class="layout-labels-left">
        <div v-if="settings.pega_marketing.apiLevel === 'V3'" class="field-item field-checkbox">
          <label class="width-auto" for="NBAM-useCaptureByChannel"
            >Enable capturing responses to actions</label
          >
          <input
            id="NBAM-useCaptureByChannel"
            type="checkbox"
            v-model="settings.pega_marketing.useCaptureByChannel"
          />
        </div>
        <div class="field-item field-checkbox">
          <label class="width-auto" for="NBAM-showAIOverlay"
            >Show AI overlay</label
          >
          <input
            id="NBAM-showAIOverlay"
            type="checkbox"
            v-model="settings.pega_marketing.showAIOverlay"
          />
        </div>
        <div class="field-item field-checkbox">
          <label class="width-auto" for="NBAM-enableRTS"
            >Enable Real-time data streaming</label
          >
          <input
            id="NBAM-enableRTS"
            type="checkbox"
            v-model="settings.pega_marketing.enableRTS"
          />
        </div>
        <div class="field-item field-checkbox">
          <label class="width-auto" for="NBAM-enableClickStream"
            >Enable Click Stream</label
          >
          <input
            id="NBAM-enableClickStream"
            type="checkbox"
            v-model="settings.pega_marketing.enableClickStream"
          />
        </div>
        <div class="field-item">
          <label class="width-auto" for="NBAM-replaceHomePageHeader"
            >Replace Home Page header with Hero placement</label
          >
          <input
            id="NBAM-replaceHomePageHeader"
            type="checkbox"
            v-model="settings.pega_marketing.replaceHomePageHeader"
          />
        </div>
        <div class="field-item">
          <label class="width-auto" for="NBAM-showLoadingIndicator"
            >Display progress indicator while loading the offers</label
          >
          <input
            id="NBAM-showLoadingIndicator"
            type="checkbox"
            v-model="settings.pega_marketing.showLoadingIndicator"
          />
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
            <option>Mashup</option>
            <option>Popup</option>
            <option>TopURL</option>
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
            <option>Mashup</option>
            <option>Popup</option>
            <option>TopURL</option>
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
            <option>Mashup</option>
            <option>Popup</option>
            <option>TopURL</option>
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
            <option>Mashup</option>
            <option>Popup</option>
            <option>TopURL</option>
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
