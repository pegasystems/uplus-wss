<template>
  <div v-if="isWebEmbedInitialized">
    <h1>{{ caseTitle }}</h1>
    <pega-embed
      v-if="action === 'openPage'"
      popupReauth="true"
      ref="mycomp"
      casePage="assignment"
      :action="action"
      :pageID="actionparam"
      :pageClass="objClass"
      :appAlias="application"
      :pegaServerUrl="url"
      :staticContentUrl="staticContentUrl"
      authService="pega"
      :clientId="clientId"
      :userIdentifier="UserIdentifier"
      :password="Password"
      :theme="theme"
    />
    <pega-embed
      v-else-if="action === 'createCase'"
      popupReauth="true"
      ref="mycomp"
      :action="action"
      :caseTypeID="objClass"
      :startingFields="startingFields"
      :appAlias="application"
      :pegaServerUrl="url"
      :staticContentUrl="staticContentUrl"
      authService="pega"
      :clientId="clientId"
      :userIdentifier="UserIdentifier"
      :password="Password"
      :theme="theme"
    />
    <pega-embed
      v-else-if="action === 'openAssignment'"
      popupReauth="true"
      ref="mycomp"
      :action="action"
      :assignmentID="actionparam"
      :appAlias="application"
      :pegaServerUrl="url"
      :staticContentUrl="staticContentUrl"
      authService="pega"
      :clientId="clientId"
      :userIdentifier="UserIdentifier"
      :password="Password"
      :theme="theme"
    />
    <pega-embed
      v-else-if="action === 'openCase'"
      popupReauth="true"
      ref="mycomp"
      :action="action"
      :caseID="actionparam"
      :appAlias="application"
      :pegaServerUrl="url"
      :staticContentUrl="staticContentUrl"
      authService="pega"
      :clientId="clientId"
      :userIdentifier="UserIdentifier"
      :password="Password"
      :theme="theme"
    />
    <pega-embed
      v-else-if="action === 'getNextWork'"
      popupReauth="true"
      ref="mycomp"
      :action="action"
      :appAlias="application"
      :pegaServerUrl="url"
      :staticContentUrl="staticContentUrl"
      authService="pega"
      :clientId="clientId"
      :userIdentifier="UserIdentifier"
      :password="Password"
      :theme="theme"
    />
  </div>
  <div v-else>Loading....</div>
</template>

<script>
import { mainconfig } from '../global';
import { sendClickStreamEvent } from '../CDHIntegration';
import setObjectFromRef from '../utils';

let resizeObserver;

const embedEventFn = (event) => {
  console.log('Event from pega-embed', event);
  if (event.type === 'embedcloseconfirmview') {
    top.postMessage('pegaMashupNavigateBack', location.origin);
  } else if (event.type === 'embedprocessingend') {
    resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.contentRect.height === 0) {
          top.postMessage('pegaMashupNavigateBack', location.origin);
        }
      });
    });
    resizeObserver.observe(document.querySelector('pega-embed'));
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
      this.caseTitle =
        this.settings.quicklinks[this.quickLinkId].title[this.currentLocale];
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
      this.UserIdentifier = this.settings.offeraction.pega_userid;
      this.Password = encodeURI(btoa(this.settings.offeraction.pega_pwd));
    }
    if (this.app.industry === 'comms') {
      this.theme =
        '{"base":{"palette":{"brand-primary":"#5F257E","app-background": "#FFFFFF"}}}';
    } else if (this.app.industry.indexOf('health') === 0) {
      this.theme =
        '{"base":{"palette":{"brand-primary":"#0C8487","app-background": "#FFFFFF"}}}';
    } else if (this.app.industry === 'gov') {
      this.theme =
        '{"base":{"palette":{"brand-primary":"#0076DE","app-background": "#FFFFFF"}}}';
    } else if (
      this.app.industry === 'retail_bank' ||
      this.app.industry === 'commercial_bank'
    ) {
      this.theme =
        '{"base":{"palette":{"brand-primary":"#3C8712","app-background": "#FFFFFF"}}}';
    } else if (this.app.industry === 'insurance') {
      this.theme =
        '{"base":{"palette":{"brand-primary":"#DF3603","app-background": "#FFFFFF"}}}';
    } else if (this.app.industry === 'manufacturing') {
      this.theme =
        '{"base":{"palette":{"brand-primary":"#D31D36","app-background": "#FFFFFF"}}}';
    }
    if (this.settings.general.theming.override) {
      this.theme = `{"base":{"palette":{"brand-primary":"${this.settings.general.theming.brandColor}","interactive":"${this.settings.general.theming.interactiveColor}","app-background": "#FFFFFF"}}}`;
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
    if (Object.keys(this.extraParamContent).length > 0) {
      this.startingFields = this.extraParamContent;
    }
    this.staticContentUrl = this.settings.general.connection.c11nserver;
    this.clientId = this.settings.general.connection.clientid;

    this.isWebEmbedInitialized = 'true';
  },
  updated() {
    const mytag = this.$refs.mycomp;
    mytag.addEventListener('embedprocessingend', embedEventFn);
    mytag.addEventListener('embedready', embedEventFn);
    mytag.addEventListener('embedcloseconfirmview', embedEventFn);
  },
  beforeUnmount() {
    const mytag = this.$refs.mycomp;
    mytag.removeEventListener('embedprocessingend', embedEventFn);
    mytag.removeEventListener('embedready', embedEventFn);
    mytag.removeEventListener('embedcloseconfirmview', embedEventFn);
    if (resizeObserver) {
      resizeObserver.unobserve(mytag);
    }
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
