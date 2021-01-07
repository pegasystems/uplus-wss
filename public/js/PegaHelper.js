var standardHeight = "550"+"px";
var initialMessageBoxDivHeight;
var adjustMessageFieldWidthInterval;
var missedMessageCounter = 0;
var minimized = true;
var chatSessionStatusKey = 'chat-session-connected';
var proactiveContainer;
var proactiveTimer = null;

var ProactiveServiceProtocol = 'https';
var ProactiveServicePort = '';
var ProactiveServiceHostname = 'localhost';
if(PegaCSWSS.MarketingHost !== "") {
    ProactiveServiceHostname = PegaCSWSS.MarketingHost;
    if(ProactiveServiceHostname.startsWith('http://')) {
       ProactiveServiceProtocol = "http";
    } else {
       ProactiveServiceProtocol = "https";
    }
    var idx= ProactiveServiceHostname.lastIndexOf("/");
    if(idx!= -1) {
      ProactiveServiceHostname = ProactiveServiceHostname.substring(idx+1);
    }
    if(PegaCSWSS.MarketingPort !== "") {
      ProactiveServicePort = PegaCSWSS.MarketingPort;
    }
}
var ProactiveCDHDismiss = "false";
if(PegaCSWSS.ProActiveNotificationDismissTime.trim() !== "") {
   ProactiveCDHDismiss = "true"; 
}
          
var PegaChatConfig = {
	"TenantId": PegaCSWSS.TenantID ,
	"ChannelId": PegaCSWSS.WebChatBotID ,
    "HelpConfigurationName": PegaCSWSS.WCBConfigName,
	"PegaSSAHelpButtonText": "Need Help?",
	"PegaApplicationName": PegaCSWSS.ApplicationName,
	"PegaServerURL": PegaCSWSS.MashupURL,
	"SSAWorkClass": "Work-Channel-Chat",
	"ProactiveChatClass": "PegaCA-Work-ProactiveChat",
	"CobrowseToken": PegaCSWSS.Cobrowse.Token,
	"CoBrowseServerHostURL": PegaCSWSS.Cobrowse.ServerURL,
    "ProactiveCDHEnabled": "" + PegaCSWSS.EnableProActiveNotification,
    "ProactiveServiceURL": ProactiveServiceProtocol + "://" + ProactiveServiceHostname + (ProactiveServicePort != "" ? ":" + ProactiveServicePort : "") + "/prweb/PRRestService/CSSelfServiceNBA/V1/Container", 
    "ProactiveCDHDismiss" : ProactiveCDHDismiss,
    "ProactiveCDHDismissTime" : PegaCSWSS.ProActiveNotificationDismissTime
};
console.log(PegaChatConfig);

$(document).ready(function(){
  /* Load the cobrowse assets */
  window.fireflyAPI = {};

  if(PegaChatConfig.CoBrowseServerHostURL !== "" && PegaChatConfig.CobrowseToken !== "") {
	var script = document.createElement("script");
	script.type = "text/javascript";
	fireflyAPI.token = PegaChatConfig.CobrowseToken;
	fireflyAPI.serverHostUrl = PegaChatConfig.CoBrowseServerHostURL;
	script.src = PegaChatConfig.CoBrowseServerHostURL + "/cobrowse/loadScripts";
	script.async = true;
	document.head.appendChild(script);
  }
});

function removeConnectedStatus(){
  /* removing chatsessionstatus flag on unload*/
	window.localStorage.removeItem(chatSessionStatusKey);
}

var headerFontColor = "";
var headerBackgroundColor = "";
var textFontColor = "";
var textFontFamily = "";

function postMessageListener(event){

  /* console.log("origin is ",event.origin);
  console.log("received: "+event.data); */

  try {
	var message = JSON.parse(event.data);
  } catch(e) {
   // console.log("Error parsing posted message: " + e.message);
	return;
  }
  /* console.log("message is ", message); */

  if (message.message) {
    if ((message.message.payload.name == "loaded" ||message.message.payload.name == "confirm") && message.message.src == "OnlineHelpIfr") {
      $("#OnlineHelpIfr").show();
	  }
  }

  if (message.command == "setChatConnectionStatus") {
		window.localStorage.setItem(chatSessionStatusKey, message.status);
  }
  /* minimize advisor - start */
  if (message.command == "minimizeFromCase") {
	minimizeServiceCaseAdvisor(message);
  }
  if (message.command == "minimizeFromAdvisor") {
	minimizeAdvisor(message);
  }
  /* minimize advisor - end */

  if (message.command == "CSRMessage" || message.command == "SystemMessage") {
    handleMissedMessages();
  }

  if (message.command == "close") {
    hideinline();
  }

  if (message.command == "expand" || message.command == "collapse" || message.command == "compact" || message.command == "standard") {
    handleResize(message.command);
  }

  if (message.command == "setStyles") {
    headerFontColor = message.headerFontColor;
    headerBackgroundColor = message.headerBackgroundColor;
    textFontColor = message.textFontColor;
    textFontFamily = message.textFontFamily;
  }
  if (message.command == 'ProactiveChat') {
		var payload = message.payload || {};
		if (payload.action == 'offer') {
			pega.chat.proactiveChat.offer(payload.queue, payload.metadata, payload.defaultUI);
		} else if (payload.action == 'accept') {
			pega.chat.proactiveChat.accept()
		} else if (payload.action == 'decline') {
			pega.chat.proactiveChat.decline();
		} else if (payload.action == 'setStyles') {
			pega.chat.proactiveChat.setStyles();
		}
	}
  if (message.command == "showLeftPanel" || message.command == "hideLeftPanel") {
    handleLeftPanel(message.command);
  }
 
  if (message.command == "setAssignmentKey") {
      var isProactiveChatFlag = sessionStorage.getItem('isProactiveChat') == "true";
      !isProactiveChatFlag && sessionStorage.setItem("AssignmentKey", message.pzInsKey);
  } 
 
  if(message.command == "clearProactiveTimer") {
    clearProactiveTimer();
  }
	
  if (message.command == "downloadBotTranscript") {
    downloadBotTranscript(message.transcript);
  }	
}

function adjustMessageFieldWidth() {
  var width = $("#sendMessageField").width();
  if (width != null) {
    $("#sendMessageField").attr("style", "width:calc(100% - 60px)!important;");
	window.clearInterval(adjustMessageFieldWidthInterval);
  }
}

function hideinline(){
  if($("#OnlineHelp").length > 0)
  {
    $( "#OnlineHelp" ).removeClass("alerting");
    $("#OnlineHelpIfr").hide();
  }
  window.setTimeout(function(){$("#launcher").show();}, 1000);
  pega.web.api.doAction("OnlineHelp", "logoff","AdvisorLogoff","@baseclass",null);
}

/* load Advisor gadget */
function InvokeAdvisor(initialSize) {
  /* call end chat to make sure it's a clean start */
  if((typeof(fireflyChatAPI) != "undefined") && fireflyChatAPI.endChat){
    fireflyChatAPI.endChat();
  }
  $("#launcher").hide();
  if(sessionStorage.getItem("botMinimized")=="true"){
    $("#launcherminimized").show();
	  minimized = true;
	  missedMessageCounter = sessionStorage.getItem("unreadCount");
	  document.getElementById("unreadCounter").innerHTML = missedMessageCounter;
	  if(missedMessageCounter!= "0"){
		  $("#unreadCounter").show();
	  }else{
		  $("#unreadCounter").hide();
	  }
  }else{
    $("#OnlineHelp").removeClass("expanded");
    if (initialSize == "compact") {
      $('#OnlineHelp').addClass("compacted");
    } else {
	    $('#OnlineHelp').addClass("standard");
	  }
    $("#OnlineHelp").addClass("alerting");
  }
  pega.web.api.doAction("OnlineHelp", "load");
}

window.setDynamicChatGadgetParams = function(name) {
    if (name=="ContactId") {
           return PegaCSWSS.ContactID;
    } else if (name=="AccountNumber") {
         return PegaCSWSS.AccountNumber;
     } else if (name=="username") {
           return PegaCSWSS.UserName;
     } else if (name=="workId") {
		return pega.chat.proactiveChat.workId || "";
	} else if (name == "queue"){
		return pega.chat.proactiveChat.queueName || "";
	} else if (name == "offerClass") {
        if (proactiveContainer && proactiveContainer.ClassName != "")
            return "Case";
        else
            return "";
    } else if (name == "offerName") {
        if (proactiveContainer)
            return proactiveContainer.Label;
        else
            return "";
    } else if (name == "offerBenefits") {
        if (proactiveContainer)
            return proactiveContainer.Benefits;
        else
            return "";
    } else if (name == "caseClass") {
        if (proactiveContainer)
            return proactiveContainer.ClassName;
        else
            return "";
    } else if (name == "caseGreeting") {
        if (proactiveContainer)
            return proactiveContainer.Greeting;
        else
            return "";
    } else if (name == "caseReason") {
        if (proactiveContainer)
            return proactiveContainer.Reason;
        else
            return "";
    } else if (name == "proactiveAccept") {
        if (proactiveContainer)
            return proactiveContainer.AcceptText;
        else
            return "";
    } else if (name == "proactiveDecline") {
        if (proactiveContainer)
            return proactiveContainer.DeclineText;
        else
            return "";
	}
};

function setDefaultChatGadgetParams(){
    var PegaAParamObject = preparePegaAParams("OnlineHelp");
    PegaAParamObject.channelId = PegaChatConfig.ChannelId;
    PegaAParamObject.HelpConfigurationName = PegaChatConfig.HelpConfigurationName;
    PegaAParamObject.ContactId = "[page/function/ContactId]";
    PegaAParamObject.AccountNumber = "[page/function/AccountNumber]";
    PegaAParamObject.username = "[page/function/username]";
    PegaAParamObject.ProactiveChatId = "[page/function/workId]";
    PegaAParamObject.ProactiveChatQueue = "[page/function/queue]";
    PegaAParamObject.offerClass = "[page/function/offerClass]"; /* Offer, Case or Knowledge */
    PegaAParamObject.offerName = "[page/function/offerName]";
    PegaAParamObject.offerBenefits = "[page/function/offerBenefits]";
    PegaAParamObject.caseClass = "[page/function/caseClass]";
    PegaAParamObject.caseGreeting = "[page/function/caseGreeting]";
    PegaAParamObject.caseReason = "[page/function/caseReason]";
    PegaAParamObject.proactiveAccept = "[page/function/proactiveAccept]";
    PegaAParamObject.proactiveDecline = "[page/function/proactiveDecline]";
    return JSON.stringify(PegaAParamObject);
}

window.setDynamicProactiveChatGadgetParams = function (name) {
    if (name=="ContactId") {
           return PegaCSWSS.ContactID;
     } else if (name=="AccountNumber") {
         return PegaCSWSS.AccountNumber;
     } else if (name=="username") {
           return PegaCSWSS.UserName;
     } else if (name == "metadata") {
		return JSON.stringify(convertProactiveMetadata(pega.chat.proactiveChat.metadata));
	} else if (name == "queue") {
		return pega.chat.proactiveChat.queueName || "";
	}
};
function setDefaultProactiveChatGadgetParams() {
 	var PegaAParamObject = preparePegaAParams("ProactiveChat");
	PegaAParamObject.channelId = PegaChatConfig.ChannelId;;
  PegaAParamObject.HelpConfigurationName = PegaChatConfig.HelpConfigurationName;
    PegaAParamObject.ContactId = "[page/function/ContactId]";
  PegaAParamObject.AccountNumber = "[page/function/AccountNumber]";
  PegaAParamObject.username = "[page/function/username]";
	PegaAParamObject.metadata = "[page/function/metadata]";
	PegaAParamObject.queueName = "[page/function/queue]";
	return JSON.stringify(PegaAParamObject);
}

function handleResize(command) {
  if(command=="expand") {
    $('#OnlineHelp').addClass("expanded");
	$('#OnlineHelp').removeClass("compacted");
	$('#OnlineHelp').removeClass("standard");
  } else if (command == "compact") {
    $('#OnlineHelp').addClass("compacted");
	$('#OnlineHelp').removeClass("expanded");
	$('#OnlineHelp').removeClass("standard");
  } else {
	$('#OnlineHelp').addClass("standard");
	$('#OnlineHelp').removeClass("expanded");
	$('#OnlineHelp').removeClass("compacted");
  }
}

function handleLeftPanel(command) {
  if(command=="showLeftPanel") {
    $('#OnlineHelp').addClass("showLeftPanel");
 	  $('#OnlineHelp').removeClass("hideLeftPanel");
  } else if(command=="hideLeftPanel") {
    $('#OnlineHelp').addClass("hideLeftPanel");
	  $('#OnlineHelp').removeClass("showLeftPanel");
  }
}

/* load preview gadget */
function displayLauncher(){
  var $launcher;
  if(PegaCSWSS.ShowAsButton) {
    $launcher = $("<div id='launcher'><img src='../img/ChatbotIcon.svg' width=50' height='50'/></div>");
  } else {
    $launcher = $("<div>", { id: "launcher", text:PegaChatConfig.PegaSSAHelpButtonText});
  }
  $launcher.click(InvokeAdvisor);
  $( 'body' ).append($launcher);
}

function processCDHResponse(Response) {
  if (Response && Response.ContainerList) {
    /* console.log("There is a valid CDH response.");*/
    if(Response.ContainerList[0].RankedResults) {
      /*console.log("There is a valid Ranked result");		*/
      proactiveContainer = Response.ContainerList[0].RankedResults[0];
      /*console.log("Offer details:"+proactiveContainer.ClassIdentifier +" "+ proactiveContainer.Name +" "+ proactiveContainer.Benefits);*/
	    InvokeAdvisor("compact");
	    if (PegaChatConfig.ProactiveCDHDismiss == "true") {
 	      proactiveTimer = setTimeout(CDHActionTimeout, PegaChatConfig.ProactiveCDHDismissTime * 1000);
	    }
    } /*else
      console.log("There are no results")				*/
  }
}

function clearProactiveTimer() {
	if (proactiveTimer) {
		clearTimeout(proactiveTimer);
    proactiveTimer = null;
	}
}

function CDHActionTimeout(){
  /*console.log("About to dismiss cdh");*/
  pega.web.api.doAction("OnlineHelp","setGadgetData","pyWorkPage.DismissCDH","true", {callback:function(status){}});
  minimizeAdvisor();
}

function minimizeAdvisor(message){
   $("#launcher").hide();
   $("#OnlineHelp").removeClass("alerting");
   $("#launcherminimized").show();
   $("#unreadCounter").hide();
   minimized = true;
   missedMessageCounter = 0;
   sessionStorage.setItem("botMinimized",true);
   sessionStorage.setItem("unreadCount",0);
}

function maximizeAdvisorWindow() {
    $("#OnlineHelp").addClass("alerting");
    $("#launcherminimized").hide();
    minimized = false;
    sessionStorage.setItem("botMinimized",false);
    sessionStorage.setItem("unreadCount",0);
}

function handleMissedMessages() {
  if (minimized == true) {
    missedMessageCounter ++;
    document.getElementById("unreadCounter").innerHTML = missedMessageCounter;
    sessionStorage.setItem("unreadCount",missedMessageCounter);
	  $("#unreadCounter").show();
  }
}

function downloadBotTranscript(message) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(message));
    element.setAttribute('download', "ChatTranscript.txt");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

/* minimize advisor utilities - end */
	/* Proactive chat js api - begin */
	window.proactiveChatCustomEventHandler = function (gadgetName, customData) {
		customData = customData || {};
		var message = JSON.parse(customData);
		if (message.command == "ProactiveChatStatus") {
			if (message.status === 'loaded') {
        if (window.pega.chat.proactiveChat.defaultUI) {
          $("#ProactiveChat").addClass("alerting");
        }
				triggerProactiveChatEvent('ready',message);
			} else if (message.status === "accepted") {
				triggerProactiveChatEvent(message.status,message);
        window.pega.chat.proactiveChat.workId = message.WorkId;
        sessionStorage.setItem('isProactiveChat', false);
				InvokeAdvisor();
				$("#ProactiveChat").removeClass("alerting");
			} else if (message.status === "declined") {
				triggerProactiveChatEvent(message.status,message);
        sessionStorage.setItem('isProactiveChat', false);
				$("#ProactiveChat").removeClass("alerting");
			}else if (message.status === 'not-loaded') {
        $("#ProactiveChat").removeClass("alerting");
        triggerProactiveChatEvent('not-ready',message);
        sessionStorage.setItem('isProactiveChat', false);
      }
		}
	}
	function triggerProactiveChatEvent(eventName, eventData){
		window.pega.chat.proactiveChat.trigger('proactivechat-'+eventName, eventData || {});
	}
	function pegaUtilInheritClass(newClass, baseClass) {
		Object.keys(baseClass).forEach(function (classMethod) {
			newClass[classMethod] = baseClass[classMethod];
		});
		Object.keys(baseClass.prototype).forEach(function (instanceMethod) {
			newClass.prototype[instanceMethod] = baseClass.prototype[instanceMethod];
		});
	};
	function PegaUtilEventListener() {
		this.listenerStore = {};
	}
	PegaUtilEventListener.prototype.on = function (eventName, eventListener, context) {
		this.listenerStore[eventName] = this.listenerStore[eventName] || [];
		this.listenerStore[eventName].push({ fn: eventListener, context: context });
		return this;
	}
	PegaUtilEventListener.prototype.off = function (eventName, eventListener) {
		this.listenerStore[eventName] = this.listenerStore[eventName] || [];
		var listeners = this.listenerStore[eventName];
		if (!listeners) return this;
		if (!eventListeners) {
			delete this.listenerStore[eventName];
			return this;
		}
		var listener;
		for (var i = 0; i < listeners.length; i++) {
			listener = listeners[i].fn;
			if (listener === eventListener) {
				listeners.splice(i, 1);
				break;
			}
		}
		if (callbacks.length === 0) {
			delete this.listenerStore[eventName];
		}
		return this;
	}
	PegaUtilEventListener.prototype.trigger = function (eventName) {
		this.listenerStore[eventName] = this.listenerStore[eventName] || [];

		var listeners = this.listenerStore[eventName];
		var args = new Array(arguments.length - 1);

		for (var i = 1; i < arguments.length; i++) {
			args[i - 1] = arguments[i];
		}

		if (listeners) {
			listeners = listeners.slice(0);
			for (var i = 0, len = listeners.length; i < len; ++i) {
				listeners[i].fn.apply(listeners[i].context || this, args);
			}
		}
		return this;
	};
	function PegaProactiveChat() {
		PegaUtilEventListener.call(this);
		this.defaultUI = true;
	}
	pegaUtilInheritClass(PegaProactiveChat, PegaUtilEventListener);
	PegaProactiveChat.prototype.offer = function (queueName, metadata, bDefaultUI) {
    this.queueName = queueName;
		this.defaultUI = bDefaultUI === false ? false : true;
		this.metadata = metadata || {};
		$("#ProactiveChat").addClass("alerting");
		pega.web.api.doAction("ProactiveChat", "load");
    sessionStorage.setItem('isProactiveChat', true);
	}
	PegaProactiveChat.prototype.accept = function () {
		pega.web.api.doAction("ProactiveChat", "setGadgetData", "pyWorkPage.ProactiveChatStatus", 'Accepted by customer', { callback: function (obj) { } });
	}
	PegaProactiveChat.prototype.decline = function () {
		pega.web.api.doAction("ProactiveChat", "setGadgetData", "pyWorkPage.ProactiveChatStatus", 'Declined by customer', { callback: function (obj) { } });
	}
  PegaProactiveChat.prototype.setStyles = function (style) {
		$("#ProactiveChat").attr("style", style);
	}

  function convertProactiveMetadata(metadata){
	  var keys = Object.keys(metadata);
	  var customMetadata = [];
	  for(var i=0; i< keys.length;i++){
			customMetadata.push({
					"Name":  keys[i],
					"Value": metadata[keys[i]]
			})
	  }
	  return { pxResults: customMetadata}
  }
