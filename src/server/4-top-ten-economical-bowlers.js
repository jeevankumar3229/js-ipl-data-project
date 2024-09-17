import fs from "fs"
export default function calculateEconomicalBowlers(matchesData,deliveriesData,season='2015'){

    let object={};
    let object1={}
    let bowlers=[]
    let sliceArray=[]
    let arrayOfObjects=[]
    let idArray= matchesData.reduce((acc,item)=>{
        if(item['season']===season){
            acc.push(item["id"])
        }
    return acc;},[])
    let filteredArray=deliveriesData.filter(item => idArray.includes(item["match_id"]))
    filteredArray.forEach(item=> {
        if (item.hasOwnProperty("bowler") && !bowlers.includes(item['bowler'])) {
            bowlers.push(item['bowler']);
        }
    });

    filteredArray.forEach((item)=>{
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
    return arrayOfObjects.sort((a, b) => a.rate-b.rate).slice(0,10);
    

}