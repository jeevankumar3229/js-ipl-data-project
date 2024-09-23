//This function will return the data of no of extra runs conceded by each team in 2016
export default function extraRunsPerTeam(matchesData, deliveriesData, season = '2016') {
    try {
        let extraRunsPerTeamData;
        let filteredArray = []
        let matchID = new Set()
        //storing the match_id of season 2016 in set
        matchID = matchesData.reduce((acc, item) => {
            if (item.hasOwnProperty('season') && item['season'] === season) {
                acc.add(item["id"])
            }
            return acc;
        }, new Set());
        //filtering the data based on the match id present in set
        filteredArray = deliveriesData.filter((item) => { if (matchID.has(item['match_id'])) return item })
        extraRunsPerTeamData = filteredArray.reduce((acc, item) => {
            if (item.hasOwnProperty('bowling_team')) {
                acc[item['bowling_team']] = acc.hasOwnProperty(item['bowling_team']) ? acc[item['bowling_team']] + Number(item['extra_runs']) : Number(item['extra_runs']);
            }
            return acc;
        }, {})
        return extraRunsPerTeamData;
    }
    catch (Error) {
        console.log(Error)
    }

}