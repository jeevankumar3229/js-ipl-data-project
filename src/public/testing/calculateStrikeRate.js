import calculateStrikeRate from "../../server/7-strike-rate-of-batsman.js";
import fs from "fs";
let matchesData=JSON.parse(fs.readFileSync('./src/data/matches.json','utf-8',(err)=>{if(err) console.log("Error")}));
let deliveriesData=JSON.parse(fs.readFileSync('./src/data/deliveries.json','utf-8',(err)=>{if(err) console.log("Error")}));
let output= calculateStrikeRate(matchesData,deliveriesData)
let jsondata=JSON.stringify(output,null,2)
try{
    fs.writeFileSync('./src/public/output/batsmanStrikeRate.json',jsondata);
}
catch(Error){
    console.log(Error)
}