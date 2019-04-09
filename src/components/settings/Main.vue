<template>
  <form id="settings" @submit="processForm">
    <div class="inline-middle float-r">
      <button v-on:click="clearAll" class="simple">Reset to default</button>
      <button type="submit">Submit</button>
    </div>
    <tabs>
      <tab name="Quick Links" :selected="true">
        <QuickLinksSettings/>
      </tab>
      <tab v-if="typeof settings.billpay != 'undefined' && !isMobilePhone" name="Bill Pay">
        <BillPaySettings/>
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
      <tab
        v-if="typeof settings.pega_marketing != 'undefined' && !isMobilePhone"
        name="Pega Marketing"
      >
        <NBAMSettings/>
      </tab>
    </tabs>
  </form>
</template>

<script>
import { mainconfig } from "../../global";
import Tab from "../controls/Tab.vue";
import Tabs from "../controls/Tabs.vue";
import FileUpload from "../widgets/FileUpload.vue";
import QuickLinksSettings from "./QuickLinksSettings.vue";
import BillPaySettings from "./BillPaySettings.vue";
import HomeHeroActionSettings from "./HomeHeroActionSettings.vue";
import UsersSettings from "./UsersSettings.vue";
import ChatSettings from "./ChatSettings.vue";
import NBAMSettings from "./NBAMSettings.vue";

export default {
  data: function() {
    return Object.assign({}, mainconfig, {
      isClearAll: false
    });
  },
  methods: {
    processForm: function() {
      if (!this.isClearAll) {
        localStorage.setItem(
          "config_" + this.app.industry,
          JSON.stringify(mainconfig)
        );
      }
    },
    clearAll: function() {
      localStorage.clear();
      this.isClearAll = true;
    }
  },
  components: {
    Tabs,
    Tab,
    QuickLinksSettings,
    BillPaySettings,
    HomeHeroActionSettings,
    UsersSettings,
    ChatSettings,
    NBAMSettings,
    FileUpload
  }
};
</script>