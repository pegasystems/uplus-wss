/* passing parameters dynamically - start */
function preparePegaAParams(gadgetName) {
  const pegaAParamObj = {};
  pegaAParamObj.AppName = PegaCSWSS.ApplicationName;
  pegaAParamObj.HelpConfigurationName = PegaCSWSS.WCBConfigName;
  pegaAParamObj.ContactId = PegaCSWSS.ContactID;
  pegaAParamObj.channelId = PegaCSWSS.WebChatBotID;
  pegaAParamObj.AccountNumber = PegaCSWSS.AccountNumber;
  pegaAParamObj.username = PegaCSWSS.UserName;
  pegaAParamObj.CustomerURL = window.location.href.replace(
    /(http|https):\/\//,
    '',
  );
  pegaAParamObj.Language = window.navigator.language;
  pegaAParamObj.pzSkinName = 'OnlineHelp';
  return pegaAParamObj;
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toGMTString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
}

function getCookie(cname) {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

window.addEventListener('load', () => {
  const serverURL = PegaCSWSS.MashupURL;
  const mashupScript = document.createElement('script');
  mashupScript.src = `${serverURL}?pyActivity=pzIncludeMashupScripts `;
  document
    .getElementsByTagName('script')[0]
    .parentNode.appendChild(mashupScript);

  var _initMashup = function () {
    if (typeof pega !== 'undefined' && typeof pega.Mashup !== 'undefined') {
      pega.Mashup.Communicator.register(pega.Mashup.hostActionsProcessor);
      _initAllPegaObjects();
    } else {
      setTimeout(_initMashup, 200);
    }
  };
  mashupScript.onload = function () {
    _initMashup();
  };
});
