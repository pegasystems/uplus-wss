<template>
  <div :class="'rts-overlay' + (isExpanded ? ' expanded' : '')">
    <button
      class="pi pi-stopwatch-solid rts-toggle rts-overlay-toggle"
      v-on:click="toggleRTSOverlay()"
      title="toggle RTS overlay"
    ></button>
    <div class="flex">
      <div class="flex flex-1">
        <div class="flex flex-col">
          <div class="rts-logo"></div>
          <span>Real-time data streaming</span>
        </div>
        <button
          :class="
            'pi rts-enable rts-toggle' +
            (isEnabled ? ' pi-pause-solid pi-rts-error' : ' pi-play-solid')
          "
          v-on:click="toggleRTSFeature()"
          title="toggle RTS feature"
        ></button>
      </div>
      <div class="comment">{{ msg }}</div>
    </div>
  </div>
</template>

<script>
import { mainconfig } from '../../global';

export default {
  data() {
    return {
      ...mainconfig,
      isExpanded: false,
      isEnabled: false,
      msg: 'Click play to enable detection of user patterns.',
    };
  },
  methods: {
    toggleRTSOverlay() {
      this.isExpanded = !this.isExpanded;
    },
    toggleRTSFeature() {
      this.isEnabled = !this.isEnabled;
      mainconfig.isRTSEnabled = this.isEnabled;
    },
  },
};
</script>
