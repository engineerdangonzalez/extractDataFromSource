const axios = require('axios');
const extractDataFromSource = require('./extractDataFromSource.js');


axios.get('https://rickandmortyapi.com/api/character/?page=19').then((response) => {
    const newData = response.data;
    console.log(extractDataFromSource(newData, { keys: ['episode', 'id', 'image', 'type', 'name'] }));
}).catch(function (error) {
    console.log(error);
});
