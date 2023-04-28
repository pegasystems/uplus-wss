<template>
  <section>
    <div class="header flex flex-mid-align search-bar">
      <h2>{{ $t('message.accounts') }}</h2>
      <input
        type="text"
        class="filter"
        :value="$t('message.search')"
        :placeholder="$t('message.search_past_services')"
      />
      <i class="pi pi-dark pi-search"></i>
    </div>
    <table v-if="userId != -1" class="content responsive color-heading">
      <thead>
        <tr>
          <th scope="col">{{ $t('message.accounts_header1') }}</th>
          <th scope="col">{{ $t('message.accounts_header2') }}</th>
          <th scope="col">{{ $t('message.accounts_header3') }}</th>
          <th scope="col" class="align-r">
            {{ $t('message.accounts_header4') }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="heading">
          <td class="hide-collapsed" colspan="2">
            {{ $t('message.accounts_header_col1') }}
          </td>
          <td
            :data-title="$t('message.accounts_header_col1')"
            colspan="2"
            class="align-r"
          >
            $1,679,072.63
          </td>
        </tr>

        <tr
          v-for="item in settings.users[userId].accounts"
          v-bind:key="item.id"
          v-bind:title="item.id"
        >
          <td :data-title="$t('message.accounts_header1')">
            <a>{{ item.number }}</a>
          </td>
          <td :data-title="$t('message.accounts_header2')">{{ item.name }}</td>
          <td :data-title="$t('message.accounts_header3')">{{ item.type }}</td>
          <td :data-title="$t('message.accounts_header4')" class="align-r">
            {{ $n(item.balance, 'currency') }}
          </td>
        </tr>

        <tr class="heading">
          <td class="hide-collapsed" colspan="2">
            {{ $t('message.investmentaccounts_header_col1') }}
          </td>
          <td
            :data-title="$t('message.investmentaccounts_header_col1')"
            colspan="2"
            class="align-r"
          >
            $141,216,865.42
          </td>
        </tr>

        <tr
          v-for="item in settings.users[userId].investmentaccounts"
          v-bind:key="item.id"
          v-bind:title="item.id"
        >
          <td :data-title="$t('message.accounts_header1')">
            <a>{{ item.number }}</a>
          </td>
          <td :data-title="$t('message.accounts_header2')">{{ item.name }}</td>
          <td :data-title="$t('message.accounts_header3')">{{ item.type }}</td>
          <td :data-title="$t('message.accounts_header4')" class="align-r">
            <span class="trend trend-success" v-if="item.trend === 'green'">
              <i class="pi pi-arrow-up pi-success"></i>
              {{ item.trendvalue }}%
            </span>
            <span class="trend trend-error" v-else>
              <i class="pi pi-arrow-down pi-error"></i>
              {{ item.trendvalue }}%
            </span>
            <span class="investmentamount">{{
              $n(item.balance, 'currency')
            }}</span>
          </td>
        </tr>
        <tr class="footer">
          <td colspan="4">
            <a>{{ $t('message.addaccount') }}</a>
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
