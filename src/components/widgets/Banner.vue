<template>
  <section class="banner">
    <div
      class="content-card flex"
      v-bind:style="{
        backgroundColor: settings.banner.color,
        color: textColor,
      }"
    >
      <div class="flex flex-grow-1 flex-mid-align">
        <i :class="'pi pi-3x ' + $t('message.banner_icon')"></i>
        <div class="flex flex-col flex-grow-1">
          <p>{{ $t('message.banner_title') }}</p>
          <p>{{ $t('message.banner_desc') }}</p>
        </div>
        <button
          v-if="settings.banner.hidebanner_button != true"
          v-on:click="openBanner()"
        >
          {{ $t('message.banner_action') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { mainconfig } from '../../global';

export default {
  data() {
    const bigint = parseInt(mainconfig.settings.banner.color.substring(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    var a = 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    let textColor = a < 0.5 ? 'black' : 'white';
    return { ...mainconfig, textColor };
  },
  methods: {
    openBanner() {
      mainconfig.viewBanner = 1;
    },
  },
};
</script>
