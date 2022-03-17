<template>
  <main class="flex flex-col">
    <TopNav previousPhonePage>
      <button v-if="!isOTP" v-on:click="signIn" class="sign-in">
        {{ $t('message.signin') }}
      </button>
    </TopNav>
    <div class="layout-stacked primary-card">
      <h1 class="small">{{ $t('message.phone_login_title') }}</h1>
      <div v-if="!isOTP" class="field-item">
        <input
          id="username"
          type="text"
          v-model="username"
          :placeholder="$t('message.username')"
        />
        <label for="username">{{ $t('message.username') }}</label>
      </div>
      <div v-if="!isOTP" class="field-item">
        <input
          id="password"
          type="password"
          v-model="password"
          :placeholder="$t('message.password')"
        />
        <label for="password">{{ $t('message.password') }}</label>
      </div>
      <div v-if="isOTP" class="flex flex-col">
        <label for="otp">{{ $t('message.otp') }}</label>
        <input id="otp" type="text" name="otp" v-model="otp" />
      </div>
      <div v-if="isOTP" class="flex flex-col padding-t-2x">
        <button v-on:click="signInOtp" class="centered sign-in">
          {{ $t('message.signin') }}
        </button>
      </div>
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
    <div class="bottom-banner">
      <a>
        <i class="pi pi-phone-out" />
        {{ $t('message.phone_login_speak_agent') }}
      </a>
    </div>
  </main>
</template>

<script>
import { mainconfig, updatePegaChat } from '../../global';
import TopNav from './TopNav.vue';
import { setAuth, validateOTP, requestOTP } from '../../OTBAuth';

export default {
  data() {
    /* Find if a default user is defined */
    let username = '';
    let password = '';
    for (const i in mainconfig.settings.users) {
      if (mainconfig.settings.users[i].load_by_default) {
        username = mainconfig.settings.users[i].username;
        password = mainconfig.settings.users[i].password;
        break;
      }
    }
    return {
      ...mainconfig,
      isActive: false,
      hasErrorMsg: false,
      username,
      password,
      otp_enabled: mainconfig.settings.general.auth_2fa.enabled,
      isOTPInvalid: false,
      OTPRequestFailed: false,
      isOTP: false,
      userID: -1,
      otp: '',
      otpRefId: '',
    };
  },
  components: {
    TopNav,
  },
  methods: {
    signIn() {
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

    confirmLogin() {
      mainconfig.isAuthenticated = true;
      mainconfig.userId = this.userID;
      updatePegaChat(this.settings.users[this.userID]);
      if (window.history) {
        if (mainconfig.isAuthenticated) {
          window.history.pushState(
            { userId: mainconfig.userId },
            '',
            mainconfig.phonePageName === ''
              ? 'index.html'
              : mainconfig.phonePageName,
          );
        } else {
          window.history.pushState(
            {},
            '',
            mainconfig.phonePageName === ''
              ? 'index.html'
              : mainconfig.phonePageName,
          );
        }
      }
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
