<template>
  <section>
    <div class="header flex flex-mid-align">
      <h2>{{ $t("message.accounts") }}</h2>
      <input type="text" class="filter" value="Search..." placeholder="Search past services">
      <i class="pi pi-search"></i>
    </div>
    <table v-if="userId!=-1" class="content responsive">
      <thead>
        <tr>
          <th>Account number</th>
          <th>Name</th>
          <th>Type</th>
          <th class="align-r">Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr bgcolor="#f1f1f1">
          <th colspan="2">{{ $t("message.accounts_header_col1") }}</th>
          <th colspan="2" class="align-r">$1,679,072.63</th>
        </tr>

        <tr
          v-for="item in settings.users[userId].accounts"
          v-bind:key="item.id"
          v-bind:title="item.id"
        >
          <td data-title="Account number">
            <a>{{ item.number }}</a>
          </td>
          <td data-title="Name">{{ item.name }}</td>
          <td data-title="Type">{{ item.type }}</td>
          <td data-title="Balance" class="align-r">{{ $n(item.balance, 'currency') }}</td>
        </tr>

        <tr bgcolor="#f1f1f1">
          <th colspan="2">{{ $t("message.investmentaccounts_header_col1") }}</th>
          <th colspan="2" class="align-r">$141,216,865.42</th>
        </tr>

        <tr
          v-for="item in settings.users[userId].investmentaccounts"
          v-bind:key="item.id"
          v-bind:title="item.id"
        >
          <td data-title="Account number">
            <a>{{ item.number }}</a>
          </td>
          <td data-title="Name">{{ item.name }}</td>
          <td data-title="Type">{{ item.type }}</td>
          <td data-title="Balance" class="align-r">
            <span style="font-size:10px">
              <i v-if="item.trend==='green'" class="pi pi-arrow-up pi-success"></i>
              <i v-if="item.trend==='red'" class="pi pi-arrow-down pi-error"></i>
              <span v-if="item.trend==='green'" style="color:green">{{ item.trendvalue}}%</span>
              <span v-if="item.trend==='red'" style="color:green">{{ item.trendvalue}}%</span>
            </span>
            {{ $n(item.balance, 'currency') }}
          </td>
        </tr>
        <tr bgcolor="#f1f1f1">
          <td colspan="4">
            <a>{{ $t("message.addaccount") }}</a>
          </td>
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
