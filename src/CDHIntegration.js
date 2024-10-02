/* eslint no-console: 0 */
const parseResponseData = (
  Context,
  type,
  OffersList,
  containerName,
  customerID,
) => {
  let maxOffers = OffersList.length;
  let mktcfg = Context.settings.pega_marketing[type];
  if (
    type.indexOf('extraOfferPages') === 0 &&
    typeof Context.settings.pega_marketing.extraOfferPages !== 'undefined'
  ) {
    const offerIndex = parseInt(type.replace('extraOfferPages', ''), 10) - 1;
    mktcfg = Context.settings.pega_marketing.extraOfferPages[offerIndex];
  }
  if (mktcfg && mktcfg.placement) {
    maxOffers = mktcfg.placement.split(',').length;
    if (maxOffers > OffersList.length) {
      maxOffers = OffersList.length;
    }
  }
  let attributes = [];
  if (mktcfg && mktcfg.attributes && mktcfg.attributes !== '') {
    attributes = mktcfg.attributes.split(',');
  }
  /* For account page - we might want to only show a single offer */
  if (mktcfg && mktcfg.showSingleOffer) {
    maxOffers = maxOffers > 1 ? 1 : maxOffers;
  }

  let isHeroPlacementFilled = false;
  for (let i = 0; i < maxOffers; i++) {
    let imgurl = OffersList[i].ImageURL.trim();
    if (!imgurl.startsWith('http')) {
      // expect the file to be hosted on this server
      imgurl = imgurl.replace('webwb/', './img/').replace('web/', './img/');
    }
    if (imgurl === '') {
      imgurl = 'img/option-1.jpg';
    }
    if (
      !isHeroPlacementFilled &&
      OffersList[i].Placement === 'Hero' &&
      typeof Context.hero_offer === 'object'
    ) {
      isHeroPlacementFilled = true;
      if (Context.settings.pega_marketing.replaceHomePageHeader) {
        window.mainconfig.homeHeroImg = imgurl;
        imgurl = '';
      }
      Context.hero_offer = {
        img: imgurl,
        placement: OffersList[i].Placement,
        title: OffersList[i].Label,
        benefits: OffersList[i].Benefits,
        message: OffersList[i].ShortDescription,
        link: Context.hero_offer.link,
        url: OffersList[i].ClickThroughURL,
        name: OffersList[i].Name,
        treatment: OffersList[i].Treatment,
        rank: OffersList[i].Rank,
        propensity: OffersList[i].Propensity,
        priority: OffersList[i].Priority,
        reason: OffersList[i].Reason,
        interactionID: OffersList[i].InteractionID,
        identifier: OffersList[i].Identifier,
        category: OffersList[i].Category,
        group: OffersList[i].Group,
        campaignID: OffersList[i].CampaignID,
        issue: OffersList[i].Issue,
        channel: OffersList[i].Channel,
        subjectID: OffersList[i].SubjectID,
        contextName: OffersList[i].ContextName,
        attributes,
        container: containerName,
        customerID,
        showAIoverlay: false,
      };
      for (const attr of attributes) {
        if (OffersList[i][attr] && OffersList[i][attr] !== '')
          Context.hero_offer[attr] = OffersList[i][attr];
      }
    } else {
      const obj = {
        img: imgurl,
        placement: OffersList[i].Placement,
        title: OffersList[i].Label,
        benefits: OffersList[i].Benefits,
        message: OffersList[i].ShortDescription,
        link: 'learnmore',
        url: OffersList[i].ClickThroughURL,
        name: OffersList[i].Name,
        treatment: OffersList[i].Treatment,
        rank: OffersList[i].Rank,
        propensity: OffersList[i].Propensity,
        priority: OffersList[i].Priority,
        reason: OffersList[i].Reason,
        interactionID: OffersList[i].InteractionID,
        identifier: OffersList[i].Identifier,
        category: OffersList[i].Category,
        group: OffersList[i].Group,
        campaignID: OffersList[i].CampaignID,
        issue: OffersList[i].Issue,
        channel: OffersList[i].Channel,
        subjectID: OffersList[i].SubjectID,
        contextName: OffersList[i].ContextName,
        attributes,
        container: containerName,
        customerID,
        showAIoverlay: false,
      };
      for (const attr of attributes) {
        if (OffersList[i][attr] && OffersList[i][attr] !== '')
          obj[attr] = OffersList[i][attr];
      }
      Context.data.push(obj);
    }
  }
};

const captureResponse = function captureResponse(Context, item, outcome) {
  if (Context.settings.pega_marketing.apiLevel === 'V2') return;
  if (typeof window.getNBAMServiceControl !== 'undefined') {
    const nbamServiceCtrl = window.getNBAMServiceControl(
      Context.settings.pega_marketing.apiLevel,
      false,
    );
    nbamServiceCtrl.initialize(
      Context.settings.pega_marketing.Host,
      Context.settings.pega_marketing.Port,
    );
    nbamServiceCtrl.captureResponse(
      item.container,
      item.subjectID,
      item.name /* OfferID */,
      item.issue,
      item.group,
      item.interactionID,
      outcome /* outcome could be Clicked or Impression */,
      item.channel,
      'Inbound',
      item.campaignID,
      item.rank,
      item.treatment,
      Context.settings.pega_marketing.appID,
      item.contextName,
      false,
      (data) => {
        console.log(
          `send capture information for ${item.name} rank=${item.rank} outcome=${outcome} response:${data.Status}`,
        );
      },
    );
  } else {
    if (Context.initCDH) return;
    const scriptLoadMkt = document.createElement('script');
    scriptLoadMkt.onload = function onloadPegaMkt() {
      Context.initCDH = true;
      captureResponse(Context, item, outcome);
    };
    scriptLoadMkt.setAttribute('src', '../js/realtimecontainerscript.js');
    document.head.appendChild(scriptLoadMkt);
  }
};
const initNBAM = function initNBAM(
  Context,
  type,
  customerID,
  previousPage,
  currentPage,
) {
  if (typeof window.getNBAMServiceControl !== 'undefined') {
    const nbamServiceCtrl = window.getNBAMServiceControl(
      Context.settings.pega_marketing.apiLevel,
      false,
    );
    window.CDHRequestTimeout = Context.settings.pega_marketing.requestTimeout;
    nbamServiceCtrl.initialize(
      Context.settings.pega_marketing.Host,
      Context.settings.pega_marketing.Port,
    );
    let containerName = '';
    if (
      Context.settings.pega_marketing[type] &&
      Context.settings.pega_marketing[type].containerName
    ) {
      containerName = Context.settings.pega_marketing[type].containerName;
    } else if (
      type.indexOf('extraOfferPages') === 0 &&
      typeof Context.settings.pega_marketing.extraOfferPages !== 'undefined'
    ) {
      const offerIndex = parseInt(type.replace('extraOfferPages', ''), 10) - 1;
      containerName =
        Context.settings.pega_marketing.extraOfferPages[offerIndex]
          .containerName;
    }
    if (containerName === '') {
      Context.loading = false;
      return;
    }
    let placement = 'Tile';
    if (
      Context.settings.pega_marketing[type] &&
      Context.settings.pega_marketing[type].placement
    ) {
      placement = Context.settings.pega_marketing[type].placement;
    } else if (
      type.indexOf('extraOfferPages') === 0 &&
      typeof Context.settings.pega_marketing.extraOfferPages !== 'undefined'
    ) {
      const offerIndex = parseInt(type.replace('extraOfferPages', ''), 10) - 1;
      placement =
        Context.settings.pega_marketing.extraOfferPages[offerIndex].placement;
    }
    const intent = Context.intent.trim();
    try {
      nbamServiceCtrl.getOffers(
        customerID,
        Context.settings.pega_marketing.contextName,
        containerName,
        Context.ExternalID,
        Context.settings.pega_marketing.channel,
        previousPage,
        currentPage,
        (data) => {
          data.RankedResults = data.ContainerList[0].RankedResults;
          if (data.OffersList && data.OffersList.length > 0) {
            parseResponseData(
              Context,
              type,
              data.OffersList,
              containerName,
              customerID,
            );
          } else if (data.RankedResults && data.RankedResults.length > 0) {
            parseResponseData(
              Context,
              type,
              data.RankedResults,
              containerName,
              customerID,
            );
          } else {
            Context.errorloading = true;
          }
          Context.loading = false;
        },
        intent,
        placement,
        Context.settings.pega_marketing.appID,
        () => {
          // on error
          Context.loading = false;
          Context.errorloading = true;
        },
      );
    } catch {
      Context.loading = false;
      Context.errorloading = true;
    }
  } else {
    if (Context.initCDH) return;
    const scriptLoadMkt = document.createElement('script');
    scriptLoadMkt.onload = function onloadPegaMkt() {
      Context.initCDH = true;
      initNBAM(Context, type, customerID, previousPage, currentPage);
    };
    scriptLoadMkt.setAttribute('src', '../js/realtimecontainerscript.js');
    document.head.appendChild(scriptLoadMkt);
  }
};

const mergeAccount = function mergeAccount(Context) {
  if (
    Context.settings.pega_marketing.Host === '' ||
    !Context.settings.pega_marketing.enableMergeAccount
  )
    return;
  if (typeof window.getNBAMServiceControl !== 'undefined') {
    const nbamServiceCtrl = window.getNBAMServiceControl(
      Context.settings.pega_marketing.apiLevel,
      false,
    );
    nbamServiceCtrl.initialize(
      Context.settings.pega_marketing.Host,
      Context.settings.pega_marketing.Port,
    );
    let customerid = '';
    if (
      Context.userId !== -1 &&
      Context.settings.users[Context.userId].customerID
    ) {
      customerid = Context.settings.users[Context.userId].customerID;
    }
    /* If there is customerID, just skip sending the merge account */
    if (customerid === '') {
      console.log('No customerID present - skip mergeAccount');
      return;
    }
    nbamServiceCtrl.mergeAccount(
      customerid,
      Context.ExternalID,
      Context.settings.pega_marketing.contextName,
      Context.settings.pega_marketing.appID,
      null,
    );
  } else {
    if (Context.initCDH) return;
    const scriptLoadMkt = document.createElement('script');
    scriptLoadMkt.onload = function onloadPegaMkt() {
      Context.initCDH = true;
      mergeAccount(Context);
    };
    scriptLoadMkt.setAttribute('src', '../js/realtimecontainerscript.js');
    document.head.appendChild(scriptLoadMkt);
  }
};

const sendRTSEvent = function sendRTSEvent(Context, item) {
  if (Context.settings.pega_marketing.Host === '') return;
  if (typeof window.getNBAMServiceControl !== 'undefined') {
    const nbamServiceCtrl = window.getNBAMServiceControl(
      Context.settings.pega_marketing.apiLevel,
      false,
    );
    nbamServiceCtrl.initialize(
      Context.settings.pega_marketing.Host,
      Context.settings.pega_marketing.Port,
    );
    let custID = item.customerID;
    /* Read the cookie MKTID if present and send it as Customer ID instead */
    if (custID === '' && document.cookie.split('MKTID=').length > 1) {
      custID = document.cookie.split('MKTID=')[1].split(';')[0];
    }
    nbamServiceCtrl.sendRTSEvent(custID, item, null);
  } else {
    if (Context.initCDH) return;
    const scriptLoadMkt = document.createElement('script');
    scriptLoadMkt.onload = function onloadPegaMkt() {
      Context.initCDH = true;
      sendRTSEvent(Context, item);
    };
    scriptLoadMkt.setAttribute('src', '../js/realtimecontainerscript.js');
    document.head.appendChild(scriptLoadMkt);
  }
};

const sendClickStreamEvent = function sendClickStreamEvent(
  Context,
  eventtype,
  pagetype,
  PageViewActiveTime,
) {
  if (
    Context.settings.pega_marketing.Host === '' ||
    !Context.settings.pega_marketing.enableClickStream
  )
    return;
  if (typeof window.getNBAMServiceControl !== 'undefined') {
    const nbamServiceCtrl = window.getNBAMServiceControl(
      Context.settings.pega_marketing.apiLevel,
      false,
    );
    nbamServiceCtrl.initialize(
      Context.settings.pega_marketing.Host,
      Context.settings.pega_marketing.Port,
    );
    let pageViewActiveTime = '';
    if (PageViewActiveTime) {
      pageViewActiveTime = parseInt(
        (new Date() - PageViewActiveTime) / 1000,
        10,
      );
    }
    let cookieID = '';
    let customerid = '';
    if (
      Context.userId !== -1 &&
      Context.settings.users[Context.userId].customerID
    ) {
      customerid = Context.settings.users[Context.userId].customerID;
    }
    if (customerid === '' && document.cookie.split('MKTID=').length > 1) {
      cookieID = document.cookie.split('MKTID=')[1].split(';')[0];
    }
    if (Context.settings.pega_marketing.enableMergeAccount) {
      cookieID = Context.ExternalID;
    }
    /* If there is no cookie or customerID, just skip sending the event */
    if (customerid === '' && cookieID === '') return;

    const devicetype = Context.isMobilePhone ? 'Mobile' : 'PC';
    const eventMsg = {
      CustomerID: customerid,
      EventType: eventtype,
      PageType: pagetype,
      PageLocation: window.location.href,
      DeviceType: devicetype,
      PageViewActiveTime: pageViewActiveTime,
      EventTimestamp: new Date()
        .toISOString()
        .replaceAll('-', '')
        .replaceAll(':', '')
        .replace('Z', ' GMT'),
      CookieID: cookieID,
    };
    /* Read the cookie MKTID if present and send it as Customer ID instead */
    nbamServiceCtrl.sendClickStreamEvent(eventMsg, null);
  } else {
    if (Context.initCDH) return;
    const scriptLoadMkt = document.createElement('script');
    scriptLoadMkt.onload = function onloadPegaMkt() {
      Context.initCDH = true;
      sendClickStreamEvent(Context, eventtype, PageViewActiveTime);
    };
    scriptLoadMkt.setAttribute('src', '../js/realtimecontainerscript.js');
    document.head.appendChild(scriptLoadMkt);
  }
};

export {
  initNBAM,
  mergeAccount,
  sendRTSEvent,
  captureResponse,
  sendClickStreamEvent,
};
