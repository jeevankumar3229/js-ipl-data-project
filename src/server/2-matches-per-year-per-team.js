import matchesPerYear from "./1-matches-per-year.js";
export default function matchesPerYearPerTeam(matchesData){
    let matchesPerYearData=matchesPerYear(matchesData); 
    let matchesPerYearPerTeamData={};
    for(let key in matchesPerYearData){
        matchesPerYearPerTeamData[key]={}
        for(let index=0;index<matchesData.length;index++){
            if(matchesData[index].hasOwnProperty("winner") && matchesData[index].hasOwnProperty("season")){
                if(matchesData[index]["season"]===key){
                    if(matchesData[index]['winner']===""){
                        let winner="Tie"
                        if(matchesPerYearPerTeamData[key].hasOwnProperty(winner)){
                            matchesPerYearPerTeamData[key][winner]++
                        }
                        else{
                            matchesPerYearPerTeamData[key][winner]=1
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