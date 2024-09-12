import matchesPerYear from "../../server/1-matches-per-year.js";
import fs from "fs";
let output=matchesPerYear()
let jsondata=JSON.stringify(output,null,2)
fs.writeFile('./src/public/output/matchesPerYear.json',jsondata,(err)=>{if(err)console.log(err.message)});