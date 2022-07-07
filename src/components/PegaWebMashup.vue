<template>
  <section
    class="flex flex-col"
    v-if="isMashupInitialized"
    :class="viewKMHelp !== -1 ? 'kmhelp' : ''"
  >
    <div
      v-if="actionName == 'createNewWork'"
      :id="mashupid"
      :data-pega-gadgetname="mashupid"
      :data-pega-action="actionName"
      :data-pega-action-param-classname="objClass"
      :data-pega-action-param-flowname="startCase"
      data-pega-isdeferloaded="false"
      :data-pega-isretained="dataretained"
      :data-pega-applicationname="appName"
      :data-pega-threadname="threadName"
      data-pega-resizetype="stretch"
      :data-pega-channelID="channelID"
      :data-pega-url="serverUrl"
      :data-pega-tenantid="tenantID"
      :data-pega-action-param-parameters="actionParam"
    ></div>
    <div
      v-else-if="actionName == 'display'"
      :id="mashupid"
      :data-pega-gadgetname="mashupid"
      :data-pega-action="actionName"
      :data-pega-action-param-harnessname="actionNameParam"
      :data-pega-action-param-classname="objClass"
      data-pega-isdeferloaded="false"
      :data-pega-isretained="dataretained"
      :data-pega-applicationname="appName"
      :data-pega-threadname="threadName"
      data-pega-resizetype="stretch"
      :data-pega-channelID="channelID"
      :data-pega-url="serverUrl"
      :data-pega-tenantid="tenantID"
      :data-pega-action-param-parameters="actionParam"
    ></div>
    <div
      v-else-if="actionName == 'getNextWork'"
      :id="mashupid"
      :data-pega-gadgetname="mashupid"
      :data-pega-action="actionName"
      data-pega-isdeferloaded="false"
      :data-pega-isretained="dataretained"
      :data-pega-applicationname="appName"
      :data-pega-threadname="threadName"
      data-pega-resizetype="stretch"
      :data-pega-channelID="channelID"
      :data-pega-url="serverUrl"
      :data-pega-tenantid="tenantID"
      :data-pega-action-param-parameters="actionParam"
    ></div>
    <div
      v-else-if="actionName == 'openAssignment'"
      :id="mashupid"
      :data-pega-gadgetname="mashupid"
      :data-pega-action="actionName"
      :data-pega-action-param-key="actionNameParam"
      data-pega-isdeferloaded="false"
      :data-pega-isretained="dataretained"
      :data-pega-applicationname="appName"
      :data-pega-threadname="threadName"
      data-pega-resizetype="stretch"
      :data-pega-channelID="channelID"
      :data-pega-url="serverUrl"
      :data-pega-tenantid="tenantID"
      :data-pega-action-param-parameters="actionParam"
    ></div>
    <div
      v-else-if="actionName == 'openWorkByHandle'"
      :id="mashupid"
      :data-pega-gadgetname="mashupid"
      :data-pega-action="actionName"
      :data-pega-action-param-key="actionNameParam"
      data-pega-isdeferloaded="false"
      :data-pega-isretained="dataretained"
      :data-pega-applicationname="appName"
      :data-pega-threadname="threadName"
      data-pega-resizetype="stretch"
      :data-pega-channelID="channelID"
      :data-pega-url="serverUrl"
      :data-pega-tenantid="tenantID"
      :data-pega-action-param-parameters="actionParam"
    ></div>
    <div
      v-else-if="actionName == 'openWorkItem'"
      :id="mashupid"
      :data-pega-gadgetname="mashupid"
      :data-pega-action="actionName"
      :data-pega-action-param-workid="actionNameParam"
      data-pega-isdeferloaded="false"
      :data-pega-isretained="dataretained"
      :data-pega-applicationname="appName"
      :data-pega-threadname="threadName"
      data-pega-resizetype="stretch"
      :data-pega-channelID="channelID"
      :data-pega-url="serverUrl"
      :data-pega-tenantid="tenantID"
      :data-pega-action-param-parameters="actionParam"
    ></div>
    <div
      v-else-if="actionName == 'openWorkByURL'"
      :id="mashupid"
      :data-pega-gadgetname="mashupid"
      :data-pega-action="actionName"
      :data-pega-action-param-query="actionNameParam"
      data-pega-isdeferloaded="false"
      :data-pega-isretained="dataretained"
      :data-pega-applicationname="appName"
      :data-pega-threadname="threadName"
      data-pega-resizetype="stretch"
      :data-pega-channelID="channelID"
      :data-pega-url="serverUrl"
      :data-pega-tenantid="tenantID"
      :data-pega-action-param-parameters="actionParam"
    ></div>
  </section>
  <section v-else class="flex flex-col height-100-pct">
    <iframe
      class="pega"
      :class="isMobilePhone ? 'phone' : 'desktop'"
      :data-attr-title="caseTitle"
      :data-attr-color="
        settings.general.theming.override
          ? settings.general.theming.interactiveColor
          : ''
      "
      src="form-embed.html"
      style="overflow: hidden; height: 600px"
      width="100%"
      height="100%"
      border="0"
      frameborder="0"
    ></iframe>
  </section>
</template>

<script>
/* global pega:true _initAllPegaObjects */
/* eslint no-underscore-dangle:0 */
import { mainconfig } from '../global';

export default {
  props: {
    showActivity: Boolean,
  },
  data() {
    return {
      ...mainconfig,
      mashupid: `wss${Date.now()}`,
      mashupScript: '',
      isMashupInitialized: false,
      serverUrl: '',
      actionName: '',
      actionNameParam: '',
      objClass: '',
      startCase: '',
      threadName: '',
      channelID: '',
      appName: '',
      actionParam: '',
      caseTitle: '',
      extraParam: '',
      tenantID: '',
      dataretained: true,
    };
  },
  created() {
    let isInAccoutPage = false;
    this.mashupScript = document.createElement('script');
    if (this.quickLinkId !== -1) {
      this.actionName = this.settings.quicklinks[this.quickLinkId].action;
      this.actionNameParam =
        this.settings.quicklinks[this.quickLinkId].actionparam;
      this.serverUrl = this.settings.quicklinks[this.quickLinkId].url;
      this.objClass = this.settings.quicklinks[this.quickLinkId].objclass;
      this.startCase = this.settings.quicklinks[this.quickLinkId].startcase;
      this.appName = this.settings.quicklinks[this.quickLinkId].application;
      this.channelID = this.settings.quicklinks[this.quickLinkId].channelid;
      this.tenantID = this.settings.quicklinks[this.quickLinkId].tenantid;
      this.dataretained =
        this.settings.quicklinks[this.quickLinkId].dataretained;
      this.extraParam = this.settings.quicklinks[this.quickLinkId].extraparam;
      this.caseTitle =
        this.settings.quicklinks[this.quickLinkId].title[this.currentLocale];
    } else if (this.viewBill !== -1) {
      this.actionName = this.settings.billpay.action;
      this.actionNameParam = this.settings.billpay.actionparam;
      this.serverUrl = this.settings.billpay.url;
      this.objClass = this.settings.billpay.objclass;
      this.startCase = this.settings.billpay.startcase;
      this.appName = this.settings.billpay.application;
      this.channelID = this.settings.billpay.channelid;
      this.tenantID = this.settings.billpay.tenantid;
      this.dataretained = this.settings.billpay.dataretained;
      this.extraParam = this.settings.billpay.extraparam;
    } else if (this.viewBanner !== -1) {
      this.actionName = this.settings.banner.action;
      this.actionNameParam = this.settings.banner.actionparam;
      this.serverUrl = this.settings.banner.url;
      this.objClass = this.settings.banner.objclass;
      this.startCase = this.settings.banner.startcase;
      this.appName = this.settings.banner.application;
      this.channelID = this.settings.banner.channelid;
      this.tenantID = this.settings.banner.tenantid;
      this.dataretained = this.settings.banner.dataretained;
      this.extraParam = this.settings.banner.extraparam;
    } else if (this.homeHeroAction !== -1) {
      this.actionName = this.settings.homeheroaction.action;
      this.actionNameParam = this.settings.homeheroaction.actionparam;
      this.serverUrl = this.settings.homeheroaction.url;
      this.objClass = this.settings.homeheroaction.objclass;
      this.startCase = this.settings.homeheroaction.startcase;
      this.appName = this.settings.homeheroaction.application;
      this.channelID = this.settings.homeheroaction.channelid;
      this.tenantID = this.settings.homeheroaction.tenantid;
      this.dataretained = this.settings.homeheroaction.dataretained;
      this.extraParam = this.settings.homeheroaction.extraparam;
    } else if (this.offerAction !== -1) {
      this.actionName = this.settings.offeraction.action;
      this.actionNameParam = this.settings.offeraction.actionparam;
      this.serverUrl = this.settings.offeraction.url;
      this.objClass = this.settings.offeraction.objclass;
      this.startCase = this.settings.offeraction.startcase;
      this.appName = this.settings.offeraction.application;
      this.channelID = this.settings.offeraction.channelid;
      this.tenantID = this.settings.offeraction.tenantid;
      this.dataretained = this.settings.offeraction.dataretained;
      this.extraParam = this.settings.offeraction.extraparam;

      const urlExtraParams = {};
      window.location.search
        .substr(1)
        .split('&')
        .forEach((item) => {
          urlExtraParams[item.split('=')[0]] = item.split('=')[1];
        });
      for (const i in urlExtraParams) {
        if (
          typeof urlExtraParams[i] !== 'undefined' &&
          urlExtraParams[i] !== ''
        ) {
          this.extraParam += `${(this.extraParam !== '' ? ',' : '') + i}=${
            urlExtraParams[i]
          }`;
        }
      }
    } else if (this.viewKMHelp !== -1) {
      this.actionName = this.settings.kmhelp.action;
      this.actionNameParam = this.settings.kmhelp.actionparam;
      this.serverUrl = this.settings.kmhelp.url;
      this.objClass = this.settings.kmhelp.objclass;
      this.startCase = this.settings.kmhelp.startcase;
      this.appName = this.settings.kmhelp.application;
      this.channelID = this.settings.kmhelp.channelid;
      this.tenantID = this.settings.kmhelp.tenantid;
      this.dataretained = this.settings.kmhelp.dataretained;
      this.extraParam = this.settings.kmhelp.extraparam;
      if (mainconfig.KMArticleID !== '') {
        this.extraParam += `${this.extraParam !== '' ? ',' : ''}ArticleID=${
          mainconfig.KMArticleID
        },preActivityParams={"ArticleID":"${mainconfig.KMArticleID}"}`;
        mainconfig.KMArticleID = '';
      }
    } else if (this.showActivity) {
      this.actionName = this.settings.activity.action;
      this.actionNameParam = this.settings.activity.actionparam;
      this.serverUrl = this.settings.activity.url;
      this.objClass = this.settings.activity.objclass;
      this.startCase = this.settings.activity.startcase;
      this.appName = this.settings.activity.application;
      this.channelID = this.settings.activity.channelid;
      this.tenantID = this.settings.activity.tenantid;
      this.dataretained = this.settings.activity.dataretained;
      this.extraParam = this.settings.activity.extraparam;
    } else {
      isInAccoutPage = true;
      this.actionName = this.settings.todo.action;
      this.actionNameParam = this.settings.todo.actionparam;
      this.serverUrl = this.settings.todo.url;
      this.objClass = this.settings.todo.objclass;
      this.startCase = this.settings.todo.startcase;
      this.appName = this.settings.todo.application;
      this.channelID = this.settings.todo.channelid;
      this.tenantID = this.settings.todo.tenantid;
      this.dataretained = this.settings.todo.dataretained;
      this.extraParam = this.settings.todo.extraparam;
      this.logoutURL.todo = `${this.settings.todo.url}?pyActivity=LogOff`;
    }
    if (this.serverUrl === '') {
      return;
    }
    this.threadName = this.objClass.replace(/-/g, '');
    this.mashupScript.setAttribute(
      'src',
      `${this.serverUrl}?pyActivity=pzIncludeMashupScripts&id=${this.mashupid}`,
    );
    const tmpActionParam = {};
    tmpActionParam.pzSkinName = 'ClaritySkin';
    if (this.app.industry === 'comms') {
      tmpActionParam.pzSkinName = 'ClaritySkin_HoneyFlower';
    } else if (this.app.industry.indexOf('health') === 0) {
      tmpActionParam.pzSkinName = 'ClaritySkin_Keppel';
    } else if (this.app.industry === 'gov') {
      tmpActionParam.pzSkinName = 'ClaritySkin_PictonBlue';
    } else if (
      this.app.industry === 'retail_bank' ||
      this.app.industry === 'commercial_bank'
    ) {
      tmpActionParam.pzSkinName = 'ClaritySkin_Mantis';
    } else if (this.app.industry === 'insurance') {
      tmpActionParam.pzSkinName = 'ClaritySkin_Flame';
    } else if (this.app.industry === 'manufacturing') {
      tmpActionParam.pzSkinName = 'ClaritySkin_DeepCerise';
    }
    tmpActionParam.pyMashupSkeletonName = 'pyDefaultMashupSkeleton';
    if (this.userId !== -1) {
      tmpActionParam.UserIdentifier =
        this.settings.users[this.userId].pega_userid;
      tmpActionParam.Password = encodeURI(
        btoa(this.settings.users[this.userId].pega_pwd),
      );
      if (this.settings.users[this.userId].accountID) {
        tmpActionParam.AccountNumber =
          this.settings.users[this.userId].accountID;
      }
      if (this.settings.users[this.userId].customerID) {
        tmpActionParam.customerID = this.settings.users[this.userId].customerID;
      }
      if (this.settings.users[this.userId].contactID) {
        tmpActionParam.ContactId = this.settings.users[this.userId].contactID;
      }
    } else if (this.viewKMHelp !== -1) {
      tmpActionParam.UserIdentifier = this.settings.kmhelp.username;
      tmpActionParam.Password = encodeURI(btoa(this.settings.kmhelp.password));
    } else if (this.homeHeroAction !== -1) {
      tmpActionParam.UserIdentifier = this.settings.homeheroaction.pega_userid;
      tmpActionParam.Password = encodeURI(
        btoa(this.settings.homeheroaction.pega_pwd),
      );
    } else if (this.offerAction !== -1) {
      tmpActionParam.UserIdentifier = this.settings.offeraction.pega_userid;
      tmpActionParam.Password = encodeURI(
        btoa(this.settings.offeraction.pega_pwd),
      );
    }
    if (this.isDeepLink === true) {
      tmpActionParam.isDeepLink = 'true';
      for (const i in this.deepLinkExtraParam) {
        tmpActionParam[i] = this.deepLinkExtraParam[i];
      }
      /* Reset the state once the deeplink is generated */
      mainconfig.isDeepLink = false;
      mainconfig.deepLinkExtraParam = {};
    }
    if (isInAccoutPage) {
      tmpActionParam.isMashupInContainer = 'true';
    }
    if (typeof this.extraParam !== 'undefined' && this.extraParam !== '') {
      this.extraParam.split(',').forEach((item) => {
        const values = item.split('=');
        if (values.length === 2) {
          tmpActionParam[values[0].trim()] = values[1].trim();
        }
      });
    }
    if (
      this.userId !== -1 &&
      typeof this.settings.users[this.userId].extraparam !== 'undefined' &&
      this.settings.users[this.userId].extraparam !== ''
    ) {
      this.settings.users[this.userId].extraparam.split(',').forEach((item) => {
        const values = item.split('=');
        if (values.length === 2) {
          tmpActionParam[values[0].trim()] = values[1].trim();
        }
      });
    }
    tmpActionParam.pySkipCookieConsent = 'true';
    this.actionParam = JSON.stringify(tmpActionParam);
    this.isMashupInitialized = true;
    /* If Mashup is already initialized - just return */
    if (
      typeof pega !== 'undefined' &&
      typeof pega.Mashup !== 'undefined' &&
      typeof pega.Mashup.Communicator !== 'undefined'
    ) {
      return;
    }

    this.mashupScript.onload = function onloadMashup() {
      pega.Mashup.Communicator.register(pega.Mashup.hostActionsProcessor);
      _initAllPegaObjects();
    };
    if (typeof pega === 'undefined') {
      document.head.appendChild(this.mashupScript);
      window.pega = {};
    }
  },
  mounted() {
    if (
      typeof pega !== 'undefined' &&
      typeof pega.Mashup !== 'undefined' &&
      typeof pega.Mashup.Communicator !== 'undefined'
    ) {
      pega.web.mgr._initGadgets(window);
    }
  },
};
</script>
