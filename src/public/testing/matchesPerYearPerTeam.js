import matchesPerYearPerTeam from "../../server/2-matches-per-year-per-team.js";
import readingData from "./readingMatchesData.js";
import writingData from "./writingData.js";
let matchesData = readingData()//calling readingData function to read matches data
let output = matchesPerYearPerTeam(matchesData)//calling matchesPerYearPerTeam function and this return the count of the matched played by teams per year
let jsonData = JSON.stringify(output, null, 2)
writingData('./src/public/output/matchesPerYearPerTeam.json', jsonData);//calling writingData function to write data to json file

