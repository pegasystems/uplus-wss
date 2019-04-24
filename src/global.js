import Vue from 'vue'
import VueI18n from 'vue-i18n'

// Directive for dealing out with clicking outside of an overlay
let handleOutsideClick
Vue.directive('clickoutside', {
  bind(el, binding, vnode) {
    handleOutsideClick = (e) => {
      e.stopPropagation()
      const {
        handler
      } = binding.value
      if (!el.contains(e.target)) {
        vnode.context[handler](event)
      }
    }
    document.addEventListener('click', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)
  },
  unbind() {
    document.removeEventListener('click', handleOutsideClick)
    document.removeEventListener('touchstart', handleOutsideClick)
  }
})

Vue.use(VueI18n);

var userLang = navigator.language || navigator.userLanguage;
if (userLang.length > 2) userLang = userLang.substring(0, 1);
if ("browser" === settings.i18n.defaultlocale) settings.i18n.defaultlocale = userLang;

const messages = {};
const dateTimeFormats = {};
const numberFormats = {};

var isDefaultLocaleLoaded = false;
for (var i in settings.i18n.languages) {
  var lang = settings.i18n.languages[i];
  messages[lang] = {
    message: eval("lang" + lang.toUpperCase())
  };
  dateTimeFormats[lang] = eval("dateFormat" + lang.toUpperCase());
  numberFormats[lang] = eval("numberFormat" + lang.toUpperCase());
  /* Check if the default locale is available in the list of languages - if not, then select the first one */
  if (lang === settings.i18n.defaultlocale) isDefaultLocaleLoaded = true;
}
if (!isDefaultLocaleLoaded) settings.i18n.defaultlocale = settings.i18n.languages[0];

var i18n = new VueI18n({
  locale: settings.i18n.defaultlocale,
  messages,
  dateTimeFormats,
  numberFormats
})

/* Detect if this is a phone */
var isMobilePhone = false;
if (/iPhone/.test(navigator.userAgent) || /Android/.test(navigator.userAgent)) {
  var isMobilePhone = true;
}

if (isMobilePhone) {
  document.documentElement.className = "phone";
}
var mainconfig = Object.assign({}, {
  settings: settings,
  app: app,
  isMobilePhone: isMobilePhone,
  isAuthenticated: false,
  isSidePanelVisible: false,
  phonePageName: "home",
  userId: -1,
  quickLinkId: -1,
  viewBill: -1,
  homeHeroAction: -1,
  currentLocale: settings.i18n.defaultlocale
});

// Retrieve the object from storage
var retrievedObject = localStorage.getItem("config_" + mainconfig.app.industry);
if (retrievedObject != null) {
  mainconfig = JSON.parse(retrievedObject);
}

/* Not sure if everything is needed in this object - keeping it as is for backward compatibility */
var PegaCSWSS = {
  Chat: {
    ServerURL: "",
    Token: ""
  },
  Cobrowse: {
    ServerURL: "",
    Token: ""
  },
  SSAConfigName: "",
  WCBConfigName: mainconfig.settings.pega_chat.WCBConfigName,
  WebChatBotID: mainconfig.settings.pega_chat.WebChatBotID,
  ApplicationName: mainconfig.settings.pega_chat.ApplicationName,
  MashupURL: mainconfig.settings.pega_chat.MashupURL,
  ContactID: mainconfig.settings.pega_chat.ContactID,
  AccountNumber: mainconfig.settings.pega_chat.AccountNumber,
  UserName: mainconfig.settings.pega_chat.UserName
};

window.PegaCSWSS = PegaCSWSS;

// We don't show chat and CoBrowse on the settings page and on a mobile phone
if (typeof mainconfig.settings.pega_chat !== "undefined" && mainconfig.settings.pega_chat.MashupURL !== "" && !isMobilePhone && !("" + window.location).endsWith("settings.html")) {
  document.write('<script src="../js/jquery.min.js"><\/script>');
  document.write('<script src="../js/PegaHelperExtension.js"><\/script>');
  document.write('<script src="../js/PegaHelper.js"><\/script>');
}

window.pegaMashupNavigateBack = function() {
  document.getElementsByClassName("pi-caret-left")[0].click();
}

export {
  mainconfig,
  i18n
};