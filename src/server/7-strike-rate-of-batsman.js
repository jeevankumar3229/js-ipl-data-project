export default function calculateStrikeRate(matchesData, deliveriesData) {
    try {
        let batsmanStrikeRateData = {};
        let seasonArray;
        //storing all the unique season value in a set
        seasonArray = matchesData.reduce((acc, item) => {
            acc.add(item['season'])
            return acc;
        }, new Set())
        seasonArray = Array.from(seasonArray)//converting seasonArray from set to array
        batsmanStrikeRateData = seasonArray.reduce((acc, season) => {
            acc[season] = {}
            //matchIDArray contains the match ids of specific season
            let matchIDArray = matchesData.reduce((acc, item) => {
                if (item['season'] === season) {
                    acc.add(item['id'])
                }
                return acc;
            }, new Set())
            //filtering the deliveries data if the match id present in the set previously obtained
            let filteredDeliveriesData = deliveriesData.filter(item => matchIDArray.has(item["match_id"]))

            //batsmanDataForEachSeason contains batsman name as key and value being the nested object with keys being balls and runs
            let batsmanDataForEachSeason = filteredDeliveriesData.reduce((acc, item) => {
                if (item.hasOwnProperty("batsman") && item.hasOwnProperty('batsman_runs') && item.hasOwnProperty("wide_runs") && item.hasOwnProperty("noball_runs") && item.hasOwnProperty('ball')) {
                    if (acc.hasOwnProperty(item['batsman'])) {
                        acc[item['batsman']]["Balls"] = acc[item['batsman']]["Balls"] + 1
                        acc[item['batsman']]["Runs"] = acc[item['batsman']]["Runs"] + Number(item['batsman_runs'])
                        if (Number(item['wide_runs']) > 0) {
                            acc[item['batsman']]["Balls"] = acc[item['batsman']]["Balls"] - 1
                        }
                    }
                    else {
                        acc[item['batsman']] = {}
                        acc[item['batsman']]["Balls"] = 1
                        acc[item['batsman']]["Runs"] = Number(item['batsman_runs'])
                        if (Number(item['wide_runs']) > 0) {
                            acc[item['batsman']]["Balls"] = acc[item['batsman']]["Balls"] - 1
                        }

                    }
                }
                return acc;
            }, {})
            //Iterating through batsmanDataForEachSeason object get strikerate and assign to object where season is a key and value being nested object with key being playerName and value being strikerate
            for (let keys in batsmanDataForEachSeason) {
                let totalballs = batsmanDataForEachSeason[keys]['Balls']
                let strikerate = (batsmanDataForEachSeason[keys]['Runs'] / totalballs) * 100
                acc[season][keys] = strikerate;

            }
            return acc;
        }, {})
        return batsmanStrikeRateData
    }
    catch (Error) {
        console.log(Error)
    }

}