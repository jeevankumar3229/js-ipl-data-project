export default function calculateTeamWonTossAndMatch(matchesData){
    let object={};
    let winner;
    matchesData.forEach((item)=>{
            if(item.hasOwnProperty('winner') && item.hasOwnProperty("toss_winner")){
                if(item['winner']===item['toss_winner']){
                    winner= (item['winner']=== 'Rising Pune Supergiant' || item['winner']=== 'Rising Pune Supergiants') ? 'Rising Pune Supergiants' : (item['winner']==="" ? "Tie" : item['winner'])
                    object[winner]= object.hasOwnProperty(winner) ? object[winner]+1 : 1;
                }
            }    
    });
    return object;

}
