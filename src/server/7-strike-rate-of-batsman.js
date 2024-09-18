import fs from 'fs';
export default function calculateStrikeRate(matchesData,deliveriesData){
    let object={};
    let arrayOfObjects=[]
    let seasonArray=new Set()
    matchesData.forEach((item)=>{
        seasonArray.add(item['season'])
    })

    seasonArray.forEach((season)=>{
        object[season]={}
        let idArray= matchesData.reduce((acc,item)=>{
            if(item['season']===season){
                acc.push(item["id"])
            }
        return acc;},[])
        let filteredArray=deliveriesData.filter(item => idArray.includes(item["match_id"]))

        filteredArray.forEach((item)=>{
            if(item.hasOwnProperty("batsman") && item.hasOwnProperty('batsman_runs') && item.hasOwnProperty("wide_runs") && item.hasOwnProperty("noball_runs") && item.hasOwnProperty('ball')){
                    if(object[season].hasOwnProperty(item['batsman'])){
                        object[season][item['batsman']]["Balls"]=object[season][item['batsman']]["Balls"]+1
                        object[season][item['batsman']]["Runs"]=object[season][item['batsman']]["Runs"]+Number(item['batsman_runs'])
                        if(Number(item['wide_runs'])>0){
                            object[season][item['batsman']]["Balls"]= object[season][item['batsman']]["Balls"] - 1
                        }
                    }
                    else{
                        object[season][item['batsman']]={}
                        object[season][item['batsman']]["Balls"]=1
                        object[season][item['batsman']]["Runs"]=Number(item['batsman_runs'])
                        if(Number(item['wide_runs'])>0){
                            object[season][item['batsman']]["Balls"]= object[season][item['batsman']]["Balls"] - 1
                        }

                }
            }
        })
        for(let keys in object[season]){
            let totalballs=object[season][keys]['Balls']
            let strikerate=(object[season][keys]['Runs']/totalballs)*100
            object[season][keys]=strikerate;

        }
    })
    return object;
    
}