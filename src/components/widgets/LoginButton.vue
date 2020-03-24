<template>
  <div class="login">
    <button v-on:click="showLoginOverlay" class="launch-login">{{ $t('message.login')}}</button>
    <div
      v-clickoutside="{ handler: 'onClickOutLoginOverlay'}"
      class="overlay flex flex-col"
      :class="[isActive ? 'show' : 'hidden']"
    >
      <div class="field flex flex-col username">
        <select id="username" type="text" v-model="username">
          <option v-for="(item,index) in settings.users" v-bind:key="index">{{item.username}}</option>
        </select>
        <label for="username">{{$t('message.username')}}</label>
      </div>
      <div class="field flex flex-col password">
        <input id="password" type="password" v-model="password" />
        <label for="password">{{$t('message.password')}}</label>
      </div>
      <button v-on:click="signIn" class="sign-in">{{$t('message.signin')}}</button>
      <span class="error" v-if="hasErrorMsg">{{$t('message.invalidLogin')}}</span>
    </div>
  </div>
</template>

<script>
import { mainconfig, updatePegaChat } from '../../global';

export default {
  data() {
    return {
      ...mainconfig,
      isActive: false,
      hasErrorMsg: false,
      username: '',
      password: '',
    };
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
          updatePegaChat(this.settings.users[i]);
          break;
        }
      }
      mainconfig.isAuthenticated = isLoginSuccess;
      if (window.history) {
        if (mainconfig.isMobilePhone) {
          window.history.pushState(
            { userId: mainconfig.userId },
            '',
            mainconfig.phonePageName === ''
              ? 'index.html'
              : mainconfig.phonePageName,
          );
        } else {
          window.history.pushState(
            { userId: mainconfig.userId },
            '',
            'account',
          );
        }
      }
      if (!isLoginSuccess) {
        this.hasErrorMsg = true;
      } else {
        this.isActive = false;
      }
    },
  },
};
</script>
