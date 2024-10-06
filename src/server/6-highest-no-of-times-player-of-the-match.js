//this function returns the highest no of times single player won man of the match
import writingData from "../public/testing/writingData.js";
import fs from 'fs';
export default function playerOfTheMatch(matchesData) {
    try {
        let seasonListData = JSON.parse(fs.readFileSync('./src/public/output/matchesPerYear.json')); 
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
        for (let season in noOfTimesPlayerOfMatchData) {
            for (let batsmanName in noOfTimesPlayerOfMatchData[season]) {
                if (highestPlayerOfMatchCount < noOfTimesPlayerOfMatchData[season][batsmanName]) {
                    highestPlayerOfMatchCount = noOfTimesPlayerOfMatchData[season][batsmanName]
                    playerName = batsmanName
                }

            }
            noOfTimesPlayerOfMatchData[season] = { "name": playerName, "playerOfMatchCount": highestPlayerOfMatchCount }
            highestPlayerOfMatchCount = 0;
        }
        writingData('./src/public/output/playerOfTheMatch.json', JSON.stringify(noOfTimesPlayerOfMatchData,null,2))//calling function to write data to json file
    }
    catch (Error) {
        console.log(Error)
    }
}