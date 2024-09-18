export default function extraRunsPerTeam(matchesData, deliveriesData,season='2016'){
    let object={};
    let filteredArray=[]
    let matchID=new Set()
    matchesData.forEach((item)=>{
        if(item.hasOwnProperty('season') && item['season']===season){
            matchID.add(item["id"])
        }
    });
    filteredArray = deliveriesData.filter((item)=> {if(matchID.has(item['match_id'])) return item})
    filteredArray.forEach((item)=>{
        if(item.hasOwnProperty('bowling_team')){
        object[item['bowling_team']]= object.hasOwnProperty(item['bowling_team']) ? object[item['bowling_team']] + Number(item['extra_runs']) : Number(item['extra_runs']);
        }
    })
    return object;
    
}