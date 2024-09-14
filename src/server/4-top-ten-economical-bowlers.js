import fs from "fs"
export default function calculateEconomicalBowlers(){

    let object={};
    let object1={}
    let idArray=[]
    let bowlers=[]
    let array=[]
    let sliceArray=[]
    let data=JSON.parse(fs.readFileSync('./src/data/matches.json','utf-8',(err)=>{if(err) console.log("Error")}));
    let data1=JSON.parse(fs.readFileSync('./src/data/deliveries.json','utf-8',(err)=>{if(err) console.log("Error")}));
    //extracting all the match-IDs of season 2015
    for(let index4=0;index4<data.length;index4++){
        if(data[index4].hasOwnProperty("id") && data[index4].hasOwnProperty("season")){
            if(data[index4]['season']==='2015')
            {
                idArray.push(data[index4]["id"])
            }
        }
    }
    //Adding Bowlers who played in 2015 to array
    for(let index=0;index<data1.length;index++){
        if(idArray.includes(data1[index]["match_id"])){
            if(data1[index].hasOwnProperty("bowler")){
                if(bowlers.includes(data1[index]['bowler'])){
                    continue
                }
                else{
                    bowlers.push(data1[index]['bowler'])
                }
            }
        }
    }
    //Creating an object with bowler-nmae as key with properties as total balls faced,total runs,wide balls,noball balls
    for(let index1=0;index1<bowlers.length;index1++){
        object[bowlers[index1]]={}
        for(let index3=0;index3<data1.length;index3++){
            if(idArray.includes(data1[index3]["match_id"])){
                if(data1[index3].hasOwnProperty("bowler")){
                    if(data1[index3]["bowler"]=== bowlers[index1]){
                        if(object[bowlers[index1]].hasOwnProperty("Balls") && object[bowlers[index1]].hasOwnProperty("Runs")){
                            object[bowlers[index1]]["Balls"]=object[bowlers[index1]]["Balls"]+1
                            object[bowlers[index1]]["Runs"]=object[bowlers[index1]]["Runs"]+Number(data1[index3]['total_runs'])-Number(data1[index3]['bye_runs'])-Number(data1[index3]['legbye_runs'])
                            if(Number(data1[index3]['wide_runs'])>0){
                                object[bowlers[index1]]["Wide"]=object[bowlers[index1]]["Wide"]+1
                            }
                            if(Number(data1[index3]['noball_runs'])>0){
                                object[bowlers[index1]]['Noball']=object[bowlers[index1]]['Noball']+1
                            }
                        }
                        else{
                            object[bowlers[index1]]["Balls"]=1
                            object[bowlers[index1]]["Runs"]=Number(data1[index3]['total_runs'])-Number(data1[index3]['bye_runs'])-Number(data1[index3]['legbye_runs'])
                            if(Number(data1[index3]['wide_runs'])>0){
                                object[bowlers[index1]]["Wide"]=1
                            }
                            else{
                                object[bowlers[index1]]["Wide"]=Number(data1[index3]['wide_runs'])
                            }
                            if(Number(data1[index3]['noball_runs'])>0){
                                object[bowlers[index1]]["Noball"]=1
                            }
                            else{
                                object[bowlers[index1]]['Noball']=Number(data1[index3]['noball_runs'])

                            }

                        }
                    }
                    
                    
                }
            }
        }
                
                
            
        
    }
    //creating an array of objects with ecah object has two properties name,rate
    for(let keys in object){
        let over=((object[keys]['Balls']-object[keys]['Wide']-object[keys]['Noball'])/6)//.toFixed(2);
        let economic=((object[keys]['Runs'])/over)//.toFixed(2)
        array.push({"name":keys,"rate":economic})

    }
    array.sort((a, b) => a.rate-b.rate);//sorting the array
    sliceArray=array.slice(0,10)//slicing to get top 10
    return sliceArray;
    

}