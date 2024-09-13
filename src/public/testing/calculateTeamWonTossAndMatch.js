import calculateTeamWonTossAndMatch from "../../server/5-each-team-won-toss-and-game.js";
import fs from "fs";
let output= calculateTeamWonTossAndMatch()
let jsondata=JSON.stringify(output,null,2)
fs.writeFile('./src/public/output/teamWonTossAndMatch.json',jsondata,(err)=>{if(err)console.log(err.message)});