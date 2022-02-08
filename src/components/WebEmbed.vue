<template>
<div v-if="isWebEmbedInitialized"><h1>{{caseTitle}}</h1>
  <pega-embed v-if="action==='openPage'" popupReauth="true" casePage="assignment" :action="action" :pageID="actionparam" :pageClass="objClass" :appAlias="application"
  :pegaServerUrl="url" :staticContentUrl="staticContentUrl" authService='pega' :clientId="clientId" :userIdentifier="UserIdentifier" :password="Password" :theme="theme"/>
  <pega-embed v-else-if="action==='createCase'" popupReauth="true" :action="action" :caseTypeID="objClass" :startingFields="startingFields" :appAlias="application"
  :pegaServerUrl="url" :staticContentUrl="staticContentUrl" authService='pega' :clientId="clientId" :userIdentifier="UserIdentifier" :password="Password" :theme="theme"/>
  <pega-embed v-else-if="action==='openAssignment'" popupReauth="true" :action="action" :assignmentID="actionparam" :appAlias="application"
  :pegaServerUrl="url" :staticContentUrl="staticContentUrl" authService='pega' :clientId="clientId" :userIdentifier="UserIdentifier" :password="Password" :theme="theme"/>
  <pega-embed v-else-if="action==='openCase'" popupReauth="true" :action="action" :caseID="actionparam" :appAlias="application"
  :pegaServerUrl="url" :staticContentUrl="staticContentUrl" authService='pega' :clientId="clientId" :userIdentifier="UserIdentifier" :password="Password" :theme="theme"/>
</div>
<div v-else>Loading....</div>
</template>

<script>
import { mainconfig } from '../global';
import { sendClickStreamEvent } from '../CDHIntegration';

const setObjectFromRef = (content, path, value) => {
  if (typeof path !== 'string') {
    return;
  }
  const keys = path.split('.');
  let retObj = content;
  for (const i in keys) {
    let el = keys[i];
    const startParens = el.indexOf('(');
    if (startParens === -1) {
      // regular property - just add it to retObj
      if (i < keys.length - 1) {
        if (typeof retObj[el] === 'undefined') {
          retObj[el] = {};
        }
      } else {
        retObj[el] = value;
      }
      retObj = retObj[el];
    } else {
      const idx = el.substring(startParens + 1, el.length - 1);
      el = el.substring(0, startParens);
      if (typeof retObj[el] === 'undefined') {
        retObj[el] = [];
      }
      for (let j = retObj[el].length; j < idx; j++) {
        retObj[el].push({});
      }
      retObj = retObj[el][idx - 1];
    }
  }
};

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
      UserIdentifier: '',
      Password: '',
      theme: '',
      startingFields: {},
      extraParam: '',
    };
  },
  mounted() {
    if (this.quickLinkId !== -1) {
      this.action = this.settings.quicklinks[this.quickLinkId].action;
      this.url = this.settings.quicklinks[this.quickLinkId].url;
      this.actionparam = this.settings.quicklinks[this.quickLinkId].actionparam;
      this.application = this.settings.quicklinks[this.quickLinkId].application;
      this.objClass = this.settings.quicklinks[this.quickLinkId].objclass;
      this.caseTitle = this.settings.quicklinks[this.quickLinkId].title[this.currentLocale];
      this.extraParam = this.settings.quicklinks[this.quickLinkId].extraparam;
    } else if (this.viewBill !== -1) {
      this.action = this.settings.billpay.action;
      this.actionparam = this.settings.billpay.actionparam;
      this.application = this.settings.billpay.application;
      this.url = this.settings.billpay.url;
      this.objClass = this.settings.billpay.objclass;
      this.extraParam = this.settings.billpay.extraparam;
    } else if (this.viewBanner !== -1) {
      this.action = this.settings.banner.action;
      this.actionparam = this.settings.banner.actionparam;
      this.application = this.settings.banner.application;
      this.url = this.settings.banner.url;
      this.objClass = this.settings.banner.objclass;
      this.extraParam = this.settings.banner.extraparam;
    } else if (this.homeHeroAction !== -1) {
      this.action = this.settings.homeheroaction.action;
      this.actionparam = this.settings.homeheroaction.actionparam;
      this.application = this.settings.homeheroaction.application;
      this.url = this.settings.homeheroaction.url;
      this.objClass = this.settings.homeheroaction.objclass;
      this.extraParam = this.settings.homeheroaction.extraparam;
    } else if (this.offerAction !== -1) {
      this.action = this.settings.offeraction.action;
      this.actionparam = this.settings.offeraction.actionparam;
      this.application = this.settings.offeraction.application;
      this.url = this.settings.offeraction.url;
      this.objClass = this.settings.offeraction.objclass;
      this.extraParam = this.settings.offeraction.extraparam;
    } else {
      this.action = this.settings.todo.action;
      this.actionparam = this.settings.todo.actionparam;
      this.application = this.settings.todo.application;
      this.url = this.settings.todo.url;
      this.objClass = this.settings.todo.objclass;
      this.extraParam = this.settings.todo.extraparam;
    }
    if (this.action === 'display') {
      this.action = 'openPage';
    } else if (this.action === 'createNewWork') {
      this.action = 'createCase';
    } else if (this.action === 'openAssignment') {
      this.action = 'openAssignment';
    } else if (this.action === 'openWorkByHandle') {
      this.action = 'openCase';
    }
    if (this.userId !== -1) {
      this.UserIdentifier = this.settings.users[
        this.userId
      ].pega_userid;
      this.Password = encodeURI(
        btoa(this.settings.users[this.userId].pega_pwd),
      );
    } else if (this.viewKMHelp !== -1) {
      this.UserIdentifier = this.settings.kmhelp.username;
      this.Password = encodeURI(btoa(this.settings.kmhelp.password));
    } else if (this.homeHeroAction !== -1) {
      this.UserIdentifier = this.settings.homeheroaction.pega_userid;
      this.Password = encodeURI(
        btoa(this.settings.homeheroaction.pega_pwd),
      );
    } else if (this.offerAction !== -1) {
      this.UserIdentifier = this.settings.offeraction.pega_userid;
      this.Password = encodeURI(
        btoa(this.settings.offeraction.pega_pwd),
      );
    }
    if (this.app.industry === 'comms') {
      this.theme = '{"base":{"palette":{"brand-primary":"#5F257E","app-background": "#FFFFFF"}}}';
    } else if (this.app.industry.indexOf('health') === 0) {
      this.theme = '{"base":{"palette":{"brand-primary":"#0C8487","app-background": "#FFFFFF"}}}';
    } else if (this.app.industry === 'gov') {
      this.theme = '{"base":{"palette":{"brand-primary":"#0076DE","app-background": "#FFFFFF"}}}';
    } else if (
      this.app.industry === 'retail_bank' ||
      this.app.industry === 'commercial_bank'
    ) {
      this.theme = '{"base":{"palette":{"brand-primary":"#3C8712","app-background": "#FFFFFF"}}}';
    } else if (this.app.industry === 'insurance') {
      this.theme = '{"base":{"palette":{"brand-primary":"#DF3603","app-background": "#FFFFFF"}}}';
    } else if (this.app.industry === 'manufacturing') {
      this.theme = '{"base":{"palette":{"brand-primary":"#D31D36","app-background": "#FFFFFF"}}}';
    }
    if (this.settings.general.theming.override) {
      this.theme = `{"base":{"palette":{"brand-primary":"${this.settings.general.theming.brandColor}","interactive":"${this.settings.general.theming.interactiveColor}","app-background": "#FFFFFF"}}}`;
    }
    this.extraParamContent = {};
    this.extraParam.split(',').forEach((item) => {
      const values = item.split('=');
      if (values.length === 2) {
        setObjectFromRef(this.extraParamContent, values[0].trim(), values[1].trim());
      }
    });
    if (
      this.userId !== -1 &&
      typeof this.settings.users[this.userId].extraparam !== 'undefined' &&
      this.settings.users[this.userId].extraparam !== ''
    ) {
      this.settings.users[this.userId].extraparam.split(',').forEach((item) => {
        const values = item.split('=');
        if (values.length === 2) {
          setObjectFromRef(this.extraParamContent, values[0].trim(), values[1].trim());
        }
      });
    }
    this.startingFields = JSON.stringify(this.extraParamContent);
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
