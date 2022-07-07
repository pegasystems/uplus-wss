function getNBAMServiceControl(serviceClass,callMultiContainer) {

	var serverHostname = "localhost";
	var serverPort = "";
	var serviceClass = serviceClass;
	var callMultiContainer = callMultiContainer;
	var offerLength = 0;
	var NBAMServiceControl = {

		hostName : serverHostname,
    port : serverPort,
    serviceURLProtocol: 'https',
		url : "",

		initialize : function (serverHostname, serverPort) {

			this.hostName = serverHostname;
			this.port = serverPort;
			if (typeof this.hostName == 'undefined') this.hostName = "localhost";
			if (typeof this.port == 'undefined') this.port = "";
        if(this.hostName.startsWith('http://')) {
        this.serviceURLProtocol = "http";
      }
      var idx= this.hostName.lastIndexOf("/");
      if(idx!= -1) {
        this.hostName = this.hostName.substring(idx+1);
      }
			this.url = this.serviceURLProtocol + "://" + this.hostName + (this.port!="" ? ":" + this.port : "") + "/prweb/api/PegaMKTContainer/Services/ExecuteWebContainer?";

		},

		getServiceURL : function (serviceName,params) {
			var url;
			if (serviceClass) {
				url = this.serviceURLProtocol + "://" + this.hostName + (this.port!="" ? ":" + this.port : "") + "/prweb/api/PegaMKTContainer/" + serviceClass + "/" + serviceName + "?";

			} else {
				var url = this.serviceURLProtocol + "://" + this.hostName + (this.port!="" ? ":" + this.port : "") + "/prweb/api/PegaMKTContainer/Services/" + serviceName + "?";
			}

			if(params != null) {
			 url += params;
			}
			return url;

		},

		 /*
      * This method is updated to handle all the versions of the container service calls i.e., V1/V2/V3 based on the serviceClass defined.
      * Added new parameter "ContextName" (at which context level decisioning should be done) which can be passed for V3 container service. else for other version before V3, null value can be passed.
      * "externalID": For identity matching. It doesn't exist pass null.
      * CustomerID had been modified to "subjectID" corresponds to the customer Id at particular context level. For V2, this field will be mapped to customerID in the container payload.
      */
		getOffers : function (subjectID, contextName, containerName, externalID, channel, previousPage, currentpage, callback,intent, placement, appid, errorcallback) {

			var callbackFunction ;
			if(callMultiContainer){
				callbackFunction = function (data){
				    var responseData = data["ResponseData"];
					var containerNameList = containerName.split(",");
					for(var i=0;i<containerNameList.length;i++){
						console.log(responseData[containerNameList[i]]);
						callback(responseData[containerNameList[i]],containerNameList[i]);
					}
				};
			}
			else
				callbackFunction = callback;

			var jsonObj = this.getV3JSONObj(subjectID, contextName, containerName, externalID, channel, previousPage, currentpage,intent, placement, appid);

			if(serviceClass){
				this.invokeRemoteService("Container",null,"POST",jsonObj,callbackFunction, errorcallback);
			} else {
				this.invokeRemoteService("ExecuteWebContainer",null,"POST",jsonObj,callbackFunction, errorcallback);
			}

		},

         loadOffers : function (jsonObj, methodType, callback, errorcallback) {

			if(methodType == "GET"){
			    var queryParams = function parse(jsonObj) {
									return '?' +
									Object.keys(jsonObj).map(function(key) {
									if(typeof jsonObj[key]!='object'){
										return encodeURIComponent(key) + '=' +
										encodeURIComponent(jsonObj[key]);
										}
									}).join('&');}
          queryParams = queryParams.substring(0, queryParams.length() - 1);
				  this.invokeRemoteService("Container", queryParams,"GET", null, callback, errorcallback);
			}
			else {
				  this.invokeRemoteService("Container", null,"POST", jsonObj, callback, errorcallback);
			}

		},

		getJSONObj : function(customerID, containerName, channel, previousPage, currentpage, intent, placement){
			if(serviceClass){
				var jsonObj = {
					"CustomerID" : customerID,
					"ContainerName" : containerName,
					"Channel": channel,
                    "Direction": "Inbound",
                    "Placements":placement,
                  	"Contexts": [{
                                  "Key": "CurrentPage",
                                  "Value": currentpage,
                                  "Type": "CurrentPage"
                             	 },
                                 {
                                  "Key": "PreviousPage",
                                  "Value": previousPage,
                                  "Type": "PreviousPage"
                             	 }]

				};
                 if(intent && intent!=="") {
                    jsonObj.Contexts.push({
                                  "Key": "CurrentPage",
                                  "Value": intent,
                                  "Type": "Intent"
                             	 });
                }
			} else {
				var jsonObj = {
					"CustomerID" : customerID,
					"ContainerName" : containerName,
					"Channel": channel,
					"PreviousPage":previousPage,
					"CurrentPage":currentpage
			    };
			}
			return jsonObj;
		},


		/* "captureSingleWebImpression " : to capture single web impression, pass following parameters and the impresssion would be captured.*/
		captureSingleWebImpression : function (ContainerID, CustomerID, OfferID, Issue, Group, InteractionID, campaignID,callback, errorcallback) {
			var jsonObj = {
				"CustomerID" : CustomerID,
				"ContainerName" : ContainerID,
				"OffersList" : [{
						"OfferID" : OfferID,
						"Issue" : Issue,
						"Group" : Group,
						"InteractionID" : InteractionID,
						"CampaignID": campaignID
					}
				]
			};

			this.captureMultipleWebImpression(jsonObj, callback, errorcallback);
		},

		/**
		* "captureMultipleWebImpression" :
		* Accepts the JSON Object with the list of offers and then captures the impressions for all the offers
		**/
		captureMultipleWebImpression : function (JSONObj, callback, errorcallback) {
			var jsonString = JSON.stringify(JSONObj);
			var serviceUrl = this.getServiceURL("CaptureWebImpression",null);
			var xmlHttpReq = this.createRequest('POST', serviceUrl, callback, errorcallback);
			if (xmlHttpReq)	xmlHttpReq.send(jsonString);
		},

        /**
		*"capturePaidClickResponse " : capture paid meida click response
		**/
		capturePaidClickResponse : function (CustomerID, ExternalAudienceId, ReferrerUrl, Utm_medium, callback, errorcallback) {
			var jsonObj = {
				"CustomerID" : CustomerID,
				"ExternalAudienceId" : ExternalAudienceId,
				"ReferrerUrl" : ReferrerUrl,
				"Utm_medium" : Utm_medium
			};

			this.captureMultiplePaidClickResponse(jsonObj, callback, errorcallback);
		},
        /**
		*"capturePaidClickResponse " : capture paid meida click response with AdSetId and DestinationType
		**/
		capturePaidClickResponseExt : function (CustomerID, ExternalAudienceId, AdSetId, DestinationType, ReferrerUrl, Utm_medium, Outcome, callback, errorcallback) {
			var jsonObj = {
				"CustomerID" : CustomerID,
				"ExternalAudienceId" : ExternalAudienceId,
				"ReferrerUrl" : ReferrerUrl,
				"Utm_medium" : Utm_medium,
        "AdSetId" : AdSetId,
        "DestinationType" : DestinationType,
        "Outcome" : Outcome
			};

			this.captureMultiplePaidClickResponse(jsonObj, callback, errorcallback);
		},

    /**
		 * Fetches the query parameters from the click URL.
		 */
		fetchQueryParams: function () {
			return window.location.search.substring(1);
		},

        		/**
		 * Builds the request payload required for the CapturePaidResponseExt service and also identifies the destination
		 * i.e., Facebook/Google based on the query parameter name adset_id/adgroup_id
		 */
		buildRequestPayload: function () {
			var rawQueryParams = sessionStorage.getItem('query_params');
			var queryParams = rawQueryParams.split('&');
			var externalAudienceId, adSetIdOrAdGroupId, utmMedium, outcome, referralUrl, destination;
			if (queryParams) {
				for (var i = 0; i < queryParams.length; i++) {
					console.log(queryParam);
					var queryParam = queryParams[i];
					var key = queryParam.split('=')[0];
					var value = queryParam.split('=')[1];
					switch (key) {
						case 'ext_aud_id':
							externalAudienceId = value;
							break;
						case 'adset_id':
							adSetIdOrAdGroupId = value;
							destination = 'Facebook';
							break;
						case 'adgroup_id':
							adSetIdOrAdGroupId = value;
							destination = 'Google';
							break;
						case 'utm_medium':
							utmMedium = value;
							break;
						case 'outcome':
							outcome = value;
							break;
						case 'ref_url':
							referralUrl = value;
							break;
					}
				}
			}
			if (!outcome || outcome.length <= 0) {
				outcome = "PaidClick";
			}
			return {
				'externalAudienceId': externalAudienceId,
				'adSetIdOrAdGroupId': adSetIdOrAdGroupId,
				'utmMedium': utmMedium,
				'outcome': outcome,
				'referralUrl': referralUrl,
				'destination': destination
			}
		},

		/**
		* "captureMultiplePaidClickResponse" capture paid meida click response
		**/
		captureMultiplePaidClickResponse : function (JSONObj, callback, errorcallback) {
			var jsonString = JSON.stringify(JSONObj);
			var serviceUrl = this.getServiceURL("CapturePaidResponse",null);
			var xmlHttpReq = this.createRequest('POST', serviceUrl, callback, errorcallback);
			if (xmlHttpReq)	xmlHttpReq.send(jsonString);
		},
		// Create the XHR object.
	 createRequest : function(method, url, callback, errorcallback) {
		var xhr = new XMLHttpRequest();
        if (typeof xhr == "undefined") { return null; }
        if( typeof CDHRequestTimeout === "number") {
            xhr.timeout = CDHRequestTimeout; // time in milliseconds
        }
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				var data = xhr.responseText;

				if (data && typeof callback == "function") {
					try {
						callback(JSON.parse(data));
					} catch (exception) {
                        errorcallback();
                    }
				}
			} else if (xhr.status == 404 || xhr.status >= 500) {
                if(typeof errorcallback == "function") errorcallback();
            }
		};
		xhr.onerror = function (e) {
            console.log('CDH XHR error', e);
            if(typeof errorcallback == "function") errorcallback();
		};
        xhr.ontimeout = function (e) {
            console.log('CDH XHR timeout', e);
            if(typeof errorcallback == "function") errorcallback();
		};
		xhr.open(method, url, true);
		return xhr;
	},

	/* captureWebResponse function is implemented as part US-81885 */

	captureWebResponse : function (containerID, customerID, offerID, issue, group, interactionID,outcome,behaviour,channel,direction,campaignID,callback, errorcallback) {

		var jsonObj = {
			"CustomerID" : customerID,
			"ContainerName" : containerID,
			"OffersList" : [{
					"OfferID" : offerID,
					"Issue" : issue,
					"Group" : group,
					"CampaignID": campaignID,
					"InteractionID" : interactionID,
					"Outcome":outcome,
					"Behaviour":behaviour,
					"Direction":direction,
					"Channel":channel

				}]
		};
		this.captureWebResponseWithJSON(jsonObj,callback, errorcallback);

	},
	captureWebResponseWithJSON : function(jsonObj,callback){
		this.invokeRemoteService("CaptureWebResponse",null,"POST",jsonObj,callback, errorcallback);
    },
	captureResponse : function(containerID, customerID, offerID, issue, group, interactionID,outcome,channel,direction,campaignID,rank,treatment,propensity, priority, contextName, initiateOffer, callback, errorcallback){


		if(serviceClass){
			var jsonObj = {
				"SubjectID" : customerID,
				"ContainerName" : containerID,
				"ContextName": contextName,
				"RankedResults" : [{
						"Name" : offerID,
						"Issue" : issue,
						"Group" : group,
						"CampaignID": campaignID,
						"InteractionID" : interactionID,
						"Outcome":outcome,
						"Direction":direction,
						"Channel":channel,
                        "Rank": rank,
                        "Treatment": treatment,
					"SubjectID": customerID,
					"ContextName": contextName
				}]
			};
		} else {
			var jsonObj = {
				"SubjectID" : customerID,
				"ContainerName" : containerID,
				"ContextName": contextName,
				"OffersList" : [{
						"Name" : offerID,
						"Issue" : issue,
						"Group" : group,
						"CampaignID": campaignID,
						"InteractionID" : interactionID,
						"Outcome":outcome,
						"Direction":direction,
						"Channel":channel,
                        "Rank": rank,
                        "Treatment": treatment,
					"SubjectID": customerID,
					"ContextName": contextName
				}]
			};
		}

		this.captureResponseWithJSON(jsonObj,callback,initiateOffer, errorcallback);
	},
	captureResponseWithJSON : function(jsonObj,callback,initiateOffer, errorcallback){
		if(serviceClass){
			if(initiateOffer){
				this.invokeRemoteService("CaptureResponse/Initiate",null,"POST",jsonObj,callback, errorcallback);
			} else {
				this.invokeRemoteService("CaptureResponse",null,"POST",jsonObj,callback, errorcallback);
			}
		} else{
			this.invokeRemoteService("CaptureResponse",null,"POST",jsonObj,callback, errorcallback);
		}

    },

	invokeRemoteService: function(serviceName,urlParams,httpVerb,jsonObj,callback, errorcallback){
		var serviceUrl = this.getServiceURL(serviceName,urlParams);
		var xmlHttpReq = this.createRequest(httpVerb, serviceUrl, callback, errorcallback);
		if(typeof jsonObj === "string") {
			if (xmlHttpReq)	xmlHttpReq.send(jsonObj);
		} else {
			if (xmlHttpReq)	xmlHttpReq.send(JSON.stringify(jsonObj));
		}
	},

    /*This function is the overloaded version of the getJSONObj to generate container payload based on the serviceClass*/
    getV3JSONObj : function(subjectID, contextName, containerName, externalID, channel, previousPage, currentpage,intent, placement, appid){
			let jsonObj;
			if(serviceClass && serviceClass.toUpperCase() === "V3"){
				let jsonStr = '{ '+ (subjectID ? ('"SubjectID":"' + subjectID + '",') : '')
				  + (contextName ? ('"ContextName":"' + contextName + '",') : '')
				  + (externalID ? ('"ExternalID":"' + externalID + '",') : '')
					+ (appid && appid !== '' ? ('"AppID":"' + appid + '",') : '')
          + '"ContainerName":"'+ containerName + '",'
                + '"Direction":"Inbound",'
                + '"Placements":"'+ placement + '",'
				  +	'"Channel":"' + channel + '",'
                  +	'"Contexts": [{ "Key": "CurrentPage",'
                                 +'"Value":"' + (intent && intent !== '' ? intent : currentpage) + '",'
                                 + '"Type": "' + (intent && intent !== '' ? "Intent" : "CurrentPage") + '"},'
                                 +'{'
                                 +'"Key": "PreviousPage",'
                                 +'"Value":"' + previousPage + '",'
                                 + '"Type": "PreviousPage" }]'

				+'}';
				try {
					jsonObj = JSON.parse(JSON.stringify(jsonStr));
				} catch(err) {
					console.log(err);
				}

	  } else {
				jsonObj = this.getJSONObj(subjectID, containerName, channel, previousPage, currentpage, intent, placement);
			}
			return jsonObj;
	},

   sendRTSEvent : function(customerID, item, callback, errorcallback) {
     console.log("Sending RTS Event ID: " + customerID + " Event: " , item);
     customerID = encodeURI(customerID);
     this.invokeRemoteService("DigitalActivityStream?customer_id="+customerID+"&activity_group="+item.category+
	 "&activity_value=" + item.name + "&activity=hover",null,"GET",null,callback, errorcallback);
    },

    sendClickStreamEvent : function(event, callback, errorcallback) {
     console.log("Sending ClickStream Event", event);
     var serviceUrl = this.serviceURLProtocol + "://" + this.hostName + (this.port!="" ? ":" + this.port : "") + "/prweb/api/Clickstream/1.1/Insert";
	var xmlHttpReq = this.createRequest("POST", serviceUrl, callback, errorcallback);
	if (xmlHttpReq)	xmlHttpReq.send(JSON.stringify(event));
    },

  };

    return NBAMServiceControl;
}
