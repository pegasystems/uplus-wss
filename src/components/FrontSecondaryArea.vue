<template>
  <div class="wrap secondary-options">
    <div
      class="banner"
      v-bind:style="{ backgroundImage: 'url(img/secondary-options.jpg)' }"
    ></div>
    <div class="content-card flex flex-col">
      <h2>
        {{ $t(`message.${app.secondarydetails.heading}`) }}
      </h2>
      <button class="strong">
        {{ $t(`message.${app.secondarydetails.link}`) }}
      </button>
    </div>
  </div>
</template>

<script>
import { mainconfig } from '../global';

export default {
  data() {
    return mainconfig;
  },
};
</script>
