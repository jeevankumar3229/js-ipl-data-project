import matchesPerYearPerTeam from "../../server/2-matches-per-year-per-team.js";
import fs from "fs";
let matchesData=JSON.parse(fs.readFileSync('./src/data/matches.json','utf-8',(err)=>{if(err) console.log("Error")}));
let output=matchesPerYearPerTeam(matchesData)
let jsondata=JSON.stringify(output,null,2)
fs.writeFile('./src/public/output/matchesPerYearPerTeam.json',jsondata,(err)=>{if(err)console.log(err.message)});