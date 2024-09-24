//This function returns the data of no of times the team won the toss and game
export default function calculateTeamWonTossAndMatch(matchesData) {
    try {
        let TeamWonTossAndMatchData = {};
        for (let index = 0; index < matchesData.length; index++) {
            if (matchesData[index].hasOwnProperty("toss_winner") && matchesData[index].hasOwnProperty("winner")) {
                if (matchesData[index]['toss_winner'] === matchesData[index]['winner']) {
                    //since dataset contains team name as Rising Pune Supergiants and Rising Pune Supergiant, so merging both into one
                    if (matchesData[index]['winner'] === 'Rising Pune Supergiant' || matchesData[index]['winner'] === 'Rising Pune Supergiants') {
                        let winner = "Rising Pune Supergiants"
                        if (TeamWonTossAndMatchData.hasOwnProperty(winner)) {
                            TeamWonTossAndMatchData[winner]++;
                        }
                        else {
                            TeamWonTossAndMatchData[winner] = 1;
                        }
                    }
                    else {
                        if (TeamWonTossAndMatchData.hasOwnProperty([matchesData[index]["winner"]])) {
                            TeamWonTossAndMatchData[matchesData[index]["winner"]]++;
                        }
                        else {
                            TeamWonTossAndMatchData[matchesData[index]["winner"]] = 1;
                        }
                    }
                }
            }
        }
        return TeamWonTossAndMatchData;
    }
    catch (Error) {
        console.log(Error)
    }


}
