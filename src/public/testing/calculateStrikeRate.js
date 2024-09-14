import calculateStrikeRate from "../../server/7-strike-rate-of-batsman.js";
import fs from "fs";
let output= calculateStrikeRate()
let jsondata=JSON.stringify(output,null,2)
fs.writeFile('./src/public/output/batsmanStrikeRate.json',jsondata,(err)=>{if(err)console.log(err.message)});