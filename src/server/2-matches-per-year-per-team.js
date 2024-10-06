
import writingData from "../public/testing/writingData.js";
export default function matchesPerYearPerTeam(matchesData) {
    try {
        let matchesPerYearPerTeamData = {};
        let winner;
        matchesPerYearPerTeamData = matchesData.reduce((acc, item) => {
            if (item.hasOwnProperty('winner') && item.hasOwnProperty("season")) {
                //if the value of item['winner'] is empty, initialize the variable winner to tie
                winner = (item['winner'] === 'Rising Pune Supergiant' || item['winner'] === 'Rising Pune Supergiants') ? 'Rising Pune Supergiants' : (item['winner'] === "" ? "Tie" : item['winner'])
                if (acc.hasOwnProperty(winner)) {
                    acc[winner][item['season']] = acc[winner].hasOwnProperty(item['season']) ? acc[winner][item['season']] + 1 : 1;
                }
                else {
                    acc[winner] = {}//if the acc object doesn't contain the property with value of winner variable ,initialize to new empty object
                    acc[winner][item['season']] = 1;
                }
            }
            return acc;
        }, {});
        writingData('./src/public/output/matchesPerYearPerTeam.json', JSON.stringify(matchesPerYearPerTeamData,null,2));//calling writingData function to write data to json file
    }
    catch (Error) {
        console.log(Error)
    }
}