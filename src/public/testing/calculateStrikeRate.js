import calculateStrikeRate from "../../server/7-strike-rate-of-batsman.js";
import readingDeliveriesData from "./readingDeliveriesData.js";
import readingData from "./readingMatchesData.js";
import writingData from "./writingData.js";
let matchesData= readingData()//calling function to read matches data
let deliveriesData= readingDeliveriesData()//calling function to read deliveries data
let output= calculateStrikeRate(matchesData,deliveriesData)//this function returns the strike rate of batsman in each season
let jsondata=JSON.stringify(output,null,2)
writingData('./src/public/output/batsmanStrikeRate.json',jsondata)//calking function to write data to json file