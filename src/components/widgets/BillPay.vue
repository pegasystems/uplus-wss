<template>
  <section class="bill-pay">
    <h2>{{ $t("message.billpay") }}</h2>
    <div class="content-card flex flex-col-3">
      <div class="list-box">
        <h3>{{ $t("message.amountdue") }}</h3>
        <p>{{ $n(164.80, 'currency') }}</p>
        <button v-on:click="openBill()">{{ $t("message.paynow") }}</button>
      </div>
      <div class="list-box">
        <h3>{{ $t("message.billdue") }}</h3>
        <p>{{ $d(getDueBillDate(), 'short') }}</p>
        <a v-on:click="openBill()">{{ $t("message.viewbill") }}</a>
      </div>
      <div class="flex flex-nowrap">
        <i class="pi pi-cancel pi-3x pi-grey"></i>
        <div class="list-box">
          <h3 v-if="isBillPayActive">{{ $t("message.autopay") + $t("message.off") }}</h3>
          <h3 v-else>{{ $t("message.autopay") + $t("message.on") }}</h3>
          <button class="simple" v-on:click="enrollInBillPay">{{ $t("message.autopay_enroll") }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mainconfig } from "../../global";

export default {
  data: function() {
    return Object.assign({}, mainconfig, {
      isBillPayActive: false
    });
  },
  methods: {
    getDueBillDate: function() {
      /* Always make the first event on the 15th of the next month */
      var myDate = new Date();
      if (myDate.getDate() > 16) {
        if (myDate.getMonth() == 12) {
          myDate.setMonth(myDate.getMonth() + 1);
        } else {
          myDate.setMonth(1);
        }
      }
      myDate.setDate(15);
      return myDate;
    },
    enrollInBillPay: function() {
      this.isBillPayActive = !this.isBillPayActive;
    },
    openBill: function() {
      mainconfig.viewBill = 1;
    }
  }
};
</script>
