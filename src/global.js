/* global settings app getNBAMServiceControl   */
/* eslint no-eval: 0 */
import Vue from 'vue';
import VueI18n from 'vue-i18n';

const upgradeConfig = function upgradeConfig(cfg) {
  /* Handle upgrade issues */
  if (
    cfg.settings.todo &&
    typeof cfg.settings.todo.hideactivity === 'undefined'
  ) {
    cfg.settings.todo.hideactivity = false;
  }
  if (
    cfg.settings.todo &&
    typeof cfg.settings.todo.hideaccount === 'undefined'
  ) {
    cfg.settings.todo.hideaccount = false;
  }
  if (
    cfg.settings.billpay &&
    typeof cfg.settings.billpay.hidebillpay === 'undefined'
  ) {
    cfg.settings.billpay.hidebillpay = false;
  }
  if (typeof cfg.settings.kmhelp === 'undefined') {
    cfg.settings.kmhelp = {
      action: 'display',
      actionparam: 'KMHelpSitePortal',
      objclass: 'Data-Portal',
      url: '',
      startcase: 'pyStartCase',
      application: '',
      extraparam: '',
    };
  }
  if (typeof cfg.settings.offeraction === 'undefined') {
    cfg.settings.offeraction = {
      action: 'createNewWork',
      actionparam: '',
      objclass: '',
      url: '',
      startcase: 'pyStartCase',
      application: '',
      pega_userid: '',
      pega_pwd: '',
      extraparam: '',
    };
  }
  if (typeof cfg.settings.pega_chat.CoBrowseServerURL === 'undefined') {
    cfg.settings.pega_chat.CoBrowseServerURL = '';
  }
  if (typeof cfg.settings.pega_chat.CoBrowseToken === 'undefined') {
    cfg.settings.pega_chat.CoBrowseToken = '';
  }
  if (typeof cfg.settings.pega_chat.SSAConfigName === 'undefined') {
    cfg.settings.pega_chat.SSAConfigName = '';
  }
  for (const i in cfg.settings.users) {
    if (typeof cfg.settings.users[i].accountID === 'undefined') {
      cfg.settings.users[i].accountID = '';
    }
    if (typeof cfg.settings.users[i].contactID === 'undefined') {
      cfg.settings.users[i].contactID = '';
    }
    if (typeof cfg.settings.users[i].customerID === 'undefined') {
      cfg.settings.users[i].customerID = '';
    }
    if (typeof cfg.settings.users[i].extraparam === 'undefined') {
      cfg.settings.users[i].extraparam = '';
    }
    if (typeof cfg.settings.users[i].billpay === 'undefined') {
      cfg.settings.users[i].billpay = 164.8;
    }
  }
  if (typeof cfg.settings.pega_marketing.homePage === 'undefined') {
    cfg.settings.pega_marketing.homePage = { containerName: 'TopOffers' };
  }
  if (typeof cfg.settings.pega_marketing.accountPage === 'undefined') {
    cfg.settings.pega_marketing.accountPage = { containerName: 'TopOffers' };
  }
  if (typeof cfg.settings.pega_marketing.phonePage === 'undefined') {
    cfg.settings.pega_marketing.phonePage = { containerName: 'TopOffers' };
  }
  if (typeof cfg.settings.pega_marketing.offerPage === 'undefined') {
    cfg.settings.pega_marketing.offerPage = { containerName: 'TopOffers' };
  }
  if (typeof cfg.settings.pega_marketing.homePage.placement === 'undefined') {
    cfg.settings.pega_marketing.homePage.placement = 'Hero,Tile,Tile,Tile';
  }
  if (
    typeof cfg.settings.pega_marketing.accountPage.placement === 'undefined'
  ) {
    cfg.settings.pega_marketing.accountPage.placement = 'Tile';
  }
  if (typeof cfg.settings.pega_marketing.phonePage.placement === 'undefined') {
    cfg.settings.pega_marketing.phonePage.placement = 'Tile';
  }
  if (typeof cfg.settings.pega_marketing.offerPage.placement === 'undefined') {
    cfg.settings.pega_marketing.offerPage.placement = 'Hero,Tile,Tile,Tile';
  }
  if (typeof cfg.settings.pega_marketing.homePage.clickaction === 'undefined') {
    cfg.settings.pega_marketing.homePage.clickaction = 'Mashup';
  }
  if (
    typeof cfg.settings.pega_marketing.accountPage.clickaction === 'undefined'
  ) {
    cfg.settings.pega_marketing.accountPage.clickaction = 'Mashup';
  }
  if (
    typeof cfg.settings.pega_marketing.phonePage.clickaction === 'undefined'
  ) {
    cfg.settings.pega_marketing.phonePage.clickaction = 'Mashup';
  }
  if (
    typeof cfg.settings.pega_marketing.offerPage.clickaction === 'undefined'
  ) {
    cfg.settings.pega_marketing.offerPage.clickaction = 'Mashup';
  }
  if (
    typeof cfg.settings.pega_marketing.replaceHomePageHeader === 'undefined'
  ) {
    cfg.settings.pega_marketing.replaceHomePageHeader = false;
  }
  if (typeof cfg.settings.pega_marketing.showAIOverlay === 'undefined') {
    cfg.settings.pega_marketing.showAIOverlay = false;
  }
  for (const i in cfg.settings.quicklinks) {
    if (typeof cfg.settings.quicklinks[i].hide === 'undefined') {
      cfg.settings.quicklinks[i].hide = false;
    }
  }
  return cfg;
};

// Directive for dealing out with clicking outside of an overlay
let handleOutsideClick;
Vue.directive('clickoutside', {
  bind(el, binding, vnode) {
    handleOutsideClick = (e) => {
      e.stopPropagation();
      const { handler } = binding.value;
      if (!el.contains(e.target)) {
        vnode.context[handler](e);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
  },
  unbind() {
    document.removeEventListener('click', handleOutsideClick);
    document.removeEventListener('touchstart', handleOutsideClick);
  },
});

Vue.use(VueI18n);

let userLang = navigator.language || navigator.userLanguage;
if (userLang.length > 2) userLang = userLang.substring(0, 1);
if (settings.i18n.defaultlocale === 'browser') {
  settings.i18n.defaultlocale = userLang;
}

const messages = {};
const dateTimeFormats = {};
const numberFormats = {};

let isDefaultLocaleLoaded = false;
for (const i in settings.i18n.languages) {
  const lang = settings.i18n.languages[i];
  messages[lang] = {
    message: eval(`lang${lang.toUpperCase()}`),
  };
  dateTimeFormats[lang] = eval(`dateFormat${lang.toUpperCase()}`);
  numberFormats[lang] = eval(`numberFormat${lang.toUpperCase()}`);
  /* Check if the default locale is available in the list of languages - if not, then select the first one */
  if (lang === settings.i18n.defaultlocale) isDefaultLocaleLoaded = true;
}
if (!isDefaultLocaleLoaded) {
  [settings.i18n.defaultlocale] = settings.i18n.languages;
}

const i18n = new VueI18n({
  locale: settings.i18n.defaultlocale,
  messages,
  dateTimeFormats,
  numberFormats,
});

/* Detect if this is a phone */
let isMobilePhone = false;
if (/iPhone/.test(navigator.userAgent) || /Android/.test(navigator.userAgent)) {
  isMobilePhone = true;
}

if (isMobilePhone) {
  document.documentElement.className = 'phone';
}

let mainconfigTmp = Object.assign(
  {},
  {
    settings,
    app,
    isMobilePhone,
    offerURL: '',
    homeHeroImg: '',
    previousPage: '',
    intent: '',
    reloadOffer: 1,
    reloadMashup: 1,
    reloadAccountMashup: 1,
    isAuthenticated: false,
    isSidePanelVisible: false,
    isCategoryPage: false,
    isDeepLink: false,
    phonePageName: 'home',
    userId: -1,
    quickLinkId: -1,
    viewBill: -1,
    toDo: -1,
    viewKMHelp: -1,
    KMArticleID: '',
    logoutURL: {},
    homeHeroAction: -1,
    offerAction: -1,
    currentLocale: settings.i18n.defaultlocale,
  },
);
// Retrieve the object from storage
const retrievedObject = localStorage.getItem(
  `config_${mainconfigTmp.app.industry}`,
);
if (retrievedObject != null) {
  const tmpObj = JSON.parse(retrievedObject);
  if (tmpObj.settings) {
    mainconfigTmp.settings = tmpObj.settings;
  }
}

mainconfigTmp = upgradeConfig(mainconfigTmp);

/* Read the current state */
if (window.history) {
  const currentState = window.history.state;
  if (
    mainconfigTmp.userId === -1 &&
    currentState !== null &&
    typeof currentState.userId !== 'undefined'
  ) {
    mainconfigTmp.isAuthenticated = true;
    mainconfigTmp.userId = currentState.userId;
    if (typeof currentState.quickLinkId !== 'undefined') {
      mainconfigTmp.quickLinkId = currentState.quickLinkId;
      window.history.replaceState(
        { userId: mainconfigTmp.userId },
        '',
        `quicklink${mainconfigTmp.quickLinkId}`,
      );
    } else {
      window.history.replaceState(
        { userId: mainconfigTmp.userId },
        '',
        'account',
      );
    }
  }
}

/* Check if user is passed as parameter */
const queryDict = {};
window.location.search
  .substr(1)
  .split('&')
  .forEach((item) => {
    queryDict[item.split('=')[0]] = item.split('=')[1];
  });
if (queryDict.username || queryDict.pega_userid) {
  for (const i in mainconfigTmp.settings.users) {
    if (
      (typeof queryDict.pega_userid !== 'undefined' &&
        mainconfigTmp.settings.users[i].pega_userid ===
          queryDict.pega_userid) ||
      (typeof queryDict.username !== 'undefined' &&
        mainconfigTmp.settings.users[i].username === queryDict.username)
    ) {
      mainconfigTmp.isAuthenticated = true;
      mainconfigTmp.userId = i;
      mainconfigTmp.isDeepLink = true;
      break;
    }
  }
  /* check if quicklinkclass is passed as parameter */
  if (queryDict.quicklinkclass) {
    for (const i in mainconfigTmp.settings.quicklinks) {
      if (
        mainconfigTmp.settings.quicklinks[i].objclass ===
        queryDict.quicklinkclass
      ) {
        mainconfigTmp.quickLinkId = i;
        window.history.replaceState(
          { userId: mainconfigTmp.userId },
          '',
          `quicklink${mainconfigTmp.quickLinkId}`,
        );
        break;
      }
    }
  }
  if (
    mainconfigTmp.quickLinkId === -1 &&
    mainconfigTmp.userId !== -1 &&
    mainconfigTmp.isAuthenticated
  ) {
    window.history.replaceState(
      { userId: mainconfigTmp.userId },
      '',
      'account',
    );
  }
}

/* initialize the object needed by PegaHelper */
window.PegaCSWSS = {
  Cobrowse: {
    ServerURL: mainconfigTmp.settings.pega_chat.CoBrowseServerURL,
    Token: mainconfigTmp.settings.pega_chat.CoBrowseToken,
  },
  SSAConfigName: mainconfigTmp.settings.pega_chat.SSAConfigName,
  WCBConfigName: mainconfigTmp.settings.pega_chat.WCBConfigName,
  WebChatBotID: mainconfigTmp.settings.pega_chat.WebChatBotID,
  ApplicationName: mainconfigTmp.settings.pega_chat.ApplicationName,
  MashupURL: mainconfigTmp.settings.pega_chat.MashupURL,
  ContactID: '',
  AccountNumber: '',
  UserName: '',
  ExtraParams: {},
};
if (mainconfigTmp.userId !== -1) {
  const u = mainconfigTmp.settings.users[mainconfigTmp.userId];
  window.PegaCSWSS.ContactID = u.contactID;
  window.PegaCSWSS.AccountNumber = u.accountID;
  window.PegaCSWSS.UserName = u.username;
  if (typeof u.extraparam !== 'undefined' && u.extraparam !== '') {
    u.extraparam.split(',').forEach((item) => {
      const values = item.split('=');
      if (values.length === 2) {
        window.PegaCSWSS.ExtraParams[values[0].trim()] = values[1].trim();
      }
    });
  }
}

// We don't show chat and CoBrowse on the settings page
if (
  typeof mainconfigTmp.settings.pega_chat !== 'undefined' &&
  mainconfigTmp.settings.pega_chat.MashupURL !== '' &&
  `${window.location}`.indexOf('/settings.html') === -1
) {
  const scriptLoad = document.createElement('script');
  scriptLoad.onload = function onloadJquery() {
    const scriptLoad2 = document.createElement('script');
    scriptLoad2.setAttribute('src', '../js/PegaHelper.js');
    document.head.appendChild(scriptLoad2);
    const scriptLoad1 = document.createElement('script');
    scriptLoad1.setAttribute('src', '../js/PegaHelperExtension.js');
    document.head.appendChild(scriptLoad1);
  };
  scriptLoad.setAttribute('src', '../js/jquery-min.js');
  document.head.appendChild(scriptLoad);
}

// Handle the back button support on mobile
// The example iframe will just do a parent.pegaMashupNavigateBack() but the
// real Mashup app will have to use the postMessage() api.
if (isMobilePhone) {
  window.pegaMashupNavigateBack = function pegaMashupNavigateBack() {
    const elems = document.getElementsByClassName('pi-caret-left');
    if (elems.length > 0) {
      elems[0].click();
    }
  };
}
const mainconfig = mainconfigTmp;

const parseResponseData = (
  Context,
  type,
  OffersList,
  containerName,
  customerID,
) => {
  let maxOffers = OffersList.length;
  if (
    Context.settings.pega_marketing[type] &&
    Context.settings.pega_marketing[type].placement
  ) {
    maxOffers = Context.settings.pega_marketing[type].placement.split(',')
      .length;
    if (maxOffers > OffersList.length) {
      maxOffers = OffersList.length;
    }
  }
  let isHeroPlacementFilled = false;
  for (let i = 0; i < maxOffers; i++) {
    let imgurl = OffersList[i].ImageURL.trim();
    if (!imgurl.startsWith('http')) {
      // expect the file to be hosted on this server
      imgurl = imgurl.replace('webwb/', './img/').replace('web/', './img/');
    }
    if (imgurl === '') {
      imgurl = 'img/option-1.jpg';
    }
    if (
      !isHeroPlacementFilled &&
      OffersList[i].Placement === 'Hero' &&
      typeof Context.hero_offer === 'object'
    ) {
      isHeroPlacementFilled = true;
      const msg = type === 'homePage' ? '' : OffersList[i].ShortDescription;
      if (Context.settings.pega_marketing.replaceHomePageHeader) {
        mainconfig.homeHeroImg = imgurl;
        imgurl = '';
      }
      Context.hero_offer = {
        img: imgurl,
        placement: OffersList[i].Placement,
        title: OffersList[i].Label,
        message: msg,
        link: Context.hero_offer.link,
        url: OffersList[i].ClickThroughURL,
        name: OffersList[i].Name,
        treatment: OffersList[i].Treatment,
        rank: OffersList[i].Rank,
        propensity: OffersList[i].Propensity,
        priority: OffersList[i].Priority,
        reason: OffersList[i].Reason,
        interactionID: OffersList[i].InteractionID,
        identifier: OffersList[i].Identifier,
        container: containerName,
        customerID,
        showAIoverlay: false,
      };
    } else {
      Context.data.push({
        img: imgurl,
        placement: OffersList[i].Placement,
        title: OffersList[i].Label,
        message: OffersList[i].ShortDescription,
        link: 'learnmore',
        url: OffersList[i].ClickThroughURL,
        name: OffersList[i].Name,
        treatment: OffersList[i].Treatment,
        rank: OffersList[i].Rank,
        propensity: OffersList[i].Propensity,
        priority: OffersList[i].Priority,
        reason: OffersList[i].Reason,
        interactionID: OffersList[i].InteractionID,
        identifier: OffersList[i].Identifier,
        container: containerName,
        customerID,
        showAIoverlay: false,
      });
    }
  }
  Context.loading = false;
};

const initNBAM = function initNBAM(
  Context,
  type,
  customerID,
  previousPage,
  currentPage,
) {
  if (typeof getNBAMServiceControl !== 'undefined') {
    const nbamServiceCtrl = getNBAMServiceControl('V2', false);
    nbamServiceCtrl.initialize(
      Context.settings.pega_marketing.Host,
      Context.settings.pega_marketing.Port,
    );
    let containerName = 'TopOffers';
    if (
      Context.settings.pega_marketing[type] &&
      Context.settings.pega_marketing[type].containerName
    ) {
      containerName = Context.settings.pega_marketing[type].containerName;
    }
    let placement = 'Tile';
    if (
      Context.settings.pega_marketing[type] &&
      Context.settings.pega_marketing[type].placement
    ) {
      placement = Context.settings.pega_marketing[type].placement;
    }
    const intent = Context.intent.trim();
    nbamServiceCtrl.getOffers(
      customerID,
      containerName,
      'Web',
      previousPage,
      currentPage,
      (data) => {
        data.RankedResults = data.ContainerList[0].RankedResults;
        if (data.OffersList && data.OffersList.length > 0) {
          parseResponseData(
            Context,
            type,
            data.OffersList,
            containerName,
            customerID,
          );
        } else if (data.RankedResults && data.RankedResults.length > 0) {
          parseResponseData(
            Context,
            type,
            data.RankedResults,
            containerName,
            customerID,
          );
        }
      },
      intent,
      placement,
    );
  } else {
    const scriptLoadMkt = document.createElement('script');
    scriptLoadMkt.onload = function onloadPegaMkt() {
      initNBAM(Context, type, customerID, previousPage, currentPage);
    };
    scriptLoadMkt.setAttribute('src', '../js/realtimecontainerscript.js');
    document.head.appendChild(scriptLoadMkt);
  }
};

const updatePegaChat = function updatePegaChat(u) {
  /* Delete the preview gadget */
  const elPreview = document.querySelector(
    "[data-pega-gadgetname='PreviewGadget']",
  );
  if (elPreview != null) {
    elPreview.remove();
  }

  /* Update PegaChat and pass the correct ContactId, AccountNumber and username */
  const el = document.querySelector(
    "[data-pega-gadgetname='OnlineHelp'] > iframe",
  );
  if (el != null && typeof el.src === 'string') {
    let updatedSrc = `${el.src}&ContactId=${u.contactID}&AccountNumber=${
      u.accountID
    }&username=${u.username}`;
    if (typeof u.extraparam !== 'undefined' && u.extraparam !== '') {
      u.extraparam.split(',').forEach((item) => {
        const values = item.split('=');
        if (values.length === 2) {
          updatedSrc += `&${values[0].trim()}=${values[1].trim()}`;
        }
      });
    }
    if (updatedSrc.indexOf('timestamp') > -1) {
      updatedSrc = updatedSrc.replace(
        /timestamp=[^&]+/,
        `timestamp=${Date.now()}`,
      );
    } else {
      // Else we will append the timestamp
      updatedSrc += `&timestamp=${Date.now()}`;
    }
    // updatedSrc = encodeURI(updatedSrc);
    const parentNode = el.parentNode;
    el.remove();
    el.src = updatedSrc;
    parentNode.appendChild(el);
  }
  window.PegaCSWSS.ContactID = u.contactID;
  window.PegaCSWSS.AccountNumber = u.accountID;
  window.PegaCSWSS.UserName = u.username;
  if (typeof u.extraparam !== 'undefined' && u.extraparam !== '') {
    u.extraparam.split(',').forEach((item) => {
      const values = item.split('=');
      if (values.length === 2) {
        window.PegaCSWSS.ExtraParams[values[0].trim()] = values[1].trim();
      }
    });
  }
};

export {
  mainconfig, i18n, upgradeConfig, initNBAM, updatePegaChat,
};
