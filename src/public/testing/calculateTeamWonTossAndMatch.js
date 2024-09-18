import calculateTeamWonTossAndMatch from "../../server/5-each-team-won-toss-and-game.js";
import fs from "fs";
let matchesData=JSON.parse(fs.readFileSync('./src/data/matches.json','utf-8',(err,data)=>{if(err) console.log("Error")}));
let output= calculateTeamWonTossAndMatch(matchesData)
let jsondata=JSON.stringify(output,null,2)
try{
    fs.writeFileSync('./src/public/output/teamWonTossAndMatch.json',jsondata);
}
catch(Error){
    console.log(Error)
}