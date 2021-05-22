import CryptoJS from 'crypto-js';

function base64url(source) {
  // Encode in classical base64
  let encodedSource = CryptoJS.enc.Base64.stringify(source);

  // Remove padding equal characters
  encodedSource = encodedSource.replace(/=+$/, '');

  // Replace characters according to base64url specifications
  encodedSource = encodedSource.replace(/\+/g, '-');
  encodedSource = encodedSource.replace(/\//g, '_');

  return encodedSource;
}

const generateJWTKey = (payload, secret) => {
  const header = {
    alg: 'HS256',
    typ: 'JWT',
  };

  const stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
  const encodedHeader = base64url(stringifiedHeader);
  const stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(payload));
  const encodedData = base64url(stringifiedData);

  const token = `${encodedHeader}.${encodedData}`;

  let signature = CryptoJS.HmacSHA256(token, secret);
  signature = base64url(signature);

  const signedToken = `${token}.${signature}`;
  return signedToken;
};

export default generateJWTKey;
