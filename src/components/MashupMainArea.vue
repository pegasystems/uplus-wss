<template>
  <PegaWebMashup v-if="settings.general.connection.type === 'mashup'"/>
  <WebComponent v-else/>
</template>

<script>
import { mainconfig } from '../global';
import PegaWebMashup from './PegaWebMashup.vue';
import WebComponent from './WebComponent.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    PegaWebMashup,
    WebComponent,
  },
};
</script>
