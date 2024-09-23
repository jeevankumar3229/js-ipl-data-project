import fs from 'fs'
export default function readingData(){
    let matchesData,deliveriesData
    try{
        matchesData=JSON.parse(fs.readFileSync('./src/data/matches.json','utf-8'));
    }
    catch(Error){
        console.log(Error)
    }
    try{
        deliveriesData=JSON.parse(fs.readFileSync('./src/data/deliveries.json','utf-8'));
    }
    catch(Error){
        console.log(Error)
    }
    return matchesData
}