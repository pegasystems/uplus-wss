<template>
  <section
    class="account-picker"
    v-if="
      userId !== -1 &&
      typeof settings.users[userId].accountpicker !== 'undefined' &&
      settings.users[userId].accountpicker.length > 0
    "
  >
    <h3>{{ settings.todo.accountpickerheading }}</h3>
    <Tabs :defaultSelectedIndex="settings.users[userId].focustabindex">
      <TabItem
        v-for="item in settings.users[userId].accountpicker"
        :key="item.title"
        :title="item.title"

      >
        <div class="flex flex-nowrap">
          <img
            v-if="typeof item.img !== 'undefined' && item.img !== ''"
            class="account-img"
            :src="item.img"
            :alt="item.title"
          />
          <div class="account-picker-details">
            <div v-for="info in item.details" :key="info.label">
              <label>{{ info.label }}</label>
              <template v-if="info.value !== ''">
                <p v-if="info.type === 'currency'">
                  {{ $n(info.value, 'currency') }}
                </p>
                <p v-else-if="info.type === 'number'">
                  {{ $n(info.value) }}
                </p>
                <p v-else-if="info.type === 'date'">
                  {{ $d(info.value, 'short') }}
                </p>
                <p v-else-if="info.type === 'duedate'">
                  {{ $d(getDueBillDate(), 'short') }}
                </p>
                <p v-else>{{ info.value }}</p>
              </template>
            </div>
          </div>
          <div class="flex flex-col account-view-details">
            <a class="account-view-details">{{ $t('message.viewdetails') }}</a>
            <button
              v-if="
                typeof settings.billpay !== 'undefined' &&
                settings.billpay.hidebillpay !== 'true' &&
                settings.billpay.hidebillpay !== true &&
                item.showbillpay === true
              "
              class="strong margin-t-2x"
              v-on:click="openBill()"
            >
              {{ $t('message.paynow') }}
            </button>
          </div>
        </div>
      </TabItem>
    </Tabs>
  </section>
</template>

<script>
import { mainconfig } from '../../global';
import Tabs from '../controls/Tabs.vue';
import TabItem from '../controls/TabItem.vue';

export default {
  data() {
    return mainconfig;
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
    openBill() {
      mainconfig.viewBill = 1;
    },
  },
  components: {
    Tabs,
    TabItem,
  },
};
</script>
