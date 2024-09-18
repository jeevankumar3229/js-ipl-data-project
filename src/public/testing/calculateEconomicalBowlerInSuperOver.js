import calculateEconomicalBowlerInSuperOver from "../../server/9-bowler-with-best-economy-in-superover.js";
import fs from "fs";
let matchesData=JSON.parse(fs.readFileSync('./src/data/matches.json','utf-8',(err)=>{if(err) console.log("Error")}));
let deliveriesData=JSON.parse(fs.readFileSync('./src/data/deliveries.json','utf-8',(err)=>{if(err) console.log("Error")}));
let output= calculateEconomicalBowlerInSuperOver(matchesData,deliveriesData)
let jsondata=JSON.stringify(output,null,2)
try{
    fs.writeFileSync('./src/public/output/economicalBowlersInSuperOver.json',jsondata);
}
catch(Error){
    console.log(Error)
}