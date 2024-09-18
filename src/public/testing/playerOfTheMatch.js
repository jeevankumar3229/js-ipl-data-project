import playerOfTheMatch from "../../server/6-highest-no-of-times-player-of-the-match.js";
import fs from "fs";
let matchesData=JSON.parse(fs.readFileSync('./src/data/matches.json','utf-8',(err,data)=>{if(err) console.log("Error")}));
let output= playerOfTheMatch(matchesData)
let jsondata=JSON.stringify(output,null,2)
try{
    fs.writeFile('./src/public/output/playerOfTheMatch.json',jsondata,(err)=>{if(err)console.log(err.message)});
}
catch(Error){
    console.log(Error)
}