import calculateStrikeRate from "../../server/7-strike-rate-of-batsman.js";
import readingDeliveriesData from "./readingDeliveriesData.js";
import readingData from "./readingMatchesData.js";
let matchesData= readingData()//calling function to read matches data
let deliveriesData= readingDeliveriesData()//calling function to read deliveries data
calculateStrikeRate(matchesData,deliveriesData)//this function returns the strike rate of batsman in each season

