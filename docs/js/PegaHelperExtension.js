/* passing parameters dynamically - start */
function preparePegaAParams(gadgetName) {
  var pegaAParamObj = {};
  pegaAParamObj.CustomerURL = window.location.href.replace(
    /(http|https):\/\//,
    '',
  );
  pegaAParamObj.Language = window.navigator.language;
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

function resetPegaChat() {
  var el = document.querySelector("[data-pega-gadgetname='OnlineHelp'] > iframe");
  if(el) {
    minimizeAdvisor();
    el.src = el.src.split('?')[0] + "?pyActivity=LogOff";  
  }
  setTimeout(function() {
    pega.web.api.removeGadget("OnlineHelp");
    sessionStorage.removeItem("AssignmentKey");
    pega.web.api.addGadget("OnlineHelp");
    _initAllPegaObjects();
    pega.web.api.doAction("OnlineHelp", "load");
  },2000);
};

function sendProactiveNotificationReq() {
if (PegaChatConfig.ProactiveCDHEnabled == "true") {
    /* Check CDH to see if there's an offer to present */
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        try {
	      processCDHResponse(JSON.parse(this.responseText));
        } catch(e) {
          console.error("Error when processing the response from Pega Mkt for Proactive notifications");
        }
      }
    };

    xhttp.open("POST", PegaChatConfig.ProactiveServiceURL, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    var extraParms = "";
    for(var val in PegaCSWSS.ExtraParams) {
        extraParms += '"' + val + '":"'+ PegaCSWSS.ExtraParams[val] + '",';
    }
    var postBody = '{' + extraParms + '"CustomerID":"'+PegaCSWSS.ContactID+'","AccountNumber":"'+PegaCSWSS.AccountNumber+'","UserName":"'+PegaCSWSS.UserName+'","ContainerName":"PrioritizeOffer","Channel":"CallCenter"}';
    xhttp.send(postBody);
  }
}

function loadMashup() {
  var serverURL = PegaCSWSS.MashupURL;
  window.pega.chat = window.pega.chat || {};
  window.pega.chat.proactiveChat = new PegaProactiveChat();

  setCookie("ContactID", PegaCSWSS.ContactID, 30);
  setCookie("AccountNumber",PegaCSWSS.AccountNumber, 30);
  setCookie("UserName",PegaCSWSS.UserName, 30);

  $('body').append("<div id='OnlineHelp' data-pega-gadgetname='OnlineHelp' data-pega-action='createNewWork' data-pega-action-param-classname='" + PegaChatConfig.SSAWorkClass + "' data-pega-action-param-flowname='pyStartCase' data-pega-action-param-model='' data-pega-applicationname='" + PegaChatConfig.PegaApplicationName + "' data-pega-isdeferloaded='true' data-pega-isretained='true' data-pega-tenantid ='" + PegaChatConfig.TenantId + "' data-pega-channelID ='" + PegaChatConfig.ChannelId + "' data-pega-threadname='CSAdvisor' data-pega-systemid='pega' data-pega-resizetype='fixed' data-pega-url='" + PegaChatConfig.PegaServerURL +"' data-pega-action-param-parameters='" + setDefaultChatGadgetParams() + "' data-pega-event-onpagedata='setDynamicChatGadgetParams' data-pega-redirectguests='true' data-pega-event-onclose='hideinline'></div>");

  $('body').append("<div id='ProactiveChat' data-pega-gadgetname='ProactiveChat' data-pega-action='createNewWork' data-pega-action-param-classname='" + PegaChatConfig.ProactiveChatClass + "' data-pega-action-param-flowname='pyStartCase' data-pega-action-param-model='' data-pega-applicationname='" + PegaChatConfig.PegaApplicationName + "' data-pega-isdeferloaded='true' data-pega-isretained='true' data-pega-tenantid ='" + PegaChatConfig.TenantId + "' data-pega-channelID ='" + PegaChatConfig.ChannelId + "' data-pega-threadname='ProactiveChatThread' data-pega-systemid='pega' data-pega-resizetype='fixed' data-pega-url='" + PegaChatConfig.PegaServerURL + "' data-pega-action-param-parameters='" + setDefaultProactiveChatGadgetParams() + "' data-pega-event-onpagedata='setDynamicProactiveChatGadgetParams' data-pega-redirectguests='true' data-pega-event-oncustom='proactiveChatCustomEventHandler'></div>");

  /* add id attributes to gadgets */
  $("div[data-pega-gadgetname='OnlineHelp']").attr("id","OnlineHelp");

  addEventListener("message", postMessageListener, false);
  addEventListener("beforeunload", removeConnectedStatus, false);
  var $minL;
  if(PegaCSWSS.ShowAsButton) {
    $minL = $("<div id='launcherminimized'><img src='../img/ChatbotIcon.svg' width=50' height='50'/></div>");
  } else {
    $minL = $("<div>", { id: "launcherminimized", text:PegaChatConfig.PegaSSAHelpButtonText});
  }
  $minL.click(maximizeAdvisorWindow);
  var $counter = $("<div>", {id:"unreadCounter",text:"0"});
  $minL.append($counter);
  $( 'body' ).append($minL);
  $("#launcherminimized").hide();
  sendProactiveNotificationReq();
  displayLauncher();
  setTimeout(function() {	
    pega.Mashup.Communicator.register(pega.Mashup.hostActionsProcessor);	
    _initAllPegaObjects();	
  },300);
}

setTimeout( function() {
if (
      typeof pega !== 'undefined' &&
      typeof pega.Mashup !== 'undefined' &&
      typeof pega.Mashup.Communicator !== 'undefined'
    ) {
  loadMashup();
} else {
  var serverURL = PegaCSWSS.MashupURL;
  var mashupScript = document.createElement('script');
  mashupScript.src = serverURL + "?pyActivity=pzIncludeMashupScripts";
  mashupScript.onload = function() {
    loadMashup();
  };
  document.head.appendChild(mashupScript);
}
},1000);


