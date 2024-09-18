import fs from "fs"
export default function calculateEconomicalBowlerInSuperOver(matchesData,deliveriesData){
    let object={};
    let idArray=[]
    let bowlers=[]
    let array=[]
    let sliceArray=[]
    let arrayOfObjects=[]
    let filteredData=deliveriesData.filter((item)=>{
        if(item['is_super_over']==='1'){
            return item
        }
    })
    filteredData.forEach((item)=>{
        if(item.hasOwnProperty("bowler") && object.hasOwnProperty(item['bowler'])){
            if(object[item['bowler']].hasOwnProperty("Balls") && object[item['bowler']].hasOwnProperty("Runs")){
                object[item['bowler']]["Balls"]=object[item['bowler']]["Balls"]+1
                object[item['bowler']]["Runs"]=object[item['bowler']]["Runs"]+Number(item['total_runs'])-Number(item['bye_runs'])-Number(item['legbye_runs'])
                if(Number(item['wide_runs'])>0 || Number(item['noball_runs'])>0){
                    object[item['bowler']]["Balls"]= object[item['bowler']]["Balls"] - 1
                }
            }
        }
        else{
            object[item['bowler']]={}
            object[item['bowler']]["Balls"]=1
            object[item['bowler']]["Runs"]=Number(item['total_runs'])-Number(item['bye_runs'])-Number(item['legbye_runs'])
            if(Number(item['wide_runs'])>0 || Number(item['noball_runs'])>0){
                object[item['bowler']]["Balls"]= object[item['bowler']]["Balls"] - 1
            }

        }
    })
    for(let keys in object){
        let over=((object[keys]['Balls'])/6)
        let economic=((object[keys]['Runs'])/over)
        arrayOfObjects.push({"name":keys,"rate":economic})

    }
    return arrayOfObjects.sort((a, b) => a.rate-b.rate).slice(0,1);
   
}