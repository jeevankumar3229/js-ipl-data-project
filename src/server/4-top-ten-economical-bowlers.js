//This function returns the data of top 10 economical bowlers in season 2015
import writingData from "../public/testing/writingData.js";
export default function calculateEconomicalBowlers(matchesData, deliveriesData, season = '2015') {
    try {
        let bowlersData = {};
        let economicalRateOfBowlers = []
        // //storing the match_id of season 2015 in set
        let matchIDArray = matchesData.reduce((acc, item) => {
            if (item['season'] === season) {
                acc.add(item["id"])
            }
            return acc;
        }, new Set())
        //filtering the data based on the match id present in set
        let filteredArray = deliveriesData.filter(item => matchIDArray.has(item["match_id"]))

        //create the bowlers object with bowler name as key and value being nested object with properties as balls and runs
        bowlersData = filteredArray.reduce((acc, item) => {
            if (item.hasOwnProperty("bowler") && item.hasOwnProperty('ball') && item.hasOwnProperty('total_runs') && item.hasOwnProperty('legbye_runs') && item.hasOwnProperty('bye_runs') && item.hasOwnProperty('wide_runs') && item.hasOwnProperty('noball_runs')) {
                if (acc.hasOwnProperty(item['bowler'])) {
                    acc[item['bowler']]["Balls"] = acc[item['bowler']]["Balls"] + 1
                    acc[item['bowler']]["Runs"] = acc[item['bowler']]["Runs"] + Number(item['total_runs']) - Number(item['bye_runs']) - Number(item['legbye_runs'])
                    if (Number(item['wide_runs']) > 0 || Number(item['noball_runs']) > 0) {
                        acc[item['bowler']]["Balls"] = acc[item['bowler']]["Balls"] - 1
                    }
                }
                else {
                    acc[item['bowler']] = {}
                    acc[item['bowler']]["Balls"] = 1
                    acc[item['bowler']]["Runs"] = Number(item['total_runs']) - Number(item['bye_runs']) - Number(item['legbye_runs'])
                    if (Number(item['wide_runs']) > 0 || Number(item['noball_runs']) > 0) {
                        acc[item['bowler']]["Balls"] = acc[item['bowler']]["Balls"] - 1
                    }

                }
            }
            return acc;
        }, {})
        //iterating through bowlers data to get economical rate and push an object with properties as keys and rate to array
        for (let bowlerName in bowlersData) {
            let over = ((bowlersData[bowlerName]['Balls']) / 6)
            let economic = ((bowlersData[bowlerName]['Runs']) / over)
            economicalRateOfBowlers.push({ "name": bowlerName, "rate": economic })

        }
        writingData('./src/public/output/economicalBowlers.json', JSON.stringify(economicalRateOfBowlers.sort((a, b) => a.rate - b.rate).slice(0, 10), null, 2))//calling function to write data in jsonfile
    }
    catch (Error) {
        console.log(Error)
    }

}