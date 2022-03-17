<template>
  <div class="login">
    <button v-on:click="showLoginOverlay" class="launch-login">
      {{ $t('message.login') }}
    </button>
    <div
      v-clickoutside="{ handler: 'onClickOutLoginOverlay' }"
      class="overlay flex flex-col"
      :class="[isActive ? 'show' : 'hidden']"
    >
      <div v-if="!isOTP" class="field flex flex-col username">
        <select id="username" v-model="username">
          <option v-for="(item, index) in settings.users" v-bind:key="index">
            {{ item.username }}
          </option>
        </select>
        <label for="username">{{ $t('message.username') }}</label>
      </div>
      <div v-if="!isOTP" class="field flex flex-col password">
        <input id="password" type="password" v-model="password" />
        <label for="password">{{ $t('message.password') }}</label>
      </div>
      <div v-if="isOTP" class="field flex flex-col">
        <label for="otp">{{ $t('message.otp') }}</label>
        <input id="otp" type="text" name="otp" v-model="otp" />
      </div>
      <button v-if="isOTP" v-on:click="signInOtp" class="sign-in">
        {{ $t('message.signin') }}
      </button>
      <button v-else v-on:click="signIn" class="sign-in">
        {{ $t('message.signin') }}
      </button>
      <span v-if="hasErrorMsg" class="error">{{
        $t('message.invalidLogin')
      }}</span>
      <span v-if="isOTPInvalid" class="error">{{
        $t('message.invalidOTP')
      }}</span>
      <span v-if="OTPRequestFailed" class="error">{{
        $t('message.requestOTPFailed')
      }}</span>
    </div>
  </div>
</template>

<script>
import { mainconfig, updatePegaChat } from '../../global';
import { setAuth, validateOTP, requestOTP } from '../../OTBAuth';
import { sendClickStreamEvent } from '../../CDHIntegration';

export default {
  data() {
    return {
      ...mainconfig,
      isActive: false,
      hasErrorMsg: false,
      username: '',
      password: '',
      otp_enabled: mainconfig.settings.general.auth_2fa.enabled,
      isOTPInvalid: false,
      OTPRequestFailed: false,
      isOTP: false,
      userID: -1,
      otp: '',
      otpRefId: '',
    };
  },
  methods: {
    showLoginOverlay() {
      this.isActive = !this.isActive;
      this.isOTP = false;
      this.userID = -1;
      this.hasErrorMsg = false;
      this.isOTPInvalid = false;
      this.OTPRequestFailed = false;
      this.otp = '';
      this.otpRefId = '';
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
    confirmLogin() {
      mainconfig.isAuthenticated = true;
      mainconfig.userId = this.userID;
      updatePegaChat(this.settings.users[this.userID]);
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
          mainconfig.currentPage = 'account';
          window.history.pushState(
            { userId: mainconfig.userId },
            '',
            'account',
          );
        }
      }
      sendClickStreamEvent(mainconfig, 'PageView', 'Account', window.loadPage);
      window.loadPage = new Date();
      this.isActive = false;
    },
    signIn() {
      /* Validate the password */
      mainconfig.userId = -1;
      this.userID = -1;
      for (const i in this.settings.users) {
        if (
          this.settings.users[i].username === this.username &&
          this.settings.users[i].password === this.password
        ) {
          this.userID = i;
          break;
        }
      }
      if (this.userID === -1) {
        this.hasErrorMsg = true;
        return;
      }
      if (this.otp_enabled) {
        this.isOTP = true;
        this.sendOTPRequest(this.settings.users[this.userID].otp_send_to);
        return;
      }
      this.confirmLogin();
    },

    async sendOTPRequest(sendTo) {
      /* Validate the password and OTP */
      const auth = setAuth(
        this.settings.users[this.userID].pega_userid,
        this.settings.users[this.userID].pega_pwd,
      );
      await requestOTP(this.settings.general.auth_2fa, auth, sendTo).then(
        (result) => {
          if (result.isSuccess) {
            this.isOTP = true;
            this.otpRefId = result.referenceID;
            this.OTPRequestFailed = false;
          } else {
            this.OTPRequestFailed = true;
          }
        },
      );
    },

    async signInOtp() {
      const auth = setAuth(
        this.settings.users[this.userID].pega_userid,
        this.settings.users[this.userID].pega_pwd,
      );
      await validateOTP(
        this.settings.general.auth_2fa,
        this.otpRefId,
        this.otp,
        auth,
      ).then((result) => {
        if (result) {
          this.confirmLogin();
        } else {
          this.isOTPInvalid = true;
        }
      });
    },
  },
};
</script>
