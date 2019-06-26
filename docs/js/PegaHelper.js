var standardHeight = "550"+"px";
var initialMessageBoxDivHeight;
var adjustMessageFieldWidthInterval;
var previewLoaded = false;
var previewMonitor;
var MonitorTimeout = 2000;
var missedMessageCounter = 0;
var minimized = true;
var chatSessionStatusKey = 'chat-sesstion-connected';
var BotActive = false;

$(document).ready(function(){
  /* Load the cobrowse assets */
  window.fireflyAPI = {};

  if(PegaCSWSS.Cobrowse.ServerURL !== "" && PegaCSWSS.Cobrowse.Token !== "") {
    
	var script = document.createElement("script");
	script.type = "text/javascript";
	fireflyAPI.token = PegaCSWSS.Cobrowse.Token;
	fireflyAPI.serverHostUrl = PegaCSWSS.Cobrowse.ServerURL;
  script.src = PegaCSWSS.Cobrowse.ServerURL + "/cobrowse/loadScripts";
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

  /* This command is issued if the bot is already active and the page is refreshed */
  if (message.command == "BotActive") {
	  BotActive = true;
    InvokeAdvisor();
  }

  if (message.message && message.message.payload.name == "loaded" && message.message.src == "PreviewGadgetIfr") {
    if (previewLoaded == true) {
	    /* Preview has already loaded */
	    return;
	  }
    previewLoaded = true;
    clearInterval(previewMonitor);
   	/* enable launcher now */
	  if (BotActive != true) {
	    var $launcher = $("<div>", {id:"launcher",text:"Need Help?"});
	    $launcher.click(InvokeAdvisor);
      $( 'body' ).append($launcher);
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

  if (message.command == "expand" || message.command == "collapse" || message.command == "compact") {
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
		pega.chat.proactiveChat.setStyles(payload.style);
	}
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
function InvokeAdvisor(event, workId, queueName) {
  /* call end chat to make sure it's a clean start */
  if((typeof(fireflyChatAPI) != "undefined") && fireflyChatAPI.endChat)
  	fireflyChatAPI.endChat();
  $("#OnlineHelp").removeClass("expanded");
  $("#OnlineHelp").addClass("alerting");
  $("#launcher").hide();
  var PegaAParamObject = preparePegaAParams("OnlineHelp");
  if(workId){
		PegaAParamObject.ProactiveChatId=workId;
	}
	if(queueName){
		PegaAParamObject.ProactiveChatQueue=queueName;
	}
  pega.web.api.doAction("OnlineHelp", "createNewWork", "Work-Channel-Chat", "pyStartCase", PegaAParamObject);
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

/* load preview gadget */
function monitorPreviewLoader(){
    if (previewLoaded == false) {
	    var PegaAParamObject = preparePegaAParams("PreviewGadget");
      if(pega.web && pega.web.api && PegaAParamObject) {
	      pega.web.api.doAction("PreviewGadget", "display", "Preview", "PegaCS-OnlineHelp-Triage-WebChatbot", null, true, null, PegaAParamObject);
        MonitorTimeout = MonitorTimeout + 2000;
 	      previewMonitor = setTimeout(monitorPreviewLoader, MonitorTimeout);
      } else {
        setTimeout(monitorPreviewLoader, 1000);
      }
	}
}

function minimizeAdvisor(message){
   $("#launcher").hide();
   $("#OnlineHelp").removeClass("alerting");
   $("#launcherminimized").show();
   $("#unreadCounter").hide();
   minimized = true;
   missedMessageCounter = 0;
}

function maximizeAdvisorWindow() {
	$("#OnlineHelp").addClass("alerting");
	$("#launcherminimized").hide();
	minimized = false;
}

function handleMissedMessages() {
  if (minimized == true) {
    missedMessageCounter ++;
    document.getElementById("unreadCounter").innerHTML = missedMessageCounter;
	  $("#unreadCounter").show();
  }
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
				InvokeAdvisor(null, message.WorkId, window.pega.chat.proactiveChat.queueName);
				$("#ProactiveChat").removeClass("alerting");
			} else if (message.status === "declined") {
				triggerProactiveChatEvent(message.status,message);
				$("#ProactiveChat").removeClass("alerting");
			}else if (message.status === 'not-loaded') {
        triggerProactiveChatEvent('not-ready',message);
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
		metadata = metadata || {};
		var PegaAParamObject = preparePegaAParams("OnlineHelp");
		PegaAParamObject.queueName = queueName;
		PegaAParamObject.metadata = JSON.stringify(convertProactiveMetadata(metadata));
		PegaAParamObject.hideDefaultUI = true ;
		pega.web.api.doAction("ProactiveChat", "createNewWork", "PegaCA-Work-ProactiveChat", "pyStartCase", PegaAParamObject);
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
