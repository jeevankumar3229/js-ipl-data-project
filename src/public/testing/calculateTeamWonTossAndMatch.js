import calculateTeamWonTossAndMatch from "../../server/5-each-team-won-toss-and-game.js";
import writingData from "./writingData.js";
import readingData from "./readingMatchesData.js";
let matchesData=readingData()//calling function to read and return matches data
let output= calculateTeamWonTossAndMatch(matchesData)////this function returns the data of no of times team has won the toss and the match
let jsondata=JSON.stringify(output,null,2)
writingData('./src/public/output/teamWonTossAndMatch.json',jsondata);//calling function to write data to the json file
