import matchesPerYear from "./1-matches-per-year.js";
import fs from 'fs';
export default function calculateStrikeRate(){
    let output=matchesPerYear();//This functions returns the object with year as key
    let object={};
    let object1={};
    let data=JSON.parse(fs.readFileSync('./src/data/matches.json','utf-8',(err)=>{if(err) console.log("Error")}));
    let data1=JSON.parse(fs.readFileSync('./src/data/deliveries.json','utf-8',(err)=>{if(err) console.log("Error")}));
    for(let key in output){
        object[key]={}
        object1[key]={}
        let idArray=[]
        let batsman=[]
        //pushing the matchid of each season to array
        for(let index=0;index<data.length;index++){
            if(data[index].hasOwnProperty("id") && data[index].hasOwnProperty("season")){
                if(data[index]['season']=== key)
                {
                    idArray.push(data[index]["id"])
                }
            }
        }
        //pushing the name of the batsman playing in each season
        for(let index1=0;index1<data1.length;index1++){
            if(idArray.includes(data1[index1]["match_id"])){
                if(data1[index1].hasOwnProperty("batsman")){
                    if(batsman.includes(data1[index1]['batsman'])){
                        continue
                    }
                    else{
                        batsman.push(data1[index1]['batsman'])
                    }
                }
            }
        }
        for(let index2=0;index2<batsman.length;index2++){
            object[key][batsman[index2]]={}
            for(let index3=0;index3<data1.length;index3++){
                if(idArray.includes(data1[index3]["match_id"])){
                    if(data1[index3].hasOwnProperty("batsman")){
                        if(data1[index3]["batsman"]=== batsman[index2]){
                            if(object[key][batsman[index2]].hasOwnProperty("Balls") && object[key][batsman[index2]].hasOwnProperty("Runs")){
                                object[key][batsman[index2]]["Balls"]=object[key][batsman[index2]]["Balls"]+1
                                object[key][batsman[index2]]["Runs"]=object[key][batsman[index2]]["Runs"]+Number(data1[index3]['batsman_runs'])
                                if(Number(data1[index3]['wide_runs'])>0){
                                    object[key][batsman[index2]]["Wide"]=object[key][batsman[index2]]["Wide"]+1
                                }
                                if(Number(data1[index3]['noball_runs'])>0){
                                    object[key][batsman[index2]]['Noball']=object[key][batsman[index2]]['Noball']+1
                                }
                            }
                            else{
                                object[key][batsman[index2]]["Balls"]=1
                                object[key][batsman[index2]]["Runs"]= Number(data1[index3]['batsman_runs'])
                                if(Number(data1[index3]['wide_runs'])>0){
                                    object[key][batsman[index2]]["Wide"]=1
                                }
                                else{
                                    object[key][batsman[index2]]["Wide"]=Number(data1[index3]['wide_runs'])
                                }
                                if(Number(data1[index3]['noball_runs'])>0){
                                    object[key][batsman[index2]]["Noball"]=1
                                }
                                else{
                                    object[key][batsman[index2]]['Noball']=Number(data1[index3]['noball_runs'])
    
                                }
    
                            }
                        }
                        
                        
                    }
                }
            }
                    
                    
                
            
        }
        //creating a new object and pushing the strikerate of each batsman based on year
        for(let keys in object[key]){
            let totalballs=object[key][keys]['Balls']-object[key][keys]['Wide']
            let strikerate=(object[key][keys]['Runs']/totalballs)*100
            object1[key][keys]=strikerate;
            
        }
    }
    return object1;
    
}