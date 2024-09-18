import calculateEconomicalBowlers from "../../server/4-top-ten-economical-bowlers.js";
import fs from "fs";
let matchesData=JSON.parse(fs.readFileSync('./src/data/matches.json','utf-8',(err)=>{if(err) console.log("Error")}));
let deliveriesData=JSON.parse(fs.readFileSync('./src/data/deliveries.json','utf-8',(err)=>{if(err) console.log("Error")}));
let output= calculateEconomicalBowlers(matchesData,deliveriesData)
try{
    fs.writeFileSync('./src/public/output/economicalBowlers.json',JSON.stringify(output,null,2))
}
catch(Error){
    console.log(Error)
}
