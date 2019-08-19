<template>
  <div :class="'rts-overlay' + (isExpanded ? ' expanded' : '')">
    <button
      class="pi pi-polaris-solid rts-toggle rts-overlay-toggle"
      v-on:click="toggleRTSOverlay()"
      title="toggle RTS overlay"
    ></button>
    <div class="flex">
      <div class="flex flex-col">
        <img width="120" src="../../img/pega-logo.png" />
        <span>Real-time data streaming</span>
      </div>
      <button
        :class="'pi rts-toggle' + (isEnabled? ' pi-pause-solid pi-rts-error' : ' pi-play-solid')"
        v-on:click="toggleRTSFeature()"
        title="toggle RTS feature"
      ></button>
      <div class="comment">{{ msg }}</div>
    </div>
  </div>
</template>

<script>
import { mainconfig } from '../../global';

export default {
  data() {
    return Object.assign({}, mainconfig, {
      isExpanded: false,
      isEnabled: false,
      msg:
        'Click play to see real-time data stream being sent to Pega Marketing.',
    });
  },
  methods: {
    toggleRTSOverlay() {
      this.isExpanded = !this.isExpanded;
    },
    toggleRTSFeature() {
      this.isEnabled = !this.isEnabled;
      mainconfig.isRTSEnabled = this.isEnabled;
      if (this.isEnabled === true) {
        this.msg = '';
      } else {
        this.msg =
          'Click play to see real-time data stream being sent to Pega Marketing.';
      }
    },
  },
};
</script>
