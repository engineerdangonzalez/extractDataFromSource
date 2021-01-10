const https = require('https');
const extractDataFromSource = require('./extractDataFromSource.js');


https.get('https://rickandmortyapi.com/api/character/?page=19', (resp) => {

    let defaultSource = '';

    resp.on('data', (chunk) => {
        defaultSource += chunk;
    });

    resp.on('end', () => {
        const newData = JSON.parse(defaultSource);
        extractDataFromSource(newData, { keys: ['episode', 'id', 'image', 'type'] });
    });

}).on('error', (err) => {
    console.log(err);
});