import playerOfTheMatch from "../../server/6-highest-no-of-times-player-of-the-match.js";
import fs from "fs";
let output= playerOfTheMatch()
let jsondata=JSON.stringify(output,null,2)
fs.writeFile('./src/public/output/playerOfTheMatch.json',jsondata,(err)=>{if(err)console.log(err.message)});