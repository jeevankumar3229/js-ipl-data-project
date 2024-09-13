import fs from "fs"
export default function extraRunsPerTeam(){
    let object={};
    let idArray=[]
    let data=JSON.parse(fs.readFileSync('./src/data/matches.json','utf-8',(err)=>{if(err) console.log("Error")}));
    let data1=JSON.parse(fs.readFileSync('./src/data/deliveries.json','utf-8',(err)=>{if(err) console.log("Error")}));
    for(let index=0;index<data.length;index++){
        if(data[index].hasOwnProperty("season")){
            if(data[index]['season']==='2016'){
                let matchId=data[index]["id"]
                for(let index1=0;index1<data1.length;index1++){
                    if(data1[index1]["match_id"]=== matchId){
                        if(data1[index].hasOwnProperty("bowling_team")){
                            if(object.hasOwnProperty(data1[index1]["bowling_team"])){
                                object[data1[index1]["bowling_team"]]=object[data1[index1]["bowling_team"]]+Number(data1[index1]["extra_runs"])
                            }
                            else{
                                object[data1[index1]["bowling_team"]]= Number(data1[index1]["extra_runs"]) ;
                            }
                        }
                    }
                }
            }
            
        }
    }
    return object;
    
    
}