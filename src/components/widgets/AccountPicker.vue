<template>
  <section class="account-picker">
    <h2>{{ $t('message.youraccount') }}</h2>
    <div class="flex">
      <div
        v-for="item in app.accountpicker"
        :key="item.title"
        class="content-card flex flex-mid-align"
      >
        <i class="product-icon pi" :class="item.icon"></i>
        <div class="list-box">
          <h3>{{ $t('message.' + item.title) }}</h3>
          <span v-if="typeof item.desc != 'undefined' && item.desc != ''">{{
            $t('message.' + item.desc)
          }}</span>
          <p v-if="item.id != ''">{{ item.id }}</p>
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
