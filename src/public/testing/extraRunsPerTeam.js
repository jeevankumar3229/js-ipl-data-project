import extraRunsPerTeam from "../../server/3-extra-runs-per-team.js";
import fs from "fs";
let output=extraRunsPerTeam()
let jsondata=JSON.stringify(output,null,2)
fs.writeFile('./src/public/output/extraRunsPerTeam.json',jsondata,(err)=>{if(err)console.log(err.message)});