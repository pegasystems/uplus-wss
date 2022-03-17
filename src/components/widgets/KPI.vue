<template>
  <section v-if="userId != -1" class="account-kpi">
    <h2>{{ $t('message.yourkpi') }}</h2>
    <div class="content-card flex flex-wrap">
      <div
        v-for="item in settings.users[userId].kpi"
        :key="item.name"
        class="kpi-item"
      >
        <i class="pi color-brand" :class="item.icon"></i>
        <div class="list-box">
          <h3>{{ $t('message.' + item.name) }}</h3>
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
