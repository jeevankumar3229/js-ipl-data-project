//This function will return the no of times each team won the toss as well as match
import writingData from "../public/testing/writingData.js";
export default function calculateTeamWonTossAndMatch(matchesData) {
    try {
        let teamWonTossAndMatchData;
        let winner;
        teamWonTossAndMatchData = matchesData.reduce((acc, item) => {
            if (item.hasOwnProperty('winner') && item.hasOwnProperty("toss_winner")) {
                if (item['winner'] === item['toss_winner']) {//if value of winner column is empty, assign the variable winner with value "Tie"
                    winner = (item['winner'] === 'Rising Pune Supergiant' || item['winner'] === 'Rising Pune Supergiants') ? 'Rising Pune Supergiants' : item['winner']
                    acc[winner] = acc.hasOwnProperty(winner) ? acc[winner] + 1 : 1;
                }
            }
            return acc;
        }, {});
        writingData('./src/public/output/teamWonTossAndMatch.json',JSON.stringify(teamWonTossAndMatchData,null,2));//calling function to write data to the json file

    }
    catch (Error) {
        console.log(Error)
    }

}
