import calculateEconomicalBowlerInSuperOver from "../../server/9-bowler-with-best-economy-in-superover.js";
import readingDeliveriesData from "./readingDeliveriesData.js";
let deliveriesData= readingDeliveriesData()//calling function to read deliveries data
calculateEconomicalBowlerInSuperOver(deliveriesData)//this function returns the data of economical rate of bowlers in super over
