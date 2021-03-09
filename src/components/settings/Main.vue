<template>
  <form id="settings" @submit="processForm">
    <TopNav v-if="isMobilePhone" previousPhonePage="index.html">
      <button v-on:click="clearAll" class="simple margin-r-2x">Reset to default</button>
      <button type="submit">Save</button>
    </TopNav>
    <Navigation @clearall="clearAll">
      <tab name="Getting Started" :selected="true">
        <GettingStarted />
      </tab>
      <tab v-if="typeof settings.general != 'undefined'" name="General">
        <General />
      </tab>
      <tab name="Users">
        <UsersSettings />
      </tab>
      <tab name="Quick Links">
        <QuickLinksSettings />
      </tab>
      <tab v-if="typeof settings.todo != 'undefined'" name="To Do component">
        <ToDoSettings />
      </tab>
      <tab v-if="typeof settings.billpay != 'undefined'" name="Bill Pay component">
        <BillPaySettings />
      </tab>
      <tab v-if="typeof settings.banner != 'undefined'" name="Banner component">
        <BannerSettings />
      </tab>
      <tab v-if="typeof settings.pega_chat != 'undefined'" name="Messaging and Co-Browse">
        <ChatSettings />
      </tab>
      <tab v-if="typeof settings.pega_marketing != 'undefined'" name="Customer Decision Hub">
        <NBAMSettings />
      </tab>
      <tab v-if="typeof settings.kmhelp != 'undefined'" name="Knowledge Management">
        <KMHelpSettings />
      </tab>
      <tab name="Home Hero Action">
        <HomeHeroActionSettings />
      </tab>
      <tab v-if="typeof settings.offeraction != 'undefined'" name="Offer Action">
        <OfferActionSettings />
      </tab>
    </Navigation>
  </form>
</template>

<script>
import { mainconfig } from '../../global';
import Tab from '../controls/Tab.vue';
import Navigation from './Navigation.vue';
import GettingStarted from './GettingStarted.vue';
import General from './GeneralSettings.vue';
import QuickLinksSettings from './QuickLinksSettings.vue';
import BillPaySettings from './BillPaySettings.vue';
import BannerSettings from './BannerSettings.vue';
import KMHelpSettings from './KMHelpSettings.vue';
import ToDoSettings from './ToDoSettings.vue';
import HomeHeroActionSettings from './HomeHeroActionSettings.vue';
import UsersSettings from './UsersSettings.vue';
import ChatSettings from './ChatSettings.vue';
import NBAMSettings from './NBAMSettings.vue';
import OfferActionSettings from './OfferActionSettings.vue';
import TopNav from '../phone/TopNav.vue';

export default {
  data() {
    return { ...mainconfig, isClearAll: false };
  },
  methods: {
    processForm() {
      if (!this.isClearAll) {
        localStorage.setItem(
          `config_${this.app.industry}`,
          JSON.stringify(mainconfig),
        );
      }
    },
    clearAll() {
      localStorage.clear();
      this.isClearAll = true;
    },
  },
  components: {
    Navigation,
    Tab,
    GettingStarted,
    General,
    QuickLinksSettings,
    BillPaySettings,
    BannerSettings,
    ToDoSettings,
    HomeHeroActionSettings,
    UsersSettings,
    KMHelpSettings,
    ChatSettings,
    NBAMSettings,
    OfferActionSettings,
    TopNav,
  },
};
</script>
