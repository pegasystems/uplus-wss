/* passing parameters dynamically - start */
function preparePegaAParams(gadgetName) {
  var pegaAParamObj = {};
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
  if(typeof PegaCSWSS.ExtraParams === "object" ) {
    pegaAParamObj = Object.assign({}, pegaAParamObj, PegaCSWSS.ExtraParams );
  }
  return pegaAParamObj;
}

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}
    
var serverURL = PegaCSWSS.MashupURL;
var mashupScript = document.createElement('script');
mashupScript.src = serverURL + "?pyActivity=pzIncludeMashupScripts";
mashupScript.onload = function() {
  window.pega.chat = window.pega.chat || {};
  window.pega.chat.proactiveChat = new PegaProactiveChat();
    
  $( 'body' ).append("<div id='OnlineHelp' data-pega-gadgetname ='OnlineHelp' data-pega-action ='createNewWork' data-pega-action-param-classname ='' data-pega-action-param-flowname ='' data-pega-action-param-model ='' data-pega-applicationname ='" + PegaCSWSS.ApplicationName + "' data-pega-isdeferloaded ='true' data-pega-threadname ='CSAdvisor' data-pega-systemid ='pega' data-pega-resizetype ='fixed' data-pega-url ='" + PegaCSWSS.MashupURL +"' data-pega-action-param-parameters ='' data-pega-redirectguests='true' data-pega-event-onclose ='hideinline'></div>");

  $( 'body' ).append("<div id='ProactiveChat' data-pega-gadgetname ='ProactiveChat' data-pega-action ='createNewWork' data-pega-action-param-classname ='' data-pega-action-param-flowname ='' data-pega-action-param-model ='' data-pega-applicationname ='" + PegaCSWSS.ApplicationName + "' data-pega-isdeferloaded ='true' data-pega-threadname ='ProactiveChatThread' data-pega-systemid ='pega' data-pega-resizetype ='fixed' data-pega-url ='" + PegaCSWSS.MashupURL +"' data-pega-action-param-parameters ='' data-pega-redirectguests='true' data-pega-event-oncustom='proactiveChatCustomEventHandler'></div>");

  $( 'body' ).append("<div style='display:none; height:80px; padding-top:14px; padding-left:20px;' id='Preview' data-pega-gadgetname ='PreviewGadget' data-pega-isdeferloaded ='true' data-pega-action ='display' data-pega-action-param-classname ='PegaCS-OnlineHelp-Triage-WebChatbot'  data-pega-harnessname ='Preview' data-pega-applicationname ='" + PegaCSWSS.ApplicationName + "' data-pega-threadname ='Preview' data-pega-systemid ='pega' data-pega-resizetype ='fixed' data-pega-event-onclose ='' data-pega-url ='" + PegaCSWSS.MashupURL +"' data-pega-action-param-parameters=''></div>");

  addEventListener("message", postMessageListener, false);
  addEventListener("beforeunload", removeConnectedStatus, false);
  var $minL = $("<div>", {id:"launcherminimized",text:"Need Help?"});
  $minL.click(maximizeAdvisorWindow);
  var $counter = $("<div>", {id:"unreadCounter",text:"0"});
  $minL.append($counter);
  $( 'body' ).append($minL);
  $("#launcherminimized").hide();
  previewMonitor = setTimeout(monitorPreviewLoader, MonitorTimeout);
  pega.Mashup.Communicator.register(pega.Mashup.hostActionsProcessor);
  _initAllPegaObjects();
};
document.head.appendChild(mashupScript);
