window.settings = {
  "i18n": {
    "defaultlocale": "en",
    "languages": ["en"],
    "showLangSwitch": false
  },
  "quicklinks": [{
    "title": {
      "en": "Contact Relationship Team",
      "fr": "Deposer une plainte"
    },
    "action": "createNewWork",
    "actionparam": "",
    "objclass": "",
    "url": "",
    "startcase": "pyStartCase",
    "application": "",
    "icon": ""
  }, {
    "title": {
      "en": "Create Inquiry",
      "fr": "Faire un paiement"
    },
    "action": "createNewWork",
    "actionparam": "",
    "objclass": "PegaFS-SCM-Work-PaymentInquiry",
    "url": "https://fspw19commercialserviceexcellence.pegatsdemo.com/prweb/app/PegaCSFSSelfService_8129/",
    "startcase": "pyStartCase",
    "application": "PegaCSFSSelfService",
    "icon": "pi-star",
    "extraparam": ""
  }, {
    "title": {
      "en": "Manage Entitlements",
      "fr": "Mettre a jour ses informations de paiment"
    },
    "action": "createNewWork",
    "actionparam": "",
    "objclass": "",
    "url": "",
    "startcase": "pyStartCase",
    "application": "",
    "icon": ""
  }, {
    "title": {
      "en": "Perform Reconcillation",
      "fr": "Certificat d'assurance"
    },
    "action": "createNewWork",
    "actionparam": "",
    "objclass": "",
    "url": "",
    "startcase": "pyStartCase",
    "application": "",
    "icon": ""
  }, {
    "title": {
      "en": "Manage Notifications",
      "fr": "Mettre a jour votre profil"
    },
    "action": "createNewWork",
    "actionparam": "",
    "objclass": "",
    "url": "",
    "startcase": "pyStartCase",
    "application": "",
    "icon": ""
  }],
  "billpay": {
    "action": "createNewWork",
    "actionparam": "",
    "objclass": "",
    "url": "",
    "startcase": "pyStartCase",
    "application": "",
    "hidebillpay": false
  },
  "todo": {
    "action": "display",
    "actionparam": "pyToDoList",
    "objclass": "Data-Portal",
    "url": "https://fspw19commercialserviceexcellence.pegatsdemo.com/prweb/app/PegaCSFSSelfService_3511/",
    "startcase": "pyStartCase",
    "application": "PegaCSFSSelfService",
    "hideactivity": false
  },
  "homeheroaction": {
    "action": "createNewWork",
    "actionparam": "",
    "objclass": "",
    "url": "",
    "startcase": "pyStartCase",
    "application": "",
    "pega_userid": "",
    "pega_pwd": ""
  },
  "users": [{
    "username": "donnashelton918@gmail.com",
    "password": "rules",
    "img": "avatar-2.jpg",
    "company_name": "ABC Technologies",
    "name": "Donna Shelton",
    "pega_userid": "donnashelton@abc.com",
    "pega_pwd": "install12345!",
    "load_by_default": true,
    "accountID": "72000000",
    "contactID": "1111111013",
    "accounts": [{
      "number": "****0000",
      "name": "Disbursement Account",
      "type": "Zero balance",
      "balance": 300150.19
    }, {
      "number": "****0100",
      "name": "Operating Account",
      "type": "DDA",
      "balance": 1335000.62
    }, {
      "number": "****0300",
      "name": "Customer Payment Account",
      "type": "Sweep",
      "balance": 43921.82
    }],
    "investmentaccounts": [{
      "number": "***3415-100",
      "name": "Enhanced Commodity fund",
      "type": "High Yield Investment",
      "trend": "green",
      "trendvalue": ".06",
      "balance": 106210093.12
    }, {
      "number": "***4512-100",
      "name": "CD90",
      "type": "Time Deposit, 90 day",
      "trend": "red",
      "trendvalue": ".03",
      "balance": 10006591.96
    }, {
      "number": "***5213-100",
      "name": "CD180",
      "type": "Time Deposit, 6 months",
      "trend": "green",
      "trendvalue": ".01",
      "balance": 25000180.34
    }],
    "customerID": "PEGASAFS-WORK-CONTACT CON-1006",
    "extraparam": "",
    "billpay": 164.8
  }],
  "keyrates": [{
    "name": "keyrates_treasure_bill",
    "trend": "red",
    "current": 2.43,
    "high": 2.67,
    "low": 1.75
  }, {
    "name": "keyrates_commercial_paper",
    "trend": "green",
    "current": 2.47,
    "high": 2.78,
    "low": 1.99
  }, {
    "name": "keyrates_federal_funds",
    "trend": "green",
    "current": 2.41,
    "high": 2.42,
    "low": 1.69
  }, {
    "name": "keyrates_libor",
    "trend": "red",
    "current": 2.6,
    "high": 2.61,
    "low": 2.54
  }],
  "pega_chat": {
    "WCBConfigName": "",
    "WebChatBotID": "",
    "ApplicationName": "",
    "MashupURL": "",
    "ContactID": "",
    "AccountNumber": "",
    "UserName": "",
    "CoBrowseServerURL": "",
    "CoBrowseToken": "",
    "SSAConfigName": ""
  },
  "pega_marketing": {
    "Host": "https://fspw19commercialserviceexcellence.pegatsdemo.com",
    "Port": "",
    "homePage": {
      "containerName": "TopOffers",
      "placement": "Hero,Tile,Tile,Tile",
      "clickaction": "Mashup"
    },
    "accountPage": {
      "containerName": "TopOffers",
      "placement": "Tile",
      "clickaction": "Mashup"
    },
    "phonePage": {
      "containerName": "TopOffers",
      "placement": "Tile",
      "clickaction": "Mashup"
    },
    "offerPage": {
      "containerName": "TopOffers",
      "placement": "Hero,Tile,Tile,Tile",
      "clickaction": "Mashup"
    },
    "replaceHomePageHeader": false,
    "showAIOverlay": false
  },
  "kmhelp": {
    "action": "display",
    "actionparam": "KMHelpSitePortal",
    "objclass": "Data-Portal",
    "url": "",
    "startcase": "pyStartCase",
    "application": "",
    "extraparam": ""
  },
  "offeraction": {
    "action": "createNewWork",
    "actionparam": "",
    "objclass": "",
    "url": "",
    "startcase": "pyStartCase",
    "application": "",
    "pega_userid": "",
    "pega_pwd": "",
    "extraparam": ""
  }
}
