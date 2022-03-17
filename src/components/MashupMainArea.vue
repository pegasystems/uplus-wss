<template>
  <PegaWebMashup v-if="settings.general.connection.type === 'mashup'" />
  <WebEmbed v-else-if="settings.general.connection.type === 'embedui'" />
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
