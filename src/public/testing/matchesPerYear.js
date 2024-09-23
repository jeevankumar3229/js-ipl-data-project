import matchesPerYear from "../../server/1-matches-per-year.js";
import readingData from "./readingMatchesData.js";
import writingData from "./writingData.js";
let matchesData = readingData() //calling readingData function to read matches data
let output = matchesPerYear(matchesData)//calling matchesPerYear function and this function will return the count of matches played per year
let jsonData = JSON.stringify(output, null, 2)
writingData('./src/public/output/matchesPerYear.json', jsonData)//calling writingData function to write data to json file