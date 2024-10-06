//This function will return the top 10 economical bowlers in season 2015
import writingData from "../public/testing/writingData.js";
export default function calculateEconomicalBowlers(matchesData, deliveriesData, season = '2015') {
    try {
        let bowlersData = {};
        let matchIDArray = []
        let bowlersArray = []
        //extracting all the match-IDs of season 2015
        for (let index = 0; index < matchesData.length; index++) {
            if (matchesData[index].hasOwnProperty("id") && matchesData[index].hasOwnProperty("season")) {
                if (matchesData[index]['season'] === season) {
                    matchIDArray.push(matchesData[index]["id"])
                }
            }
        }
        //Adding Bowlers who played in 2015 to array
        for (let index = 0; index < deliveriesData.length; index++) {
            if (matchIDArray.includes(deliveriesData[index]["match_id"])) {
                if (deliveriesData[index].hasOwnProperty("bowler")) {
                    if (bowlersArray.includes(deliveriesData[index]['bowler'])) {
                        continue
                    }
                    else {
                        bowlersArray.push(deliveriesData[index]['bowler'])
                    }
                }
            }
        }
        //Creating an bowlersData object with bowler-name as key with properties as total balls faced and total runs
        for (let index = 0; index < bowlersArray.length; index++) {
            bowlersData[bowlersArray[index]] = {}
            for (let index1 = 0; index1 < deliveriesData.length; index1++) {
                if (matchIDArray.includes(deliveriesData[index1]["match_id"])) {
                    if (deliveriesData[index1].hasOwnProperty("bowler") && deliveriesData[index1].hasOwnProperty('ball') && deliveriesData[index1].hasOwnProperty('total_runs') && deliveriesData[index1].hasOwnProperty('legbye_runs') && deliveriesData[index1].hasOwnProperty('bye_runs') && deliveriesData[index1].hasOwnProperty('wide_runs') && deliveriesData[index1].hasOwnProperty('noball_runs')) {
                        if (deliveriesData[index1]['bowler'] === bowlersArray[index]) {
                            if (bowlersData[bowlersArray[index]].hasOwnProperty('Balls')) {
                                bowlersData[bowlersArray[index]]["Balls"] = bowlersData[bowlersArray[index]]["Balls"] + 1
                                bowlersData[bowlersArray[index]]["Runs"] = bowlersData[bowlersArray[index]]["Runs"] + Number(deliveriesData[index1]['total_runs']) - Number(deliveriesData[index1]['bye_runs']) - Number(deliveriesData[index1]['legbye_runs'])
                                if (Number(deliveriesData[index1]['wide_runs']) > 0 || Number(deliveriesData[index1]['noball_runs']) > 0) {
                                    bowlersData[bowlersArray[index]]["Balls"] = bowlersData[bowlersArray[index]]["Balls"] - 1
                                }
                            }
                            else {
                                bowlersData[bowlersArray[index]]["Balls"] = 1
                                bowlersData[bowlersArray[index]]["Runs"] = Number(deliveriesData[index1]['total_runs']) - Number(deliveriesData[index1]['bye_runs']) - Number(deliveriesData[index1]['legbye_runs'])
                                if (Number(deliveriesData[index1]['wide_runs']) > 0 || Number(deliveriesData[index1]['noball_runs']) > 0) {
                                    bowlersData[bowlersArray[index]]["Balls"] = bowlersData[bowlersArray[index]]["Balls"] - 1
                                }

                            }
                        }
                    }
                }
            }




        }
        bowlersArray = []
        //creating an array of bowlers data as array of objects with each bowlers has two properties name,rate
        for (let bowlerName in bowlersData) {
            let over = ((bowlersData[bowlerName]['Balls']) / 6)//.toFixed(2);
            let economic = ((bowlersData[bowlerName]['Runs']) / over)//.toFixed(2)
            bowlersArray.push({ "name": bowlerName, "rate": economic })

        }
        bowlersArray.sort((a, b) => a.rate - b.rate);//sorting the array
        bowlersArray = bowlersArray.slice(0, 10)//slicing to get top 10
        writingData('./src/public/output/economicalBowlers.json', JSON.stringify(bowlersArray, null, 2))//calling function to write data in jsonfile
    }
    catch (Error) {
        console.log(Error)
    }


}