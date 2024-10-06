//This function returns the data of no of times the team won the toss and game
import writingData from "../public/testing/writingData.js";
export default function calculateTeamWonTossAndMatch(matchesData) {
    try {
        let teamWonTossAndMatchData = {};
        for (let index = 0; index < matchesData.length; index++) {
            if (matchesData[index].hasOwnProperty("toss_winner") && matchesData[index].hasOwnProperty("winner")) {
                if (matchesData[index]['toss_winner'] === matchesData[index]['winner']) {
                    //since dataset contains team name as Rising Pune Supergiants and Rising Pune Supergiant, so merging both into one
                    if (matchesData[index]['winner'] === 'Rising Pune Supergiant' || matchesData[index]['winner'] === 'Rising Pune Supergiants') {
                        let winner = "Rising Pune Supergiants"
                        if (teamWonTossAndMatchData.hasOwnProperty(winner)) {
                            teamWonTossAndMatchData[winner]++;
                        }
                        else {
                            teamWonTossAndMatchData[winner] = 1;
                        }
                    }
                    else {
                        if (teamWonTossAndMatchData.hasOwnProperty([matchesData[index]["winner"]])) {
                            teamWonTossAndMatchData[matchesData[index]["winner"]]++;
                        }
                        else {
                            teamWonTossAndMatchData[matchesData[index]["winner"]] = 1;
                        }
                    }
                }
            }
        }
        writingData('./src/public/output/teamWonTossAndMatch.json',JSON.stringify(teamWonTossAndMatchData,null,2));//calling function to write data to the json file
    }
    catch (Error) {
        console.log(Error)
    }


}
