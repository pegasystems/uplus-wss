<template>
  <section
    v-if="
      userId !== -1 &&
      typeof settings.users[userId].accountdetails !== 'undefined' &&
      settings.users[userId].accountdetails.length > 0
    "
    class="account-details primary-card"
  >
    <h3>{{ settings.todo.accountdetailsheading }}</h3>
    <div
      class="flex"
      v-for="(items, index) in settings.users[userId].accountdetails"
      :key="index"
    >
      <div v-for="item in items" :key="item.label">
        <label>{{ item.label }}</label>
        <span v-if="typeof item.desc !== 'undefined' && item.desc !== ''">
          {{ item.desc }}
        </span>
        <template v-if="item.value !== ''">
          <p v-if="item.type === 'currency'">
            {{ $n(item.value, 'currency') }}
          </p>
          <p v-else-if="item.type === 'number'">
            {{ $n(item.value) }}
          </p>
          <p v-else-if="item.type === 'date'">{{ $d(item.value, 'short') }}</p>
          <p v-else-if="item.type === 'duedate'">
            {{ $d(getDueBillDate(), 'short') }}
          </p>
          <p v-else>{{ item.value }}</p>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import { mainconfig } from '../../global';
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
  },
};
</script>
