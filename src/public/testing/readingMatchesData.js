import fs from 'fs'
export default function readingData(){
    let matchesData
    //reading matches Data
    try{
        matchesData=JSON.parse(fs.readFileSync('./src/data/matches.json','utf-8'));
    }
    catch(Error){
        console.log(Error)
    }
    return matchesData
}