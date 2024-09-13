import calculateEconomicalBowlers from "../../server/4-top-ten-economical-bowlers.js";
import fs from "fs";
let output= calculateEconomicalBowlers()
let jsondata=JSON.stringify(output,null,2)
fs.writeFile('./src/public/output/economicalBowlers.json',jsondata,(err)=>{if(err)console.log(err.message)});
