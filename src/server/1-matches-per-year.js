export default function matchesPerYear(matchesData) {
    let matchesPerYearData=matchesData.reduce((acc,item) => {
        if (item.hasOwnProperty("season")) {
            acc[item["season"]] = acc.hasOwnProperty(item["season"]) ? acc[item["season"]] + 1 : 1;
        }
        return acc;
    }, {})
    return matchesPerYearData;
}

