import fs from 'fs'
export default function readingDeliveriesData(){
    let deliveriesData
    //readind deliveries data
    try{
        deliveriesData=JSON.parse(fs.readFileSync('./src/data/deliveries.json','utf-8'));
    }
    catch(Error){
        console.log(Error)
    }
    return deliveriesData
}