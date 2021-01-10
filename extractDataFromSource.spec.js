const axios = require('axios');
const extractDataFromSource = require('./extractDataFromSource.js');

describe('Extracting data from source', () => {
    test('Return an array from an array source', () => {
        axios.get('https://rickandmortyapi.com/api/character/?page=19').then((response) => {
            const extractedData = extractDataFromSource(response.data, { keys: ['episode', 'id', 'image', 'type', 'name'] });
            expect(extractedData).toBeTruthy();
        }).catch(function (error) {
            console.log(error);
        });
    });
    test('Return error when source is empty', () => {
        expect(() => extractDataFromSource()).toThrow('Invalid source data was provided');
    });
});