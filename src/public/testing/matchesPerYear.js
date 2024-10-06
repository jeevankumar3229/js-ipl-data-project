import matchesPerYear from "../../server/1-matches-per-year.js";
import readingData from "./readingMatchesData.js";
let matchesData = readingData() //calling readingData function to read matches data
matchesPerYear(matchesData)//calling matchesPerYear function and this function will return the count of matches played per year
