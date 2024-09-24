//This function calculates the strike rate of batsman in each season
import matchesPerYear from "./1-matches-per-year.js";
export default function calculateStrikeRate(matchesData, deliveriesData) {
    try {
        let seasonListData = matchesPerYear(matchesData);//This functions returns the object with year as key
        let batsmanStrikeRateData = {};
        for (let key in seasonListData) {
            batsmanStrikeRateData[key] = {}
            let matchIDArray = []
            let batsmanData = []
            //pushing the matchid of each season to array
            for (let index = 0; index < matchesData.length; index++) {
                if (matchesData[index].hasOwnProperty("id") && matchesData[index].hasOwnProperty("season")) {
                    if (matchesData[index]['season'] === key) {
                        matchIDArray.push(matchesData[index]["id"])
                    }
                }
            }
            //pushing the name of the batsman playing in each season to array
            for (let index = 0; index < deliveriesData.length; index++) {
                if (matchIDArray.includes(deliveriesData[index]["match_id"])) {
                    if (deliveriesData[index].hasOwnProperty("batsman")) {
                        if (batsmanData.includes(deliveriesData[index]['batsman'])) {
                            continue
                        }
                        else {
                            batsmanData.push(deliveriesData[index]['batsman'])
                        }
                    }
                }
            }
            //creating a new object for each batsman with keys being balls and runs
            for (let index = 0; index < batsmanData.length; index++) {
                batsmanStrikeRateData[key][batsmanData[index]] = {}
                for (let index1 = 0; index1 < deliveriesData.length; index1++) {
                    if (matchIDArray.includes(deliveriesData[index1]["match_id"])) {
                        if (deliveriesData[index1].hasOwnProperty("batsman") && deliveriesData[index1].hasOwnProperty('batsman_runs') && deliveriesData[index1].hasOwnProperty("wide_runs") && deliveriesData[index1].hasOwnProperty("noball_runs") && deliveriesData[index1].hasOwnProperty('ball')) {
                            if (deliveriesData[index1]['batsman'] === batsmanData[index]) {
                                if (batsmanStrikeRateData[key][deliveriesData[index1]['batsman']].hasOwnProperty("Balls")) {
                                    batsmanStrikeRateData[key][deliveriesData[index1]['batsman']]["Balls"] = batsmanStrikeRateData[key][deliveriesData[index1]['batsman']]["Balls"] + 1
                                    batsmanStrikeRateData[key][deliveriesData[index1]['batsman']]["Runs"] = batsmanStrikeRateData[key][deliveriesData[index1]['batsman']]["Runs"] + Number(deliveriesData[index1]['batsman_runs'])
                                    if (Number(deliveriesData[index1]['wide_runs']) > 0) {
                                        batsmanStrikeRateData[key][deliveriesData[index1]['batsman']]["Balls"] = batsmanStrikeRateData[key][deliveriesData[index1]['batsman']]["Balls"] - 1;
                                    }
                                }
                                else {
                                    batsmanStrikeRateData[key][deliveriesData[index1]['batsman']]["Balls"] = 1
                                    batsmanStrikeRateData[key][deliveriesData[index1]['batsman']]["Runs"] = Number(deliveriesData[index1]['batsman_runs'])
                                    if (Number(deliveriesData[index1]['wide_runs']) > 0) {
                                        batsmanStrikeRateData[key][deliveriesData[index1]['batsman']]["Balls"] = batsmanStrikeRateData[key][deliveriesData[index1]['batsman']]["Balls"] - 1
                                    }

                                }
                            }
                        }
                    }
                }

            }
            //modifying the object created for each batsman by replacing the object with strikerate value
            for (let keys in batsmanStrikeRateData[key]) {
                let totalballs = batsmanStrikeRateData[key][keys]['Balls']
                let strikerate = (batsmanStrikeRateData[key][keys]['Runs'] / totalballs) * 100
                batsmanStrikeRateData[key][keys] = strikerate;

            }
        }
        return batsmanStrikeRateData;
    }
    catch (Error) {
        console.log(Error)
    }

}