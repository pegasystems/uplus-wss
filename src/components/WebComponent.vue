<template>
  <pega-mashup-light-v2
    class="pega-mashup"
    ref="mycomp"
    v-if="this.settings.general.connection.type === 'dxv2'"
  />
  <pega-mashup-light class="pega-mashup" ref="mycomp" v-else />
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
    return mainconfig;
  },
  mounted() {
    const mytag = this.$refs.mycomp;
    let objClass = '';
    let actionParam = '';
    let action = '';
    let caseTitle = '';
    let heading = '';
    let extraParam = '';
    if (this.quickLinkId !== -1) {
      action = this.settings.quicklinks[this.quickLinkId].action;
      mytag.url = this.settings.quicklinks[this.quickLinkId].url;
      objClass = this.settings.quicklinks[this.quickLinkId].objclass;
      actionParam = this.settings.quicklinks[this.quickLinkId].actionparam;
      caseTitle =
        this.settings.quicklinks[this.quickLinkId].title[this.currentLocale];
      extraParam = this.settings.quicklinks[this.quickLinkId].extraparam;
      heading = this.settings.quicklinks[this.quickLinkId].heading;
    } else if (this.viewBill !== -1) {
      action = this.settings.billpay.action;
      mytag.url = this.settings.billpay.url;
      objClass = this.settings.billpay.objclass;
      actionParam = this.settings.billpay.actionparam;
      extraParam = this.settings.billpay.extraparam;
      heading = this.settings.billpay.heading;
    } else if (this.viewBanner !== -1) {
      action = this.settings.banner.action;
      mytag.url = this.settings.banner.url;
      objClass = this.settings.banner.objclass;
      actionParam = this.settings.banner.actionparam;
      extraParam = this.settings.banner.extraparam;
      heading = this.settings.banner.heading;
    } else if (this.homeHeroAction !== -1) {
      action = this.settings.homeheroaction.action;
      mytag.url = this.settings.homeheroaction.url;
      objClass = this.settings.homeheroaction.objclass;
      actionParam = this.settings.homeheroaction.actionparam;
      extraParam = this.settings.homeheroaction.extraparam;
      heading = this.settings.homeheroaction.heading;
    } else if (this.offerAction !== -1) {
      action = this.settings.offeraction.action;
      mytag.url = this.settings.offeraction.url;
      objClass = this.settings.offeraction.objclass;
      actionParam = this.settings.offeraction.actionparam;
      extraParam = this.settings.offeraction.extraparam;
      heading = this.settings.offeraction.heading;
    } else if (this.showActivity) {
      action = this.settings.activity.action;
      mytag.url = this.settings.activity.url;
      objClass = this.settings.activity.objclass;
      actionParam = this.settings.activity.actionparam;
      extraParam = this.settings.activity.extraparam;
      heading = this.settings.activity.heading;
    } else {
      action = this.settings.todo.action;
      mytag.url = this.settings.todo.url;
      objClass = this.settings.todo.objclass;
      actionParam = this.settings.todo.actionparam;
      extraParam = this.settings.todo.extraparam;
      heading = this.settings.todo.heading;
    }
    if (action === 'display') {
      mytag.title = heading === '' ? 'My worklist' : heading;
      if (actionParam === 'dataView') {
        mytag.action = 'dataView';
        if (this.userId !== -1) {
          extraParam = extraParam.replace(
            '##USERID##',
            this.settings.users[this.userId].pega_userid,
          );
        }
        mytag.dataviewParams = JSON.parse(extraParam);
      } else if (actionParam === 'taskList') {
        mytag.action = 'taskList';
      } else {
        mytag.action = 'workList';
      }
    } else if (action === 'createNewWork') {
      mytag.action = action;
      mytag.casetype = objClass;
    } else if (action === 'openAssignment') {
      mytag.action = action;
      mytag.caseID = actionParam;
    } else if (action === 'openWorkByHandle') {
      mytag.action = action;
      mytag.caseID = actionParam;
    }
    mytag.bShowCreate = 'false';
    mytag.bShowSave = 'false';
    mytag.bShowAttachments =
      '' + mainconfig.settings.general.connection.showAttachments;
    if (mytag.url === '') {
      const parent = mytag.parentElement;
      parent.removeChild(mytag);
      const embedForm = document.createElement('section');
      embedForm.className = 'flex flex-col height-100-pct';
      embedForm.innerHTML = `<iframe
      class="pega ${this.isMobilePhone ? 'phone' : 'desktop'}"
      src="form-embed.html"
      style="overflow: hidden; height: 600px"
      data-attr-title="${caseTitle}"
      data-attr-color="${
        mainconfig.settings.general.theming.override
          ? mainconfig.settings.general.theming.interactiveColor
          : ''
      }"
      width="100%"
      height="100%"
      border="0"
      frameborder="0"
    ></iframe>`;
      parent.appendChild(embedForm);
      return;
    }
    if (mytag.url.indexOf('/prweb/') !== 0) {
      mytag.url = mytag.url.substring(0, mytag.url.indexOf('/prweb') + 6);
    }
    if (this.userId !== -1) {
      mytag.username = this.settings.users[this.userId].pega_userid;
      mytag.password = this.settings.users[this.userId].pega_pwd;
    } else if (this.homeHeroAction !== -1) {
      mytag.username = this.settings.homeheroaction.pega_userid;
      mytag.password = this.settings.homeheroaction.pega_pwd;
    } else if (this.offerAction !== -1) {
      mytag.username = this.settings.offeraction.pega_userid;
      mytag.password = this.settings.offeraction.pega_pwd;
    }
    if (this.settings.general.connection.type === 'dxv2') {
      mytag.portalName = this.settings.general.connection.webportal;
    }
    if (this.settings.general.connection.authtype === 'oauth2password') {
      mytag.clientid = this.settings.general.connection.clientid;
      mytag.clientsecret = this.settings.general.connection.clientsecret;
    }
    mytag.authentication = this.settings.general.connection.authtype;
    let extraParamContent = {};
    extraParam.split(',').forEach((item) => {
      const values = item.split('=');
      if (values.length === 2) {
        setObjectFromRef(extraParamContent, values[0].trim(), values[1].trim());
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
            extraParamContent,
            values[0].trim(),
            values[1].trim(),
          );
        }
      });
    }
    if (Object.keys(extraParamContent).length > 0) {
      mytag.initialContent = extraParamContent;
    }
    mytag.addEventListener('message', (event) => {
      if (event.detail.type === 'cancel') {
        this.goHomePage();
      }
    });
    if (typeof litElementVersions === 'undefined') {
      const mashupScript = document.createElement('script');
      mashupScript.setAttribute(
        'src',
        '../js/pega-mashup-webcomponent-light-all.js',
      );
      document.head.appendChild(mashupScript);
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
