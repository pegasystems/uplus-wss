<template>
  <form id="settings" @submit="processForm">
    <div v-if="!isMobilePhone" class="inline-middle float-r">
      <button v-on:click="clearAll" class="simple">Reset to default</button>
      <button type="submit">Submit</button>
    </div>
    <TopNav v-else previousPage="index.html">
      <button v-on:click="clearAll" class="simple margin-r-2x">Reset to default</button>
      <button type="submit">Submit</button>
    </TopNav>
    <tabs>
      <tab name="Quick Links" :selected="true">
        <QuickLinksSettings/>
      </tab>
      <tab v-if="typeof settings.billpay != 'undefined' && !isMobilePhone" name="Bill Pay">
        <BillPaySettings/>
      </tab>
      <tab v-if="typeof settings.todo != 'undefined' && !isMobilePhone" name="To Do">
        <ToDoSettings/>
      </tab>
      <tab v-if="!isMobilePhone" name="Home Hero Action">
        <HomeHeroActionSettings/>
      </tab>
      <tab name="Users">
        <UsersSettings/>
      </tab>
      <tab v-if="typeof settings.pega_chat != 'undefined' && !isMobilePhone" name="Pega Chat">
        <ChatSettings/>
      </tab>
      <tab v-if="typeof settings.pega_marketing != 'undefined'" name="Pega Marketing">
        <NBAMSettings/>
      </tab>
      <tab v-if="typeof settings.kmhelp != 'undefined' && !isMobilePhone" name="KM Help">
        <KMHelpSettings/>
      </tab>
    </tabs>
  </form>
</template>

<script>
import { mainconfig } from '../../global';
import Tab from '../controls/Tab.vue';
import Tabs from '../controls/Tabs.vue';
import QuickLinksSettings from './QuickLinksSettings.vue';
import BillPaySettings from './BillPaySettings.vue';
import KMHelpSettings from './KMHelpSettings.vue';
import ToDoSettings from './ToDoSettings.vue';
import HomeHeroActionSettings from './HomeHeroActionSettings.vue';
import UsersSettings from './UsersSettings.vue';
import ChatSettings from './ChatSettings.vue';
import NBAMSettings from './NBAMSettings.vue';
import TopNav from '../phone/TopNav.vue';

export default {
  data() {
    return Object.assign({}, mainconfig, {
      isClearAll: false,
    });
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
    Tabs,
    Tab,
    QuickLinksSettings,
    BillPaySettings,
    ToDoSettings,
    HomeHeroActionSettings,
    UsersSettings,
    KMHelpSettings,
    ChatSettings,
    NBAMSettings,
    TopNav,
  },
};
</script>
