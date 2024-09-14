import calculateNoOfTimesDismissed from "../../server/8-highest-no-of-times-dismissed.js";
import fs from "fs";
let output= calculateNoOfTimesDismissed()
let jsondata=JSON.stringify(output,null,2)
fs.writeFile('./src/public/output/highestNoOfTimesDismissed.json',jsondata,(err)=>{if(err)console.log(err.message)});
