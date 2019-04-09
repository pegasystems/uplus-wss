<template>
  <main class="flex flex-col">
    <TopNav previousPage="home"/>
    <div class="flex flex-col padding-2x">
      <h1>{{ $t('message.phone_login_title')}}</h1>
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
  </main>
</template>

<script>
import { mainconfig } from "../../global";
import TopNav from "./TopNav.vue";
export default {
  data: function() {
    /* Find if a default user is defined */
    let username = "";
    let password = "";
    for (var i in mainconfig.settings.users) {
      if (mainconfig.settings.users[i].load_by_default) {
        username = mainconfig.settings.users[i].username;
        password = mainconfig.settings.users[i].password;
        break;
      }
    }
    return Object.assign({}, mainconfig, {
      isActive: false,
      hasErrorMsg: false,
      username: username,
      password: password
    });
  },
  components: {
    TopNav
  },
  methods: {
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