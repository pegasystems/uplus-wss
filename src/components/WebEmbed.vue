<template>
  <div v-if="isWebEmbedInitialized" class="margin-b-3x" :class="settings.general.connection.webEmbedUseFormWidth ? 'form-width' : ''">
    <h1>{{ caseTitle }}</h1>
    <pega-embed
      v-if="action === 'openPage'"
      popupReauth="false"
      autoReauth="true"
      silentTimeout="10000"
      ref="mycomp"
      :casePage="pageTemplate"
      :assignmentHeader="showAssignmentHeader"
      :action="action"
      :pageID="actionparam"
      :pageClass="objClass"
      :appAlias="application"
      :pegaServerUrl="url"
      :staticContentUrl="staticContentUrl"
      :pegaServerType="pegaServerType"
      :authorizeUri="authorizeUri"
      :authService="authService"
      :clientId="clientId"
      :userIdentifier="UserIdentifier"
      :password="Password"
      :theme="theme"
      :themeID="themeID"
    />
    <pega-embed
      v-else-if="action === 'createCase'"
      popupReauth="false"
      autoReauth="true"
      silentTimeout="10000"
      ref="mycomp"
      :casePage="pageTemplate"
      :assignmentHeader="showAssignmentHeader"
      :action="action"
      :caseTypeID="objClass"
      :startingFields="startingFields"
      :appAlias="application"
      :pegaServerUrl="url"
      :staticContentUrl="staticContentUrl"
      :pegaServerType="pegaServerType"
      :authorizeUri="authorizeUri"
      :authService="authService"
      :clientId="clientId"
      :userIdentifier="UserIdentifier"
      :password="Password"
      :theme="theme"
      :themeID="themeID"
    />
    <pega-embed
      v-else-if="action === 'openAssignment'"
      popupReauth="false"
      autoReauth="true"
      silentTimeout="10000"
      ref="mycomp"
      :casePage="pageTemplate"
      :assignmentHeader="showAssignmentHeader"
      :action="action"
      :assignmentID="actionparam"
      :appAlias="application"
      :pegaServerUrl="url"
      :staticContentUrl="staticContentUrl"
      :pegaServerType="pegaServerType"
      :authorizeUri="authorizeUri"
      :authService="authService"
      :clientId="clientId"
      :userIdentifier="UserIdentifier"
      :password="Password"
      :theme="theme"
      :themeID="themeID"
    />
    <pega-embed
      v-else-if="action === 'openCase'"
      popupReauth="false"
      autoReauth="true"
      silentTimeout="10000"
      ref="mycomp"
      :casePage="pageTemplate"
      :assignmentHeader="showAssignmentHeader"
      :action="action"
      :caseID="actionparam"
      :appAlias="application"
      :pegaServerUrl="url"
      :staticContentUrl="staticContentUrl"
      :pegaServerType="pegaServerType"
      :authorizeUri="authorizeUri"
      :authService="authService"
      :clientId="clientId"
      :userIdentifier="UserIdentifier"
      :password="Password"
      :theme="theme"
      :themeID="themeID"
    />
    <pega-embed
      v-else-if="action === 'getNextWork'"
      popupReauth="false"
      autoReauth="true"
      silentTimeout="10000"
      ref="mycomp"
      :casePage="pageTemplate"
      :assignmentHeader="showAssignmentHeader"
      :action="action"
      :appAlias="application"
      :pegaServerUrl="url"
      :staticContentUrl="staticContentUrl"
      :pegaServerType="pegaServerType"
      :authorizeUri="authorizeUri"
      :authService="authService"
      :clientId="clientId"
      :userIdentifier="UserIdentifier"
      :password="Password"
      :theme="theme"
      :themeID="themeID"
    />
  </div>
  <div v-else>Loading....</div>
</template>

<script>
import { mainconfig } from '../global';
import { sendClickStreamEvent } from '../CDHIntegration';
import setObjectFromRef from '../utils';


export default {
  props: {
    showActivity: Boolean,
  },
  data() {
    return {
      ...mainconfig,
      action: '',
      actionparam: '',
      objClass: '',
      application: undefined,
      url: '',
      pegaServerType: undefined,
      authorizeUri: undefined,
      staticContentUrl: undefined,
      showAssignmentHeader: true,
      reloadTitle: false,
      pageTemplate: 'assignment',
      authService: undefined,
      clientId: '',
      caseTitle: '',
      isWebEmbedInitialized: false,
      UserIdentifier: undefined,
      Password: undefined,
      theme: undefined,
      themeID: undefined,
      startingFields: {},
      extraParam: '',
      embedEventFn: (event) => {
  if (
    event.type === 'embedcloseconfirmview' ||
    event.type === 'embedcaseclosed' ||
    event.type === 'embedeventcancel'
  ) {
    top.postMessage('pegaMashupNavigateBack', location.origin);
  } else if (event.type === 'embedprocessingend') {
    setTimeout(() => {
      const el = document.querySelector('pega-embed');
      if (!el || el.clientHeight === 0) {
        top.postMessage('pegaMashupNavigateBack', location.origin);
      } else if(this.reloadTitle) {
          setTimeout( () => {
          const label = el.getEmbedData(".pyLabel");
          if(label) {
            // Replace the h1 with the label
            const h1Elem = document.querySelector('h1');
            if(h1Elem) {
              h1Elem.innerHTML = label;
            }
          }},1000);
      }
    }, 300);
  } else if (event.type === 'embedreauth') {
    const el = document.querySelector('pega-embed');
    el.login(true);
  }
    },
  };
  },
  mounted() {
    sessionStorage.clear();
    if (this.quickLinkId !== -1) {
      this.action = this.settings.quicklinks[this.quickLinkId].action;
      this.url = this.settings.quicklinks[this.quickLinkId].url;
      this.actionparam = this.settings.quicklinks[this.quickLinkId].actionparam;
      this.pageTemplate =
        this.settings.quicklinks[this.quickLinkId].pageTemplate;
      this.showAssignmentHeader =
        !this.settings.quicklinks[this.quickLinkId].hideassignmentheader;
      this.reloadTitle = this.settings.quicklinks[this.quickLinkId].reloadtitle;
      this.application = this.settings.quicklinks[this.quickLinkId].application;
      this.objClass = this.settings.quicklinks[this.quickLinkId].objclass;
      this.caseTitle =
        this.settings.quicklinks[this.quickLinkId].title[this.currentLocale];
      this.extraParam = this.settings.quicklinks[this.quickLinkId].extraparam;
    } else if (this.viewBill !== -1) {
      this.action = this.settings.billpay.action;
      this.actionparam = this.settings.billpay.actionparam;
      this.pageTemplate = this.settings.billpay.pageTemplate;
      this.showAssignmentHeader = !this.settings.billpay.hideassignmentheader;
      this.application = this.settings.billpay.application;
      this.url = this.settings.billpay.url;
      this.objClass = this.settings.billpay.objclass;
      this.extraParam = this.settings.billpay.extraparam;
    } else if (this.viewBanner !== -1) {
      this.action = this.settings.banner.action;
      this.actionparam = this.settings.banner.actionparam;
      this.pageTemplate = this.settings.banner.pageTemplate;
      this.showAssignmentHeader = !this.settings.banner.hideassignmentheader;
      this.application = this.settings.banner.application;
      this.url = this.settings.banner.url;
      this.objClass = this.settings.banner.objclass;
      this.extraParam = this.settings.banner.extraparam;
    } else if (this.homeHeroAction !== -1) {
      this.action = this.settings.homeheroaction.action;
      this.actionparam = this.settings.homeheroaction.actionparam;
      this.pageTemplate = this.settings.homeheroaction.pageTemplate;
      this.showAssignmentHeader =
        !this.settings.homeheroaction.hideassignmentheader;
      this.application = this.settings.homeheroaction.application;
      this.url = this.settings.homeheroaction.url;
      this.objClass = this.settings.homeheroaction.objclass;
      this.extraParam = this.settings.homeheroaction.extraparam;
    } else if (this.offerAction !== -1) {
      this.action = this.settings.offeraction.action;
      this.actionparam = this.settings.offeraction.actionparam;
      this.pageTemplate = this.settings.offeraction.pageTemplate;
      this.showAssignmentHeader =
        !this.settings.offeraction.hideassignmentheader;
      this.application = this.settings.offeraction.application;
      this.url = this.settings.offeraction.url;
      this.objClass = this.settings.offeraction.objclass;
      this.extraParam = this.settings.offeraction.extraparam;
    } else if (this.viewKMHelp !== -1) {
      this.action = this.settings.kmhelp.action;
      this.actionparam = this.settings.kmhelp.actionparam;
      this.pageTemplate = this.settings.kmhelp.pageTemplate;
      this.showAssignmentHeader = !this.settings.kmhelp.hideassignmentheader;
      this.application = this.settings.kmhelp.application;
      this.url = this.settings.kmhelp.url;
      this.objClass = this.settings.kmhelp.objclass;
      this.extraParam = this.settings.kmhelp.extraparam;
    } else if (this.showActivity) {
      this.action = this.settings.activity.action;
      this.actionparam = this.settings.activity.actionparam;
      this.pageTemplate = this.settings.activity.pageTemplate;
      this.showAssignmentHeader = !this.settings.activity.hideassignmentheader;
      this.application = this.settings.activity.application;
      this.url = this.settings.activity.url;
      this.objClass = this.settings.activity.objclass;
      this.extraParam = this.settings.activity.extraparam;
    } else {
      this.action = this.settings.todo.action;
      this.actionparam = this.settings.todo.actionparam;
      this.pageTemplate = this.settings.todo.pageTemplate;
      this.showAssignmentHeader = !this.settings.todo.hideassignmentheader;
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
    } else if (this.action === 'getNextWork') {
      this.action = 'getNextWork';
    }
    if (this.userId !== -1) {
      this.UserIdentifier = this.settings.users[this.userId].pega_userid;
      this.Password = encodeURI(
        btoa(this.settings.users[this.userId].pega_pwd),
      );
    } else if (this.viewKMHelp !== -1) {
      this.UserIdentifier = this.settings.kmhelp.username;
      this.Password = encodeURI(btoa(this.settings.kmhelp.password));
    } else if (this.homeHeroAction !== -1) {
      this.UserIdentifier = this.settings.homeheroaction.pega_userid;
      this.Password = encodeURI(btoa(this.settings.homeheroaction.pega_pwd));
    } else if (this.offerAction !== -1) {
      this.UserIdentifier = this.settings.offeraction.username;
      this.Password = encodeURI(btoa(this.settings.offeraction.password));
    }
    if (!this.UserIdentifier) this.UserIdentifier = undefined;
    if (!this.Password) this.Password = undefined;

    /* In 24.2 - the theme can be defined as a general setting - if this is set, then pass themeID - otherwise fallback to old them */
    if (
      (this.settings.general.connection.type === 'embedui3' || this.settings.general.connection.type === 'launchpad') &&
      this.settings.general.connection.themeID
    ) {
      this.themeID = this.settings.general.connection.themeID;
    } else if(this.settings.general.connection.type !== 'launchpad') {
      if (this.app.industry === 'comms') {
        this.theme =
          '{"base":{"palette":{"brand-primary":"#5F257E","app-background": "#FFFFFF","interactive":"#5F257E"},"shadow":{"low": "none"}},"components":{"button":{"border-radius":"0.25"}}}';
      } else if (this.app.industry.indexOf('health') === 0) {
        this.theme =
          '{"base":{"palette":{"brand-primary":"#0C8487","app-background": "#FFFFFF","interactive":"#0C8487"},"shadow":{"low": "none"}},"components":{"button":{"border-radius":"0.25"}}}';
      } else if (this.app.industry === 'gov') {
        this.theme =
          '{"base":{"palette":{"brand-primary":"#076bc9","app-background": "#FFFFFF,"interactive":"#076bc9"},"shadow":{"low": "none"}},"components":{"button":{"border-radius":"0.25"}}}';
      } else if (
        this.app.industry === 'retail_bank' ||
        this.app.industry === 'commercial_bank'
      ) {
        this.theme =
          '{"base":{"palette":{"brand-primary":"#005501","app-background": "#FFFFFF","interactive":"#005501"},"shadow":{"low": "none"}},"components":{"button":{"border-radius":"0.25"}}}';
      } else if (
        this.app.industry === 'insurance' ||
        this.app.industry === 'manufacturing' ||
        this.app.industry === 'auto'
      ) {
        this.theme =
          '{"base":{"palette":{"brand-primary":"#CA0000","app-background": "#FFFFFF","interactive":"#CA0000"},"shadow":{"low": "none"}},"components":{"button":{"border-radius":"0.25"}}}';
      }
      if (this.settings.general.theming.override) {
        this.theme = `{"base":{"palette":{"brand-primary":"${this.settings.general.theming.brandColor}","interactive":"${this.settings.general.theming.interactiveColor}","app-background": "#FFFFFF"},"shadow":{"low": "none"}},"components":{"button":{"border-radius":"0.25"}}}`;
      }
    }
    this.extraParamContent = {};
    this.extraParam.split(',').forEach((item) => {
      const values = item.split('=');
      if (values.length === 2) {
        setObjectFromRef(
          this.extraParamContent,
          values[0].trim(),
          values[1].trim(),
        );
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
          setObjectFromRef(
            this.extraParamContent,
            values[0].trim(),
            values[1].trim(),
          );
        }
      });
    }
    if (this.isDeepLink === true) {
      for (const i in this.deepLinkExtraParam) {
        setObjectFromRef(this.extraParamContent, i, this.deepLinkExtraParam[i]);
      }
      /* Reset the state once the deeplink is generated */
      mainconfig.isDeepLink = false;
      mainconfig.deepLinkExtraParam = {};
    }
    if (this.settings.general.connection.type === 'embedui') {
      this.staticContentUrl = this.settings.general.connection.c11nserver;
    }
    if (this.settings.general.connection.type === 'launchpad') {
      this.pegaServerType = 'launchpad';
      this.authorizeUri = this.settings.general.connection.authorizeUri;
      this.UserIdentifier = undefined;
      this.Password = undefined;
      this.application = undefined;
    } else {
      this.authService = this.settings.general.connection.authService;
    }
    this.clientId = this.settings.general.connection.clientid;

    this.isWebEmbedInitialized = 'true';
  },
  updated() {
    const mytag = this.$refs.mycomp;
    if (this.action === 'createCase') {
      mytag.setAttribute(
        'startingFields',
        JSON.stringify(this.extraParamContent),
      );
    }
    mytag.addEventListener('embedprocessingend', this.embedEventFn);
    mytag.addEventListener('embedready', this.embedEventFn);
    mytag.addEventListener('embedcloseconfirmview', this.embedEventFn);
    mytag.addEventListener('embedcaseclosed', this.embedEventFn);
    mytag.addEventListener('embedeventcancel', this.embedEventFn);
    mytag.addEventListener('embedreauth', this.embedEventFn);
  },
  beforeUnmount() {
    const mytag = this.$refs.mycomp;
    mytag.removeEventListener('embedprocessingend', this.embedEventFn);
    mytag.removeEventListener('embedready', this.embedEventFn);
    mytag.removeEventListener('embedcloseconfirmview', this.embedEventFn);
    mytag.removeEventListener('embedcaseclosed', this.embedEventFn);
    mytag.removeEventListener('embedeventcancel', this.embedEventFn);
    mytag.removeEventListener('embedreauth', this.embedEventFn);
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
      mainconfig.CDHContainer = {};
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
          window.history.pushState({}, '', mainconfig.currentPage);
        }
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 0);
      }
      sendClickStreamEvent(mainconfig, 'PageView', 'Home', window.loadPage);
      window.loadPage = new Date();
    },
  },
};
</script>
