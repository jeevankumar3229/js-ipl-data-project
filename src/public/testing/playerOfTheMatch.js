import playerOfTheMatch from "../../server/6-highest-no-of-times-player-of-the-match.js";
import readingData from "./readingMatchesData.js";
import writingData from "./writingData.js";
let matchesData = readingData()//calling the function to read matches data
let output = playerOfTheMatch(matchesData)//this function returns the highest no of times single player won man of the match
let jsondata = JSON.stringify(output, null, 2)
writingData('./src/public/output/playerOfTheMatch.json', jsondata)//calling function to write data to json file