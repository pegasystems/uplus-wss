<template>
<div v-if="isWebEmbedInitialized"><h1>{{caseTitle}}</h1>
  <pega-embed v-if="action==='openPage'"  id='theEmbed' :action="action" :pageID="actionparam" :pageClass="objClass" :appAlias="application"
  :pegaServerUrl="url" :staticContentUrl="staticContentUrl" authService='pega' :clientId="clientId"/>
  <pega-embed v-else-if="action==='createCase'"  id='theEmbed' :action="action" :caseTypeID="objClass" :appAlias="application"
  :pegaServerUrl="url" :staticContentUrl="staticContentUrl" authService='pega' :clientId="clientId"/>
</div>
<div v-else>Loading....</div>
</template>

<script>
import { mainconfig } from '../global';
import { sendClickStreamEvent } from '../CDHIntegration';

export default {
  data() {
    return {
      ...mainconfig,
      action: '',
      actionparam: '',
      objClass: '',
      application: '',
      url: '',
      staticContentUrl: '',
      clientId: '',
      caseTitle: '',
      isWebEmbedInitialized: false,
    };
  },
  mounted() {
    if (this.quickLinkId !== -1) {
      this.action = this.settings.quicklinks[this.quickLinkId].action;
      this.url = this.settings.quicklinks[this.quickLinkId].url;
      this.actionparam = this.settings.quicklinks[this.quickLinkId].actionparam;
      this.application = this.settings.quicklinks[this.quickLinkId].application;
      this.objClass = this.settings.quicklinks[this.quickLinkId].objclass;
      this.caseTitle = this.settings.quicklinks[this.quickLinkId].title[
        this.currentLocale
      ];
    } else if (this.viewBill !== -1) {
      this.action = this.settings.billpay.action;
      this.actionparam = this.settings.billpay.actionparam;
      this.application = this.settings.billpay.application;
      this.url = this.settings.billpay.url;
      this.objClass = this.settings.billpay.objclass;
    } else if (this.viewBanner !== -1) {
      this.action = this.settings.banner.action;
      this.actionparam = this.settings.banner.actionparam;
      this.application = this.settings.banner.application;
      this.url = this.settings.banner.url;
      this.objClass = this.settings.banner.objclass;
    } else if (this.homeHeroAction !== -1) {
      this.action = this.settings.homeheroaction.action;
      this.actionparam = this.settings.homeheroaction.actionparam;
      this.application = this.settings.homeheroaction.application;
      this.url = this.settings.homeheroaction.url;
      this.objClass = this.settings.homeheroaction.objclass;
    } else if (this.offerAction !== -1) {
      this.action = this.settings.offeraction.action;
      this.actionparam = this.settings.offeraction.actionparam;
      this.application = this.settings.offeraction.application;
      this.url = this.settings.offeraction.url;
      this.objClass = this.settings.offeraction.objclass;
    } else {
      this.action = this.settings.todo.action;
      this.actionparam = this.settings.todo.actionparam;
      this.application = this.settings.todo.application;
      this.url = this.settings.todo.url;
      this.objClass = this.settings.todo.objclass;
    }
    if (this.action === 'display') {
      this.action = 'openPage';
    } else if (this.action === 'createNewWork') {
      this.action = 'createCase';
    }
    this.staticContentUrl = this.settings.general.connection.c11nserver;
    this.clientId = this.settings.general.connection.clientid;
    this.isWebEmbedInitialized = 'true';
  },
  methods: {
    goHomePage() {
      mainconfig.quickLinkId = -1;
      mainconfig.viewBill = -1;
      mainconfig.viewBanner = -1;
      mainconfig.homeHeroAction = -1;
      mainconfig.offerAction = -1;
      mainconfig.toDo = -1;
      mainconfig.viewKMHelp = -1;
      mainconfig.offerURL = '';
      mainconfig.offerIndex = 0;
      if (window.history) {
        if (mainconfig.isAuthenticated) {
          mainconfig.currentPage = 'account';
          window.history.pushState(
            { userId: mainconfig.userId },
            '',
            mainconfig.currentPage,
          );
        } else {
          mainconfig.currentPage = 'index.html';
          window.history.pushState(
            {},
            '',
            mainconfig.currentPage,
          );
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      sendClickStreamEvent(mainconfig, 'PageView', 'Home', window.loadPage);
      window.loadPage = new Date();
    },
  },
};
</script>
