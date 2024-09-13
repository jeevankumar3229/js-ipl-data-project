import matchesPerYear from "./1-matches-per-year.js";
import fs from 'fs';
export default function playerOfTheMatch(){
    let output=matchesPerYear();
    let object={};
    let data=JSON.parse(fs.readFileSync('./src/data/matches.json','utf-8',(err,data)=>{if(err) console.log("Error")}));
    for(let key in output){
        object[key]={}
        for(let index=0;index<data.length;index++){
            if(data[index].hasOwnProperty("player_of_match")){
                if(data[index]["season"]===key){
                    if(object[key].hasOwnProperty(data[index]["player_of_match"])){
                        object[key][data[index]["player_of_match"]]++
                    }
                    else{
                        object[key][data[index]["player_of_match"]]=1
                    }
                }
            }
        }
    }
    let maxvalue=0;
    let playerName="";
    for(let key1 in object){
        for(let key2 in object[key1]){
            if(maxvalue<object[key1][key2]){
                maxvalue=object[key1][key2]
                playerName=key2
            }
            
        }
        object[key1]={"name":playerName,"playerOfMatchCount": maxvalue}
        maxvalue=0;
    }
    return object;
}