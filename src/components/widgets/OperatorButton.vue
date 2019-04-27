<template>
  <div class="flex">
    <div v-if="isNamePresent" class="flex flex-col">
      <span v-if="settings.users[userId]">{{ settings.users[userId].name }}</span>
      <span v-if="settings.users[userId]">{{ settings.users[userId].company_name }}</span>
    </div>
    <img
      v-if="userId!=-1"
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
import { mainconfig } from '../../global';

export default {
  data() {
    return Object.assign({}, mainconfig, {
      isActive: false,
    });
  },
  methods: {
    showOverlay() {
      this.isActive = !this.isActive;
    },
    onClickOutOverlay(event) {
      if (!event.target.classList.contains('avatar')) {
        this.isActive = false;
      }
    },
    logOut() {
      mainconfig.isAuthenticated = false;
      mainconfig.userId = -1;
      mainconfig.quickLinkId = -1;
    },
  },
  computed: {
    isNamePresent() {
      if (
        mainconfig.isMobilePhone ||
        mainconfig.userId === -1 ||
        mainconfig.settings.users[mainconfig.userId].name === '' ||
        mainconfig.settings.users[mainconfig.userId].company_name === ''
      ) {
        return false;
      }
      return true;
    },
  },
};
</script>
