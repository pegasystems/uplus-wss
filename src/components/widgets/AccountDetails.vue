<template>
  <section
    v-if="
      userId !== -1 &&
      typeof settings.users[userId].accountdetails !== 'undefined'
    "
    class="account-details"
  >
    <h2>{{ $t('message.accountdetails') }}</h2>
    <div
      class="flex flex-col-all"
      v-for="(items, index) in settings.users[userId].accountdetails"
      :key="index"
    >
      <div v-for="item in items" class="list-box" :key="item.title">
        <h3>{{ $t('message.' + item.title) }}</h3>
        <span v-if="typeof item.desc !== 'undefined' && item.desc !== ''">{{
          $t('message.' + item.desc)
        }}</span>
        <p v-if="item.id !== ''">{{ item.id }}</p>
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
