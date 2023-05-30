<template>
  <MashupMainArea
    showActivity
    v-if="
      typeof settings.activity !== 'undefined' && settings.activity.url !== ''
    "
  />
  <section
    v-else-if="
      userId !== -1 &&
      typeof settings.users[userId].recentactivity !== 'undefined' &&
      settings.users[userId].recentactivity.length > 0
    "
    class="recent-activity primary-card"
  >
    <h3>{{ settings.todo.recentactivityheading }}</h3>
    <ul class="fatlist">
      <li
        v-for="(item, index) in settings.users[userId].recentactivity"
        :key="item.message"
        class="flex"
      >
        <time v-if="item.date" class="fatlist-item">{{
          $d(new Date(item.date), 'short')
        }}</time>
        <time v-else class="fatlist-item">{{
          $d(getdate(index), 'short')
        }}</time>
        <p class="fatlist-item activity">{{ item.message }}</p>
        <p v-if="item.cost" class="fatlist-item flex-align-r">
          {{ $n(item.cost, 'currency') }}
        </p>
        <a v-else class="fatlist-item flex-align-r">{{
          $t('message.viewmore')
        }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
import { mainconfig } from '../../global';
import MashupMainArea from '../MashupMainArea.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    MashupMainArea,
  },
  methods: {
    getdate(index) {
      /* Always make the first event on the 15th of your month */
      const myDate = new Date();
      if (myDate.getDate() <= 16) {
        myDate.setMonth((myDate.getMonth() - 1) % 12);
      }
      myDate.setDate(15 - index * 2);
      return myDate;
    },
  },
};
</script>
