//this function calculates the data of economical rate of bowlers in super over
import writingData from "../public/testing/writingData.js";
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
                    if (filteredDeliveriesDataArray[index1]["bowler"] === bowlersArray[index]) {
                        if (economicalRateOfBowlerInSuperOver[bowlersArray[index]].hasOwnProperty("Balls") && economicalRateOfBowlerInSuperOver[bowlersArray[index]].hasOwnProperty("Runs")) {
                            economicalRateOfBowlerInSuperOver[bowlersArray[index]]["Balls"] = economicalRateOfBowlerInSuperOver[bowlersArray[index]]["Balls"] + 1
                            economicalRateOfBowlerInSuperOver[bowlersArray[index]]["Runs"] = economicalRateOfBowlerInSuperOver[bowlersArray[index]]["Runs"] + Number(filteredDeliveriesDataArray[index1]['total_runs']) - Number(filteredDeliveriesDataArray[index1]['bye_runs']) - Number(filteredDeliveriesDataArray[index1]['legbye_runs'])
                            if (Number(filteredDeliveriesDataArray[index1]['wide_runs']) > 0 || Number(filteredDeliveriesDataArray[index1]['noball_runs']) > 0) {
                                economicalRateOfBowlerInSuperOver[bowlersArray[index]]["Balls"] = economicalRateOfBowlerInSuperOver[bowlersArray[index]]["Balls"] - 1
                            }

                        }
                        else {
                            economicalRateOfBowlerInSuperOver[bowlersArray[index]]["Balls"] = 1
                            economicalRateOfBowlerInSuperOver[bowlersArray[index]]["Runs"] = Number(filteredDeliveriesDataArray[index1]['total_runs']) - Number(filteredDeliveriesDataArray[index1]['bye_runs']) - Number(filteredDeliveriesDataArray[index1]['legbye_runs'])
                            if (Number(filteredDeliveriesDataArray[index1]['wide_runs']) > 0 || Number(filteredDeliveriesDataArray[index1]['noball_runs']) > 0) {
                                economicalRateOfBowlerInSuperOver[bowlersArray[index]]["Balls"] = economicalRateOfBowlerInSuperOver[bowlersArray[index]]["Balls"] - 1
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
            sortedEconomicalRateOfBowlerInSuperOverArray.push({ "name": bowlerName, "rate": economic })

        }
        sortedEconomicalRateOfBowlerInSuperOverArray.sort((a, b) => a.rate - b.rate);//sorting the array of objects
        sortedEconomicalRateOfBowlerInSuperOverArray = sortedEconomicalRateOfBowlerInSuperOverArray.slice(0, 1)//slicing
        writingData('./src/public/output/economicalBowlersInSuperOver.json',JSON.stringify(sortedEconomicalRateOfBowlerInSuperOverArray,null,2))//calling function to write data to json file
    }
    catch (Error) {
        console.log(Error)
    }

}