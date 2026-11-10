<template>
  <div class="container-transparent">
    <h2>Community</h2>
    <p>
      Configuration of the community page displayed in an iframe when clicking
      on the "Community" link in the header. Enter an empty 'URL' to disable
      this functionality.
    </p>
    <div class="container">
      <div class="body">
        <div class="layout-labels-top layout-inline-grid-double">
          <div class="field-item">
            <label for="community-url">URL</label>
            <input
              id="community-url"
              type="text"
              v-model="settings.community.url"
            />
          </div>
          <div class="field-item">
            <label for="community-username"
              >Username (for unauthenticated access)</label
            >
            <input
              id="community-username"
              type="text"
              v-model="settings.community.username"
            />
          </div>
          <div class="field-item">
            <label for="community-password"
              >Password (for unauthenticated access)</label
            >
            <input
              id="community-password"
              type="password"
              v-model="settings.community.password"
            />
          </div>
        </div>
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
