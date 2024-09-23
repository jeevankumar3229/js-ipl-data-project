export default function matchesPerYearPerTeam(matchesData){
    let matchesPerYearPerTeamData={};
    let winner;
    matchesPerYearPerTeamData=matchesData.reduce((acc,item)=>{
            if(item.hasOwnProperty('winner') && item.hasOwnProperty("season")){
                winner= (item['winner']=== 'Rising Pune Supergiant' || item['winner']=== 'Rising Pune Supergiants') ? 'Rising Pune Supergiants' : (item['winner']==="" ? "Tie" : item['winner'])
                if(acc.hasOwnProperty(winner)){
                    acc[winner][item['season']]= acc[winner].hasOwnProperty(item['season']) ? acc[winner][item['season']] +1 : 1;
                }
                else{
                    acc[winner]={}
                    acc[winner][item['season']]=1;
                }  
            } 
            return acc;   
    },{});
    return matchesPerYearPerTeamData;
}