import csv from'csvtojson'
import fs from 'fs'

function convertingCsvToJson(){
    let csvFilePath;
    let jsonFilePath;

    csvFilePath = './src/data/matches.csv';
    jsonFilePath= './src/data/matches.json';
    //reading csv file and writing data in json format to jsonfile
    csv().fromFile(csvFilePath).then((jsonObj) => {
        try{
            fs.writeFileSync(jsonFilePath, JSON.stringify(jsonObj,null,2));
        }
        catch(Error){
            console.log(Error)
        }
    });


    let csvFilePath1='./src/data/deliveries.csv'
    let jsonFilePath1='./src/data/deliveries.json'
    //reading csv file and writing data in json format to jsonfile
    csv().fromFile(csvFilePath1).then((jsonObj) => {
        try{
            fs.writeFileSync(jsonFilePath1, JSON.stringify(jsonObj,null,2));
        }
        catch(Error){
            console.log(Error)
        }
    });

}
export {convertingCsvToJson}

