import calculateEconomicalBowlers from "../../server/4-top-ten-economical-bowlers.js";
import readingData from "./readingMatchesData.js";
import readingDeliveriesData from "./readingDeliveriesData.js";
let matchesData = readingData()//calling function to read matches data
let deliveriesData = readingDeliveriesData()//calling function to read deliveries data
calculateEconomicalBowlers(matchesData, deliveriesData)//this function returns the top 10 economical bowlers in season 2015