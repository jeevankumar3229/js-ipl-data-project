
//This function will return count of no of matches played per year
export default function matchesPerYear(matchesData) {
    try {
        let matchesPerYearData = matchesData.reduce((acc, item) => {
            if (item.hasOwnProperty("season")) {
                //using ternery operator to assign value
                acc[item["season"]] = acc.hasOwnProperty(item["season"]) ? acc[item["season"]] + 1 : 1;
            }
            return acc;
        }, {})
        return matchesPerYearData;
    }
    catch (Error) {
        console.log(Error)
    }
}

