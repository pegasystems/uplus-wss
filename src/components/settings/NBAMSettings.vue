<template>
  <div class="flex flex-col padding-2x">
    <p>General</p>
    <div class="layout-labels-left secondary-card">
      <div class="field-item">
        <label for="NBAM-Host">Host</label>
        <input id="NBAM-Host" type="text" v-model="settings.pega_marketing.Host">
      </div>
      <div class="field-item">
        <label for="NBAM-Port">Port</label>
        <input id="NBAM-Port" type="text" v-model="settings.pega_marketing.Port">
      </div>
    </div>
    <p>Home Page</p>
    <div class="layout-labels-left secondary-card">
      <div class="field-item">
        <label for="NBAM-HomePage-ContainerName">Container Name</label>
        <input
          id="NBAM-HomePage-ContainerName"
          type="text"
          v-model="settings.pega_marketing.homePage.containerName"
        >
      </div>
      <div class="field-item">
        <label for="NBAM-HomePage-MaxOffers">Max offers</label>
        <input
          id="NBAM-HomePage-MaxOffers"
          type="text"
          v-model="settings.pega_marketing.homePage.maxOffers"
        >
      </div>
    </div>
    <p>Account Page</p>
    <div class="layout-labels-left secondary-card">
      <div class="field-item">
        <label for="NBAM-AccountPage-ContainerName">Container Name</label>
        <input
          id="NBAM-AccountPage-ContainerName"
          type="text"
          v-model="settings.pega_marketing.accountPage.containerName"
        >
      </div>
      <div class="field-item">
        <label for="NBAM-AccountPage-MaxOffers">Max offers</label>
        <input
          id="NBAM-AccountPage-MaxOffers"
          type="text"
          v-model="settings.pega_marketing.accountPage.maxOffers"
        >
      </div>
    </div>
    <p>Phone Page</p>
    <div class="layout-labels-left secondary-card">
      <div class="field-item">
        <label for="NBAM-PhonePage-ContainerName">Container Name</label>
        <input
          id="NBAM-PhonePage-ContainerName"
          type="text"
          v-model="settings.pega_marketing.phonePage.containerName"
        >
      </div>
      <div class="field-item">
        <label for="NBAM-PhonePage-MaxOffers">Max offers</label>
        <input
          id="NBAM-PhonePage-MaxOffers"
          type="text"
          v-model="settings.pega_marketing.phonePage.maxOffers"
        >
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
