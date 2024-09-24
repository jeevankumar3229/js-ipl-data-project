import calculateEconomicalBowlerInSuperOver from "../../server/9-bowler-with-best-economy-in-superover.js";
import readingData from "./readingMatchesData.js";
import readingDeliveriesData from "./readingDeliveriesData.js";
import writingData from "./writingData.js";
let deliveriesData= readingDeliveriesData()//calling function to read deliveries data
let output= calculateEconomicalBowlerInSuperOver(deliveriesData)//this function returns the data of economical rate of bowlers in super over
let jsondata=JSON.stringify(output,null,2)
writingData('./src/public/output/economicalBowlersInSuperOver.json',jsondata)//calling function to write data to json file
