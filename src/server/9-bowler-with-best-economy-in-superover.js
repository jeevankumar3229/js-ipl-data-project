//this function calculates the data of economical rate of bowlers in super over
export default function calculateEconomicalBowlerInSuperOver(deliveriesData) {
    try {
        let economicalRateOfBowlersInSuperOver = {};
        let economicalRateOfBowlersInSuperOverArrayOfObjects = []
        //filtering the deliveries data based on is_super_over property
        let filteredDeliveriesData = deliveriesData.filter((item) => {
            if (item['is_super_over'] === '1') {
                return item
            }
        })
        //economicalRateOfBowlersInSuperOver is an object with key as bowler name and value as nested object, in nested object keys are balls and runs
        economicalRateOfBowlersInSuperOver = filteredDeliveriesData.reduce((acc, item) => {
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
        //calculate the economical rate and push the object to array, where object has keys name and rate
        for (let bowlerName in economicalRateOfBowlersInSuperOver) {
            let over = ((economicalRateOfBowlersInSuperOver[bowlerName]['Balls']) / 6)
            let economic = ((economicalRateOfBowlersInSuperOver[bowlerName]['Runs']) / over)
            economicalRateOfBowlersInSuperOverArrayOfObjects.push({ "name": bowlerName, "rate": economic })

        }
        return economicalRateOfBowlersInSuperOverArrayOfObjects.sort((a, b) => a.rate - b.rate).slice(0, 1);
    }
    catch (Error) {
        console.log(Error)
    }

}