/* global sendProactiveNotificationReq */
/* global PegaUnifiedChatWidget */
import generateJWTKey from './JWTToken';
import { createI18n } from 'vue-i18n';
import { reactive } from 'vue';
import { sendClickStreamEvent } from './CDHIntegration';

const messages = {};
const datetimeFormats = {};
const numberFormats = {};

let isDefaultLocaleLoaded = false;
for (const i in window.settings.i18n.languages) {
  const lang = window.settings.i18n.languages[i];
  messages[lang] = {
    message: eval(`window.lang${lang.toUpperCase()}`),
  };
  datetimeFormats[lang] = eval(`window.dateFormat${lang.toUpperCase()}`);
  numberFormats[lang] = eval(`window.numberFormat${lang.toUpperCase()}`);
  /* Check if the default locale is available in the list of languages - if not, then select the first one */
  if (lang === window.settings.i18n.defaultlocale) isDefaultLocaleLoaded = true;
}
if (!isDefaultLocaleLoaded) {
  [window.settings.i18n.defaultlocale] = window.settings.i18n.languages;
}

export const i18n = createI18n({
  locale: window.settings.i18n.defaultlocale,
  messages,
  datetimeFormats,
  numberFormats,
});

export const setCookie = function (cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toGMTString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
};

export const getCookie = function (cname) {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

export const upgradeConfig = function upgradeConfig(cfg) {
  if (typeof cfg.settings.general.connection.PegaURL === 'undefined') {
    cfg.settings.general.connection.PegaURL = '';
  }
  if (typeof cfg.settings.general.connection.authService === 'undefined') {
    cfg.settings.general.connection.authService = 'pega';
  }
  if (typeof cfg.settings.general.connection.themeID === 'undefined') {
    cfg.settings.general.connection.themeID = '';
  }
  if (typeof cfg.settings.general.connection.webEmbedUseFormWidth === 'undefined') {
    cfg.settings.general.connection.webEmbedUseFormWidth = false;
  }
  if (typeof cfg.settings.general.connection.authorizeUri === 'undefined') {
    cfg.settings.general.connection.authorizeUri = '';
  }
  if (
    typeof cfg.settings.pega_chat.DMMProactiveChatNewSessionTimeout ===
    'undefined'
  ) {
    cfg.settings.pega_chat.DMMProactiveChatNewSessionTimeout = 0;
  }
  if (
    typeof cfg.settings.pega_chat.DMMProactiveChatNewSessionCode === 'undefined'
  ) {
    cfg.settings.pega_chat.DMMProactiveChatNewSessionCode = '5sonPage';
  }
  for (const i in cfg.settings.quicklinks) {
    if (typeof cfg.settings.quicklinks[i].reloadtitle === 'undefined') {
      cfg.settings.quicklinks[i].reloadtitle = false;
    }
  }
  for (const i in cfg.settings.users) {
    if (typeof cfg.settings.users[i].hide_from_dropdown === 'undefined') {
      cfg.settings.users[i].hide_from_dropdown = false;
    }
    if (typeof cfg.settings.users[i].focustabindex === 'undefined') {
      cfg.settings.users[i].focustabindex = 0;
    }
  }
  if (typeof cfg.settings.CustomEvents === 'undefined') {
    cfg.settings.CustomEvents = [
      {
        CustomEventAction: 'HighlightElement',
        CustomEventName: 'Custom Event 1',
        ElementName: '',
        SendAcknowledgement: false,
        AcknowledgeOn: 'After5Seconds',
      },
      {
        CustomEventAction: 'HighlightElement',
        CustomEventName: 'Custom Event 2',
        ElementName: '',
        SendAcknowledgement: false,
        AcknowledgeOn: 'After5Seconds',
      },
      {
        CustomEventAction: 'HighlightElement',
        CustomEventName: 'Custom Event 3',
        ElementName: '',
        SendAcknowledgement: false,
        AcknowledgeOn: 'After5Seconds',
      },
    ];
  }
  return cfg;
};

let mainconfigTmp;

if (typeof window.settings === 'undefined') {
  window.location.href = `${window.location.href}/`;
} else {
  /* Detect if this is a phone */
  let isMobilePhone = false;
  if (
    /iPhone/.test(navigator.userAgent) ||
    /Android/.test(navigator.userAgent)
  ) {
    isMobilePhone = true;
  }

  if (isMobilePhone) {
    document.documentElement.className = 'phone';
  }

  mainconfigTmp = {
    settings: window.settings,
    app: window.app,
    isMobilePhone,
    offerURL: '',
    offerIndex: 0,
    homeHeroImg: '',
    currentPage: '',
    previousPage: '',
    intent: '',
    reloadOffer: 1,
    reloadMashup: 1,
    reloadToDoMashup: 1,
    reloadActivityMashup: 1000,
    isAuthenticated: false,
    isSidePanelVisible: false,
    isDeepLink: false,
    deepLinkExtraParam: {},
    phonePageName: '',
    userId: -1,
    quickLinkId: -1,
    viewBill: -1,
    viewBanner: -1,
    toDo: -1,
    viewKMHelp: -1,
    KMArticleID: '',
    CDHContainer: {},
    logoutURL: {},
    homeHeroAction: -1,
    offerAction: -1,
    isRTSEnabled: false,
    currentLocale: window.settings.i18n.defaultlocale,
    mainTitle: document.title,
  };
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

  // Retrieve the unique ID for CDH auth
  mainconfigTmp.ExternalID = '';
  if (mainconfigTmp.settings.pega_marketing.enableMergeAccount) {
    let ExternalID = sessionStorage.getItem('ExternalID');
    if (!ExternalID) {
      ExternalID = 'uplus-' + Date.now();
      sessionStorage.setItem('ExternalID', ExternalID);
    }
    mainconfigTmp.ExternalID = ExternalID;
  }
  mainconfigTmp.initCDH = false;

  if (mainconfigTmp.settings.pega_chat.ShowAsButton) {
    document.documentElement.className = `${document.documentElement.className} chat-button`;
  }

  /* Read the current state */
  if (window.history && window.history.state !== null) {
    const currentState = window.history.state;
    if (
      mainconfigTmp.userId === -1 &&
      currentState !== null &&
      typeof currentState.userId !== 'undefined'
    ) {
      if (currentState.userId !== -1) {
        mainconfigTmp.isAuthenticated = true;
      }
      mainconfigTmp.userId = currentState.userId;
      if (typeof currentState.quickLinkId !== 'undefined') {
        mainconfigTmp.quickLinkId = currentState.quickLinkId;
        if (isMobilePhone) {
          mainconfigTmp.phonePageName = 'help';
        }
        window.history.replaceState(
          {
            userId: mainconfigTmp.userId,
            quickLinkId: mainconfigTmp.quickLinkId,
          },
          '',
          `quicklink${mainconfigTmp.quickLinkId}`,
        );
      } else if (isMobilePhone) {
        if (typeof currentState.page !== 'undefined') {
          mainconfigTmp.phonePageName = currentState.page;
        } else {
          mainconfigTmp.phonePageName = window.location.pathname.substring(
            window.location.pathname.lastIndexOf('/') + 1,
          );
        }
        window.history.replaceState(
          mainconfigTmp.isAuthenticated ? {} : { userId: mainconfigTmp.userId },
          '',
          mainconfigTmp.phonePageName,
        );
      } else {
        window.history.replaceState(
          { userId: mainconfigTmp.userId },
          '',
          currentState.page,
        );
      }
    } else if (window.location.pathname.indexOf('/heroaction') !== -1) {
      if (isMobilePhone) {
        mainconfigTmp.phonePageName = 'heroaction';
      }
      mainconfigTmp.homeHeroAction = 1;
      window.history.replaceState({}, '', 'heroaction');
    } else if (isMobilePhone) {
      if (typeof currentState.page !== 'undefined') {
        mainconfigTmp.phonePageName = currentState.page;
      } else {
        mainconfigTmp.phonePageName = window.location.pathname.substring(
          window.location.pathname.lastIndexOf('/') + 1,
        );
      }
      window.history.replaceState({}, '', mainconfigTmp.phonePageName);
    }
  }

  if (mainconfigTmp.isAuthenticated === false && getCookie('UserName') !== '') {
    const username = getCookie('UserName');
    for (const i in mainconfigTmp.settings.users) {
      if (mainconfigTmp.settings.users[i].username === username) {
        mainconfigTmp.isAuthenticated = true;
        mainconfigTmp.userId = i;
        break;
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

    /* check if quicklinkid is passed as parameter */
    if (queryDict.quicklinkid) {
      mainconfigTmp.quickLinkId = queryDict.quicklinkid;
      mainconfigTmp.settings.quicklinks[queryDict.quicklinkid].actionparam = queryDict.quickLinkActionparam;
      mainconfigTmp.deepLinkExtraParam = queryDict;
      delete mainconfigTmp.deepLinkExtraParam.quicklinkid;
      delete mainconfigTmp.deepLinkExtraParam.quickLinkActionparam;
      delete mainconfigTmp.deepLinkExtraParam.username;
      delete mainconfigTmp.deepLinkExtraParam.pega_userid;
      window.history.replaceState(
        { userId: mainconfigTmp.userId },
        '',
        `quicklink${mainconfigTmp.quickLinkId}`,
      );
    }

    /* check if quicklinkclass is passed as parameter */
    if (queryDict.quicklinkclass) {
      for (const i in mainconfigTmp.settings.quicklinks) {
        if (
          mainconfigTmp.settings.quicklinks[i].objclass ===
          queryDict.quicklinkclass
        ) {
          mainconfigTmp.quickLinkId = i;
          mainconfigTmp.deepLinkExtraParam = queryDict;
          delete mainconfigTmp.deepLinkExtraParam.quicklinkclass;
          delete mainconfigTmp.deepLinkExtraParam.username;
          delete mainconfigTmp.deepLinkExtraParam.pega_userid;
          if (isMobilePhone) {
            mainconfigTmp.phonePageName = 'help';
          }
          window.history.replaceState(
            { userId: mainconfigTmp.userId },
            '',
            `quicklink${mainconfigTmp.quickLinkId}`,
          );
          break;
        }
      }
    }
    /* check if todoclass is passed as parameter */
    if (mainconfigTmp.settings.todo.objclass === queryDict.todoclass) {
      mainconfigTmp.deepLinkExtraParam = queryDict;
      delete mainconfigTmp.deepLinkExtraParam.todoclass;
      delete mainconfigTmp.deepLinkExtraParam.username;
      delete mainconfigTmp.deepLinkExtraParam.pega_userid;
      if (isMobilePhone) {
        mainconfigTmp.phonePageName = 'account';
      }
      window.history.replaceState(
        { userId: mainconfigTmp.userId },
        '',
        'account',
      );
    }
    if (queryDict.viewBill) {
      mainconfigTmp.viewBill = 1;
      mainconfigTmp.deepLinkExtraParam = queryDict;
      delete mainconfigTmp.deepLinkExtraParam.viewBill;
      delete mainconfigTmp.deepLinkExtraParam.username;
      delete mainconfigTmp.deepLinkExtraParam.pega_userid;
    }
    if (queryDict.viewBanner) {
      mainconfigTmp.viewBanner = 1;
      mainconfigTmp.deepLinkExtraParam = queryDict;
      delete mainconfigTmp.deepLinkExtraParam.viewBanner;
      delete mainconfigTmp.deepLinkExtraParam.username;
      delete mainconfigTmp.deepLinkExtraParam.pega_userid;
    }
    if (queryDict.viewKMHelp) {
      mainconfigTmp.viewKMHelp = 1;
      mainconfigTmp.deepLinkExtraParam = queryDict;
      delete mainconfigTmp.deepLinkExtraParam.viewKMHelp;
      delete mainconfigTmp.deepLinkExtraParam.username;
      delete mainconfigTmp.deepLinkExtraParam.pega_userid;
    }
  }
  if (queryDict.homeHeroAction) {
    mainconfigTmp.homeHeroAction = 1;
    if (isMobilePhone) {
      mainconfigTmp.phonePageName = 'heroaction';
    }
    mainconfigTmp.isDeepLink = true;
    mainconfigTmp.deepLinkExtraParam = queryDict;
    delete mainconfigTmp.deepLinkExtraParam.homeHeroAction;
  }
  if (queryDict.offerAction) {
    mainconfigTmp.offerAction = 1;
    if (isMobilePhone) {
      mainconfigTmp.phonePageName = 'offer';
    }
    mainconfigTmp.isDeepLink = true;
    mainconfigTmp.deepLinkExtraParam = queryDict;
    delete mainconfigTmp.deepLinkExtraParam.offerAction;
  }

  /* initialize the object needed by PegaHelper */
  window.PegaCSWSS = {
    Cobrowse: {
      ServerURL: mainconfigTmp.settings.pega_chat.CoBrowseServerURL,
      Token: mainconfigTmp.settings.pega_chat.CoBrowseToken,
    },
    WCBConfigName: mainconfigTmp.settings.pega_chat.WCBConfigName,
    WebChatBotID: mainconfigTmp.settings.pega_chat.WebChatBotID,
    ApplicationName: mainconfigTmp.settings.pega_chat.ApplicationName,
    MashupURL: mainconfigTmp.settings.pega_chat.MashupURL,
    ShowAsButton: mainconfigTmp.settings.pega_chat.ShowAsButton,
    TenantID: mainconfigTmp.settings.pega_chat.TenantID,
    MarketingHost: mainconfigTmp.settings.pega_marketing.Host,
    MarketingPort: mainconfigTmp.settings.pega_marketing.Port,
    EnableProActiveNotification:
      mainconfigTmp.settings.pega_chat.EnableProActiveNotification,
    ProActiveNotificationDismissTime:
      mainconfigTmp.settings.pega_chat.ProActiveNotificationDismissTime,
    ContactID: '',
    AccountNumber: '',
    UserName: '',
    UserID: '',
    DMMSessionID: '',
    ExtraParams: {},
  };
  if (mainconfigTmp.userId !== -1) {
    const u = mainconfigTmp.settings.users[mainconfigTmp.userId];
    window.PegaCSWSS.ContactID = u.contactID;
    window.PegaCSWSS.AccountNumber = u.accountID;
    window.PegaCSWSS.UserName = u.username;
    window.PegaCSWSS.UserID = u.pega_userid;
    if (typeof u.extraparam !== 'undefined' && u.extraparam !== '') {
      u.extraparam.split(',').forEach((item) => {
        const values = item.split('=');
        if (values.length === 2) {
          window.PegaCSWSS.ExtraParams[values[0].trim()] = values[1].trim();
        }
      });
    }
    if (typeof u.dmm_context_data === 'string' && u.dmm_context_data !== '') {
      window.PegaChatTags = {};
      u.dmm_context_data.split(',').forEach((item) => {
        const values = item.split('=');
        window.PegaChatTags[values[0].trim()] = values[1].trim();
      });
    }
  }
  setCookie('ContactID', window.PegaCSWSS.ContactID, 30);
  setCookie('AccountNumber', window.PegaCSWSS.AccountNumber, 30);
  setCookie('UserName', window.PegaCSWSS.UserName, 30);
  setCookie('UserID', window.PegaCSWSS.UserID, 30);

  if (
    mainconfigTmp.settings.general.connection.c11nserver !== '' &&
    mainconfigTmp.settings.general.connection.type === 'embedui'
  ) {
    const mashupScript = document.createElement('script');
    mashupScript.setAttribute(
      'src',
      `${mainconfigTmp.settings.general.connection.c11nserver}pega-embed.js`,
    );
    document.head.appendChild(mashupScript);
  } else if (
    mainconfigTmp.settings.general.connection.PegaURL !== '' &&
    (mainconfigTmp.settings.general.connection.type === 'embedui2' ||
      mainconfigTmp.settings.general.connection.type === 'embedui3')
  ) {
    const mashupScript = document.createElement('script');
    mashupScript.setAttribute(
      'src',
      `${mainconfigTmp.settings.general.connection.PegaURL}/PRRestService/c11nsvc/v1/pega-embed.js`,
    );
    document.head.appendChild(mashupScript);
  } else if (
    mainconfigTmp.settings.general.connection.PegaURL !== '' &&
    mainconfigTmp.settings.general.connection.type === 'launchpad')
   {
    const mashupScript = document.createElement('script');
    mashupScript.setAttribute(
      'src',
      `${mainconfigTmp.settings.general.connection.PegaURL}/pega-static/pega-embed.js`,
    );
    document.head.appendChild(mashupScript);
  }

  if (
    typeof mainconfigTmp.settings.pega_chat !== 'undefined' &&
    mainconfigTmp.settings.pega_chat.DMMURL !== '' &&
    mainconfigTmp.settings.pega_chat.DMMID !== '' &&
    `${window.location}`.indexOf('/settings.html') === -1
  ) {
    if (typeof window.PegaUnifiedChatWidget === 'undefined') {
      window.PegaUnifiedChatWidget = {};
      if (
        mainconfigTmp.settings.pega_chat.DMMProactiveChatNewSessionTimeout > 0
      ) {
        setTimeout(() => {
          console.log(
            `PegaUnifiedChatWidget triggetChat '${mainconfigTmp.settings.pega_chat.DMMProactiveChatNewSessionCode}'`,
          );
          window.PegaUnifiedChatWidget.triggerChat(
            mainconfigTmp.settings.pega_chat.DMMProactiveChatNewSessionCode,
          );
        }, mainconfigTmp.settings.pega_chat.DMMProactiveChatNewSessionTimeout);
      }
    }

    // This callback will be invoked every time a new chat session is started
    window.PegaUnifiedChatWidget.onSessionInitialized = (sessionId) => {
      window.PegaCSWSS.DMMSessionID = sessionId;

      console.log(`PegaUnifiedChatWidget onSessionInitialized=${sessionId}`);
      /* bump z-index for the iframe chat widget */
      const el = document.getElementById('pegaChatWidget');
      if (el) {
        el.style.zIndex = 1000;
      }
      sendClickStreamEvent(mainconfigTmp, 'PageView', 'Chat', window.loadPage);
      if (
        mainconfigTmp.settings.pega_chat.DMMSecret !== '' &&
        mainconfigTmp.userId !== -1
      ) {
        const privateData = {
          authenticated: mainconfigTmp.userId !== -1,
          ContactID: window.PegaCSWSS.ContactID,
          AccountNumber: window.PegaCSWSS.AccountNumber,
          UserName: window.PegaCSWSS.UserName,
          UserID: window.PegaCSWSS.UserID,
        };
        const jwttoken = generateJWTKey(
          { iss: sessionId },
          mainconfigTmp.settings.pega_chat.DMMSecret,
        );

        const baseUrl = getBaseURL(
          mainconfigTmp.settings.pega_chat.DMMPrivateURL,
        );
        const privateDataEndpoint = baseUrl + '/Prod/private-data';

        const request = new XMLHttpRequest();
        request.open('POST', privateDataEndpoint, true);
        request.setRequestHeader(
          'Content-type',
          'application/json;charset=UTF-8',
        );
        request.setRequestHeader('authorization', `Bearer ${jwttoken}`);
        request.send(JSON.stringify(privateData));
      }
    };

    /**
     * DM callback method is called anytime a chat event is triggered. It is used here to listen for and handle custom events
     * @param {widgetEvent} widgetEvent
     * @returns
     */
    PegaUnifiedChatWidget.onChatAPIEvent = function (widgetEvent) {
      //Check if event is a custom event
      if (widgetEvent.event != 'custom-event') {
        return;
      }
      //Loop through all custom events defined in settings
      for (let i = 0; i < mainconfigTmp?.settings?.CustomEvents?.length; i++) {
        //Copy event
        let event = mainconfigTmp?.settings?.CustomEvents[i];

        //Check if event received matches event defined in settings
        if (widgetEvent.name == event?.CustomEventName) {
          console.log('Processing Custom Event: ', widgetEvent, event);
          let el;

          //Handle Element Highlight
          if (event.CustomEventAction == 'HighlightElement') {
            el = findElementByLabel(event.ElementName);
            if (el == undefined) {
              console.log(
                `unable to locate element that includes text ${event.ElementName}`,
              );
              return;
            }
            el.classList.add('pulse');
          }

          //Handle Click Element
          else if (event.CustomEventAction == 'ClickElement') {
            el = findElementByLabel(event.ElementName);
            if (el == undefined) {
              console.log(
                `unable to locate element that includes text ${event.ElementName}`,
              );
              return;
            }
            //add click event
            el.click();
          }

          //Handle Acknowledgement
          if (event.SendAcknowledgement) {
            if (event.AcknowledgeOn == 'After5Seconds') {
              setTimeout(function () {
                sendEventAcknowledgement(widgetEvent.name);
                el.classList.remove('pulse');
              }, 5000);
            } else if (event.AcknowledgeOn == 'After30Seconds') {
              setTimeout(function () {
                sendEventAcknowledgement(widgetEvent.name);
                el.classList.remove('pulse');
              }, 30000);
            } else if (event.AcknowledgeOn == 'LoginSuccess') {
              if (mainconfigTmp.isAuthenticated) {
                sendEventAcknowledgement(widgetEvent.name);
                el.classList.remove('pulse');
              } else {
                // Listen for the confirmLogin event to fire
                document.addEventListener('confirmLogin', function () {
                  sendEventAcknowledgement(widgetEvent.name);
                  el.classList.remove('pulse');
                });
              }
            }
          } //End Handle Acknowledgement
        } //End Event Handling
      } //End Loop
    }; //End onChatAPIEvent

    /**
     * @param {string} label the text used to search for an element
     * @returns element who's innerText contains the argument label's text
     */
    const findElementByLabel = function (label) {
      const elements = document.querySelectorAll(
        'h1, h2, h3, h4, h5, h6, p, a, button',
      );
      // Loop through all the elements and check if their inner text matches the label
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].innerText.toLowerCase() === label.toLowerCase()) {
          return elements[i];
        }
      }
    };

    const getBaseURL = function (url) {
      try {
        // Create a new URL object
        const parsedURL = new URL(url);
        // Return the origin (base URL)
        return parsedURL.origin;
      } catch (error) {
        console.error('Invalid URL:', error);
        return null;
      }
    };

    /**
     * Makes POST request to DM service to send an event acknowledgement
     * @param {string} eventName the event name to acknowledge
     */
    const sendEventAcknowledgement = function (eventName) {
      let sessionId = localStorage.getItem('sessionId');
      console.log(
        `Sending event acknowledgement for event: ${eventName} sessionID:${sessionId}`,
      );
      if (
        mainconfigTmp.settings.pega_chat.DMMSecret !== '' &&
        sessionId !== ''
      ) {
        //Request Body
        const data = {
          type: 'custom_event_ack',
          name: eventName,
        };

        const jwttoken = generateJWTKey(
          { iss: sessionId },
          mainconfigTmp.settings.pega_chat.DMMSecret,
        );

        //Check if DMMPrivateURL is defined.
        if (!mainconfigTmp.settings.pega_chat.DMMPrivateURL) {
          console.log(
            'Unable to send custom event acknowledgement: DMMPrivateURL not defined in settings.',
          );
          return;
        }

        const baseUrl = getBaseURL(
          mainconfigTmp.settings.pega_chat.DMMPrivateURL,
        );
        const customEventEndpoint = baseUrl + '/Prod/custom-event';

        //console.log("customEventEndpoint", customEventEndpoint, mainconfigTmp.settings.pega_chat);
        const request = new XMLHttpRequest();
        request.open('POST', customEventEndpoint, true);
        request.setRequestHeader(
          'Content-type',
          'application/json;charset=UTF-8',
        );
        request.setRequestHeader('authorization', `Bearer ${jwttoken}`);
        request.send(JSON.stringify(data));
      }
    };

    const scriptLoad = document.createElement('script');
    scriptLoad.setAttribute('id', mainconfigTmp.settings.pega_chat.DMMID);
    scriptLoad.setAttribute('src', mainconfigTmp.settings.pega_chat.DMMURL);
    scriptLoad.onload = function onLoadChat() {
      setTimeout(() => {
        const el = document.getElementById('pegaChatWidget');
        if (el) {
          el.style.zIndex = 1000;
        }
      }, 3000);
    };
    document.head.appendChild(scriptLoad);

    window.fireflyAPI = {};
    if (
      mainconfigTmp.settings.pega_chat.CoBrowseServerURL !== '' &&
      mainconfigTmp.settings.pega_chat.CoBrowseToken !== ''
    ) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      window.fireflyAPI.token = mainconfigTmp.settings.pega_chat.CoBrowseToken;
      window.fireflyAPI.serverHostUrl =
        mainconfigTmp.settings.pega_chat.CoBrowseServerURL;
      script.src = `${mainconfigTmp.settings.pega_chat.CoBrowseServerURL}/cobrowse/loadScripts`;
      script.async = true;
      document.head.appendChild(script);
    }
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
}

export const mainconfig = reactive(mainconfigTmp);
window.mainconfig = mainconfigTmp;

/* set the styling */
if (mainconfigTmp.settings.general.theming.override) {
  const inlineTheming = document.createElement('style');
  inlineTheming.innerHTML = `:root { --brandColor: ${mainconfigTmp.settings.general.theming.brandColor};
  --interactiveColor: ${mainconfigTmp.settings.general.theming.interactiveColor};}
  .front>header, .form>header, .offer header { background-blend-mode: luminosity; }`;
  document.head.appendChild(inlineTheming);
}

window.addEventListener('popstate', () => {
  mainconfig.quickLinkId = -1;
  mainconfig.currentPage = window.location.pathname.substring(
    window.location.pathname.lastIndexOf('/') + 1,
  );
  if (mainconfig.currentPage === 'heroaction') {
    mainconfig.homeHeroAction = 1;
  }
  if (
    mainconfig.currentPage.indexOf('offer') === 0 &&
    mainconfig.currentPage.indexOf('offer.html') !== 0
  ) {
    mainconfig.offerIndex = parseInt(
      mainconfig.currentPage.substring(5).replace('.html', ''),
      10,
    );
  }
  if (
    mainconfig.currentPage.indexOf('index.html') === 0 ||
    mainconfig.currentPage.indexOf('account') === 0
  ) {
    mainconfig.viewBill = -1;
    mainconfig.viewBanner = -1;
    mainconfig.homeHeroAction = -1;
    mainconfig.offerAction = -1;
    mainconfig.toDo = -1;
    mainconfig.viewKMHelp = -1;
    mainconfig.offerURL = '';
    mainconfig.CDHContainer = {};
  }
  if (mainconfig.currentPage.indexOf('index.html') === 0) {
    mainconfig.isAuthenticated = false;
  }
  if (mainconfig.currentPage.indexOf('account') === 0) {
    mainconfig.isAuthenticated = true;
  }
});

export const updatePegaChat = function updatePegaChat(u) {
  const chatEl = document.getElementById('pegaChatWidget');
  if (chatEl) {
    chatEl.style.zIndex = 1000;
  }
  /* Update PegaChat and pass the correct ContactId, AccountNumber and username */
  let el = document.querySelector(
    "[data-pega-gadgetname='OnlineHelp'] > iframe",
  );
  if (el != null && typeof el.src === 'string') {
    let updatedSrc = `${el.src}&ContactId=${u.contactID}&AccountNumber=${u.accountID}&username=${u.username}`;
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
  window.PegaCSWSS.UserID = u.pega_userid;

  if (typeof u.dmm_context_data === 'string' && u.dmm_context_data !== '') {
    window.PegaChatTags = {};
    u.dmm_context_data.split(',').forEach((item) => {
      const values = item.split('=');
      window.PegaChatTags[values[0].trim()] = values[1].trim();
    });
  }
  setCookie('ContactID', window.PegaCSWSS.ContactID, 30);
  setCookie('AccountNumber', window.PegaCSWSS.AccountNumber, 30);
  setCookie('UserName', window.PegaCSWSS.UserName, 30);
  setCookie('UserID', window.PegaCSWSS.UserID, 30);

  if (
    mainconfig.settings.pega_chat.DMMSecret !== '' &&
    mainconfig.userId !== -1 &&
    window.PegaCSWSS.DMMSessionID !== ''
  ) {
    const privateData = {
      authenticated: mainconfig.userId !== -1,
      ContactID: window.PegaCSWSS.ContactID,
      AccountNumber: window.PegaCSWSS.AccountNumber,
      UserName: window.PegaCSWSS.UserName,
      UserID: window.PegaCSWSS.UserID,
    };
    const jwttoken = generateJWTKey(
      { iss: window.PegaCSWSS.DMMSessionID },
      mainconfig.settings.pega_chat.DMMSecret,
    );

    const url = mainconfigTmp.settings.pega_chat.DMMPrivateURL;
    const parsedURL = new URL(url);
    const baseUrl = parsedURL.origin;
    const privateDataEndpoint = baseUrl + '/Prod/private-data';

    const request = new XMLHttpRequest();
    request.open('POST', privateDataEndpoint, true);
    request.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    request.setRequestHeader('authorization', `Bearer ${jwttoken}`);
    request.send(JSON.stringify(privateData));
  }
  if (typeof u.extraparam !== 'undefined' && u.extraparam !== '') {
    u.extraparam.split(',').forEach((item) => {
      const values = item.split('=');
      if (values.length === 2) {
        window.PegaCSWSS.ExtraParams[values[0].trim()] = values[1].trim();
      }
    });
  }
  el = document.querySelector("[data-pega-gadgetname='OnlineHelp']");
  if (el != null) {
    /* We need to set the extra parameters manually */
    const elOnlineHelp = window.pega.web.mgr._getGadgetByID('OnlineHelp');
    if (elOnlineHelp && elOnlineHelp._oDivAttrs) {
      for (const val in window.PegaCSWSS.ExtraParams) {
        elOnlineHelp._oDivAttrs.params[val] = window.PegaCSWSS.ExtraParams[val];
      }
    }
  }
  /* We need to call the proactive notification since PegaCSWSS.ContactID has changed */
  if (typeof sendProactiveNotificationReq === 'function') {
    window.sendProactiveNotificationReq();
  }
};
export default mainconfig;
