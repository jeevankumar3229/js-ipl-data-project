import matchesPerYearPerTeam from "../../server/2-matches-per-year-per-team.js";
import fs from "fs";
let output=matchesPerYearPerTeam()
let jsondata=JSON.stringify(output,null,2)
fs.writeFile('./src/public/output/matchesPerYearPerTeam.json',jsondata,(err)=>{if(err)console.log(err.message)});