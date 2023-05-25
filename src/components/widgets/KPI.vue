<template>
  <section v-if="userId != -1" class="account-kpi primary-card">
    <h3>{{ $t('message.yourkpi') }}</h3>
    <div class="content-card flex flex-wrap">
      <div
        v-for="item in settings.users[userId].kpi"
        :key="item.name"
        class="kpi-item"
      >
        <i class="pi color-brand" :class="item.icon"></i>
        <div class="list-box">
          <p>{{ $t('message.' + item.name) }}</p>
          <span class="scorecard">{{ item.value }}</span>
        </div>
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
};
</script>
