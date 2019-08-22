<template>
  <div class="container-transparent">
    <h2>Pega Marketing</h2>
    <p>Configuration to use Pega Marketing to generate offers. Enter an empty 'Host' to disable this functionality.</p>
    <Container title="General" expanded>
      <div class="layout-labels-top layout-inline-grid-double">
        <div class="field-item">
          <label for="NBAM-Host">Host</label>
          <input id="NBAM-Host" type="text" v-model="settings.pega_marketing.Host" />
        </div>
        <div class="field-item">
          <label for="NBAM-Port">Port</label>
          <input id="NBAM-Port" type="text" v-model="settings.pega_marketing.Port" />
        </div>
        <div class="field-item field-checkbox">
          <label class="width-auto" for="NBAM-showAIOverlay">Show AI overlay</label>
          <input
            id="NBAM-showAIOverlay"
            type="checkbox"
            v-model="settings.pega_marketing.showAIOverlay"
          />
        </div>
        <div class="field-item field-checkbox">
          <label class="width-auto" for="NBAM-enableRTS">Enable Real-time data streaming</label>
          <input id="NBAM-enableRTS" type="checkbox" v-model="settings.pega_marketing.enableRTS" />
        </div>
      </div>
      <div class="layout-labels-left">
        <div class="field-item">
          <label
            class="width-auto"
            for="NBAM-replaceHomePageHeader"
          >Replace Home Page header with Hero placement</label>
          <input
            id="NBAM-replaceHomePageHeader"
            type="checkbox"
            v-model="settings.pega_marketing.replaceHomePageHeader"
          />
        </div>
      </div>
    </Container>
    <Container title="Home Page" expanded>
      <div class="layout-labels-top layout-inline-grid-double">
        <div class="field-item">
          <label for="NBAM-HomePage-ContainerName">Container Name</label>
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
          <label for="NBAM-HomePage-ClickAction">Click Action</label>
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
          <label for="NBAM-AccountPage-ContainerName">Container Name</label>
          <input
            id="NBAM-AccountPage-ContainerName"
            type="text"
            v-model="settings.pega_marketing.accountPage.containerName"
          />
        </div>
        <div class="field-item">
          <label for="NBAM-AccountPage-Placement">Placement (Hero or Tile)</label>
          <input
            id="NBAM-AccountPage-Placement"
            type="text"
            v-model="settings.pega_marketing.accountPage.placement"
          />
        </div>
        <div class="field-item">
          <label for="NBAM-AccountPage-ClickAction">Click Action</label>
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
          <label for="NBAM-PhonePage-ContainerName">Container Name</label>
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
          <label for="NBAM-PhonePage-ClickAction">Click Action</label>
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
          <label for="NBAM-OfferPage-ContainerName">Container Name</label>
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
          <label for="NBAM-OfferPage-ClickAction">Click Action</label>
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
