/**
 *
 * @param {array | object} source - Represents source data
 * @param {object} param1 - It's the config object
 */
function extractDataFromSource(source, config = {}) {

    if (!source && typeof source !== 'boolean') throw new Error('Invalid source data was provided');

    const { requiredKeys } = config;
    const newParams = { defaultKeys: ['id'].concat(requiredKeys) };
    let extractedData = null;

    // source contains a primitive value
    if (typeof source !== 'object') {
        return source;
    }

    const { defaultKeys } = newParams;
    const isArray = Array.isArray(source);
    extractedData = isArray ? [] : {};

    const arraySource = isArray ? source : Object.keys(source);

    // Iterates over source
    arraySource.map((item, key) => {
        if (!isArray && !defaultKeys.includes(item)) {
            return;
        }
        extractedData[isArray ? key : item] = extractDataFromSource(isArray ? item : source[item], newParams);
    });

    return extractedData;
}

module.exports = extractDataFromSource;