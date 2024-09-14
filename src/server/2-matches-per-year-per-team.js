import matchesPerYear from "./1-matches-per-year.js";
import fs from 'fs';
export default function matchesPerYearPerTeam(){
    let output=matchesPerYear();  //This function returns the object with year as keys
    let object={};
    let data=JSON.parse(fs.readFileSync('./src/data/matches.json','utf-8',(err)=>{if(err) console.log("Error")}));
    for(let key in output){
        object[key]={}
        for(let index=0;index<data.length;index++){
            if(data[index].hasOwnProperty("winner")){
                if(data[index]["season"]===key){
                    if(object[key].hasOwnProperty(data[index]["winner"])){
                        object[key][data[index]["winner"]]++
                    }
                    else{
                        object[key][data[index]["winner"]]=1
                    }
                }
            }
        }
    }
    return object;
}