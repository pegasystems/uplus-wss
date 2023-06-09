<template>
  <form id="settings" @submit="processForm">
    <TopNav v-if="isMobilePhone" previousPhonePage="index.html">
      <button type="submit" data-clear class="simple margin-r-2x">
        Reset to default
      </button>
      <button class="strong" type="submit">Save</button>
    </TopNav>
    <Navigation v-model="active">
      <tab name="Getting Started">
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
      <tab v-if="typeof settings.banner != 'undefined'" name="Banner component">
        <BannerSettings />
      </tab>
      <tab v-if="typeof settings.todo != 'undefined'" name="To Do component">
        <ToDoSettings />
      </tab>
      <tab
        v-if="typeof settings.billpay != 'undefined'"
        name="Bill Pay component"
      >
        <BillPaySettings />
      </tab>
      <tab
        v-if="typeof settings.activity != 'undefined'"
        name="Activity component"
      >
        <ActivitySettings />
      </tab>
      <tab
        v-if="typeof settings.pega_chat != 'undefined'"
        name="Messaging and Co-Browse"
      >
        <ChatSettings />
      </tab>
      <tab
        v-if="typeof settings.pega_marketing != 'undefined'"
        name="Customer Decision Hub"
      >
        <NBAMSettings />
      </tab>
      <tab
        v-if="typeof settings.kmhelp != 'undefined'"
        name="Knowledge Management"
      >
        <KMHelpSettings />
      </tab>
      <tab name="Home Hero Action">
        <HomeHeroActionSettings />
      </tab>
      <tab
        v-if="typeof settings.offeraction != 'undefined'"
        name="Offer Action"
      >
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
import ActivitySettings from './ActivitySettings.vue';
import HomeHeroActionSettings from './HomeHeroActionSettings.vue';
import UsersSettings from './UsersSettings.vue';
import ChatSettings from './ChatSettings.vue';
import NBAMSettings from './NBAMSettings.vue';
import OfferActionSettings from './OfferActionSettings.vue';
import TopNav from '../phone/TopNav.vue';
import { ref } from 'vue';

export default {
  data() {
    return { ...mainconfig };
  },
  setup() {
    const active = ref(0);
    return { active };
  },
  methods: {
    processForm(e) {
      window.loadPage = new Date();
      mainconfig.isAuthenticated = false;
      mainconfig.userId = -1;
      mainconfig.quickLinkId = -1;
      mainconfig.viewBill = -1;
      mainconfig.homeHeroAction = -1;
      mainconfig.offerAction = -1;
      mainconfig.toDo = -1;
      mainconfig.viewKMHelp = -1;
      mainconfig.viewBanner = -1;
      mainconfig.CDHContainer = {};
      mainconfig.offerURL = '';
      mainconfig.previousPage = '';
      mainconfig.intent = '';
      mainconfig.isDeepLink = false;
      mainconfig.deepLinkExtraParam = {};
      if (e.submitter.getAttribute('data-clear') !== null) {
        localStorage.clear();
      } else {
        localStorage.setItem(
          `config_${this.app.industry}`,
          JSON.stringify(mainconfig),
        );
      }
      sessionStorage.clear();
      if (mainconfig.ExternalID) {
        sessionStorage.setItem('ExternalID', mainconfig.ExternalID);
      }
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
    ActivitySettings,
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
