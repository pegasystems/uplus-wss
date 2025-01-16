<template>
  <PegaWebMashup v-if="settings.general.connection.type === 'mashup'" />
  <WebEmbed
    v-else-if="settings.general.connection.type.startsWith('embedui') || settings.general.connection.type === 'launchpad'"
  />
  <WebComponent v-else />
</template>

<script>
import { mainconfig } from '../global';
import PegaWebMashup from './PegaWebMashup.vue';
import WebComponent from './WebComponent.vue';
import WebEmbed from './WebEmbed.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    PegaWebMashup,
    WebComponent,
    WebEmbed,
  },
};
</script>
