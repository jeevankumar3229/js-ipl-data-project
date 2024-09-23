import matchesPerYear from "../../server/1-matches-per-year.js";
import readingData from "./readingData.js";
import fs from "fs";
let matchesData = readingData()
let output = matchesPerYear(matchesData)
let jsondata = JSON.stringify(output, null, 2)
try {
    fs.writeFileSync('./src/public/output/matchesPerYear.json', jsondata);
}
catch (Error) {
    console.log(Error)
}