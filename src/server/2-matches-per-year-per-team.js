import matchesPerYear from "./1-matches-per-year.js";
export default function matchesPerYearPerTeam(matchesData){
    let matchesPerYearData=matchesPerYear(matchesData); // calling function which returns the object in the form of no of matches played per year
    let matchesPerYearPerTeamData={};
    for(let key in matchesPerYearData){
        matchesPerYearPerTeamData[key]={}
        for(let index=0;index<matchesData.length;index++){
            if(matchesData[index].hasOwnProperty("winner") && matchesData[index].hasOwnProperty("season")){//checking whether property season and winner exists
                if(matchesData[index]["season"]===key){
                    if(matchesData[index]['winner']===""){
                        let winner="Tie"//if winner propertie value is blank, initializing winner variable to value "Tie"
                        if(matchesPerYearPerTeamData[key].hasOwnProperty(winner)){
                            matchesPerYearPerTeamData[key][winner]++
                        }
                        else{
                            matchesPerYearPerTeamData[key][winner]=1//if the matchesPerYearPerTeamData[key] doesnot contain the team name as a property, initialize it to value 1
                        }
                    }
                    else{
                        if(matchesPerYearPerTeamData[key].hasOwnProperty(data[index]["winner"])){
                            matchesPerYearPerTeamData[key][data[index]["winner"]]++
                        }
                        else{
                            matchesPerYearPerTeamData[key][data[index]["winner"]]=1
                        }
                    }
                }
            }
        }
    }
    return matchesPerYearPerTeamData;
}