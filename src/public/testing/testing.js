import matchesPerYear from "../../server/1-matches-per-year.js";
import readingData from "./readingMatchesData.js";
import matchesPerYearPerTeam from "../../server/2-matches-per-year-per-team.js";
import extraRunsPerTeam from "../../server/3-extra-runs-per-team.js";
import readingDeliveriesData from "./readingDeliveriesData.js";
import calculateEconomicalBowlers from "../../server/4-top-ten-economical-bowlers.js";
import calculateTeamWonTossAndMatch from "../../server/5-each-team-won-toss-and-game.js";
import playerOfTheMatch from "../../server/6-highest-no-of-times-player-of-the-match.js";
import calculateStrikeRate from "../../server/7-strike-rate-of-batsman.js";
import calculateNoOfTimesDismissed from "../../server/8-highest-no-of-times-dismissed.js";
import calculateEconomicalBowlerInSuperOver from "../../server/9-bowler-with-best-economy-in-superover.js";
let matchesData = readingData()//calling function to read matches data
let deliveriesData = readingDeliveriesData()//calling function to read deliveries data
matchesPerYear(matchesData)//calling matchesPerYear function and this function will return the count of matches played per year
matchesPerYearPerTeam(matchesData)//calling matchesPerYearPerTeam function and this return the count of the matched played by teams per year
extraRunsPerTeam(matchesData, deliveriesData)//calling function which returns the no of extra runs conceded by each team in 2016
calculateEconomicalBowlers(matchesData, deliveriesData)//this function returns the top 10 economical bowlers in season 2015
calculateTeamWonTossAndMatch(matchesData)////this function returns the data of no of times team has won the toss and the match
playerOfTheMatch(matchesData)//this function returns the highest no of times single player won man of the match
calculateStrikeRate(matchesData,deliveriesData)//this function returns the strike rate of batsman in each season
calculateNoOfTimesDismissed(deliveriesData)//this function returns the data of the player dismissed multiple times by the same player
calculateEconomicalBowlerInSuperOver(deliveriesData)//this function returns the data of economical rate of bowlers in super over