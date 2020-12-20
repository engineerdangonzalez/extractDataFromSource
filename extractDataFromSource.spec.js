const { defaultSource } = require('./source.js');
const extractDataFromSource = require('./extractDataFromSource.js');

describe('Extracting data from source', () => {
    test('Return an array from an array source', () => {
        const extractedData = extractDataFromSource(defaultSource, { requiredKeys: ['userId'] });
        expect(extractedData).toBeTruthy();
    });
    test('Return error when source is empty', () => {
        expect(() => extractDataFromSource()).toThrow('Invalid source data was provided');
    });
});