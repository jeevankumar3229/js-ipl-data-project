//This function will return count of no of matches played per year
import writingData from "../public/testing/writingData.js";
export default function matchesPerYear(matchesData) {
    try {
        let matchesPerYearData = {};
        for (let index = 0; index < matchesData.length; index++) {
            if (matchesData[index].hasOwnProperty("season")) {//checking whether season property exists
                if (matchesPerYearData.hasOwnProperty([matchesData[index]["season"]])) {
                    matchesPerYearData[matchesData[index]["season"]]++;
                }
                else {
                    matchesPerYearData[matchesData[index]["season"]] = 1;
                }
            }
        }
        writingData('./src/public/output/matchesPerYear.json', JSON.stringify(matchesPerYearData,null,2))//calling writingData function to write data to json file
    }
    catch (Error) {
        console.log(Error)
    }
}

