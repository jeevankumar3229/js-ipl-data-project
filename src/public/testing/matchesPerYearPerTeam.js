import matchesPerYearPerTeam from "../../server/2-matches-per-year-per-team.js";
import readingData from "./readingMatchesData.js";
import writingData from "./writingData.js";
let matchesData = readingData()
let output = matchesPerYearPerTeam(matchesData)
let jsonData = JSON.stringify(output, null, 2)
writingData('./src/public/output/matchesPerYearPerTeam.json', jsonData);

