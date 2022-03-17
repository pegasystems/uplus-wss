<template>
  <section class="banner">
    <div
      class="content-card flex"
      v-bind:style="{ backgroundColor: settings.banner.color }"
    >
      <div class="flex flex-grow-1 flex-mid-align">
        <i :class="'pi pi-3x ' + $t('message.banner_icon')"></i>
        <div class="flex flex-col flex-grow-1">
          <h3>{{ $t('message.banner_title') }}</h3>
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
    return mainconfig;
  },
  methods: {
    openBanner() {
      mainconfig.viewBanner = 1;
    },
  },
};
</script>
