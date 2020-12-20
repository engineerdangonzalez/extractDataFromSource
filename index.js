const { defaultSource } = require('./source.js');

function extractDataFromSource(source, params = {}) {
  const newParams = {defaultKeys: ['id', 'userId']};
  let extractedData = null;
  
  // source contains a primitive value
  if(typeof source !== 'object') {
    return source;
  }

  const { defaultKeys } = newParams;
  const isArray = Array.isArray(source);
  extractedData = isArray ? [] : {};
  
  const arraySource = isArray ? source : Object.keys(source); 

  // Iterates over source
  arraySource.map((item, key) => {
    if(!isArray && !defaultKeys.includes(item)) {
      return;
    }
    extractedData[isArray ? key : item] = extractDataFromSource(isArray ? item : source[item], newParams);
  });
  
  return extractedData;
}
console.log(extractDataFromSource(defaultSource, {}));
