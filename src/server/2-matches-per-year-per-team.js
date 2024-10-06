import fs from 'fs'
import writingData from '../public/testing/writingData.js';
export default function matchesPerYearPerTeam(matchesData) {
    try {
        let matchesPerYearData = JSON.parse(fs.readFileSync('./src/public/output/matchesPerYear.json')); 
        let matchesPerYearPerTeamData = {};
        for (let key in matchesPerYearData) {
            matchesPerYearPerTeamData[key] = {}
            for (let index = 0; index < matchesData.length; index++) {
                if (matchesData[index].hasOwnProperty("winner") && matchesData[index].hasOwnProperty("season")) {//checking whether property season and winner exists
                    if (matchesData[index]["season"] === key) {
                        if (matchesData[index]['winner'] === "") {
                            let winner = "Tie"//if winner propertie value is blank, initializing winner variable to value "Tie"
                            if (matchesPerYearPerTeamData[key].hasOwnProperty(winner)) {
                                matchesPerYearPerTeamData[key][winner]++
                            }
                            else {
                                matchesPerYearPerTeamData[key][winner] = 1//if the matchesPerYearPerTeamData[key] doesnot contain the team name as a property, initialize it to value 1
                            }
                        }
                        else {
                            if (matchesPerYearPerTeamData[key].hasOwnProperty(matchesData[index]["winner"])) {
                                matchesPerYearPerTeamData[key][matchesData[index]["winner"]]++
                            }
                            else {
                                matchesPerYearPerTeamData[key][matchesData[index]["winner"]] = 1
                            }
                        }
                    }
                }
            }
        }
        writingData('./src/public/output/matchesPerYearPerTeam.json', JSON.stringify(matchesPerYearPerTeamData,null,2));//calling writingData function to write data to json file
    }
    catch (Error) {
        console.log(Error)
    }
}