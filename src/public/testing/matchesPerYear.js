import matchesPerYear from "../../server/1-matches-per-year.js";
import readingData from "./readingMatchesData.js";
import writingData from "./writingData.js";
let matchesData = readingData()
let output = matchesPerYear(matchesData)
let jsonData = JSON.stringify(output, null, 2)
writingData('./src/public/output/matchesPerYear.json', jsonData)