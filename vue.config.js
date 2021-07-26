const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  outputDir: 'docs',
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '../' : '/',
  configureWebpack: {
    plugins: [
      new ImageminPlugin({
        disable: process.env.NODE_ENV !== 'production',
      }),
    ],
  },
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
      exclude: [/\.jpg$/, /\.png$/],
    },
  },
  pages: {
    commercial_bank: {
      entry: 'src/main.js',
      template: 'public/commercial_bank/index.html',
      filename: 'commercial_bank/index.html',
      title: 'U+ Commercial Bank',
      chunks: ['chunk-vendors', 'chunk-common', 'commercial_bank'],
    },
    retail_bank: {
      entry: 'src/main.js',
      template: 'public/retail_bank/index.html',
      filename: 'retail_bank/index.html',
      title: 'U+ Retail Bank',
      chunks: ['chunk-vendors', 'chunk-common', 'retail_bank'],
    },
    comms: {
      entry: 'src/main.js',
      template: 'public/comms/index.html',
      filename: 'comms/index.html',
      title: 'U+ Comms',
      chunks: ['chunk-vendors', 'chunk-common', 'comms'],
    },
    health_payer: {
      entry: 'src/main.js',
      template: 'public/health_payer/index.html',
      filename: 'health_payer/index.html',
      title: 'U+ Health',
      chunks: ['chunk-vendors', 'chunk-common', 'health_payer'],
    },
    health_provider: {
      entry: 'src/main.js',
      template: 'public/health_provider/index.html',
      filename: 'health_provider/index.html',
      title: 'U+ Health',
      chunks: ['chunk-vendors', 'chunk-common', 'health_provider'],
    },
    health_care: {
      entry: 'src/main.js',
      template: 'public/health_care/index.html',
      filename: 'health_care/index.html',
      title: 'U+ Care',
      chunks: ['chunk-vendors', 'chunk-common', 'health_care'],
    },
    health_pharma: {
      entry: 'src/main.js',
      template: 'public/health_pharma/index.html',
      filename: 'health_pharma/index.html',
      title: 'U+ Pharma',
      chunks: ['chunk-vendors', 'chunk-common', 'health_pharma'],
    },
    gov: {
      entry: 'src/main.js',
      template: 'public/gov/index.html',
      filename: 'gov/index.html',
      title: 'U+ Gov',
      chunks: ['chunk-vendors', 'chunk-common', 'gov'],
    },
    insurance: {
      entry: 'src/main.js',
      template: 'public/insurance/index.html',
      filename: 'insurance/index.html',
      title: 'U+ Insurance',
      chunks: ['chunk-vendors', 'chunk-common', 'insurance'],
    },
    manufacturing: {
      entry: 'src/main.js',
      template: 'public/manufacturing/index.html',
      filename: 'manufacturing/index.html',
      title: 'U+ Manufacturing',
      chunks: ['chunk-vendors', 'chunk-common', 'manufacturing'],
    },
    auto: {
      entry: 'src/main.js',
      template: 'public/auto/index.html',
      filename: 'auto/index.html',
      title: 'U+ Auto',
      chunks: ['chunk-vendors', 'chunk-common', 'auto'],
    },
    wealth: {
      entry: 'src/main.js',
      template: 'public/wealth/index.html',
      filename: 'wealth/index.html',
      title: 'U+ Wealth',
      chunks: ['chunk-vendors', 'chunk-common', 'auto'],
    },
  },
};
