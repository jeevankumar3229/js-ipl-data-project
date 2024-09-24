//this function calculates the data of the player dismissed multiple times by the same player
export default function calculateNoOfTimesDismissed(deliveriesData) {
    try {
        let filteredDeliveriesData = []
        let noOfTimesDismissedData = {}
        //filteredDeliveriesData contains the data filtered based on dismissal kind
        filteredDeliveriesData = deliveriesData.filter((item) => {
            if (item.hasOwnProperty('dismissal_kind')) {
                if (item["dismissal_kind"] === 'caught' || item["dismissal_kind"] === 'run out' || item["dismissal_kind"] === 'lbw') {
                    return item;
                }
            }
        })

        //noOfTimesDismissedData object contains keys as bowler name and value as nested object, nested object contains batsman name as key and value as no of times dismissed
        noOfTimesDismissedData = filteredDeliveriesData.reduce((acc, item) => {
            if (item.hasOwnProperty("bowler") && item.hasOwnProperty('batsman')) {
                if (acc.hasOwnProperty(item['bowler'])) {
                    if (acc[item['bowler']].hasOwnProperty(item['batsman'])) {
                        acc[item['bowler']][item['batsman']] = acc[item['bowler']][item['batsman']] + 1
                    }
                    else {
                        acc[item['bowler']][item['batsman']] = 1
                    }
                }
                else {
                    acc[item['bowler']] = {}
                    acc[item['bowler']][item['batsman']] = 1

                }
            }
            return acc;
        }, {})

        //filteredNoOfTimesDismissedData array contains array of arrays where second element of each array is object with key as Name and dismissedCount
        let filteredNoOfTimesDismissedData = Object.entries(noOfTimesDismissedData).map(([ballerName, batsmanDetails]) => {
            let innerObject = Object.entries(batsmanDetails).reduce((acc, [batsmanName, dismissedCount]) => {
                if (acc["dismissedCount"] < dismissedCount) {
                    acc["dismissedCount"] = dismissedCount
                    acc["Name"] = batsmanName
                }
                return acc;
            }, { "Name": "", "dismissedCount": 0 })
            return [ballerName, innerObject]
        })

        //highestNoOfTimesDismissedData array contains the array of array  of length 1 where second element of nested array is a object
        let highestNoOfTimesDismissedData = filteredNoOfTimesDismissedData.reduce((acc, [ballername, batsmanDetails]) => {
            let keys = Object.keys(batsmanDetails)
            if (acc[0][1]["dismissedCount"] < batsmanDetails[keys[1]]) {
                acc[0][0] = ballername
                acc[0][1]["name"] = batsmanDetails[keys[0]]
                acc[0][1]["dismissedCount"] = batsmanDetails[keys[1]]
            }
            return acc;
        }, [["", { "name": "", "dismissedCount": 0 }]])

        return Object.fromEntries(highestNoOfTimesDismissedData)
    }
    catch (Error) {
        console.log(Error)
    }

}