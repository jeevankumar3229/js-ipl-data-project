import calculateTeamWonTossAndMatch from "../../server/5-each-team-won-toss-and-game.js";
import readingData from "./readingMatchesData.js";
let matchesData=readingData()//calling function to read and return matches data
calculateTeamWonTossAndMatch(matchesData)////this function returns the data of no of times team has won the toss and the match
