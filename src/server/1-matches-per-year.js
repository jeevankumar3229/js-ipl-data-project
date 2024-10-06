
//This function will return count of no of matches played per year
import writingData from "../public/testing/writingData.js";
export default function matchesPerYear(matchesData) {
    try {
        let matchesPerYearData = matchesData.reduce((acc, item) => {
            if (item.hasOwnProperty("season")) {
                //using ternery operator to assign value
                acc[item["season"]] = acc.hasOwnProperty(item["season"]) ? acc[item["season"]] + 1 : 1;
            }
            return acc;
        }, {})
        writingData('./src/public/output/matchesPerYear.json', JSON.stringify(matchesPerYearData,null,2))//calling writingData function to write data to json file
    }
    catch (Error) {
        console.log(Error)
    }
}

