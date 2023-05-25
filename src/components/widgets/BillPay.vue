<template>
  <section v-if="app.industry !== 'wealth'" class="bill-pay primary-card">
    <h3>{{ $t('message.billpay') }}</h3>
    <div class="content-card flex flex-col-all">
      <div class="list-box">
        <span>{{ $t('message.amountdue') }}</span>
        <p v-if="settings.users[userId] && settings.users[userId].billpay">
          {{ $n(settings.users[userId].billpay, 'currency') }}
        </p>
        <button v-on:click="openBill()">{{ $t('message.paynow') }}</button>
      </div>
      <div class="list-box">
        <span>{{ $t('message.billdue') }}</span>
        <p>{{ $d(getDueBillDate(), 'short') }}</p>
        <button class="simple" v-on:click="openBill()">
          {{ $t('message.viewbill') }}
        </button>
      </div>
      <div v-if="isBillPayActive" class="list-box">
        <span>{{ $t('message.autopay') }}</span>
        <p>
          <i class="pi pi-cancel pi-grey"></i>
          {{ $t('message.on') }}
        </p>
        <button class="simple" v-on:click="enrollInBillPay()">
          {{ $t('message.autopay_suspend') }}
        </button>
      </div>
      <div v-else class="list-box">
        <span>{{ $t('message.autopay') }}</span>
        <p>
          <i class="pi pi-circle-check pi-grey"></i>
          {{ $t('message.off') }}
        </p>
        <button class="simple" v-on:click="enrollInBillPay()">
          {{ $t('message.autopay_enroll') }}
        </button>
      </div>
    </div>
  </section>
  <section v-else class="bill-pay">
    <h3>{{ $t('message.billpay') }}</h3>
    <div class="content-card flex flex-col-all">
      <div class="list-box">
        <span>{{ $t('message.amountdue') }}</span>
        <p v-if="settings.users[userId] && settings.users[userId].billpay">
          {{ $n(settings.users[userId].billpay, 'currency') }}
        </p>
      </div>
      <div class="list-box">
        <span>{{ $t('message.billdue') }}</span>
        <p>{{ $d(getDueBillDate(), 'short') }}</p>
      </div>
      <div class="list-box">
        <span>{{ $t('message.autopay') }}</span>
        <p v-if="settings.users[userId]">{{ settings.users[userId].roi }}%</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mainconfig } from '../../global';

export default {
  data() {
    return {
      ...mainconfig,
      isBillPayActive: false,
    };
  },
  methods: {
    getDueBillDate() {
      /* Always make the first event on the 15th of the next month */
      const myDate = new Date();
      if (myDate.getDate() > 16) {
        myDate.setMonth((myDate.getMonth() + 1) % 12);
      }
      myDate.setDate(15);
      return myDate;
    },
    enrollInBillPay() {
      this.isBillPayActive = !this.isBillPayActive;
    },
    openBill() {
      mainconfig.viewBill = 1;
    },
  },
};
</script>
