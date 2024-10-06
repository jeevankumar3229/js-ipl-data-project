import matchesPerYearPerTeam from "../../server/2-matches-per-year-per-team.js";
import readingData from "./readingMatchesData.js";
let matchesData = readingData()//calling readingData function to read matches data
matchesPerYearPerTeam(matchesData)//calling matchesPerYearPerTeam function and this return the count of the matched played by teams per year


