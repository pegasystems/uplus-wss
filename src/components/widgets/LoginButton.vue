<template>
  <div class="login">
    <button v-on:click="showLoginOverlay" class="launch-login">{{ $t('message.login')}}</button>
    <div
      v-clickoutside="{ handler: 'onClickOutLoginOverlay'}"
      class="overlay flex flex-col"
      :class="[isActive ? 'show' : 'hidden']"
    >
      <div class="field flex flex-col username">
        <input id="username" type="text" v-model="username">
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
import { mainconfig } from "../../global";
export default {
  data: function() {
    return Object.assign({}, mainconfig, {
      isActive: false,
      hasErrorMsg: false,
      username: "",
      password: ""
    });
  },
  methods: {
    showLoginOverlay: function(event) {
      this.isActive = !this.isActive;
      /* Find if a default user is defined */
      for (var i in this.settings.users) {
        if (this.settings.users[i].load_by_default) {
          this.username = this.settings.users[i].username;
          this.password = this.settings.users[i].password;
          break;
        }
      }
    },
    onClickOutLoginOverlay: function(event) {
      if (
        !event.target.classList.contains("launch-login") &&
        !event.target.classList.contains("launch-login-overlay")
      ) {
        this.isActive = false;
      }
    },
    signIn: function(event) {
      /* Validate the password */
      let isLoginSuccess = false;
      mainconfig.userId = -1;
      for (var i in settings.users) {
        if (
          this.settings.users[i].username === this.username &&
          this.settings.users[i].password === this.password
        ) {
          isLoginSuccess = true;
          mainconfig.userId = i;
          break;
        }
      }
      mainconfig.isAuthenticated = isLoginSuccess;

      if (!isLoginSuccess) this.hasErrorMsg = true;
    }
  }
};
</script>