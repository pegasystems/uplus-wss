const setAuth = function setAuth(username, password) {
  let auth = '';
  if (username && password) {
    auth = btoa(`${username}:${password}`);
  } else {
    throw new Error('Set authentication failed.');
  }
  return auth;
};

const validateOTP = async function validateOTP(settings, referenceid, otp, auth) {
  if (otp === 'skip') return true;
  const headers = {
    Authorization: `Basic ${auth}`,
  };
  const apiurl = `${settings.url}/prweb/api/v1/authenticate/OTP/verify?OTPValue=${otp}&ReferenceID=${referenceid}`;
  const reqHeaders = {
    method: 'GET',
    headers,
  };
  const response = await fetch(apiurl, reqHeaders);
  if (response.ok) {
    const res = await response.json();
    if (res.Status === 'SUCCESS') return true;
  }
  return false;
};

const requestOTP = async function requestOTP(settings, auth, sendTo) {
  const result = {
    referenceID: '',
    isSuccess: false,
  };
  const context = Math.floor(Date.now() / 100);
  const headers = {
    Authorization: `Basic ${auth}`,
  };
  const sendMode = settings.sendMode;
  const apiurl = `${settings.url}/prweb/api/v1/authenticate/OTP/${sendMode}`;
  const reqHeaders = {
    method: 'POST',
    headers,
  };
  const data = {
    Context: `UplusWSSOtp-${context}`,
  };
  if (sendMode === 'email') {
    data.EmailSettings = {
      CorrespondenceName: settings.emailSettings.correspondenceName,
      EmailAccount: settings.emailSettings.emailAccount,
      Subject: settings.emailSettings.subject,
      ToAddress: sendTo,
      ValidateMaxAge: settings.emailSettings.validateMaxAge,
    };
  } else if (sendMode === 'sms') {
    data.SMSSettings = {
      ToPhoneNumber: sendTo,
      From: settings.smsSettings.from,
      SMSAccount: settings.smsSettings.account,
      Message: settings.smsSettings.message,
      ValidateMaxAge: settings.smsSettings.validateMaxAge,
    };
  }
  reqHeaders.body = JSON.stringify(data);
  const response = await fetch(apiurl, reqHeaders);
  if (response.ok) {
    const res = await response.json();
    if (res.Status === 'SUCCESS') {
      result.referenceID = res.ReferenceID;
      result.isSuccess = true;
    }
  }
  return result;
};

export {
  setAuth,
  validateOTP,
  requestOTP,
};
