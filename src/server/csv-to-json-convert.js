const csv = require('csvtojson');
const fs = require('fs');
let csvFilePath;
let jsonFilePath;

csvFilePath = './src/data/matches.csv';
jsonFilePath= './src/data/matches.json';
csv().fromFile(csvFilePath).then((jsonObj) => {
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonObj,null,2));
});


csvFilePath1='./src/data/deliveries.csv'
jsonFilePath1='./src/data/deliveries.json'
csv().fromFile(csvFilePath1).then((jsonObj) => {
    fs.writeFileSync(jsonFilePath1, JSON.stringify(jsonObj,null,2));
});

