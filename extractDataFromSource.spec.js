const { defaultSource } = require('./source.js');
const extractDataFromSource = require('./extractDataFromSource.js');

describe('Extracting data from source', () => {
    test('Return an array from an array source', () => {
        const extractedData = extractDataFromSource(defaultSource);
        expect(extractedData).toBeTruthy();
    });
});