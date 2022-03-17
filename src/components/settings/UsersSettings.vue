<template>
  <div class="container-transparent">
    <h2>Users</h2>
    <p>
      Configuration of the credentials for the users that can login into the
      application. Each user is mapped to a Pega Platform user.
    </p>
    <div v-for="(item, index) in settings.users" v-bind:key="index">
      <Container :title="'User ' + (index + 1)" :expanded="index === 0">
        <div class="layout-labels-left">
          <div class="field-item">
            <input
              type="checkbox"
              :id="'user-' + index + '-load_by_default'"
              v-model="item.load_by_default"
            />
            <label
              class="width-auto"
              :for="'user-' + index + '-load_by_default'"
              >Loaded by default</label
            >
          </div>
        </div>
        <div class="layout-inline-grid-double layout-labels-top">
          <div class="field-item">
            <label :for="'user-' + index + '-username'">Username</label>
            <input
              :id="'user-' + index + '-username'"
              type="text"
              v-model="item.username"
            />
          </div>
          <div class="field-item">
            <label :for="'user-' + index + '-password'">Password</label>
            <input
              :id="'user-' + index + '-password'"
              type="password"
              v-model="item.password"
            />
          </div>
          <div class="field-item">
            <label :for="'user-' + index + '-img'">Image</label>
            <input
              :id="'user-' + index + '-img'"
              type="text"
              v-model="item.img"
            />
          </div>
          <div class="field-item">
            <label :for="'user-' + index + '-company_name'">Company</label>
            <input
              :id="'user-' + index + '-company_name'"
              type="text"
              v-model="item.company_name"
            />
          </div>
          <div class="field-item">
            <label :for="'user-' + index + '-name'">Name</label>
            <input
              :id="'user-' + index + '-name'"
              type="text"
              v-model="item.name"
            />
          </div>
          <div class="field-item">
            <label :for="'user-' + index + '-billpay'">Bill amount</label>
            <input
              :id="'user-' + index + '-billpay'"
              type="text"
              v-model="item.billpay"
            />
          </div>
          <div class="field-item">
            <label :for="'user-' + index + '-pega_userid'">Pega userid</label>
            <input
              :id="'user-' + index + '-pega_userid'"
              type="text"
              v-model="item.pega_userid"
            />
          </div>
          <div class="field-item">
            <label :for="'user-' + index + '-pega_pwd'">Pega password</label>
            <input
              :id="'user-' + index + '-pega_pwd'"
              type="password"
              v-model="item.pega_pwd"
            />
          </div>
          <div class="field-item">
            <label :for="'user-' + index + '-otp_send_to'"
              >OTP send to (email or phone)</label
            >
            <input
              :id="'user-' + index + '-otp_send_to'"
              type="text"
              v-model="item.otp_send_to"
            />
          </div>
          <div class="field-item">
            <label :for="'user-' + index + '-accountid'"
              >Account ID (Mashup Chat)</label
            >
            <input
              :id="'user-' + index + '-accountid'"
              type="text"
              v-model="item.accountID"
            />
          </div>
          <div class="field-item">
            <label :for="'user-' + index + '-contactid'"
              >Contact ID (Mashup Chat)</label
            >
            <input
              :id="'user-' + index + '-contactid'"
              type="text"
              v-model="item.contactID"
            />
          </div>
          <div class="field-item">
            <label :for="'user-' + index + '-customerid'"
              >Customer ID (Customer Decision Hub)</label
            >
            <input
              :id="'user-' + index + '-customerid'"
              type="text"
              v-model="item.customerID"
            />
          </div>
        </div>
        <div class="layout-labels-top">
          <div class="field-item">
            <label :for="'user-' + index + '-extraparam'"
              >Extra parameters (for example 'key1=value1,key2=value2')</label
            >
            <textarea
              :id="'user-' + index + '-extraparam'"
              v-model="item.extraparam"
            />
          </div>
          <div class="field-item">
            <label :for="'user-' + index + '-dmm_context_data'"
              >Additional context data for Digital Messaging Manager (format:
              first_name=john,last_name=smith)</label
            >
            <textarea
              :id="'user-' + index + '-dmm_context_data'"
              v-model="item.dmm_context_data"
            />
          </div>
        </div>
      </Container>
    </div>
  </div>
</template>

<script>
import { mainconfig } from '../../global';
import Container from '../controls/Container.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    Container,
  },
};
</script>
