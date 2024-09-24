//this function returns the highest no of times single player won man of the match
export default function playerOfTheMatch(matchesData) {
    try {
        let noOfTimesPlayerOfMatchData = {};
        //NoOfTimesPlayerOfTheMatch contains season as key and value being the nested object where the nested object contains the batsman name as key and value being no of times player won man of the match in that season
        noOfTimesPlayerOfMatchData = matchesData.reduce((acc, item) => {
            if (item.hasOwnProperty('player_of_match') && item.hasOwnProperty("season")) {
                if (acc.hasOwnProperty(item['season'])) {
                    acc[item['season']][item['player_of_match']] = acc[item['season']].hasOwnProperty(item['player_of_match']) ? acc[item['season']][item['player_of_match']] + 1 : 1;
                }
                else {
                    acc[item['season']] = {}
                    acc[item['season']][item['player_of_match']] = 1;
                }
            }
            return acc;
        }, {});
        //converting previously obtained object with value being nested object with mutliple key value pairs to single key value pairs
        let highestNoOfTimesPlayerOfMatchData = Object.entries(noOfTimesPlayerOfMatchData).map(([season, players]) => {
            let innerObject = Object.entries(players).reduce((acc, [playerName, count]) => {
                if (acc["playerOfMatchCount"] < count) {
                    acc["playerOfMatchCount"] = count
                    acc["name"] = playerName
                }
                return acc;
            }, { "name": "", "playerOfMatchCount": 0 })
            return [season, innerObject]
        })
        return Object.fromEntries(highestNoOfTimesPlayerOfMatchData)
    }
    catch (Error) {
        console.log(Error)
    }
}