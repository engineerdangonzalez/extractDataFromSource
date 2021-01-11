const axios = require('axios');
const extractDataFromSource = require('./extractDataFromSource.js');


const getFataFromSource = async (source = '') => {
    return await axios.get(source);
}

(async () => {
    const response = await getFataFromSource('https://rickandmortyapi.com/api/character/?page=19');
    console.log(extractDataFromSource(response.data, { keys: ['episode', 'id', 'image', 'type', 'name'] }));
})();
