<template>
  <section>
    <div class="header flex flex-mid-align">
      <h2>{{ $t("message.accounts") }}</h2>
      <input type="text" class="filter" placeholder="Search past services">
      <i class="pi pi-search"></i>
    </div>
    <table class="content responsive">
      <thead>
        <tr>
          <th>Account number</th>
          <th>Name</th>
          <th>ID</th>
          <th class="align-r">Yesterday's balance</th>
          <th class="align-r">Today's balance</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in settings.users[userId].accounts"
          v-bind:key="item.id"
          v-bind:title="item.id"
        >
          <td data-title="Account number">
            <a>{{ item.number }}</a>
          </td>
          <td data-title="Name">{{ item.name }}</td>
          <td data-title="ID">{{ item.id }}</td>
          <td
            data-title="Yesterday's balance"
            class="align-r"
          >{{ $n(item.previous_balance, 'currency') }}</td>
          <td
            data-title="Today's balance"
            class="align-r"
          >{{ $n(item.current_balance, 'currency') }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import { mainconfig } from '../../global';

export default {
  data() {
    return mainconfig;
  },
};
</script>
