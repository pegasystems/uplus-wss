import { replaceInFileSync } from 'replace-in-file';

const optionsFile1 = {
  files: './docs/*/index.html',
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
    /\/travel\//g,
    /\/energy\//g,
  ],
  to: './',
};

const optionsFile2 = {
  files: './docs/**/index.html',
  from: /"\/assets\//g,
  to: '"../assets/',
};

try {
  replaceInFileSync(optionsFile1);
  replaceInFileSync(optionsFile2);
} catch (error) {
  console.error('Error occurred:', error);
}
