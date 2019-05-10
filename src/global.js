/* exported pegaMashupNavigateBack  */
/* global settings app getNBAMServiceControl  */
/* eslint no-eval: 0 */
import Vue from 'vue';
import VueI18n from 'vue-i18n';

const upgradeConfig = function upgradeConfig(cfg) {
  /* Handle upgrade issues */
  if (cfg.settings.todo && typeof cfg.settings.todo.hideactivity === 'undefined') {
    cfg.settings.todo.hideactivity = false;
  }
  if (cfg.settings.billpay && typeof cfg.settings.billpay.hidebillpay === 'undefined') {
    cfg.settings.billpay.hidebillpay = false;
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
  }
  if (typeof cfg.settings.pega_marketing.homePage === 'undefined') {
    cfg.settings.pega_marketing.homePage = { containerName: 'TopOffers', maxOffers: 3 };
  }
  if (typeof cfg.settings.pega_marketing.accountPage === 'undefined') {
    cfg.settings.pega_marketing.accountPage = { containerName: 'TopOffers', maxOffers: 1 };
  }
  if (typeof cfg.settings.pega_marketing.phonePage === 'undefined') {
    cfg.settings.pega_marketing.phonePage = { containerName: 'TopOffers', maxOffers: 1 };
  }
  return cfg;
};

const parseResponseData = (Context, type, OffersList) => {
  let maxOffers = OffersList.length;
  if (Context.settings.pega_marketing[type] && Context.settings.pega_marketing[type].maxOffers) {
    maxOffers = parseInt(Context.settings.pega_marketing[type].maxOffers, 10);
    if (maxOffers > OffersList.length) {
      maxOffers = OffersList.length;
    }
  }
  for (let i = 0; i < maxOffers; i++) {
    let imgurl = OffersList[i].ImageURL;
    if (!imgurl.startsWith('http')) {
      // expect the file to be hosted on this server
      imgurl = imgurl.replace('webwb/', './img/').replace('web/', './img/');
    }
    const extraURLParams = `I=${OffersList[i].Issue}&G=${OffersList[i].Group}&O=${OffersList[i].Name}`;
    Context.data[i] = {
      img: imgurl,
      title: OffersList[i].Label,
      message: OffersList[i].ShortDescription,
      link: 'learnmore',
      url: `./offer.html?${extraURLParams}`,
    };
  }
  Context.loading = false;
};

const initNBAM = function initNBAM(Context, type, customerID) {
  if (typeof getNBAMServiceControl !== 'undefined') {
    const nbamServiceCtrl = getNBAMServiceControl('V2', false);
    nbamServiceCtrl.initialize(Context.settings.pega_marketing.Host, Context.settings.pega_marketing.Port);
    const currentPage = 'index.html';
    const previousPage = 'index.html';
    let containerName = 'TopOffers';
    if (Context.settings.pega_marketing[type] && Context.settings.pega_marketing[type].containerName) {
      containerName = Context.settings.pega_marketing[type].containerName;
    }
    nbamServiceCtrl.getOffers(customerID, containerName, 'Web', previousPage, currentPage, (data) => {
      data.RankedResults = data.ContainerList[0].RankedResults;
      if (data.OffersList && data.OffersList.length > 0) {
        parseResponseData(Context, type, data.OffersList);
      } else if (data.RankedResults && data.RankedResults.length) {
        parseResponseData(Context, type, data.RankedResults);
      }
    });
  } else {
    setTimeout(initNBAM(Context, type, customerID), 200);
  }
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
    isAuthenticated: false,
    isSidePanelVisible: false,
    phonePageName: 'home',
    userId: -1,
    quickLinkId: -1,
    viewBill: -1,
    toDo: -1,
    homeHeroAction: -1,
    currentLocale: settings.i18n.defaultlocale,
  },
);
// Retrieve the object from storage
const retrievedObject = localStorage.getItem(`config_${mainconfigTmp.app.industry}`);
if (retrievedObject != null) {
  const tmpObj = JSON.parse(retrievedObject);
  if (tmpObj.settings) {
    mainconfigTmp.settings = tmpObj.settings;
  }
}

mainconfigTmp = upgradeConfig(mainconfigTmp);

/* Not sure if everything is needed in this object - keeping it as is for backward compatibility */
const PegaCSWSS = {
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
};

window.PegaCSWSS = PegaCSWSS;

// We don't show chat and CoBrowse on the settings page and on a mobile phone
if (
  typeof mainconfigTmp.settings.pega_chat !== 'undefined' &&
  mainconfigTmp.settings.pega_chat.MashupURL !== '' &&
  !`${window.location}`.endsWith('settings.html')
) {
  document.write('<script src="../js/jquery-min.js"></script>');
  document.write('<script src="../js/PegaHelperExtension.js"></script>');
  document.write('<script src="../js/PegaHelper.js"></script>');
}

// Load the Pega Marketing file if configured
if (
  typeof mainconfigTmp.settings.pega_marketing !== 'undefined' &&
  mainconfigTmp.settings.pega_marketing.Host !== '' &&
  !`${window.location}`.endsWith('settings.html')
) {
  document.write('<script src="../js/realtimecontainerscript.js"></script>');
}

// Handle the back button support on mobile
// The example iframe will just do a parent.pegaMashupNavigateBack() but the
// real Mashup app will have to use the postMessage() api.
if (isMobilePhone) {
  /* Register global listener for navigate back */
  window.addEventListener('message', (e) => {
    if (e.data === 'pegaMashupNavigateBack') {
      window.pegaMashupNavigateBack();
    }
  });
  window.pegaMashupNavigateBack = function pegaMashupNavigateBack() {
    const elems = document.getElementsByClassName('pi-caret-left');
    if (elems.length > 0) {
      elems[0].click();
    }
  };
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
      (typeof queryDict.pega_userid !== 'undefined' && mainconfigTmp.settings.users[i].pega_userid === queryDict.pega_userid) ||
      (typeof queryDict.username !== 'undefined' && mainconfigTmp.settings.users[i].username === queryDict.username)
    ) {
      mainconfigTmp.isAuthenticated = true;
      mainconfigTmp.userId = i;
      break;
    }
  }
}

const mainconfig = mainconfigTmp;
export {
  mainconfig, i18n, upgradeConfig, initNBAM,
};
