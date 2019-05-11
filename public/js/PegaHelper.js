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

  /* checking chat session is connected or not, if it is already connected in some other tab then not showing need help button*/
  if(window.localStorage.getItem(chatSessionStatusKey) == "true"){
		return;
	}

	var script = document.createElement("script");
	script.type = "text/javascript";
	fireflyAPI.token = PegaCSWSS.Cobrowse.Token;
	fireflyAPI.serverHostUrl = PegaCSWSS.Cobrowse.ServerURL;
  script.src = PegaCSWSS.Cobrowse.ServerURL + "/cobrowse/loadScripts";
	script.async = true;
	document.head.appendChild(script);

  /* add id attributes to gadgets */
  $("div[data-pega-gadgetname='OnlineHelp']").attr("id","OnlineHelp");
  $("div[data-pega-gadgetname='PreviewGadget']").attr("id","PreviewGadget");

  if (window.addEventListener){
    addEventListener("message", postMessageListener, false);
    addEventListener("beforeunload", removeConnectedStatus, false);
  } else {
    attachEvent("onmessage", postMessageListener);
    attachEvent("onbeforeunload", removeConnectedStatus);
  }

  var $minL = $("<div>", {id:"launcherminimized",text:"Need Help?"});
  $minL.click(maximizeAdvisorWindow);
  var $counter = $("<div>", {id:"unreadCounter",text:"0"});
  $minL.append($counter);
  $( 'body' ).append($minL);
  $("#launcherminimized").hide();
  /* Invoke the preview loader to force proactive items to fire as well as load preview data */
  previewMonitor = setTimeout(monitorPreviewLoader, MonitorTimeout);

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
	    pega.web.api.doAction("PreviewGadget", "display", "Preview", "PegaCS-OnlineHelp-Triage-WebChatbot", null, true, null, PegaAParamObject);
      MonitorTimeout = MonitorTimeout + 2000;
 	    previewMonitor = setTimeout(monitorPreviewLoader, MonitorTimeout);
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
	$(function(){
		window.pega = window.pega || {};
		window.pega.chat = window.pega.chat || {};
		window.pega.chat.proactiveChat = new PegaProactiveChat();
	})
	/*Proactive chat js api - end */

$(function() {
  $( 'body' ).append("<div id='OnlineHelp' data-pega-gadgetname ='OnlineHelp' data-pega-action ='createNewWork' data-pega-action-param-classname ='' data-pega-action-param-flowname ='' data-pega-action-param-model ='' data-pega-applicationname ='" + PegaCSWSS.ApplicationName + "' data-pega-isdeferloaded ='true' data-pega-threadname ='CSAdvisor' data-pega-systemid ='pega' data-pega-resizetype ='fixed' data-pega-url ='" + PegaCSWSS.MashupURL +"' data-pega-action-param-parameters ='' data-pega-redirectguests='true' data-pega-event-onclose ='hideinline'></div>");

  $( 'body' ).append("<div id='ProactiveChat' data-pega-gadgetname ='ProactiveChat' data-pega-action ='createNewWork' data-pega-action-param-classname ='' data-pega-action-param-flowname ='' data-pega-action-param-model ='' data-pega-applicationname ='" + PegaCSWSS.ApplicationName + "' data-pega-isdeferloaded ='true' data-pega-threadname ='ProactiveChatThread' data-pega-systemid ='pega' data-pega-resizetype ='fixed' data-pega-url ='" + PegaCSWSS.MashupURL +"' data-pega-action-param-parameters ='' data-pega-redirectguests='true' data-pega-event-onclose ='hideinline' data-pega-event-oncustom='proactiveChatCustomEventHandler'></div>");

  $( 'body' ).append("<div style='display:none; height:80px; padding-top:14px; padding-left:20px;' id='Preview' data-pega-gadgetname ='PreviewGadget' data-pega-isdeferloaded ='true' data-pega-action ='display' data-pega-action-param-classname ='PegaCS-OnlineHelp-Triage-WebChatbot'  data-pega-harnessname ='Preview' data-pega-applicationname ='" + PegaCSWSS.ApplicationName + "' data-pega-threadname ='Preview' data-pega-systemid ='pega' data-pega-resizetype ='fixed' data-pega-event-onclose ='' data-pega-url ='" + PegaCSWSS.MashupURL +"' data-pega-action-param-parameters=''></div>");
});
