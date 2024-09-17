import fs from "fs"
export default function extraRunsPerTeam(matchesData, deliveriesData){
    let object={};
    let filteredArray=[]
    let matchID=[]
    matchID=matchesData.filter((item)=> {if(item['season']==='2016') return item['id']}).map((item)=>item.id)
    filteredArray = deliveriesData.filter((item)=> {if(matchID.includes(item['match_id'])) return item})
    filteredArray.forEach((item)=>{
        object[item['bowling_team']]= object.hasOwnProperty(item['bowling_team']) ? object[item['bowling_team']] + Number(item['extra_runs']) : Number(item['extra_runs']);
    })
    return object;
    
}