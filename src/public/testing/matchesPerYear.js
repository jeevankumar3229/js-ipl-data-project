import matchesPerYear from "../../server/1-matches-per-year.js";
import fs from "fs";
let matchesData=JSON.parse(fs.readFileSync('./src/data/matches.json','utf-8',(err,data)=>{if(err) console.log("Error")}));
let output=matchesPerYear(matchesData)
let jsondata=JSON.stringify(output,null,2)
try{
    fs.writeFile('./src/public/output/matchesPerYear.json',jsondata,(err)=>{if(err)console.log(err.message)});
}
catch(Error){
    console.log(Error)
}