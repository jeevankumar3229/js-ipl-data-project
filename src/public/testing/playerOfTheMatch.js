import playerOfTheMatch from "../../server/6-highest-no-of-times-player-of-the-match.js";
import readingData from "./readingMatchesData.js";
let matchesData = readingData()//calling the function to read matches data
playerOfTheMatch(matchesData)//this function returns the highest no of times single player won man of the match

