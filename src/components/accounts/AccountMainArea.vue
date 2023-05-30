<template>
  <div class="col col-1">
    <div class="primary-card">
      <Banner
        v-if="
          typeof settings.banner !== 'undefined' &&
          settings.banner.hidebanner !== 'true' &&
          settings.banner.hidebanner !== true
        "
      />
      <AccountPicker
        v-if="
          typeof settings.todo !== 'undefined' &&
          settings.todo.hideaccount !== 'true' &&
          settings.todo.hideaccount !== true
        "
      />
      <QuickLinks />
    </div>
    <AccountDetails
      v-if="
        typeof settings.todo !== 'undefined' &&
        settings.todo.hideaccountdetails !== 'true' &&
        settings.todo.hideaccountdetails !== true
      "
    />
    <MashupMainArea
      v-if="typeof settings.todo !== 'undefined' && settings.todo.url !== ''"
      :key="reloadToDoMashup"
    />
    <RecentActivity
      v-if="
        typeof settings.todo !== 'undefined' &&
        settings.todo.hideactivity !== 'true' &&
        settings.todo.hideactivity !== true
      "
      :key="reloadActivityMashup"
    />
  </div>
</template>

<script>
import MashupMainArea from '../MashupMainArea.vue';
import AccountPicker from '../widgets/AccountPicker.vue';
import AccountDetails from '../widgets/AccountDetails.vue';
import QuickLinks from '../widgets/QuickLinks.vue';
import Banner from '../widgets/Banner.vue';
import RecentActivity from '../widgets/RecentActivity.vue';
import { mainconfig } from '../../global';

export default {
  data() {
    return mainconfig;
  },
  components: {
    MashupMainArea,
    AccountPicker,
    AccountDetails,
    RecentActivity,
    Banner,
    QuickLinks,
  },
};
</script>
