import calculateNoOfTimesDismissed from "../../server/8-highest-no-of-times-dismissed.js";
import fs from "fs";
let deliveriesData=JSON.parse(fs.readFileSync('./src/data/deliveries.json','utf-8',(err)=>{if(err) console.log("Error")}));
let output= calculateNoOfTimesDismissed(deliveriesData)
let jsondata=JSON.stringify(output,null,2)
try{
    fs.writeFileSync('./src/public/output/highestNoOfTimesDismissed.json',jsondata);
}
catch(Error){
    console.log(Error)
}
