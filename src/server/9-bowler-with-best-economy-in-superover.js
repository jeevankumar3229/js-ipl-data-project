//this function calculates the data of economical rate of bowlers in super over
export default function calculateEconomicalBowlerInSuperOver(deliveriesData) {
    try {
        let economicalRateOfBowlerInSuperOver = {};
        let filteredDeliveriesDataArray = []
        let bowlersArray = []
        let sortedEconomicalRateOfBowlerInSuperOverArray = []
        //filtering deliveries data based on is_super_over property
        for (let index = 0; index < deliveriesData.length; index++) {
            if (deliveriesData[index].hasOwnProperty("is_super_over")) {
                if (deliveriesData[index]['is_super_over'] === '1') {
                    filteredDeliveriesDataArray.push(deliveriesData[index])
                }
            }
        }
        //pushing the names of the bowler to array who played in super over
        for (let index = 0; index < filteredDeliveriesDataArray.length; index++) {
            if (filteredDeliveriesDataArray[index].hasOwnProperty("bowler")) {
                if (bowlersArray.includes(filteredDeliveriesDataArray[index]['bowler'])) {
                    continue
                }
                else {
                    bowlersArray.push(filteredDeliveriesDataArray[index]['bowler'])
                }
            }

        }
        //economicalRateOfBowlersInSuperOver is an object with key as bowler name and value as nested object, in nested object keys are balls and runs
        for (let index = 0; index < bowlersArray.length; index++) {
            economicalRateOfBowlerInSuperOver[bowlersArray[index]] = {}
            for (let index1 = 0; index1 < filteredDeliveriesDataArray.length; index1++) {
                if (filteredDeliveriesDataArray[index1].hasOwnProperty("bowler") && filteredDeliveriesDataArray[index1].hasOwnProperty('ball') && filteredDeliveriesDataArray[index1].hasOwnProperty('total_runs') && filteredDeliveriesDataArray[index1].hasOwnProperty('legbye_runs') && filteredDeliveriesDataArray[index1].hasOwnProperty('bye_runs') && filteredDeliveriesDataArray[index1].hasOwnProperty('wide_runs') && filteredDeliveriesDataArray[index1].hasOwnProperty('noball_runs')) {
                    if (filteredDeliveriesDataArray[index1]["bowler"] === bowlers[index]) {
                        if (economicalRateOfBowlerInSuperOver[bowlers[index]].hasOwnProperty("Balls") && economicalRateOfBowlerInSuperOver[bowlers[index]].hasOwnProperty("Runs")) {
                            economicalRateOfBowlerInSuperOver[bowlers[index]]["Balls"] = economicalRateOfBowlerInSuperOver[bowlers[index]]["Balls"] + 1
                            economicalRateOfBowlerInSuperOver[bowlers[index]]["Runs"] = economicalRateOfBowlerInSuperOver[bowlers[index]]["Runs"] + Number(filteredDeliveriesDataArray[index1]['total_runs']) - Number(filteredDeliveriesDataArray[index1]['bye_runs']) - Number(filteredDeliveriesDataArray[index1]['legbye_runs'])
                            if (Number(filteredDeliveriesDataArray[index1]['wide_runs']) > 0 || Number(filteredDeliveriesDataArray[index1]['noball_runs']) > 0) {
                                economicalRateOfBowlerInSuperOver[bowlers[index]]["Balls"] = economicalRateOfBowlerInSuperOver[bowlers[index]]["Balls"] - 1
                            }

                        }
                        else {
                            economicalRateOfBowlerInSuperOver[bowlers[index]]["Balls"] = 1
                            economicalRateOfBowlerInSuperOver[bowlers[index]]["Runs"] = Number(filteredDeliveriesDataArray[index1]['total_runs']) - Number(filteredDeliveriesDataArray[index1]['bye_runs']) - Number(filteredDeliveriesDataArray[index1]['legbye_runs'])
                            if (Number(filteredDeliveriesDataArray[index1]['wide_runs']) > 0 || Number(filteredDeliveriesDataArray[index1]['noball_runs']) > 0) {
                                economicalRateOfBowlerInSuperOver[bowlers[index]]["Balls"] = economicalRateOfBowlerInSuperOver[bowlers[index]]["Balls"] - 1
                            }

                        }
                    }


                }

            }
        }
        //creating an array of objects with object properties as name and rate
        for (let bowlerName in economicalRateOfBowlerInSuperOver) {
            let over = ((economicalRateOfBowlerInSuperOver[bowlerName]['Balls']) / 6)
            let economic = ((economicalRateOfBowlerInSuperOver[bowlerName]['Runs']) / over)
            sortedEconomicalRateOfBowlerInSuperOverArray.push({ "name": keys, "rate": economic })

        }
        sortedEconomicalRateOfBowlerInSuperOverArray.sort((a, b) => a.rate - b.rate);//sorting the array of objects
        sortedEconomicalRateOfBowlerInSuperOverArray = sortedEconomicalRateOfBowlerInSuperOverArray.slice(0, 1)//slicing
        return sortedEconomicalRateOfBowlerInSuperOverArray;
    }
    catch (Error) {
        console.log(Error)
    }

}