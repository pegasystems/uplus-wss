<template>
  <div class="login">
    <button v-on:click="showLoginOverlay" class="launch-login">{{ $t('message.login')}}</button>
    <div
      v-clickoutside="{ handler: 'onClickOutLoginOverlay'}"
      class="overlay flex flex-col"
      :class="[isActive ? 'show' : 'hidden']"
    >
      <div class="field flex flex-col username">
        <select
          id="username"
          type="text"
          v-model="username"
        ><option v-for="(item,index) in settings.users" v-bind:key="index" value:="item.username">{{item.username}}</option></select>
        <label for="username">{{$t('message.username')}}</label>
      </div>
      <div class="field flex flex-col password">
        <input id="password" type="password" v-model="password">
        <label for="password">{{$t('message.password')}}</label>
      </div>
      <button v-on:click="signIn" class="sign-in">{{$t('message.signin')}}</button>
      <span class="error" v-if="hasErrorMsg">{{$t('message.invalidLogin')}}</span>
    </div>
  </div>
</template>

<script>
import { mainconfig } from '../../global';

export default {
  data() {
    return Object.assign({}, mainconfig, {
      isActive: false,
      hasErrorMsg: false,
      username: '',
      password: '',
    });
  },
  methods: {
    showLoginOverlay() {
      this.isActive = !this.isActive;
      /* Find if a default user is defined */
      for (const i in this.settings.users) {
        if (this.settings.users[i].load_by_default) {
          this.username = this.settings.users[i].username;
          this.password = this.settings.users[i].password;
          break;
        }
      }
    },
    onClickOutLoginOverlay(event) {
      if (
        !event.target.classList.contains('launch-login') &&
        !event.target.classList.contains('launch-login-overlay')
      ) {
        this.isActive = false;
      }
    },
    signIn() {
      /* Validate the password */
      let isLoginSuccess = false;
      mainconfig.userId = -1;
      for (const i in this.settings.users) {
        if (
          this.settings.users[i].username === this.username &&
          this.settings.users[i].password === this.password
        ) {
          isLoginSuccess = true;
          mainconfig.userId = i;

          /* Delete the preview gadget */
          const elPreview = document.querySelector(
            "[data-pega-gadgetname='PreviewGadget']",
          );
          if (elPreview != null) {
            elPreview.remove();
          }

          /* Update PegaChat and pass the correct ContactId, AccountNumber and username */
          const el = document.querySelector(
            "[data-pega-gadgetname='OnlineHelp'] > iframe",
          );
          if (el != null && typeof el.src === 'string') {
            const u = this.settings.users[i];
            let updatedSrc = `${el.src}&ContactId=${
              u.contactID
            }&AccountNumber=${u.accountID}&username=${u.username}`;
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
          break;
        }
      }
      mainconfig.isAuthenticated = isLoginSuccess;
      window.history.pushState({ userId: mainconfig.userId }, '', 'account.html');

      if (!isLoginSuccess) this.hasErrorMsg = true;
    },
  },
};
</script>
