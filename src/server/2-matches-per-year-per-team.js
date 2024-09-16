import matchesPerYear from "./1-matches-per-year.js";
import fs from 'fs';
export default function matchesPerYearPerTeam(){
    let object={};
    let winner;
    let data=JSON.parse(fs.readFileSync('./src/data/matches.json','utf-8',(err)=>{if(err) console.log("Error")}));
    data.forEach((item)=>{
            if(item.hasOwnProperty('winner') && item.hasOwnProperty("season")){
                winner= (item['winner']=== 'Rising Pune Supergiant' || item['winner']=== 'Rising Pune Supergiants') ? 'Rising Pune Supergiants' : (item['winner']==="" ? "Tie" : item['winner'])
                if(object.hasOwnProperty(winner)){
                    object[winner][item['season']]= object[winner].hasOwnProperty(item['season']) ? object[winner][item['season']] +1 : 1;
                }
                else{
                    object[winner]={}
                    object[winner][item['season']]=1;
                }  
            }    
    });
    return object;
}