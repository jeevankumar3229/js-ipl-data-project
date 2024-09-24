//This function will return the no of times each team won the toss as well as match
export default function calculateTeamWonTossAndMatch(matchesData) {
    try {
        let TeamWonTossAndMatchData;
        let winner;
        TeamWonTossAndMatchData = matchesData.reduce((acc, item) => {
            if (item.hasOwnProperty('winner') && item.hasOwnProperty("toss_winner")) {
                if (item['winner'] === item['toss_winner']) {//if value of winner column is empty, assign the variable winner with value "Tie"
                    winner = (item['winner'] === 'Rising Pune Supergiant' || item['winner'] === 'Rising Pune Supergiants') ? 'Rising Pune Supergiants' : item['winner']
                    acc[winner] = acc.hasOwnProperty(winner) ? acc[winner] + 1 : 1;
                }
            }
            return acc;
        }, {});
        return TeamWonTossAndMatchData;

    }
    catch (Error) {
        console.log(Error)
    }

}
