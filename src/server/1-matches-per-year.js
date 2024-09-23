//This function will return count of no of matches played per year
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
        return matchesPerYearData;
    }
    catch (Error) {
        console.log(Error)
    }
}

