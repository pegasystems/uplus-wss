<template>
  <pega-mashup-light-v2 class='pega-mashup' ref="mycomp"  v-if="this.settings.general.connection.type === 'dxv2'" />
  <pega-mashup-light class='pega-mashup' ref="mycomp" v-else />
</template>

<script>
import { mainconfig } from '../global';
import { sendClickStreamEvent } from '../CDHIntegration';

export default {
  data() { return mainconfig; },
  mounted() {
    const mytag = this.$refs.mycomp;
    let objClass = '';
    let caseTitle = '';
    if (this.quickLinkId !== -1) {
      mytag.action = this.settings.quicklinks[this.quickLinkId].action;
      mytag.url = this.settings.quicklinks[this.quickLinkId].url;
      objClass = this.settings.quicklinks[this.quickLinkId].objclass;
      caseTitle = this.settings.quicklinks[this.quickLinkId].title[
        this.currentLocale
      ];
    } else if (this.viewBill !== -1) {
      mytag.action = this.settings.billpay.action;
      mytag.url = this.settings.billpay.url;
      objClass = this.settings.billpay.objclass;
    } else if (this.viewBanner !== -1) {
      mytag.action = this.settings.banner.action;
      mytag.url = this.settings.banner.url;
      objClass = this.settings.banner.objclass;
    } else if (this.homeHeroAction !== -1) {
      mytag.action = this.settings.homeheroaction.action;
      mytag.url = this.settings.homeheroaction.url;
      objClass = this.settings.homeheroaction.objclass;
    } else if (this.offerAction !== -1) {
      mytag.action = this.settings.offeraction.action;
      mytag.url = this.settings.offeraction.url;
      objClass = this.settings.offeraction.objclass;
    } else {
      mytag.action = this.settings.todo.action;
      mytag.url = this.settings.todo.url;
      objClass = this.settings.todo.objclass;
    }
    if (mytag.action === 'display') {
      mytag.action = 'workList';
    }
    if (mytag.action === 'createNewWork') {
      mytag.casetype = objClass;
    }
    mytag.bShowCreate = 'false';
    mytag.bShowSave = 'false';
    mytag.bShowAttachments = 'true';
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
      data-attr-color="${mainconfig.settings.general.theming.override ? mainconfig.settings.general.theming.interactiveColor : ''}"
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
    mytag.addEventListener('message', (event) => {
      if (event.detail.type === 'cancel') {
        this.goHomePage();
      }
    });
    if (typeof litElementVersions === 'undefined') {
      const mashupScript = document.createElement('script');
      mashupScript.setAttribute('src', '../js/pega-mashup-webcomponent-light-all.js');
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
