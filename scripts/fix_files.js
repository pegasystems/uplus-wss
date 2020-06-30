const replace = require('replace-in-file');

const optionsFile1 = {
  files: './docs/service-worker.js',
  from: /..\/precache-manifest/g,
  to: './precache-manifest',
};
replace(optionsFile1)
  .then((results) => {
    console.log('Replacement results:', results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });

const optionsFile2 = {
  files: './docs/precache-manifest.*',
  from: /: "../g,
  to: ': ".',
};
replace(optionsFile2)
  .then((results) => {
    console.log('Replacement results:', results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
