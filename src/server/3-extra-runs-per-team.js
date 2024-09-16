import fs from "fs"
export default function extraRunsPerTeam(){
    let object={};
    let filteredArray=[]
    let matchID=[]
    let data=JSON.parse(fs.readFileSync('./src/data/matches.json','utf-8',(err)=>{if(err) console.log("Error")}));
    let data1=JSON.parse(fs.readFileSync('./src/data/deliveries.json','utf-8',(err)=>{if(err) console.log("Error")}));
    matchID=data.filter((item)=> {if(item['season']==='2016') return item['id']}).map((item)=>item.id)
    filteredArray = data1.filter((item)=> {if(matchID.includes(item['match_id'])) return item})
    filteredArray.forEach((item)=>{
        object[item['bowling_team']]= object.hasOwnProperty(item['bowling_team']) ? object[item['bowling_team']] + Number(item['extra_runs']) : Number(item['extra_runs']);
    })
    return object;
    
}