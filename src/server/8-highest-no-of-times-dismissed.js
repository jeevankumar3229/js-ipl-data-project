//this function calculates the data of the player dismissed multiple times by the same player
import writingData from "../public/testing/writingData.js"
export default function calculateNoOfTimesDismissed(deliveriesData) {
    try {
        let bowlerArray = []
        let filteredDeliveriesData = []
        let noOfTimesDismissedData = {}
        //pushing only those rows to array which contains the dismissal kind as runout,caught and lbw
        for (let index = 0; index < deliveriesData.length; index++) {
            if (deliveriesData[index]["dismissal_kind"] === 'caught' || deliveriesData[index]["dismissal_kind"] === 'run out' || deliveriesData[index]["dismissal_kind"] === 'lbw') {
                filteredDeliveriesData.push(deliveriesData[index])
            }
        }
        //pushing the names of the bowler to array
        for (let index = 0; index < filteredDeliveriesData.length; index++) {
            if (bowlerArray.includes(filteredDeliveriesData[index]['bowler'])) {
                continue;
            }
            else {
                bowlerArray.push(filteredDeliveriesData[index]['bowler'])
            }
        }
        //noOfTimesDismissedData object contains keys as bowler name and value as nested object, nested object contains batsman name as key and value as no of times dismissed
        for (let index = 0; index < bowlerArray.length; index++) {
            noOfTimesDismissedData[bowlerArray[index]] = {}
            for (let index1 = 0; index1 < filteredDeliveriesData.length; index1++) {
                if (filteredDeliveriesData[index1].hasOwnProperty("bowler")) {
                    if (filteredDeliveriesData[index1]['bowler'] === bowlerArray[index]) {
                        if (noOfTimesDismissedData[bowlerArray[index]].hasOwnProperty(filteredDeliveriesData[index1]['batsman'])) {
                            noOfTimesDismissedData[bowlerArray[index]][filteredDeliveriesData[index1]['batsman']]++;
                        }
                        else {
                            noOfTimesDismissedData[bowlerArray[index]][filteredDeliveriesData[index1]['batsman']] = 1;
                        }
                    }
                }
            }
        }

        let batsmanNames;
        let dismissedCount = 0;
        //to convert set of batsman in each baller as a key to one batsman with most no of times dismissed
        for (let bowlerName in noOfTimesDismissedData) {
            for (let batsmanName in noOfTimesDismissedData[bowlerName]) {
                if (dismissedCount < noOfTimesDismissedData[bowlerName][batsmanName]) {
                    dismissedCount = noOfTimesDismissedData[bowlerName][batsmanName]
                    batsmanNames = batsmanName
                }

            }
            noOfTimesDismissedData[bowlerName] = { "name": batsmanNames, "noOfTimesDismissed": dismissedCount }
            dismissedCount = 0;
        }
        let bowlerNames = ""
        batsmanNames = ""
        //to get the player with max no of times dismissed
        for (let bowlerName in noOfTimesDismissedData) {
            for (let batsmanName in noOfTimesDismissedData[bowlerName]) {
                if (dismissedCount < noOfTimesDismissedData[bowlerName][batsmanName]) {
                    dismissedCount = noOfTimesDismissedData[bowlerName][batsmanName]
                    batsmanNames = noOfTimesDismissedData[bowlerName]["name"]
                    bowlerNames = bowlerName;
                }
            }
        }
        noOfTimesDismissedData = {}
        noOfTimesDismissedData[bowlerNames] = { "name": batsmanNames, "noOfTimesDismissed": dismissedCount }
        writingData('./src/public/output/highestNoOfTimesDismissed.json',JSON.stringify(noOfTimesDismissedData,null,2))//calling function to write data to the json file
    }
    catch (Error) {
        console.log(Error)
    }

}