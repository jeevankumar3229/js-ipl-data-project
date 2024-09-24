//this function returns the highest no of times single player won man of the match
import matchesPerYear from './1-matches-per-year.js'
export default function playerOfTheMatch(matchesData) {
    try {
        let seasonListData = matchesPerYear(matchesData);//This function returns the object with key being the year
        let noOfTimesPlayerOfMatchData = {};
        //noOfTimesPlayerOfTheMatch contains season as key and value being the nested object where the nested object contains the batsman name as key and value being no of times player won man of the match in that season
        for (let key in seasonListData) {
            noOfTimesPlayerOfMatchData[key] = {}
            for (let index = 0; index < matchesData.length; index++) {
                if (matchesData[index].hasOwnProperty("player_of_match") && matchesData[index].hasOwnProperty('season')) {
                    if (matchesData[index]["season"] === key) {
                        if (noOfTimesPlayerOfMatchData[key].hasOwnProperty(matchesData[index]["player_of_match"])) {
                            noOfTimesPlayerOfMatchData[key][matchesData[index]["player_of_match"]]++
                        }
                        else {
                            noOfTimesPlayerOfMatchData[key][matchesData[index]["player_of_match"]] = 1
                        }
                    }
                }
            }
        }
        //converting previously created object with value being nested object with mutliple key value pairs to single key value pairs
        let highestPlayerOfMatchCount = 0;
        let playerName = "";
        for (let key1 in noOfTimesPlayerOfMatchData) {
            for (let key2 in noOfTimesPlayerOfMatchData[key1]) {
                if (highestPlayerOfMatchCount < noOfTimesPlayerOfMatchData[key1][key2]) {
                    highestPlayerOfMatchCount = noOfTimesPlayerOfMatchData[key1][key2]
                    playerName = key2
                }

            }
            noOfTimesPlayerOfMatchData[key1] = { "name": playerName, "playerOfMatchCount": highestPlayerOfMatchCount }
            highestPlayerOfMatchCount = 0;
        }
        return noOfTimesPlayerOfMatchData;
    }
    catch (Error) {
        console.log(Error)
    }
}