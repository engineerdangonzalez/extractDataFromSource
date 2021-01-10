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
    // if (!source && typeof source !== 'boolean') throw new Error('Invalid source data was provided');

    const { keys } = config;
    const newParams = {
        keys: Array.isArray(keys) ? keys : []
    };

    // source contains a primitive value
    if (typeof source !== 'object') {
        return source;
    }

    const isArray = Array.isArray(source);
    let extractedData = isArray ? [] : {};

    if (!isArray) { // Object
        for (const item in source) {
            if (newParams.keys.includes(item) || typeof source[item] === 'object') {
                const newSource = extractDataFromSource(source[item], newParams);
                if (typeof newSource !== 'object' || typeof newSource === 'object' && Object.keys(newSource).length > 0) {
                    extractedData[item] = newSource;
                }
            }
        }
    } else { // Array
        source.map((item, key) => {
            const extracted = extractDataFromSource(item, newParams);
            extractedData[key] = extracted;
        });
    }

    return extractedData;

}

module.exports = extractDataFromSource;