const replace = require("replace-in-file");

const optionsFile1 = {
  files: "./docs/*/index.html",
  from: [
    /\/auto\//g,
    /\/commercial_bank\//g,
    /\/comms\//g,
    /\/gov\//g,
    /\/health_care\//g,
    /\/health_payer\//g,
    /\/health_pharma\//g,
    /\/health_provider\//g,
    /\/insurance\//g,
    /\/manufacturing\//g,
    /\/retail_bank\//g,
    /\/wealth\//g,
  ],
  to: "./",
};
const optionsFile2 = {
  files: "./docs/**/index.html",
  from: /"\/assets\//g,
  to: '"../assets/',
};

replace.sync(optionsFile1);
replace.sync(optionsFile2);
