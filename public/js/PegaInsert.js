var nbamServiceCtrl;
$(document).ready(function () {
  nbamServiceCtrl = getNBAMServiceControl("V2", false);
  //Using current hostname and port currently
  nbamServiceCtrl.initialize(PegaCSWSS.Marketing.Host, PegaCSWSS.Marketing.Port);
});

function NBAM(currentPage, container) {

  var reqst = new XMLHttpRequest();
  var email = sessionStorage.getItem('email');
  if (email == null) email = "";

  var previousPage = sessionStorage.getItem('previousPage');
  if (previousPage == null) previousPage = "";

  var params = "CurrentPage=" + currentPage + "&PreviousPage=" + previousPage + "&Email=" + email;

  var loginID = sessionStorage.getItem('CustomerID');
  var customerID = (loginID == null) ? "" : loginID; //if not logged in, default to troy's ID for now
  var containerName = (container !== null) ? container : ""; //"UBank";
  if (loginID) {
    //containerName += "_" + loginID;
  }

  console.log("ContainerName: " + containerName);

  var channel = "Web";
  nbamServiceCtrl.getOffers(customerID, containerName, channel, previousPage, currentPage, handleResponse);

  sessionStorage.setItem('previousPage', currentPage);

  var webEventJSONObj = {
    "Description": currentPage,
    "CustomerID": customerID,
    "EventId": "",
    "Reason": "VIEW"
  };

  if (sessionStorage.getItem("CustomerID") !== null) {
    buildRequestURL(currentPage);
    if (sessionStorage.getItem("RequestURL") !== null) {
      //insertEventRequestImage();
    }
  }
}

function handleResponse(data) {
  data.RankedResults = data.ContainerList[0].RankedResults;
  if (data.OffersList && data.OffersList.length > 0) {
    parseResponseData(data.OffersList);
  } else if (data.RankedResults && data.RankedResults.length) {
    parseResponseData(data.RankedResults);
  }
}

function parseResponseData(OffersList) {
  for (var i = 0; i < OffersList.length; i++) {
    //Get the src for the img tag...
    var ba = document.getElementById("BannerAd" + i);
    if (ba) {
      var theurl = OffersList[i].ImageURL;
      var ptindex = theurl.lastIndexOf(".");
      var suffix = "";
      var newurl = theurl;
      if (ptindex > -1) {
        var first = theurl.substr(0, ptindex);
        var last = theurl.substr(ptindex);
        if ($(ba).hasClass("smimg")) {
          suffix = "SM";
        }
        if ($(ba).hasClass("lgimg")) {
          suffix = "LG";
        }
        newurl = first + suffix + last;
      }

      ba.src = newurl;
      ba.setAttribute("title", OffersList[i].OfferName);
    }


    var baTitle = document.getElementById("BannerAd" + i + "Title");
    if (baTitle) {
      var theName = OffersList[i].Label;
      baTitle.innerText = theName;

    }

    var baDescription = document.getElementById("BannerAd" + i + "Desc");
    if (baDescription) {
      var theDesc = OffersList[i].ShortDescription;
      baDescription.innerText = theDesc;

    }



    var bc = document.getElementById("BannerAd" + i);
    var url = OffersList[i].ClickThroughURL;
    if (bc && url) {
      $(bc).data("clickurl", url);
      bc.addEventListener('click', function () {
        var theurl = $(this).data("clickurl");
        openClick(theurl);
      }, false);
    }
    var bl = document.getElementById("BannerLink" + i);
    var urll = OffersList[i].ClickThroughURL;
    if (bl && urll) {
      $(bl).data("clickurl", urll);
      bl.addEventListener('click', function () {
        var theurll = $(this).data("clickurl");
        openClick(theurll);
      }, false);
    }
  }
}

function captureOfferResponse(outcome, behaviour, callback) {
  var data = JSON.parse(sessionStorage.getItem('OffersData'));
  if (data.OffersList) {
    nbamServiceCtrl.captureWebResponse(data.ContainerName, data.CustomerID, data.OffersList[0].OfferID, data.OffersList[0].Issue, data.OffersList[0].Group, data.OffersList[0].InteractionID, outcome, behaviour, "Web", data.Direction, data.OffersList[0].CampaignID, callback);
  } else if (data.RankedResults) {
    nbamServiceCtrl.captureResponse(sessionStorage.getItem('containerName'), sessionStorage.getItem('CustomerID'), data.RankedResults[0].Name, data.RankedResults[0].Issue, data.RankedResults[0].Group, data.RankedResults[0].InteractionID, outcome, behaviour, "Web", data.Direction, data.RankedResults[0].CampaignID, data.RankedResults[0].Treatment, callback);
  } else {
    $('#captureResponsePanel').text(data.Message);
  }
}

function buildRequestURL(currentPage) {
  //Clean up RequestURL
  sessionStorage.removeItem("RequestURL");

  //Base URL and Service
  var baseURL = window.location.protocol + "//" + PegaCSWSS.Marketing.Host + ":" + PegaCSWSS.Marketing.Port;
  var serviceExtension = "/prweb/PRHTTPService/MKT/RH/WEC";

  //Build parameter string
  var param_customerID = "CID=" + (sessionStorage.getItem("CustomerID") !== null ? sessionStorage.CustomerID : "noID");
  var param_eventID = "EID=''";
  var param_description = "DESC=" + (currentPage !== "" ? currentPage : "UndefinedPage");
  var param_reason = "R=VIEW";
  var requestParameters = "?" + param_customerID + "&" + param_eventID + "&" + param_description + "&" + param_reason;

  //Build full request URL and save to session storage
  var requestURL = baseURL + serviceExtension + requestParameters;
  sessionStorage.setItem("RequestURL", requestURL);
}

function insertEventRequestImage() {
  //Build fake image to trigger service call
  var requestElement = document.createElement("img");
  requestElement.src = sessionStorage.RequestURL;
  requestElement.width = "1px";
  requestElement.height = "1px";

  //Append request image to body
  document.body.appendChild(requestElement);
}