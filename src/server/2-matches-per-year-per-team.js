export default function matchesPerYearPerTeam(matchesData){
    let object={};
    let winner;
    matchesData.forEach((item)=>{
            if(item.hasOwnProperty('winner') && item.hasOwnProperty("season")){
                winner= (item['winner']=== 'Rising Pune Supergiant' || item['winner']=== 'Rising Pune Supergiants') ? 'Rising Pune Supergiants' : (item['winner']==="" ? "Tie" : item['winner'])
                if(object.hasOwnProperty(winner)){
                    object[winner][item['season']]= object[winner].hasOwnProperty(item['season']) ? object[winner][item['season']] +1 : 1;
                }
                else{
                    object[winner]={}
                    object[winner][item['season']]=1;
                }  
            }    
    });
    return object;
}