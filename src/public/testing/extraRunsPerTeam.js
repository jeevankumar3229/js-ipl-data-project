import extraRunsPerTeam from "../../server/3-extra-runs-per-team.js";
import readingDeliveriesData from "./readingDeliveriesData.js";
import readingData from "./readingMatchesData.js";
import writingData from "./writingData.js";
let matchesData= readingData()//calling function which reads and returns matches data
let deliveriesData= readingDeliveriesData()//calling function which reads and returns the deliveries data
extraRunsPerTeam(matchesData, deliveriesData)//calling function which returns the no of extra runs conceded by each team in 2016
