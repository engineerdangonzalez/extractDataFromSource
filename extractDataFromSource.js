/**
 * extractDataFromSource v1.0.0
 * 
 * @author Daniel González <engineerdangonzalez@gmail.com>
 *
 * Extract only desired data from a source, wich can be an
 * array or an object
 * 
 * @param {array | object} source - Represents source data
 * @param {object} config - It's the config object
 */
function extractDataFromSource(source, config = {}) {

    // A source data must be provided
    if (!source && typeof source !== 'boolean') throw new Error('Invalid source data was provided');

    const { defaultKeys } = config;
    const newParams = { defaultKeys: Array.isArray(defaultKeys) ? defaultKeys : [] };
    let extractedData = null;

    // source contains a primitive value
    if (typeof source !== 'object') {
        return source;
    }
    const isArray = Array.isArray(source);
    extractedData = isArray ? [] : {};

    const arraySource = isArray ? source : Object.keys(source);

    // Iterates over source
    arraySource.map((item, key) => {
        if (isArray || !isArray && newParams.defaultKeys.includes(item) || !isArray && newParams.defaultKeys.length === 0) {
            extractedData[isArray ? key : item] = extractDataFromSource(isArray ? item : source[item], newParams);
        }
    });

    return extractedData;
}

module.exports = extractDataFromSource;