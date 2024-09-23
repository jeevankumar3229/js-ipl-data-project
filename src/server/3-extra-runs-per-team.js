//This function returns the data of no of runs conceded per team in year 2016
export default function extraRunsPerTeam(matchesData,deliveriesData){
    let extraRunsPerTeamData={};
    for(let index=0;index<matchesData.length;index++){
        if(matchesData[index].hasOwnProperty("season")){
            if(data[index]['season']==='2016'){
                let matchId=data[index]["id"]
                for(let index1=0;index1<deliveriesData.length;index1++){
                    if(deliveriesData[index1]["match_id"]=== matchId){//checking if match ids are same
                        if(deliveriesData[index].hasOwnProperty("bowling_team")){
                            //if the extraRunsPerTeamData object doesn't contain the bowling team name, then initialize the bowling team name with extra runs made by that team
                            if(extraRunsPerTeamData.hasOwnProperty(deliveriesData[index1]["bowling_team"])){
                                extraRunsPerTeamData[deliveriesData[index1]["bowling_team"]]=extraRunsPerTeamData[deliveriesData[index1]["bowling_team"]]+Number(deliveriesData[index1]["extra_runs"])
                            }
                            else{
                                extraRunsPerTeamData[deliveriesData[index1]["bowling_team"]]= Number(deliveriesData[index1]["extra_runs"]) ;
                            }
                        }
                    }
                }
            }
            
        }
    }
    return extraRunsPerTeamData;
    
    
}