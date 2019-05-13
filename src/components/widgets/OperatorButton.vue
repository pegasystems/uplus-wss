<template>
  <div class="flex">
    <div v-if="isNamePresent" class="flex flex-col margin-r-2x">
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

      /* Update PegaChat and remove ContactId, AccountNumber and username */
      const el = document.querySelector(
        "[data-pega-gadgetname='PreviewGadget'] > iframe",
      );
      if (el != null && typeof el.src === 'string') {
        const listparams = el.src.split('&');
        let updatedSrc = '';
        for (const i in listparams) {
          if (
            !listparams[i].startsWith('ContactId=') &&
            !listparams[i].startsWith('AccountNumber=') &&
            !listparams[i].startsWith('username=')
          ) {
            updatedSrc +=
              listparams[i] + (i > 0 && i + 1 < listparams.length ? '&' : '');
          }
        }
        if (updatedSrc.indexOf('timestamp') > -1) {
          updatedSrc = updatedSrc.replace(
            /timestamp=[^&]+/,
            `timestamp=${Date.now()}`,
          );
        } else {
          // Else we will append the timestamp
          updatedSrc += `&timestamp=${Date.now()}`;
        }
        el.src = updatedSrc;
        el.contentWindow.location.reload(true);
      }
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
