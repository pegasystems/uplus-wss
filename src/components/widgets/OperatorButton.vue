<template>
  <div class="flex">
    <div v-if="isNamePresent" class="flex flex-col margin-r-2x">
      <span v-if="settings.users[userId]">{{
        settings.users[userId].name
      }}</span>
      <span v-if="settings.users[userId]">{{
        settings.users[userId].company_name
      }}</span>
    </div>
    <img
      v-if="userId != -1"
      v-on:click="showOverlay"
      class="avatar"
      :src="'../img/' + settings.users[userId].img"
      alt="Customer image"
    />
    <div
      v-clickoutside="{ handler: 'onClickOutOverlay' }"
      class="overlay logout flex flex-col"
      :class="[isActive ? 'show' : 'hidden']"
    >
      <button v-on:click="logOut" class="simple">
        {{ $t('message.logout') }}
      </button>
    </div>
  </div>
</template>

<script>
import { mainconfig, setCookie } from '../../global';
import { sendClickStreamEvent } from '../../CDHIntegration';
import generateJWTKey from '../../JWTToken';

export default {
  data() {
    return { ...mainconfig, isActive: false };
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
      sendClickStreamEvent(mainconfig, 'PageView', 'Home', window.loadPage);
      window.loadPage = new Date();
      mainconfig.isAuthenticated = false;
      mainconfig.userId = -1;
      mainconfig.quickLinkId = -1;
      mainconfig.viewBill = -1;
      mainconfig.homeHeroAction = -1;
      mainconfig.offerAction = -1;
      mainconfig.toDo = -1;
      mainconfig.viewKMHelp = -1;
      mainconfig.viewBanner = -1;
      mainconfig.CDHContainer = {};
      mainconfig.offerURL = '';
      mainconfig.previousPage = '';
      mainconfig.intent = '';
      mainconfig.isDeepLink = false;
      mainconfig.deepLinkExtraParam = {};
      if (window.history) {
        if (mainconfig.isMobilePhone) {
          mainconfig.phonePageName = '';
          window.history.pushState(
            { userId: mainconfig.userId },
            '',
            'index.html',
          );
        } else {
          mainconfig.currentPage = 'index.html';
          window.history.replaceState({}, '', mainconfig.currentPage);
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 0);
        }
      }
      // Issue logout request for each url present in the list */
      for (const servurl in mainconfig.logoutURL) {
        const testiframe = document.createElement('iframe');
        const urllogout = mainconfig.logoutURL[servurl];
        testiframe.setAttribute('src', urllogout);
        testiframe.setAttribute('style', 'display:none');
        testiframe.onload = function onloadMashup() {
          document.body.removeChild(testiframe);
        };
        document.body.appendChild(testiframe);
      }
      mainconfig.logoutURL = {};
      window.PegaCSWSS.ContactID = '';
      window.PegaCSWSS.AccountNumber = '';
      window.PegaCSWSS.UserName = '';
      window.PegaCSWSS.UserID = '';
      window.PegaCSWSS.ExtraParams = {};
      window.PegaChatTags = {};
      setCookie('ContactID', window.PegaCSWSS.ContactID, 30);
      setCookie('AccountNumber', window.PegaCSWSS.AccountNumber, 30);
      setCookie('UserName', window.PegaCSWSS.UserName, 30);
      setCookie('UserID', window.PegaCSWSS.UserID, 30);
      if (
        mainconfig.settings.pega_chat.DMMSecret !== '' &&
        mainconfig.userId !== -1 &&
        window.PegaCSWSS.DMMSessionID !== ''
      ) {
        const privateData = {
          authenticated: mainconfig.userId !== -1,
          ContactID: window.PegaCSWSS.ContactID,
          AccountNumber: window.PegaCSWSS.AccountNumber,
          UserName: window.PegaCSWSS.UserName,
          UserID: window.PegaCSWSS.UserID,
        };
        const jwttoken = generateJWTKey(
          { iss: window.PegaCSWSS.DMMSessionID },
          mainconfig.settings.pega_chat.DMMSecret,
        );
        const request = new XMLHttpRequest();
        request.open('POST', mainconfig.settings.pega_chat.DMMPrivateURL, true);
        request.setRequestHeader(
          'Content-type',
          'application/json;charset=UTF-8',
        );
        request.setRequestHeader('authorization', `Bearer ${jwttoken}`);
        request.send(JSON.stringify(privateData));
      }
      /* Update PegaChat and remove ContactId, AccountNumber and username */
      const el = document.querySelector(
        "[data-pega-gadgetname='OnlineHelp'] > iframe",
      );
      if (el != null && typeof el.src === 'string') {
        if (
          mainconfig.settings.pega_chat.ResetLogout === true &&
          typeof window.resetPegaChat === 'function'
        ) {
          window.resetPegaChat();
        } else {
          const listparams = el.src.split('&');
          let updatedSrc = '';
          for (const i in listparams) {
            if (
              !listparams[i].startsWith('ContactId=') &&
              !listparams[i].startsWith('AccountNumber=') &&
              !listparams[i].startsWith('username=')
            ) {
              updatedSrc += (updatedSrc !== '' ? '&' : '') + listparams[i];
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
          const parentNode = el.parentNode;
          el.remove();
          el.src = updatedSrc;
          parentNode.appendChild(el);
        }
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
