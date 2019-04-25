var settings = {
  i18n: {
    defaultlocale: "en",
    /* Set to 'browser' to use browser locale */
    languages: ["en"],
    showLangSwitch: false /* set to true to show the language switcher */
  },
  quicklinks: [{
      title: {
        "en": "File a claim",
        "fr": "Deposer une plainte"
      },
      objclass: "",
      url: "",
      startcase: "pyStartCase",
      application: "",
      icon: ""
    },
    {
      title: {
        "en": "Make a payment",
        "fr": "Faire un paiement"
      },
      objclass: "",
      url: "",
      startcase: "pyStartCase",
      application: "",
      icon: ""
    },
    {
      title: {
        "en": "Update billing",
        "fr": "Mettre a jour ses informations de paiment"
      },
      objclass: "",
      url: "",
      startcase: "pyStartCase",
      application: "",
      icon: ""
    },
    {
      title: {
        "en": "Proof of insurance",
        "fr": "Certificat d'assurance"
      },
      objclass: "",
      url: "",
      startcase: "pyStartCase",
      application: "",
      icon: ""
    },
    {
      title: {
        "en": "Update your profile",
        "fr": "Mettre a jour votre profil"
      },
      objclass: "",
      url: "",
      startcase: "pyStartCase",
      application: "",
      icon: ""
    },
  ],
  billpay: {
    title: {
      "en": "Bill pay",
    },
    objclass: "",
    url: "",
    startcase: "pyStartCase",
    application: ""
  },
  homeheroaction: {
    title: {
      "en": "Personalize your service",
    },
    objclass: "",
    url: "",
    startcase: "pyStartCase",
    application: "",
    pega_userid: "",
    pega_pwd: "",
  },
  users: [{
      username: "joe@pegasystems.com",
      password: "rules",
      img: "avatar-1.jpg",
      company_name: "ABC Corporation",
      name: "Joe Smith",
      pega_userid: "jsmith",
      pega_pwd: "rules",
      load_by_default: true,
      accounts: [{
          number: 543387972,
          name: "Demand deposit",
          id: 32984,
          previous_balance: 121923,
          current_balance: 133636,
        },
        {
          number: 458930220,
          name: "Commercial checking",
          id: 54920,
          previous_balance: 3939101,
          current_balance: 3940491,
        },
        {
          number: 598202030,
          name: "Zero Balance",
          id: 54030,
          previous_balance: 130010,
          current_balance: 131314,
        },
        {
          number: 769382093,
          name: "Sweep",
          id: 64024,
          previous_balance: 1040019,
          current_balance: 1043243,
        },
        {
          number: 3289199130,
          name: "ForeignExchange",
          id: 53429,
          previous_balance: 101224291,
          current_balance: 101234957,
        }
      ]
    },
    {
      username: "mary@pegasystems.com",
      password: "rules",
      img: "avatar-2.jpg",
      company_name: "CKY investments",
      name: "Mary Taylor",
      pega_userid: "mtaylor",
      pega_pwd: "rules",
      load_by_default: false,
      accounts: [{
          number: 6173782492,
          name: "Interest only checkin",
          id: 12545,
          previous_balance: 86450,
          current_balance: 89546.32,
        },
        {
          number: 2878429003,
          name: "CD",
          id: 54920,
          previous_balance: 523421.34,
          current_balance: 534561.34,
        },
      ]
    },
  ],
  pega_chat: {
    WCBConfigName: "",
    WebChatBotID: "",
    ApplicationName: "",
    MashupURL: "",
    ContactID: "",
    AccountNumber: "",
    UserName: "",
  },
  pega_marketing: {
    Host: "",
    Port: ""
  }
};