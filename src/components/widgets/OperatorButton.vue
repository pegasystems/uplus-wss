<template>
  <div class="flex">
    <div v-if="isNamePresent" class="flex flex-col">
      <span>{{ settings.users[userId].name }}</span>
      <span>{{ settings.users[userId].company_name }}</span>
    </div>
    <img
      v-on:click="showOverlay"
      class="avatar"
      :src="'../img/' + settings.users[userId].img"
      alt="Customer image"
    >
    <div
      v-clickoutside="{ handler: 'onClickOutOverlay'}"
      class="overlay flex flex-col"
      :class="[isActive ? 'show' : 'hidden']"
    >
      <button v-on:click="logOut" class="simple">{{$t('message.logout')}}</button>
    </div>
  </div>
</template>

<script>
import { mainconfig } from "../../global";
export default {
  data: function() {
    return Object.assign({}, mainconfig, {
      isActive: false
    });
  },
  methods: {
    showOverlay: function(event) {
      this.isActive = !this.isActive;
    },
    onClickOutOverlay: function(event) {
      if (!event.target.classList.contains("avatar")) {
        this.isActive = false;
      }
    },
    logOut: function(event) {
      mainconfig.isAuthenticated = false;
      mainconfig.userId = -1;
      mainconfig.quickLinkId = -1;
    }
  },
  computed: {
    isNamePresent: function() {
      if (
        mainconfig.settings.users[mainconfig.userId].name === "" ||
        mainconfig.settings.users[mainconfig.userId].company_name === ""
      ) {
        return false;
      }
      return true;
    }
  }
};
</script>