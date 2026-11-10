<template>
  <iframe
    ref="frame"
    class="community-frame"
    title="Community"
    scrolling="no"
    :src="settings.community.url"
    :style="{ minHeight: frameHeight }"
    allow="clipboard-read; clipboard-write"
  ></iframe>
</template>

<script>
import { mainconfig } from '../global';

export default {
  data() {
    return { ...mainconfig, frameHeight: 'calc(100vh - 150px)' };
  },
  mounted() {
    window.addEventListener('message', this.onResizeMessage);
  },
  unmounted() {
    window.removeEventListener('message', this.onResizeMessage);
  },
  methods: {
    /* The embedded page posts { type: 'resize', height } whenever its content height changes */
    onResizeMessage(e) {
      const frame = this.$refs.frame;
      if (!frame || e.source !== frame.contentWindow) return;
      if (!e.data || e.data.type !== 'resize') return;
      const height = Number(e.data.height);
      if (Number.isFinite(height) && height > 0) {
        this.frameHeight = `${Math.ceil(height)}px`;
      }
    },
  },
};
</script>
