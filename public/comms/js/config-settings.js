window.settings = {
  i18n: {
    defaultlocale: 'en',
    /* Set to 'browser' to use browser locale */
    languages: ['en'],
    showLangSwitch: false,
    /* set to true to show the language switcher */
  },
  general: {
    theming: {
      override: false,
      interactiveColor: '#076bc9',
      brandColor: '#3C8712',
    },
    ga: {
      enabled: true,
      trackingid: 'G-RJ6VT2L72P',
    },
    connection: {
      type: 'mashup',
      authtype: 'basic',
      clientid: '',
      clientsecret: '',
      webportal: '',
      c11nserver: '',
      PegaURL: '',
      authService: 'pega',
      themeID: '',
      webEmbedUseFormWidth: false,
      authorizeUri: '',
      showAttachments: true,
    },
    auth_2fa: {
      enabled: false,
      sendMode: 'email',
      url: '',
      emailSettings: {
        correspondenceName: 'pyDefaultOTPCorr',
        emailAccount: 'Default',
        subject: 'New OTP Request',
        validateMaxAge: 'false',
      },
      smsSettings: {
        from: 'Pega',
        account: 'Default',
        message: 'Uplus OTP login code',
        validateMaxAge: 'false',
      },
    },
  },
  quicklinks: [
    {
      title: {
        en: 'Guided Troubleshooting',
      },
      action: 'createNewWork',
      actionparam: '',
      objclass: '',
      url: '',
      startcase: 'pyStartCase',
      application: '',
      icon: '',
      extraparam: '',
      hide: false,
      channelid: '',
      tenantid: '',
      dataretained: true,
      hideassignmentheader: false,
      pageTemplate: 'assignment',
      hideusers: '',
      heading: '',
    },
    {
      title: {
        en: 'Make a payment',
      },
      action: 'createNewWork',
      actionparam: '',
      objclass: '',
      url: '',
      startcase: 'pyStartCase',
      application: '',
      icon: '',
      extraparam: '',
      hide: false,
      channelid: '',
      tenantid: '',
      dataretained: true,
      hideassignmentheader: false,
      pageTemplate: 'assignment',
      hideusers: '',
      heading: '',
    },
    {
      title: {
        en: 'Update billing',
      },
      action: 'createNewWork',
      actionparam: '',
      objclass: '',
      url: '',
      startcase: 'pyStartCase',
      application: '',
      icon: '',
      extraparam: '',
      hide: false,
      channelid: '',
      tenantid: '',
      dataretained: true,
      hideassignmentheader: false,
      pageTemplate: 'assignment',
      hideusers: '',
      heading: '',
    },
    {
      title: {
        en: 'Order a new service',
      },
      action: 'createNewWork',
      actionparam: '',
      objclass: '',
      url: '',
      startcase: 'pyStartCase',
      application: '',
      icon: '',
      extraparam: '',
      hide: false,
      channelid: '',
      tenantid: '',
      dataretained: true,
      hideassignmentheader: false,
      pageTemplate: 'assignment',
      hideusers: '',
      heading: '',
    },
    {
      title: {
        en: 'Update your profile',
      },
      action: 'createNewWork',
      actionparam: '',
      objclass: '',
      url: '',
      startcase: 'pyStartCase',
      application: '',
      icon: '',
      extraparam: '',
      hide: false,
      channelid: '',
      tenantid: '',
      dataretained: true,
      hideassignmentheader: false,
      pageTemplate: 'assignment',
      hideusers: '',
      heading: '',
    },
  ],
  billpay: {
    action: 'createNewWork',
    actionparam: '',
    objclass: '',
    url: '',
    startcase: 'pyStartCase',
    application: '',
    extraparam: '',
    hidebillpay: false,
    channelid: '',
    tenantid: '',
    dataretained: true,
    hideassignmentheader: false,
    pageTemplate: 'assignment',
    heading: '',
  },
  banner: {
    action: 'createNewWork',
    actionparam: '',
    objclass: '',
    url: '',
    startcase: 'pyStartCase',
    application: '',
    extraparam: '',
    hidebanner: true,
    hidebanner_button: false,
    color: '#CE9840',
    channelid: '',
    tenantid: '',
    dataretained: true,
    hideassignmentheader: false,
    pageTemplate: 'assignment',
    heading: '',
  },
  todo: {
    action: 'createNewWork',
    actionparam: '',
    objclass: '',
    url: '',
    startcase: 'pyStartCase',
    application: '',
    extraparam: '',
    hideactivity: false,
    hideaccount: false,
    hideaccountdetails: true,
    accountdetailsheading: 'Add-ons services',
    accountpickerheading: 'Your services',
    recentactivityheading: 'Recent activity',
    channelid: '',
    tenantid: '',
    dataretained: true,
    hideassignmentheader: false,
    pageTemplate: 'assignment',
    heading: '',
  },
  kmhelp: {
    action: 'display',
    actionparam: 'KMHelpSitePortal',
    objclass: 'Data-Portal',
    url: '',
    startcase: 'pyStartCase',
    application: '',
    extraparam: '',
    username: '',
    password: '',
    channelid: '',
    tenantid: '',
    dataretained: true,
    hideassignmentheader: false,
    pageTemplate: 'assignment',
    heading: '',
  },
  activity: {
    action: 'createNewWork',
    actionparam: '',
    objclass: '',
    url: '',
    startcase: 'pyStartCase',
    application: '',
    extraparam: '',
    channelid: '',
    tenantid: '',
    dataretained: true,
    hideassignmentheader: false,
    pageTemplate: 'assignment',
    heading: '',
  },
  homeheroaction: {
    action: 'createNewWork',
    actionparam: '',
    objclass: '',
    url: '',
    startcase: 'pyStartCase',
    application: '',
    pega_userid: '',
    pega_pwd: '',
    extraparam: '',
    channelid: '',
    tenantid: '',
    dataretained: true,
    hideassignmentheader: false,
    pageTemplate: 'assignment',
    heading: '',
  },
  offeraction: {
    action: 'createNewWork',
    actionparam: '',
    objclass: '',
    url: '',
    startcase: 'pyStartCase',
    application: '',
    pega_userid: '',
    pega_pwd: '',
    extraparam: '',
    channelid: '',
    tenantid: '',
    dataretained: true,
    hideassignmentheader: false,
    pageTemplate: 'assignment',
    heading: '',
  },
  users: [
    {
      username: 'joe@pegasystems.com',
      password: 'rules',
      img: 'avatar-1.jpg',
      company_name: '',
      name: 'Joe Smith',
      accountID: '',
      contactID: '',
      customerID: '',
      extraparam: '',
      dmm_context_data: '',
      pega_userid: 'jsmith',
      pega_pwd: 'rules',
      bill_pay: 164.8,
      load_by_default: true,
      hide_from_dropdown: false,
      show_opname: false,
      otp_send_to: '',
      accountdetails: [],
      accountpicker: [
        {
          img: "img/account-picker1.jpg",
          title: "Family Share 8GB",
          showbillpay: true,
          details: [
            {
              label: "Payment due",
              type: "currency",
              value: 164.80,
            },
            {
              label: "Due date",
              type: "duedate"
            }]
        },
        {
          title: "DataMax 800Mbs",
          showbillpay: true,
          details: [
            {
              label: "Payment due",
              type: "currency",
              value: 45.60,
            },
            {
              label: "Due date",
              type: "duedate"
            }]
        },
        {
          title: "Ultimate 300+ Channels",
          showbillpay: true,
          details: [
            {
              label: "Payment due",
              type: "currency",
              value: 90.00,
            },
            {
              label: "Due date",
              type: "duedate"
            }]
        },
      ],
      recentactivity: [
        {
          message: "Your last statement is ready to view",
        },
        {
          message: "Your payment has been processed",
        },
        {
          message: "Started online troubleshooting",
        },
        {
          message: "Reported connectivity issues",
        },
      ],
    },
    {
      username: 'mary@pegasystems.com',
      password: 'rules',
      img: 'avatar-2.jpg',
      company_name: '',
      name: 'Mary Taylor',
      accountID: '',
      contactID: '',
      customerID: '',
      extraparam: '',
      dmm_context_data: '',
      pega_userid: 'mtaylor',
      pega_pwd: 'rules',
      bill_pay: 164.8,
      load_by_default: false,
      hide_from_dropdown: false,
      show_opname: false,
      otp_send_to: '',
      accountdetails: [],
      accountpicker: [
        {
          img: "img/account-picker1.jpg",
          title: "Family Share 8GB",
          showbillpay: true,
          details: [
            {
              label: "Account balance",
              type: "currency",
              value: 164.80,
            },
            {
              label: "Statement balance",
              type: "currency",
              value: 193.27,
            },
            {
              label: "Due date",
              type: "duedate"
            }]
        },
        {
          title: "DataMax 800Mbs",
          showbillpay: true,
          details: [
            {
              label: "Account balance",
              type: "currency",
              value: 45.60,
            },
            {
              label: "Statement balance",
              type: "currency",
              value: 35.27,
            },
            {
              label: "Due date",
              type: "duedate"
            }]
        },
        {
          title: "Ultimate 300+ Channels",
          showbillpay: true,
          details: [
            {
              label: "Account balance",
              type: "currency",
              value: 90.00,
            },
            {
              label: "Statement balance",
              type: "currency",
              value: 90.00,
            },
            {
              label: "Due date",
              type: "duedate"
            }]
        },
      ],
      recentactivity: [
        {
          message: "Your last statement is ready to view",
        },
        {
          message: "Your payment has been processed",
        },
        {
          message: "Started online troubleshooting",
        },
        {
          message: "Reported connectivity issues",
        },
      ],
    },
  ],
  CustomEvents: [
    {
      CustomEventAction: "HighlightElement",
      CustomEventName: "Custom Event 1",
      ElementName: "",
      SendAcknowledgement: false,
      AcknowledgeOn: "After5Seconds"
    },
    {
      CustomEventAction: "HighlightElement",
      CustomEventName: "Custom Event 2",
      ElementName: "",
      SendAcknowledgement: false,
      AcknowledgeOn: "After5Seconds"
    },
    {
      CustomEventAction: "HighlightElement",
      CustomEventName: "Custom Event 3",
      ElementName: "",
      SendAcknowledgement: false,
      AcknowledgeOn: "After5Seconds"
    }
  ],
  pega_chat: {
    WCBConfigName: '',
    WebChatBotID: '',
    ApplicationName: '',
    MashupURL: '',
    ShowAsButton: true,
    EnableProActiveNotification: false,
    ResetLogout: false,
    ProActiveNotificationDismissTime: '',
    CoBrowseServerURL: '',
    CoBrowseToken: '',
    DMMURL: '',
    DMMID: 'pega-wm-chat',
    DMMSecret: '',
    DMMPrivateURL: 'https://5vtgqfsgzb.execute-api.us-east-1.amazonaws.com',
    DMMProactiveChatNewSessionTimeout: 0,
    DMMProactiveChatNewSessionCode: '5sonPage',
  },
  pega_marketing: {
    Host: '',
    Port: '',
    channel: 'Web',
    requestTimeout: 10000,
    replaceHomePageHeader: false,
    showAIOverlay: false,
    enableRTS: false,
    enableClickStream: false,
    enableMergeAccount: false,
    useCaptureByChannel: true,
    apiLevel: 'V2',
    contextName: 'Customer',
    showLoadingIndicator: false,
    appID: '',
    homePage: {
      containerName: 'TopOffers',
      placement: 'Hero,Tile,Tile,Tile',
      clickaction: 'Mashup',
      attributes: '',
    },
    accountPage: {
      containerName: 'TopOffers',
      placement: 'Tile',
      clickaction: 'Mashup',
      attributes: '',
      showSingleOffer: false,
    },
    phonePage: {
      containerName: 'TopOffers',
      placement: 'Tile',
      clickaction: 'Mashup',
      attributes: '',
    },
    offerPage: {
      containerName: 'TopOffers',
      placement: 'Hero,Tile,Tile,Tile',
      clickaction: 'Mashup',
      attributes: '',
    },
  },
};
