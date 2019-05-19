module.exports = {
  outputDir: 'docs',
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '../' : '/',
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
    },
  },
  pages: {
    commercial_bank: {
      entry: 'src/main.js',
      template: 'public/commercial_bank/index.html',
      filename: 'commercial_bank/index.html',
    },
    commercial_bank_generic: {
      entry: 'src/main.js',
      template: 'public/commercial_bank/index.html',
      filename: 'commercial_bank/404.html',
    },
    commercial_bankaccount: {
      entry: 'src/main.js',
      template: 'public/commercial_bank/index.html',
      filename: 'commercial_bank/account.html',
    },
    commercial_banksettings: {
      entry: 'src/settings.js',
      template: 'public/commercial_bank/index.html',
      filename: 'commercial_bank/settings.html',
    },
    commercial_bankoffer: {
      entry: 'src/offer.js',
      template: 'public/commercial_bank/index.html',
      filename: 'commercial_bank/offer.html',
    },
    commercial_banklanding: {
      entry: 'src/landing.js',
      template: 'public/commercial_bank/index.html',
      filename: 'commercial_bank/landingpage.html',
    },
    retail_bank: {
      entry: 'src/main.js',
      template: 'public/retail_bank/index.html',
      filename: 'retail_bank/index.html',
    },
    retail_bankaccount: {
      entry: 'src/main.js',
      template: 'public/retail_bank/index.html',
      filename: 'retail_bank/account.html',
    },
    retail_banksettings: {
      entry: 'src/settings.js',
      template: 'public/retail_bank/index.html',
      filename: 'retail_bank/settings.html',
    },
    retail_bankoffer: {
      entry: 'src/offer.js',
      template: 'public/retail_bank/index.html',
      filename: 'retail_bank/offer.html',
    },
    retail_banklanding: {
      entry: 'src/landing.js',
      template: 'public/retail_bank/index.html',
      filename: 'retail_bank/landingpage.html',
    },
    comms: {
      entry: 'src/main.js',
      template: 'public/comms/index.html',
      filename: 'comms/index.html',
    },
    commsaccount: {
      entry: 'src/main.js',
      template: 'public/comms/index.html',
      filename: 'comms/account.html',
    },
    commssettings: {
      entry: 'src/settings.js',
      template: 'public/comms/index.html',
      filename: 'comms/settings.html',
    },
    commsoffer: {
      entry: 'src/offer.js',
      template: 'public/comms/index.html',
      filename: 'comms/offer.html',
    },
    commslanding: {
      entry: 'src/landing.js',
      template: 'public/comms/index.html',
      filename: 'comms/landingpage.html',
    },
    health_payer: {
      entry: 'src/main.js',
      template: 'public/health_payer/index.html',
      filename: 'health_payer/index.html',
    },
    health_payeraccount: {
      entry: 'src/main.js',
      template: 'public/health_payer/index.html',
      filename: 'health_payer/account.html',
    },
    health_payer_settings: {
      entry: 'src/settings.js',
      template: 'public/health_payer/index.html',
      filename: 'health_payer/settings.html',
    },
    health_payer_offer: {
      entry: 'src/offer.js',
      template: 'public/health_payer/index.html',
      filename: 'health_payer/offer.html',
    },
    health_payer_landing: {
      entry: 'src/landing.js',
      template: 'public/health_payer/index.html',
      filename: 'health_payer/landingpage.html',
    },
    health_provider: {
      entry: 'src/main.js',
      template: 'public/health_provider/index.html',
      filename: 'health_provider/index.html',
    },
    health_provideraccount: {
      entry: 'src/main.js',
      template: 'public/health_provider/index.html',
      filename: 'health_provider/account.html',
    },
    health_provider_settings: {
      entry: 'src/settings.js',
      template: 'public/health_provider/index.html',
      filename: 'health_provider/settings.html',
    },
    health_provider_offer: {
      entry: 'src/offer.js',
      template: 'public/health_provider/index.html',
      filename: 'health_provider/offer.html',
    },
    health_provider_landing: {
      entry: 'src/landing.js',
      template: 'public/health_provider/index.html',
      filename: 'health_provider/landingpage.html',
    },
    gov: {
      entry: 'src/main.js',
      template: 'public/gov/index.html',
      filename: 'gov/index.html',
    },
    govaccount: {
      entry: 'src/main.js',
      template: 'public/gov/index.html',
      filename: 'gov/account.html',
    },
    govsettings: {
      entry: 'src/settings.js',
      template: 'public/gov/index.html',
      filename: 'gov/settings.html',
    },
    govoffer: {
      entry: 'src/offer.js',
      template: 'public/gov/index.html',
      filename: 'gov/offer.html',
    },
    govlanding: {
      entry: 'src/landing.js',
      template: 'public/gov/index.html',
      filename: 'gov/landingpage.html',
    },
    insurance: {
      entry: 'src/main.js',
      template: 'public/insurance/index.html',
      filename: 'insurance/index.html',
    },
    insuranceaccount: {
      entry: 'src/main.js',
      template: 'public/insurance/index.html',
      filename: 'insurance/account.html',
    },
    insurancesettings: {
      entry: 'src/settings.js',
      template: 'public/insurance/index.html',
      filename: 'insurance/settings.html',
    },
    insuranceoffer: {
      entry: 'src/offer.js',
      template: 'public/insurance/index.html',
      filename: 'insurance/offer.html',
    },
    insurancelanding: {
      entry: 'src/landing.js',
      template: 'public/insurance/index.html',
      filename: 'insurance/landingpage.html',
    },
    manufacturing: {
      entry: 'src/main.js',
      template: 'public/manufacturing/index.html',
      filename: 'manufacturing/index.html',
    },
    manufacturingaccount: {
      entry: 'src/main.js',
      template: 'public/manufacturing/index.html',
      filename: 'manufacturing/account.html',
    },
    manufacturingsettings: {
      entry: 'src/settings.js',
      template: 'public/manufacturing/index.html',
      filename: 'manufacturing/settings.html',
    },
    manufacturingoffer: {
      entry: 'src/offer.js',
      template: 'public/manufacturing/index.html',
      filename: 'manufacturing/offer.html',
    },
    manufacturinglanding: {
      entry: 'src/landing.js',
      template: 'public/manufacturing/index.html',
      filename: 'manufacturing/landingpage.html',
    },
  },
};
