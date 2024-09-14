import calculateEconomicalBowlerInSuperOver from "../../server/9-bowler-with-best-economy-in-superover.js";
import fs from "fs";
let output= calculateEconomicalBowlerInSuperOver()
let jsondata=JSON.stringify(output,null,2)
fs.writeFile('./src/public/output/economicalBowlersInSuperOver.json',jsondata,(err)=>{if(err)console.log(err.message)});