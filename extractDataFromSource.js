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

    const { keys, includeKeys } = config;
    const newParams = {
        keys: Array.isArray(keys) ? keys : [],
        includeKeys: typeof includeKeys === 'boolean' ? includeKeys : true
    };
    const inclusionOrExclusion = (includeKeys, eval) => (includeKeys ? eval : !eval);
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
        if (isArray || !isArray && inclusionOrExclusion(newParams.includeKeys, newParams.keys.includes(item)) || !isArray && newParams.keys.length === 0) {
            extractedData[isArray ? key : item] = extractDataFromSource(isArray ? item : source[item], newParams);
        }
    });

    return extractedData;
}

module.exports = extractDataFromSource;