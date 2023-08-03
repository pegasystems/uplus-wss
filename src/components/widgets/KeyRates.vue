<template>
  <section class="primary-card keyrates">
    <h3>{{ $t('message.keyrates_title') }}</h3>
    <table class="color-light">
      <tr class="heading">
        <th>Metric</th>
        <th>{{ $t('message.keyrates_header_col1') }}</th>
        <th>{{ $t('message.keyrates_header_col2') }}</th>
        <th>{{ $t('message.keyrates_header_col3') }}</th>
      </tr>
      <tr
        v-for="item in settings.keyrates"
        v-bind:key="item.name"
        v-bind:title="$t('message.' + item.name)"
      >
        <td>{{ $t('message.' + item.name) }}</td>
        <td>
          <i
            v-if="item.trend === 'green'"
            class="pi pi-arrow-up pi-success"
          ></i>
          <i v-if="item.trend === 'red'" class="pi pi-arrow-down pi-error"></i>
          {{ $n(item.current, 'keyrates') }}
        </td>
        <td>{{ $n(item.high, 'keyrates') }}</td>
        <td>{{ $n(item.low, 'keyrates') }}</td>
      </tr>
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
