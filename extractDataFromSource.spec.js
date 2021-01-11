const axios = require('axios');
const extractDataFromSource = require('./extractDataFromSource.js');

describe('Extracting data from source', () => {
    let response;
    it('Do request to get data from service', async () => {
        response = await axios.get('https://rickandmortyapi.com/api/character/?page=19');
    })
    test('Return an array from an array source', () => {
        const extractedData = extractDataFromSource(response.data, { keys: ['episode', 'id', 'image', 'type', 'name'] });
        expect(extractedData).toBeTruthy();
    });
    test('Return data by don\'t allow empty values', () => {
        const extractedData = extractDataFromSource(response.data, { keys: ['episode', 'id', 'image', 'type', 'name'], allowEmptyValues: false });
        expect(extractedData).toBeTruthy();
    });
    test('Return single value when primitive source is given', () => {
        const dataSource = 'lorem ipsum dolor sit amet';
        const extractedData = extractDataFromSource(dataSource);
        expect(extractedData).toBe(dataSource);
    });

});