<template>
  <section class="recent-activity">
    <h2>{{ $t("message.recentactivity") }}</h2>
    <ul class="fatlist">
      <li v-for="(item,index) in app.recentactivity" :key="item.message" class="flex">
        <time class="fatlist-item">{{ $d(getdate(index), 'short') }}</time>
        <p class="fatlist-item activity">{{ $t("message." + item.message) }}</p>
        <a href="#" class="fatlist-item flex-align-r">{{ $t("message.viewmore") }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
import { mainconfig } from "../../global";

export default {
  data: function() {
    return mainconfig;
  },
  methods: {
    getdate: function(index) {
      /* Always make the first event on the 15th of your month */
      var myDate = new Date();
      if (myDate.getDate() <= 16) {
        if (myDate.getMonth() > 1) {
          myDate.setMonth(myDate.getMonth() - 1);
        } else {
          myDate.setMonth(12);
        }
      }
      myDate.setDate(15 - index * 2);
      return myDate;
    }
  }
};
</script>
