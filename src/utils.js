const setObjectFromRef = (content, path, value) => {
  if (typeof path !== 'string') {
    return;
  }
  const keys = path.split('.');
  let retObj = content;
  for (const i in keys) {
    let el = keys[i];
    const startParens = el.indexOf('(');
    if (startParens === -1) {
      // regular property - just add it to retObj
      if (i < keys.length - 1) {
        if (typeof retObj[el] === 'undefined') {
          retObj[el] = {};
        }
      } else {
        retObj[el] = value;
      }
      retObj = retObj[el];
    } else {
      const idx = el.substring(startParens + 1, el.length - 1);
      el = el.substring(0, startParens);
      if (typeof retObj[el] === 'undefined') {
        retObj[el] = [];
      }
      for (let j = retObj[el].length; j < idx; j++) {
        retObj[el].push({});
      }
      retObj = retObj[el][idx - 1];
    }
  }
};

export default setObjectFromRef;
