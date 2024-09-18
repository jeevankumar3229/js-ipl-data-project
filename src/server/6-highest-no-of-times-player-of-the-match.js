import matchesPerYear from "./1-matches-per-year.js";
import fs from 'fs';
export default function playerOfTheMatch(matchesData){
    let object={};
    matchesData.forEach((item)=>{
        if(item.hasOwnProperty('player_of_match') && item.hasOwnProperty("season")){
            if(object.hasOwnProperty(item['season'])){
                object[item['season']][item['player_of_match']]= object[item['season']].hasOwnProperty(item['player_of_match']) ? object[item['season']][item['player_of_match']] +1 : 1;
            }
            else{
                object[item['season']]={}
                object[item['season']][item['player_of_match']]=1;
            }  
        }    
    });
    let filteredObject=Object.entries(object).map(([season,players])=>{
        let innerOutput=Object.entries(players).reduce((acc,[playername,count])=>{
            if(acc["PlayerOfMatchCount"] < count){
                acc["PlayerOfMatchCount"]=count
                acc["Name"]=playername
            }
            return acc;
        },{"Name":"","PlayerOfMatchCount":0})
        return [season,innerOutput]
    })
    return Object.fromEntries(filteredObject)
}